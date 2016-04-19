/**
 * Created by gkedge on 4/18/2016.
 */
// module.exports = {
//     'Kanban Initial Render': function( _browser ) {
//         _browser
//             .url('http://gkedge.github.io/Kanban/')
//             .waitForElementVisible( 'body', 1000 )
//             .assert.title('Kanban app')
//             .click('button.add-lane')
//             .waitForElementVisible( 'div.lane', 1000 )
//         ;
//     }
//
// };


// describe('Kanban with Nightwatch', function () {
//
//     before(function (client, done) {
//         done();
//     });
//
//     after(function (client, done) {
//         client.end(function () {
//             done();
//         });
//     });
//
//     // afterEach(function (client, done) {
//     //     done();
//     // });
//     //
//     // beforeEach(function (client, done) {
//     //     done();
//     // });
//     //
//     context('Greased', function() {
//         specify('Open Kanban', function (client) {
//             client
//                 .url('http://gkedge.github.io/Kanban/')
//                 .waitForElementVisible('body', 250);
//
//             // .expect.element('body').to.be.present.before(250);
//
//             client.assert.title('Kanban app');
//
//         });
//         specify('Create 1st Lane', function (client) {
//             client
//                 .click('button.add-lane')
//                 .expect.element('div.lane').to.be.present.before(10);
//         });
//     });
//
// });