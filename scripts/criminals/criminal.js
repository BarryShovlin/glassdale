
export const Criminal = (criminal, facilities) => {
    return `
    <article class="criminal">
        <h2 class="criminal_name">${criminal.name}</h2>
        <div class="criminal_age">Age: ${criminal.age}</div>
        <div class="criminal_conviction">Crime: ${criminal.conviction}</div>
        <div class="incarceration_start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="incarceration_end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        <div>
        <h2>Facilities</h2>
        <ul>
            ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
      </div>
        <button id="associates--${criminal.id}">Associate Alibis</button>
        </article>
    `
}

const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    const [splitID, indexOne] = clickEvent.target.id.split("--")
    if ("associates" === splitID) {
        const customEvent = new CustomEvent("alibiButtonClicked",{
            detail: {
                criminalThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
