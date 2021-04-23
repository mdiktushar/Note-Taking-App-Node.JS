const fs = require('fs');
const { title } = require('process');
const chalk = require('chalk');
const log = console.log;

const addNote = (title, body) =>{
    const notes = loadNotes();
    
    //const duplicateNotes = notes.filter( (note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title);
    
    // debugger

    //if(duplicateNotes.length === 0){
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        log(chalk.inverse.green("New note added!"));
    }
    else{
        log(chalk.inverse.red("Note title is already used!!! :( "));
    }
}


const readNote=(title)=>{
    const notes = loadNotes();

    const note = notes.find((value) => value.title === title);
    
    if(note){
        log(chalk.inverse(note.title));
        log((note.body));
    }else{
        log(chalk.inverse.red("NO Note Found!!"));
    }
}


const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const removeNote = (title) =>{

    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        log(chalk.inverse.green("Note Removed!"));
    }else{
        log(chalk.inverse.red("NO Note Found!!"));
    }
}

const listNotes = () =>{
    log(chalk.blue.inverse("Your Notes:"));
    const notes = loadNotes();
    notes.forEach((note) => {
        log(note.title);
    });
}


module.exports = {
    removeNote: removeNote,
    addNote: addNote,
    listNotes: listNotes,
    readNote: readNote
};