import { getCriminals, useCriminals } from "../criminalProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("alibiButtonClicked", event => {
   
    const criminals = useCriminals()
    const chosenCriminal = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen))
 
    openDialog(chosenCriminal.known_associates)
}
)

eventHub.addEventListener("click", event => {
    if (event.target.id === "close-associate-dialog") {
        closeDialog()
    }
})

const buddyDialog = (buddy) => {
    return `
      <section class="associate-dialog">
        <div class="associate-dialog__body">
          <h1>Known Associates</h1>
          <div class="associate-dialog__list">
            ${buddy.map(bud => buddyCard(bud)).join("")}
          </div>
            <button id="close-associate-dialog">Close</button>
        </div>
      </section>
    `;
  }

const openDialog = (associates) => {
    const ContentElement = document.querySelector('.criminalsContainer');
    ContentElement.innerHTML = buddyDialog(associates);
  }
  
  const closeDialog = () => {
    const contentTarget = document.querySelector('.associate_alibi');
    contentTarget.innerHTML = "";
  };




  const buddyCard = (budd) => {
    return `
      <div class="associate-dialog__card">
        <h2 class="associate-dialog__name"> ${budd.name} </h2>
        <h4 class="associate-dialog__alibi">Alibi: ${budd.alibi} </h4>
      </div>
    `;
  };
  
