const validator = require('validator');
const fun = require('./nodes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');

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
    handler:  (argv) =>{
        console.log("Title: "+ argv.title);
        console.log("Body: "+argv.body);
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () =>{
        console.log("Removinging a NOTE!")
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () =>{
        console.log("Reading a NOTE!")
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => {
        console.log("list a NOTE!")
    }
})
// add, remove, read, list

//console.log(yargs.argv)
yargs.parse();