import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import autobind from 'autobind-decorator';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
export default class App extends React.Component {

    static displayName = 'KanbanApp';

    render() {
        return (
            <div>
                <button className="add-lane" onClick={this.addLane}>+</button>
                <AltContainer
                    stores={[LaneStore]}
                    inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
                >
                    <Lanes />
                </AltContainer>
            </div>
        );
    }

    @autobind
    addLane() {
        LaneActions.create({name: 'New lane'});
    }
}
