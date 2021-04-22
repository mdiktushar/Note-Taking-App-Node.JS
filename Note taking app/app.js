const validator = require('validator');
const fun = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');
const notes = require('./notes.js');

// Customize yarge vesion
yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',

            // for this opting we have to add a title in command line
            demandOption: true,
            // title has to be a string
            type: 'string'
        }
    },

    body:{
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    },
    handler(argv){
        // console.log("Title: "+ argv.title);
        // console.log("Body: "+argv.body);

        notes.addNote(argv.title, argv.body);
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a note',

    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note',

    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler()  {
        notes.listNotes();
    }
})
// add, remove, read, list

//console.log(yargs.argv)
yargs.parse();