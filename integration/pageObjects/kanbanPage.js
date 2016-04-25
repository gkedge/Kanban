var kanbanCommands = {
    
    // Lane selectors
    addLane: function () {
        return this.click('@addLaneBtn');
    },

    addLanes: function (number) {
        for (var i = 0; i < number; i++) {
            this.addLane();
        }
        return this;
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

    laneSele: function (laneNum) {
        return 'div.lane[data-lane-num="' + laneNum + '"]';
    },

    deleteLaneBtnSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-delete button';
    },

    laneNameSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-name span';
    },

    laneNameEditSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-name input';
    },

    setLaneValue: function (client, laneNum, text) {
        
        return this.click(this.laneNameSele(laneNum))
            .clearValue(this.laneNameEditSele(laneNum))
            .setValue(this.laneNameEditSele(laneNum),
                [text, client.Keys.ENTER]);
    },

    // Notes within lane selectors
    notesSele: function (laneNum) {
        return this.laneSele(laneNum) + ' ul.notes';
    },

    laneNotes: function (laneNum, cb) {
        this.api.elements('css selector', this.notesSele(laneNum) + ' li.note', cb);
    },

    addNote: function (laneNum) {
        return this.click(this.addNoteBtnSele(laneNum));
    },

    addNotes: function (laneNum, number) {
        for (var i = 0; i < number; i++) {
            this.addNote(laneNum);
        }
        return this;
    },

    deleteLNote: function (laneNum, noteNum) {
        return this.moveToElement(this.deleteNoteBtnSele(laneNum, noteNum), 2, 2)
            .click(this.deleteNoteBtnSele(laneNum, noteNum));
    },

    deleteNoteBtnSele: function (laneNum, noteNum) {
        return this.noteSele(laneNum, noteNum) + ' button.delete';
    },

    addNoteBtnSele: function (laneNum) {
        return this.laneSele(laneNum) + ' div.lane-add-note button';
    },

    noteSele: function (laneNum, noteNum) {
        noteNum++;
        return this.laneSele(laneNum) + ' ul.notes li.note:nth-of-type(' + noteNum + ')';
    },

    noteValueSele: function (laneNum, noteNum) {
        return this.noteSele(laneNum, noteNum) + ' span.value';
    },

    noteEditSele: function (laneNum, noteNum) {
        return this.noteSele(laneNum, noteNum) + ' input';
    },

    setNoteValue: function (client, laneNum, noteNum, text) {
        return this.click(this.noteValueSele(laneNum, noteNum))
            .clearValue(this.noteEditSele(laneNum, noteNum))
            .setValue(this.noteEditSele(laneNum, noteNum),
                [text, client.Keys.ENTER]);
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

