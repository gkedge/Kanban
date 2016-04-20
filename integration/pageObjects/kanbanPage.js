var kanbanCommands = {
    addLane: function () {
        return this.click('@addLaneBtn');
    },

    addNote: function (laneNum) {
        return this.click(this.addNoteBtnSele(laneNum));
    },

    deleteLane: function (laneNum) {
        // By starting at the top of the page, and them moving to the delete lane button,
        // we can be sure that the delete button will become visible due to the mouse hoovering
        // over it. the mouse is already over it, the button will not become visible on a direct
        // move. A jiggle will do the trick.
        return this.moveToElement('@page', 0, 0)
            .moveToElement(this.deleteLaneBtnSele(laneNum), 2, 2)
            .click(this.deleteLaneBtnSele(laneNum));
    },

    deleteLNote: function (laneNum, noteNum) {
        return this.moveToElement(this.deleteNoteBtnSele(laneNum, noteNum), 2, 2)
            .click(this.deleteNoteBtnSele(laneNum, noteNum));
    },

    laneSele: function (laneNum) {
        return 'div.lane[data-lane-num="' + laneNum + '"]';
    },

    deleteLaneBtnSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-delete button';
    },

    deleteNoteBtnSele: function (laneNum, noteNum) {
        return this.noteSele(laneNum, noteNum) + ' button.delete';
    },

    addNoteBtnSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-add-note button';
    },

    laneNameSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-name span';
    },

    laneNameEditSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-name input';
    },

    setLaneValue: function (client, laneNum, text) {
        this.click(this.laneNameSele(laneNum));
        return this.setValue(this.laneNameEditSele(laneNum), [
            client.Keys.COMMAND, "a", client.Keys.COMMAND,
            text, client.Keys.ENTER]);
    },
    
    notesSele   : function (laneNum) {
        return this.laneSele(laneNum) + ' ul.notes';
    },

    noteSele: function (laneNum, noteNum) {
        noteNum ++;
        return this.laneSele(laneNum) + ' ul.notes li.note:nth-of-type(' + noteNum + ')';
    },

    noteValueSele: function (laneNum, noteNum) {
        noteNum ++;
        return this.laneSele(laneNum) + ' ul.notes li.note:nth-of-type(' + noteNum + ') span.value';
    },

    noteEditSele: function (laneNum, noteNum) {
        noteNum ++;
        return this.laneSele(laneNum) + ' ul.notes li.note:nth-of-type(' + noteNum + ') input';
    },

    setNoteValue: function (client, laneNum, noteNum, text) {
        this.click(this.noteValueSele(laneNum, noteNum));
        return this.setValue(this.noteEditSele(laneNum, noteNum), [
            client.Keys.COMMAND, "a", client.Keys.COMMAND,
            text, client.Keys.ENTER]);
    },
    laneNotes   : function (laneNum, cb) {
        this.api.elements('css selector', this.notesSele(laneNum) + ' li.note', cb);
    }
};

module.exports = {
    url     : 'http://localhost:8888',
    commands: [kanbanCommands],
    elements: {
        page      : 'body',
        addLaneBtn: 'button.add-lane'
    }
};

