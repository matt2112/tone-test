const Tone = require('tone');

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

//play a note every quarter-note
const loop = new Tone.Loop(function(time){
    synth.triggerAttackRelease("C2", "8n", time);
}, "4n");

//loop between the first and fourth measures of the Transport's timeline
loop.start("1m").stop("4m");

Tone.Transport.start();