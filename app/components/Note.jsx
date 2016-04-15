import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes'

const noteSource = {
    beginDrag(props) {
        return {
            id: props.id
        };
    },
    isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
    }
};

const noteTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.id,
            sourceProps = monitor.getItem(),
            sourceId = sourceProps.id;

        if (sourceId != targetId) {
            targetProps.onMove({
                sourceId, targetId
            });
        }
    }
};

@DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    // map isDragging() state to isDrapping prop
    isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))
export default class Note extends React.Component {
    render() {
        const {
            connectDragSource, connectDropTarget,
            isDragging, onMove,
            id, editing, ...props
        } = this.props;

        const dragSource = editing ? a => a : connectDragSource;

        return dragSource(
            connectDropTarget(<li style={{opacity: isDragging ? 0 : 1}} {...props}> {props.children} </li>)
        );
    };
}
