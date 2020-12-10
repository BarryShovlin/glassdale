import { getCriminals, useCriminals } from "../criminalProvider.js"
import { associateHTML } from "../Alibis/alibiHTMLConverter.js"


const contentTarget = document.querySelector(".associate_alibi")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("alibiButtonClicked", event => {
   if (event.detail.criminalThatWasCosen !== 0) {
   
    const criminals = useCriminals()
    const chosenCriminal = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen))
 
    const buddies = chosenCriminal.known_associates
    contentTarget.innerHTML =  buddies.map(buddy => associateHTML(buddy)).join("")

   }
})



  



export const alibiList = () => {
    getCriminals()
        .then(() => {
            const allCriminals = useCriminals()
            render(allCriminals)
        })
    }