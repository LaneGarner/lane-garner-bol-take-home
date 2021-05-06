//array of notes to represent one octave keyboard
const keyboard = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"];

//access div in html to display output
const pianoOutput = document.querySelector("#piano-output");

//create ul in output div to display notes
const noteList = document.createElement("ul");
noteList.style.listStyle = "none";
pianoOutput.appendChild(noteList);

//main function which takes in array of note objects
const play_piano = (song) => {
    //loop over each note to display and release notes
    song.forEach((item) => {
        displayNote(item);
        releaseNote(item);
    });
};

//function to display notes
const displayNote = (item) => {
    //convert time to ms for setTimeout
    const time = item.starts_at * 1000;
    //setTimeout to display notes at given starts_at key
    setTimeout(() => {
        //create list item for each note
        const thisNote = document.createElement("li");
        //loop over all notes in keyboard array 
        keyboard.forEach((keyboardNote) => {
            //compare given note key to keyboard array and display
            //(comparing to array to allow for later functionality rather than just displaying the note key)
            if (item.note === keyboardNote) {
                thisNote.innerHTML = `Play ${keyboardNote}`;
            }
        });
        //append li to ul
        noteList.appendChild(thisNote);
    }, time);
};

//function to remove notes
const releaseNote = (item) => {
    //add starts_at key and lasts key and convert each to ms for setTimeout
    const time = (item.starts_at * 1000) + (item.lasts * 1000);
    //setTimeout to display note release at given time
    setTimeout(() => {
        const thisNote = document.createElement("li");
        //loop over all notes in keyboard array
        keyboard.forEach((keyboardNote) => {
            //compare given note key to keyboard array and display
            if (item.note === keyboardNote) {
                thisNote.innerHTML = `Release ${keyboardNote}`;
            }
        });
        //append li to ul
        noteList.appendChild(thisNote);
    }, time);
};

//provided data:
let my_song = [
    { note: "A", starts_at: 0, lasts: 3 },
    { note: "B", starts_at: 0, lasts: 3 },
    { note: "C", starts_at: 1.5, lasts: 1.5 },
];

play_piano(my_song);
