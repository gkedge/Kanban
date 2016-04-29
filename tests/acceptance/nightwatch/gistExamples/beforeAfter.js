var kanban;
module.exports = {
    before: function (client) {
        console.log('Open browser...');
        kaban = client
            .url('http://gkedge.github.io/Kanban/')
            .waitForElementVisible('body', 250);
    },
    after: function (client) {
        console.log('Closing down...');
        client.end();
    },
    ...
}
