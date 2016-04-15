import React from 'react';
import autobind from 'autobind-decorator'

export default class Editable extends React.Component {
    static displayName = 'KanbanEditableInput';

    render() {
        const {value, onEdit, onValueClick, editing, ...props} = this.props;

        return (
            <div {...props}>
                {editing ? this.renderEdit() : this.renderValue()}
            </div>);
    }

    @autobind
    renderEdit() {
        return <input type="text"
                      ref={(e) => e ? e.selectionStart = this.props.value.length : null }
                      autoFocus={true}
                      defaultValue={this.props.value}
                      onBlur={this.finishEdit}
                      onKeyPress={this.checkEnter}/>;
    };

    @autobind
    renderDelete() {
        return <button
            className="delete"
            onClick={this.props.onDelete}>x</button>;
    };

    @autobind
    renderValue() {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.props.onValueClick}>
                <span className="value">{this.props.value}</span>
                {onDelete ? this.renderDelete() : null }
            </div>
        );
    };

    @autobind
    checkEnter(e) {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    @autobind
    finishEdit(e) {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    };
}
