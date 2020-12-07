import { getOfficers, useOfficers } from "../officers/OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        console.log(selectedOfficer)

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
    
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select an officer...</option>
    ${
        officerCollection.map(officer => {
            const officerName = officer.name
            return `<option value="${officer.id}">${officerName}</option>`
        })
        }
    </select>
    `
    }

export const OfficerSelect = () => {
    getOfficers()
    .then(
        () => {
        const officers = useOfficers()
    render(officers)
    })
}