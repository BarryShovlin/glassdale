import { getNotes, useNotes, deleteNote } from "./noteProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals } from "../criminals/criminalProvider.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", () => {
    NoteList()
})

eventHub.addEventListener("noteStateChanged", () => {
    NoteList()
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, noteId] = clickEvent.target.id.split("--")
        
       deleteNote(noteId)
    }
  })

const render = (noteArray, criminals) => {
    const allNotesConvertedToStrings = noteArray.map((note) => {

        // find the associated criminal for the note
        const associatedCriminal = criminals.find(
          (criminal) => {
            return criminal.id === note.criminalId
          }
        )
  
        note.criminalName = associatedCriminal.name
  
        return NoteHTMLConverter(note)
      }).join("")


    contentTarget.innerHTML = allNotesConvertedToStrings;
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}