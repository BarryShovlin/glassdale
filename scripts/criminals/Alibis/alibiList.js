import { useCriminals } from "../criminalProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiButtonClicked", (event) => {
   const associatesDialog = document.querySelector("#associatesDialog")
   const dialogText = document.querySelector("#associatesDialog_text")
    const criminals = useCriminals()
    const chosenCriminal = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen)
    )
    dialogText.innerHTML =`
    <h3>Associates of ${chosenCriminal.name}<h3></h3>
    ${chosenCriminal.known_associates.map( (associate) => `
      <h4>${associate.name}</h4>
      <div>${associate.alibi}</div>`
      ).join("")}`
  
      buddyDialog()
      associatesDialog.showModal()

})

eventHub.addEventListener("click", event => {
    if (event.target.id === "closeDialog") {
       buddyDialog.close()
    }
})

 export const buddyDialog = () => {
     return `
     <dialog id="associatesDialog">
     <div id="associatesDialog__text"></div>
     <button id="closeDialog">close</button>
     </dialog>
 `
   }









// const openDialog = (associates) => {
//     const ContentElement = document.querySelector('.criminalsContainer');
//     ContentElement.innerHTML = buddyDialog(associates);
//   }
  
//   const closeDialog = () => {
//     const contentTarget = document.querySelector('.associate_alibi');
//     contentTarget.innerHTML = "";
//   };




  // const buddyCard = (budd) => {
  //   return `
  //     <div class="associate-dialog__card">
  //       <h2 class="associate-dialog__name"> ${budd.name} </h2>
  //       <h4 class="associate-dialog__alibi">Alibi: ${budd.alibi} </h4>
  //     </div>
  //   `;
  // };
  
