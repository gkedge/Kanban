/**
 * Created by gkedge on 4/18/2016.
 */

var kanban;

module.exports = {
    'Open': function( client ) {
        kanban = client.page.kanbanPage().navigate();
        kanban.expect.element('@page').to.be.present.before(100);
        kanban.assert.title('Kanban app');
    },

    'Add 1st Lane': function() {
        kanban.addLane();
    },

    // "Close Session": function(client) {
    //     client.end();
    // }
};
