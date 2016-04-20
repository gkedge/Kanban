/**
 * Created by gkedge on 4/18/2016.
 */
var expect = require('chai').expect;

var kanban;
var laneNumCounter = 0;

module.exports = {
    'Open': function (client) {
        kanban = client.page.kanbanPage().navigate();
        kanban.expect.element('@page').to.be.visible.before(100);
        kanban.assert.title('Kanban app');
    },

    'Add 1st Lane and remove': function () {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum)).to.be.visible.before(100);
        kanban.expect.element(kanban.deleteLaneBtnSele(laneNum)).to.be.present.before(100);
        kanban.expect.element(kanban.addNoteBtnSele(laneNum)).to.be.visible.before(100);
        kanban.expect.element(kanban.laneNameSele(laneNum))
            .to.be.visible
            .and.text.to.equal('New lane');

        kanban.expect.element(kanban.notesSele(laneNum)).to.be.visible.before(100);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(100);
    },

    'Add 1st Note to 1st Lane then remove note and lane': function () {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum))
            .to.be.present.before(100);
        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 0))
            .to.be.present.before(100);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(1);
        });

        kanban.expect.element(kanban.noteValueSele(laneNum, 0))
            .to.be.visible
            .and.text.to.equal('New task');

        kanban.deleteLNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 0)).to.not.be.present.after(100);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(100);
    },

    'Add 3 Notes to 1st Lane then remove each note and lane': function (client) {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum))
            .to.be.visible.before(100);
        kanban.setLaneValue(client, laneNum, 'Backlog')
            .expect.element(kanban.laneNameSele(laneNum))
            .text.to.equal('Backlog');

        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 0))
            .to.be.present.before(100);
        kanban.setNoteValue(client, laneNum, 0, 'Feed Dog')
            .expect.element(kanban.noteValueSele(laneNum, 0))
            .text.to.equal('Feed Dog');

        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 1))
            .to.be.present.before(100);
        kanban.setNoteValue(client, laneNum, 1, 'Leach Dog')
            .expect.element(kanban.noteValueSele(laneNum, 1))
            .text.to.equal('Leach Dog');


        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 2))
            .to.be.present.before(100);
        kanban.setNoteValue(client, laneNum, 1, 'Walk Dog')
            .expect.element(kanban.noteValueSele(laneNum, 1))
            .text.to.equal('Walk Dog');
        
        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

        kanban.deleteLNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 2)).to.not.be.present.after(100);

        kanban.deleteLNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 1)).to.not.be.present.after(100);

        kanban.deleteLNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 0)).to.not.be.present.after(100);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(100);
    },

    'Create a 3 lane w/ the 1st lane containing 3 notes': function (client) {
        var firstLane = laneNumCounter++,
            secondLane = laneNumCounter++,
            thirdLane = laneNumCounter++;
        
        kanban.addLane().expect.element(kanban.laneSele(firstLane))
            .to.be.visible.before(100);
        kanban.setLaneValue(client, firstLane, 'Backlog');

        kanban.addLane().expect.element(kanban.laneSele(secondLane))
            .to.be.visible.before(100);
        kanban.setLaneValue(client, secondLane, 'In Progress');

        kanban.addLane().expect.element(kanban.laneSele(thirdLane))
            .to.be.visible.before(100);
        kanban.setLaneValue(client, thirdLane, 'Completed');

        kanban.addNote(firstLane).expect.element(kanban.noteSele(firstLane, 0))
            .to.be.present.before(100);
        kanban.setNoteValue(client, firstLane, 0, 'Feed Dog');

        kanban.addNote(firstLane).expect.element(kanban.noteSele(firstLane, 1))
            .to.be.present.before(100);
        kanban.setNoteValue(client, firstLane, 1, 'Leach Dog');
        
        kanban.addNote(firstLane).expect.element(kanban.noteSele(firstLane, 2))
            .to.be.present.before(100);
        kanban.setNoteValue(client, firstLane, 1, 'Walk Dog');
        
        kanban.laneNotes(firstLane, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

        
        kanban.laneNotes(secondLane, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(firstLane)
            .expect.element(kanban.laneSele(firstLane)).to.not.be.present.after(100);
        kanban.deleteLane(thirdLane)
            .expect.element(kanban.laneSele(thirdLane)).to.not.be.present.after(100);
        kanban.deleteLane(secondLane)
            .expect.element(kanban.laneSele(secondLane)).to.not.be.present.after(100);
    },

    "Close Session": function (client) {
        client.end();
    }
};
