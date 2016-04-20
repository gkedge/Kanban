/**
 * Created by gkedge on 4/18/2016.
 */

var kanban;
var expect = require('chai').expect;

module.exports = {
    'Open': function (client) {
        kanban = client.page.kanbanPage().navigate();
        kanban.expect.element('@page').to.be.visible.before(100);
        kanban.assert.title('Kanban app');
    },

    'Add 1st Lane': function () {
        kanban.addLane().waitForElementVisible(kanban.laneSele(0), 100);
        kanban.expect.element(kanban.deleteLaneBtnSele(0)).to.be.present;
        kanban.expect.element(kanban.addNoteBtnSele(0)).to.be.visible;
        kanban.expect.element(kanban.laneNameSele(0))
            .to.be.visible
            .and.text.to.equal('New lane');

        kanban.expect.element(kanban.notesSele(0)).to.be.visible;

        kanban.laneNotes(0, function (notes) {
            expect(notes.value.length).to.equal(0);
        });
    },

    'Delete 1st Lane': function () {
        kanban.deleteLane(0);
        kanban.waitForElementNotPresent(kanban.laneSele(0), 100);
    },

    'Add 1st Note to 2nd Lane': function () {
        kanban.addLane().expect.element(kanban.laneSele(1))
            .to.be.present.before(100);
        kanban.addNote(1).expect.element(kanban.noteSele(1, 0))
            .to.be.present.before(100);

        kanban.laneNotes(1, function (notes) {
            expect(notes.value.length).to.equal(1);
        });

        kanban.expect.element(kanban.noteValueSele(1, 0))
            .to.be.visible
            .and.text.to.equal('New task');
    },

    'Delete 1st Note to 2nd Lane': function () {
        kanban.deleteLNote(1, 0)
            .expect.element(kanban.noteSele(1, 0)).to.not.be.present.after(100);

        kanban.laneNotes(1, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(1)
            .expect.element(kanban.laneSele(1)).to.not.be.present.after(100);
    },

    'Add 3 Notes to 3nd Lane': function () {
        kanban.addLane().expect.element(kanban.laneSele(2))
            .to.be.present.before(100);
        kanban.addNote(2).expect.element(kanban.noteSele(2, 0))
            .to.be.present.before(100);

        kanban.addNote(2).expect.element(kanban.noteSele(2, 1))
            .to.be.present.before(100);

        kanban.addNote(2).expect.element(kanban.noteSele(2, 2))
            .to.be.present.before(100);

        kanban.laneNotes(2, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

    },

    'Delete 3 Notes to 3nd Lane': function () {
        kanban.deleteLNote(2, 0)
            .expect.element(kanban.noteSele(1, 2)).to.not.be.present.after(100);

        kanban.deleteLNote(2, 0)
            .expect.element(kanban.noteSele(1, 1)).to.not.be.present.after(100);

        kanban.deleteLNote(2, 0)
            .expect.element(kanban.noteSele(1, 0)).to.not.be.present.after(100);

        kanban.laneNotes(2, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(2)
            .expect.element(kanban.laneSele(2)).to.not.be.present.after(100);
    },

    'Create a 4th & 5th lane w/ the 4th lane containing 3 notes': function () {
        kanban.addLane().expect.element(kanban.laneSele(3))
            .to.be.present.before(100);
        kanban.addLane().expect.element(kanban.laneSele(4))
            .to.be.present.before(100);
        
        kanban.addNote(3).expect.element(kanban.noteSele(3, 0))
            .to.be.present.before(100);

        kanban.addNote(3).expect.element(kanban.noteSele(3, 1))
            .to.be.present.before(100);

        kanban.addNote(3).expect.element(kanban.noteSele(3, 2))
            .to.be.present.before(100);

        kanban.laneNotes(3, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

        kanban.laneNotes(4, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

    },

    'Delete 4th & 5th Lanes': function () {
        kanban.deleteLane(3)
            .expect.element(kanban.laneSele(3)).to.not.be.present.after(100);
        kanban.deleteLane(4)
            .expect.element(kanban.laneSele(4)).to.not.be.present.after(100);
    },

    "Close Session": function (client) {
        client.end();
    }
};
