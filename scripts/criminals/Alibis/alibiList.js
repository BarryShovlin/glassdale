import { getCriminals, useCriminals } from "../criminalProvider.js"


const contentTarget = document.querySelector(".associate_alibi")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("alibiButtonClicked", event => {
   if (event.detail.criminalThatWasCosen !== 0) {
   
    const criminals = useCriminals()
    const chosenCriminal = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen))
 
    contentTarget.innerHTML = `
    <h3 class="crimName">Known Associates of ${chosenCriminal.name}</h3>
    ${chosenCriminal.known_associates.map(buddy => `
    <h4 class=associate_name>${buddy.name}</h4>
    <h3 class="alibi>Alibi: ${buddy.alibi}</h3>
    `).join("")
   
   }`
}
}
)




  
