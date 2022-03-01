/**
* # Player type implementation of the game stages
* Copyright(c) 2022 Can Celebi <cnelebi@gmail.com>
* MIT Licensed
*
* Each client type must extend / implement the stages defined in `game.stages`.
* Upon connection each client is assigned a client type and it is automatically
* setup with it.
*
* http://www.nodegame.org
* ---
*/

"use strict";

const ngc = require('nodegame-client');

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    // Make the player step through the steps without waiting for other players.
    stager.setDefaultStepRule(ngc.stepRules.SOLO);

    stager.setOnInit(function() {

        // Initialize the client.

        var header;

        // Setup page: header + frame.
        header = W.generateHeader();
        W.generateFrame();

        // Add widgets.
        this.visualTimer = node.widgets.append('VisualTimer', header, {
            hidden: true // Initially hidden.
        });

        W.setRightPadding = function(val) {
            var myframe = W.gid('ng_mainframe');
            var myLength = val + 'px!important';
            myframe.style.paddingRight = myLength;
        };



        // W.setRightPadding(125);

        W.setHeaderPosition('right');

        W.setHeight = function(val) {
            var myframe = W.gid('ng_mainframe');
            var myHeight = val + 'px';
            myframe.style.minHeight = myHeight;
        };

        node.on('setHeight', function(val) {
            W.setHeight(val);
        });

        node.on('1-getW_height', function() {
            var myframe = W.gid('ng_mainframe');
            var currentHeight = myframe.style.minHeight;
            node.emit('2-getW_height', currentHeight)
        })


        // for debug
        this.talk = function(msg){
            node.say('debug', 'SERVER', msg);
        };


        // No need to show the wait for other players screen in single-player
        // games.
        W.init({ waitScreen: false });

        // Additional debug information while developing the game.
        // this.debugInfo = node.widgets.append('DebugInfo', header);

    });



    stager.extendStep('test1', {
        frame: 'test1.htm',
        init: function() {

        },
        cb: function() {


        },
        done: function() {

        }
    });

    stager.extendStep('test2', {
        frame: 'test2.htm',
        init: function() {

        },
        cb: function() {


        },
        done: function() {

        }
    });

    // stager.extendStep('end', {
    //     widget: {
    //         name: 'EndScreen',
    //         options: { askServer: true }
    //     },
    //     init: function() {
    //         node.game.visualTimer.destroy();
    //         node.game.doneButton.destroy();
    //     }
    // });
};
