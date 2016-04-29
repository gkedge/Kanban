var kanban;
module.exports = {
    before: function (client) {
        console.log('Open browser...');
        // A 'page' assumes a single URL is provided
        // to navigate to.
        kanban = client.page.kanbanPage().navigate();
    },
    after: function (client) {
        console.log('Closing down...');
        client.end();
    },
    'Finding title': function () {
        kanban.assert.title('Kanban app');
    },
    'Adding Kanban Lane': function () {
        kanban.click('@addLaneBtn');
        kanban.waitForElementVisible('@laneOne', 100);
    }
};
