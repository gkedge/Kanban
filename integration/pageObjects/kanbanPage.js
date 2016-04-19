var kanbanCommands = {
    addLane: function() {
        this.api.pause(1000);
        return this.click('@addLaneBtn')
            .waitForElementVisible('@laneOne', 30);;
    }
};


module.exports = {
    url: 'http://gkedge.github.io/Kanban/',
    commands: [kanbanCommands],
    elements: {
        page: {
            selector: 'body'
        },
        title: {
            selector: 'title'
        },
        addLaneBtn: {
            selector: 'button.add-lane'
        },
        laneOne: {
            selector: 'div.lane[data-lane-no="0"]'
        }
    }
};

