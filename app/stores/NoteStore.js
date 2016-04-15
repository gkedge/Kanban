import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';
import autobind from 'autobind-decorator';

class NoteStore {
    static displayName = 'KanbanNoteStore';
    
    constructor() {
        this.bindActions(NoteActions);

        this.notes = [];

        this.exportPublicMethods({
            getNotesByIds: this.getNotesByIds
        });
    }

    @autobind
    getNotesByIds(ids) {
        return (ids || []).map(id => this.notes.filter(note => note.id === id))
            // Filter out possible empty arrays...
            // [[Note], [], [Note]] --> [[Note], [Note]] ==> [Note, Note]
            .filter(ary => ary.length)
            .map(ary => ary[0]);
    }

    @autobind
    create(note) {
        const notes = this.notes;

        note.id = uuid.v4();

        this.setState({
            notes: notes.concat(note)
        });
        return note;
    }

    @autobind
    update(updatedNote) {
        const notes = this.notes.map(note => {
            if (note.id === updatedNote.id) {
                return Object.assign({}, note, updatedNote);
            }

            return note;
        });

        this.setState({notes});
    }

    @autobind
    delete(id) {
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });
    }
}

export default alt.createStore(NoteStore, 'NoteStore');
