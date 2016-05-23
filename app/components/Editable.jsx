/* @flow */

import React from 'react';

export default class Editable extends React.Component {
    static displayName = 'KanbanEditableInput';

    static props:{
        value?: string,
        editing?: boolean,
        onEdit?: Function,
        onDelete?: Function,
        onValueClick?: Function
    };

    static defaultProps:{
        value: '',
        editing: false,
        onEdit: () => {}
    };

    render():Object {
        const { editing, ...props } = this.props;

        return (
            <div {...props}>
                {editing ? this.renderEdit() : this.renderValue()}
            </div>);
    }

    renderEdit:() => Object = () => {
        return <input type="text"
                      ref={(e) => e ? e.selectionStart = this.props.value.length : null }
                      autoFocus={true}
                      defaultValue={this.props.value}
                      onBlur={this.finishEdit}
                      onKeyPress={this.checkEnter}/>;
    }

    renderDelete:() => Object = () => {
        return <button
            className="delete"
            onClick={this.props.onDelete}>x</button>;
    }

    renderValue:() => Object = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.props.onValueClick}>
                <span className="value">{this.props.value}</span>
                {onDelete ? this.renderDelete() : null }
            </div>
        );
    }

    checkEnter:(e:Object) => void = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit:(e:Object) => void = (e) => {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}
