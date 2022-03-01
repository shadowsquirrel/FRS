/**
 * # Game stages definition file
 * Copyright(c) 2022 Can Celebi <cnelebi@gmail.com>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

     stager
     .stage('test1')
     .stage('test2')
     // .stage('test3')
     //
     // .repeatStage('testX', 10)


     .gameover();


     if(treatmentName === 't1') {
         console.log('INSIDE STAGES');
         console.log(treatmentName);

         stager.skip('test2');
     }
     if(treatmentName === 't2') {
         console.log('INSIDE STAGES');
         console.log(treatmentName);

         stager.skip('test1');
     }



    // Notice: here all stages but 'game' have
    // one step named after the stage.

    // Skip one stage.
    // stager.skip('instructions');

    // Skip multiple stages:
    // stager.skip([ 'instructions', 'quiz' ])

    // Skip a step within a stage:
    // stager.skip('game', 'results');
};
