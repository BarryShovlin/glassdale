import { getConvictions, useConvictions } from "./ConvictionProvider.js"


const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        const crimListEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(crimListEvent)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${
        convictionsCollection.map(conviction => {
            const convictionName = conviction.name
            return `<option value="${conviction.id}">${convictionName}</option>`
        })
        }
    </select>
    `
    }

export const ConvictionSelect = () => {
    getConvictions()
    .then(
        () => {
        const convictions = useConvictions()
    render(convictions)
    })
}


