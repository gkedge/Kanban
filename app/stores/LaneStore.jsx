import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import autobind from 'autobind-decorator';
import update from 'react-addons-update';


class LaneStore {
    static displayName = 'KanbanLaneStore';
    static lastLaneNumber = 0;

    constructor() {
        this.bindActions(LaneActions);
        this.lanes = [];
    }

    @autobind
    create(lane) {
        const lanes = this.lanes;
        lane.id = uuid.v4();
        lane.num = LaneStore.lastLaneNumber++;
        lane.noteIds = lane.noteIds || [];
        this.setState({
            lanes: lanes.concat(lane)
        });
    }

    @autobind
    update(updatedLane) {
        const lanes = this.lanes.map(lane => {
            if (lane.id === updatedLane.id) {
                return Object.assign({}, lane, updatedLane);
            }
            return lane;
        });

        this.setState({lanes});
    }

    @autobind
    delete(id) {
        this.setState({
            lanes: this.lanes.filter(lane => lane.id != id)
        });
    }

    @autobind
    attachToLane({laneId, noteId}) {
        const lanes = this.lanes.map(lane => {
            if (lane.noteIds.includes(noteId)) {
                lane.noteIds = lane.noteIds.filter(note => note !== noteId);
            }

            if (lane.id == laneId) {
                if (lane.noteIds.includes(noteId)) {
                    console.warn('Already attached note to lane', lane);
                }
                else {
                    lane.noteIds.push(noteId);
                }
            }
            return lane;
        });

        this.setState({lanes});
    }

    @autobind
    detachFromLane({laneId, noteId}) {
        const lanes = this.lanes.map(lane => {
            if (lane.id === laneId) {
                lane.noteIds = lane.noteIds.filter(lanesNoteId => lanesNoteId !== noteId);
            }
            return lane;
        });

        this.setState({lanes});
    }

    @autobind
    move({sourceId, targetId}) {
        // console.log(`source ${sourceId}, target: ${targetId}`);
        const lanes = this.lanes,
            sourceLane = lanes.filter(lane => lane.noteIds.includes(sourceId))[0],
            targetLane = lanes.filter(lane => lane.noteIds.includes(targetId))[0],
            sourceNoteIndex = sourceLane.noteIds.indexOf(sourceId),
            targetNoteIndex = targetLane.noteIds.indexOf(targetId);

        if (sourceLane === targetLane) {
            sourceLane.noteIds = update(sourceLane.noteIds, {
                $splice: [
                    [sourceNoteIndex, 1],
                    [targetNoteIndex, 0, sourceId]
                ]
            });
        }
        else {
            // get rid of the source
            sourceLane.noteIds.splice(sourceNoteIndex, 1);
            // and move to target
            targetLane.noteIds.splice(targetNoteIndex, 0, sourceId);
        }

        this.setState({lanes});
    }
}

export default alt.createStore(LaneStore, 'LaneStore');
