import { saveNote } from "./noteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="Author Name">
        <textarea id="text" placeholder="Note Text"></textarea>
        <input type="text" id="suspect" placeholder="Suspect Name">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

