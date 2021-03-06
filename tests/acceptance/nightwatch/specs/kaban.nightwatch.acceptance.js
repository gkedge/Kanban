/**
 * Created by gkedge on 4/18/2016.
 */
var expect = require('chai').expect;
var chromedriver = require('chromedriver');


var kanban;
var laneNumCounter = 0;

module.exports = {
    '@disabled': false,
    
    before: function (client) {
        const args = [
            "--port=4444",
            "--url-base=/wd/hub"
        ];
        
        chromedriver.start(args);
        console.log('Open browser...');
        kanban = client.page.kanbanPage().navigate();
        
        
        kanban.expect.element('@page').to.be.visible.before(500);
        kanban.assert.title('Kanban app');
    },

    after: function (client) {
        console.log('Closing down...');
        chromedriver.stop();
        
        client.end();
    },

    'Add 1st Lane and remove': function () {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum)).to.be.visible.before(200);
        kanban.expect.element(kanban.deleteLaneBtnSele(laneNum)).to.be.present.before(200);
        kanban.expect.element(kanban.addNoteBtnSele(laneNum)).to.be.visible.before(200);
        kanban.expect.element(kanban.laneNameSele(laneNum))
            .to.be.visible
            .and.text.to.equal('New lane');

        kanban.expect.element(kanban.notesSele(laneNum)).to.be.visible.before(200);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(200);
    },

    'Add/remove 1st Note to 1st Lane': function () {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum))
            .to.be.present.before(200);
        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 0))
            .to.be.present.before(200);
        // client.pause(5000);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(1);
        });

        kanban.expect.element(kanban.noteValueSele(laneNum, 0))
            .to.be.visible.after(200)
            .and.text.to.equal('New task');

        kanban.deleteNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 0)).to.not.be.present.after(200);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(200);
    },

    'Add/remove 3 Notes to 1st Lane': function (client) {
        var laneNum = laneNumCounter++;
        kanban.addLane().expect.element(kanban.laneSele(laneNum))
            .to.be.visible.before(200);
        kanban.setLaneValue(client, laneNum, 'Backlog')
            .expect.element(kanban.laneNameSele(laneNum))
            .text.to.equal('Backlog');

        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 0))
            .to.be.present.before(200);
        kanban.setNoteValue(client, laneNum, 0, 'Feed Dog')
            .expect.element(kanban.noteValueSele(laneNum, 0))
            .text.to.equal('Feed Dog');

        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 1))
            .to.be.present.before(200);
        kanban.setNoteValue(client, laneNum, 1, 'Leash Dog')
            .expect.element(kanban.noteValueSele(laneNum, 1))
            .text.to.equal('Leash Dog');


        kanban.addNote(laneNum).expect.element(kanban.noteSele(laneNum, 2))
            .to.be.present.before(200);
        kanban.setNoteValue(client, laneNum, 2, 'Walk Dog')
            .expect.element(kanban.noteValueSele(laneNum, 2))
            .text.to.equal('Walk Dog');

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

        kanban.deleteNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 2)).to.not.be.present.after(200);

        kanban.deleteNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 1)).to.not.be.present.after(200);

        kanban.deleteNote(laneNum, 0)
            .expect.element(kanban.noteSele(laneNum, 0)).to.not.be.present.after(200);

        kanban.laneNotes(laneNum, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(laneNum)
            .expect.element(kanban.laneSele(laneNum)).to.not.be.present.after(200);
    },

    'Add 3 lanes; 1st lane containing 3 notes': function (client) {
        var firstLane = laneNumCounter++,
            secondLane = laneNumCounter++,
            thirdLane = laneNumCounter++;
        kanban.addLanes(3);
        kanban.setLaneValue(client, firstLane, 'Backlog');

        kanban.addNotes(firstLane, 3);
        kanban.setNoteValue(client, firstLane, 0, 'Feed Dog');
        kanban.setNoteValue(client, firstLane, 1, 'Leash Dog');
        kanban.setNoteValue(client, firstLane, 2, 'Walk Dog');

        kanban.laneNotes(firstLane, function (notes) {
            expect(notes.value.length).to.equal(3);
        });

        kanban.laneNotes(secondLane, function (notes) {
            expect(notes.value.length).to.equal(0);
        });

        kanban.deleteLane(firstLane)
            .expect.element(kanban.laneSele(firstLane))
            .to.not.be.present.after(200);
        kanban.deleteLane(thirdLane)
            .expect.element(kanban.laneSele(thirdLane))
            .to.not.be.present.after(200);
        kanban.deleteLane(secondLane)
            .expect.element(kanban.laneSele(secondLane))
            .to.not.be.present.after(200);
    },

    'DnD between lanes': function (client) {
        var firstLane = laneNumCounter++,
            secondLane = laneNumCounter++,
            thirdLane = laneNumCounter++;
        kanban.addLanes(3);
        kanban.setLaneValue(client, firstLane, 'Backlog');

        kanban.addNotes(firstLane, 6);
        kanban.setNoteValue(client, firstLane, 0, 'Feed Dog');
        kanban.setNoteValue(client, firstLane, 1, 'Leash Dog');
        kanban.setNoteValue(client, firstLane, 2, 'Walk Dog');

        kanban.setNoteValue(client, firstLane, 3, 'Feed Cat');
        kanban.setNoteValue(client, firstLane, 4, 'Open Door');
        kanban.setNoteValue(client, firstLane, 5, 'Kick out Cat');

        // Drag 'Feed Dog' to 2nd Lane.
        client.drag(kanban.noteSele(firstLane, 0), kanban.laneSele(secondLane))
            .expect.element(kanban.noteSele(secondLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(secondLane, 0))
            .text.to.equal('Feed Dog');

        // Drag 'Feed Dog' back to 1st Lane.
        kanban.drag(kanban.noteSele(secondLane, 0), kanban.noteSele(firstLane, 0))
            .expect.element(kanban.noteSele(firstLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(firstLane, 0))
            .text.to.equal('Feed Dog');

        // Drag 'Kick out Cat' to 2nd Lane.
        kanban.drag(kanban.noteSele(firstLane, 5), kanban.laneSele(secondLane))
            .expect.element(kanban.noteSele(secondLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(secondLane, 0))
            .text.to.equal('Kick out Cat');

        // Drag 'Feed Cat' to 2nd Lane.
        kanban.drag(kanban.noteSele(firstLane, 3), kanban.noteSele(secondLane, 0))
            .expect.element(kanban.noteSele(secondLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(secondLane, 0))
            .text.to.equal('Feed Cat');

        // Drag 'Open Door' to 2nd Lane.
        kanban.drag(kanban.noteSele(firstLane, 3), kanban.noteSele(secondLane, 1))
            .expect.element(kanban.noteSele(secondLane, 1))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(secondLane, 1))
            .text.to.equal('Open Door');

        // Drag 'Kick out Cat' to 3rd Lane.
        kanban.drag(kanban.noteSele(secondLane, 2), kanban.laneSele(thirdLane))
            .expect.element(kanban.noteSele(thirdLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(thirdLane, 0))
            .text.to.equal('Kick out Cat');

        // Drag 'Feed Cat' to 3rd Lane.
        kanban.drag(kanban.noteSele(secondLane, 0), kanban.noteSele(thirdLane, 0))
            .expect.element(kanban.noteSele(thirdLane, 0))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(thirdLane, 0))
            .text.to.equal('Feed Cat');

        // Drag 'One Door' to 2nd Lane.
        kanban.drag(kanban.noteSele(secondLane, 0), kanban.noteSele(thirdLane, 1))
            .expect.element(kanban.noteSele(thirdLane, 1))
            .to.be.present.before(200);

        kanban.expect.element(kanban.noteValueSele(thirdLane, 1))
            .text.to.equal('Open Door');

        kanban.deleteLane(firstLane);
        kanban.deleteLane(thirdLane);
        kanban.deleteLane(secondLane);
    }
};
