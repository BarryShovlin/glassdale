import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../conviction/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")


eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {

        const crimes = useConvictions()
        const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => {
          return  criminal.conviction === crime.name
        }
        )
        render(matchingCriminals)
    }

        
    }
)
eventHub.addEventListener("officerSelected", event => {

    if (event.detail.selectedOfficer !== "0") {
    
        const officerName = useOfficers()
        const arrestingOfficer = officerName.find( (officer) => officer.id === parseInt(event.detail.officer))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => {
            return criminal.arrestingOfficer === arrestingOfficer.name
            }

        )
    render(matchingCriminals)
        }
    
})





export const CriminalList = () => {
    
    getCriminals().then(
        () => {
        let perps = useCriminals()
        render(perps)
            }
    )
  }
    
    const render = (criminals) => {
        let criminalCards = []
        for (const perp of criminals) {
            criminalCards.push(Criminal(perp))
        }
        contentTarget.innerHTML = criminalCards.join("")
    }