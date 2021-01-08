import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../conviction/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { getFacilities, useFacilities } from "../facility/facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/criminalFacilityProvider.js"
import { buddyDialog } from "../criminals/Alibis/alibiList.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
let criminals = []
let facilities = []
let crimFac = []

export const CriminalList = () => {
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
               
                 facilities = useFacilities()
                 crimFac = useCriminalFacilities()
                 criminals = useCriminals()

                
                render(criminals)
            }
        )
}

const render = (criminalList) => {
    contentTarget.innerHTML = criminalList.map(
        (criminalObject) => {
            const facilityRelationshipsForThisCriminal = crimFac.filter(cf => cf.criminalId === criminalObject.id)
            const crimFacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            return Criminal(criminalObject, crimFacilities)
        }
    ).join("")
}

eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {

        const crimes = useConvictions()
        const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))
        const crimsToFilter = criminals.slice()
        const matchingCriminals = crimsToFilter.filter( (criminal) => {
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
        const crimsToFilter = criminals.slice()
        const matchingCriminals = crimsToFilter.filter( (criminal) => {
            return criminal.arrestingOfficer === arrestingOfficer.name
            }

        )
    render(matchingCriminals)
        }
    
})
