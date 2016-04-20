import AltContainer from 'alt-container';
import React from 'react';
import {DropTarget} from 'react-dnd';
import Notes from './Notes';
import Editable from './Editable';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import NoteStore from '../stores/NoteStore';
import autobind from 'autobind-decorator';
import ItemTypes from '../constants/itemTypes';

const noteTarget = {
    hover(targetProps, monitor) {
        const sourceProps = monitor.getItem(),
            sourceId = sourceProps.id;

        if (! targetProps.lane.noteIds.length) {
            LaneActions.attachToLane({
                laneId: targetProps.lane.id,
                noteId: sourceId
            });
        }
    }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))
export default class Lane extends React.Component {
    static displayName = 'KanbanLane';

    render() {
        const {connectDropTarget, lane, ...props} = this.props;

        return connectDropTarget(
            <div onDragOver={this.allowDrop} onDrop={this.allowDrop} {...props}>
                <div className="lane-header" onClick={this.activateLaneEdit}>
                    <div className="lane-add-note">
                        <button onClick={this.addNote}>+</button>
                    </div>
                    <Editable className="lane-name"
                              editing={lane.editing}
                              value={lane.name}
                              onEdit={this.editName}/>
                    <div className="lane-delete">
                        <button onClick={this.deleteLane}>x</button>
                    </div>
                </div>
                <AltContainer
                    stores={[NoteStore]}
                    inject={{
                    notes: () => NoteStore.getNotesByIds(lane.noteIds)
                    }}>
                    <Notes
                        onValueClick={this.activateNoteEdit}
                        onEdit={this.editNote}
                        onDelete={this.deleteNote}/>
                </AltContainer>
            </div>
        );
    }

    @autobind
    editNote(id, task) {
        // Don't modify if trying set an empty value
        if (!task.trim()) {
            NoteActions.update({id, editing: false});
            return;
        }
        NoteActions.update({id, task, editing: false});
    }

    @autobind
    addNote(e) {
        e.stopPropagation();

        const laneId = this.props.lane.id;
        const note = NoteActions.create({task: 'New task'});

        LaneActions.attachToLane({
            noteId: note.id,
            laneId
        });
    }

    @autobind
    deleteNote(noteId, e) {
        e.stopPropagation();

        const laneId = this.props.lane.id;

        LaneActions.detachFromLane({laneId, noteId});
        NoteActions.delete(noteId);
    }

    @autobind
    editName(name) {
        const laneId = this.props.lane.id;

        if (!name.trim()) {
            NoteActions.update({id: laneId, editing: false});
            return;
        }

        LaneActions.update({id: laneId, name, editing: false});
    }

    @autobind
    deleteLane() {
        const laneId = this.props.lane.id;

        LaneActions.delete(laneId);
    }

    @autobind
    activateLaneEdit() {
        const laneId = this.props.lane.id;

        LaneActions.update({id: laneId, editing: true});
    }

    @autobind
    activateNoteEdit(id) {
        NoteActions.update({id, editing: true});
    }

}
