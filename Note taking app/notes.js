const fs = require('fs');
const { title } = require('process');
const chalk = require('chalk');
const log = console.log;

const getNotes=()=>{
    return "Your Notes....";
}

const addNote = (title, body) =>{
    const notes = loadNotes();
    
    const duplicateNotes = notes.filter( (note) =>{
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
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
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        log(chalk.inverse.green("Note Removed!"));
    }else{
        log(chalk.inverse.red("NO Note Found!!"));
    }
}

module.exports = {
    getNotes: getNotes,
    removeNote: removeNote,
    addNote: addNote
};