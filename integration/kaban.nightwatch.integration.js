/**
 * Created by gkedge on 4/18/2016.
 */

var kanban;
var expect = require('chai').expect;

module.exports = {
    'Open': function( client ) {
        kanban = client.page.kanbanPage().navigate();
        kanban.expect.element('@page').to.be.visible.before(100);
        kanban.assert.title('Kanban app');
    },

    'Add 1st Lane': function() {
        kanban.addLane().waitForElementVisible(kanban.laneSele(0), 100);
        kanban.expect.element(kanban.deleteLaneBtnSele(0)).to.be.present;
        kanban.expect.element(kanban.addNoteBtnSele(0)).to.be.visible;
        kanban.expect.element(kanban.laneNameSele(0))
            .to.be.visible
            .and.text.to.equal('New lane');
        
        kanban.expect.element(kanban.notesSele(0)).to.be.visible;
        
        kanban.laneNotes(0, function(notes) {
            expect(notes.value.length).to.equal(0);
        });
    },

    'Delete 1st Lane': function() {
        kanban.deleteLane(0);
        kanban.waitForElementNotPresent(kanban.laneSele(0), 100);
    },

    'Add 1st Note to 2nd Lane': function() {
        kanban.addLane().expect.element(kanban.laneSele(1))
            .to.be.present.before(100);
        kanban.addNote(1).expect.element(kanban.noteSele(1, 0))
            .to.be.present.before(100);
        
        kanban.laneNotes(1, function(notes) {
            expect(notes.value.length).to.equal(1);
        });
        
        kanban.expect.element(kanban.noteValueSele(1, 0))
            .to.be.visible
            .and.text.to.equal('New task');
    },

    'Delete 1st Note to 2nd Lane': function() {
        kanban.deleteLNote(1, 0)
            .expect.element(kanban.noteSele(1, 0)).to.not.be.present.after(100);
        
        kanban.laneNotes(1, function(notes) {
            expect(notes.value.length).to.equal(0);
        });
        
        kanban.deleteLane(1)
            .expect.element(kanban.laneSele(1)).to.not.be.present.after(100);
    },

    "Close Session": function(client) {
        client.end();
    }
};
