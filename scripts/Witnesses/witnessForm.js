const contentTarget = document.querySelector(".witnessList")
const eventHub = document.querySelector(".container")



eventHub.addEventListener("click", clickEvent =>{
    if (clieckEvent.detail.id === "show_witness") {

    }
})

export const render = () => {
    contentTarget.innerHTML =  `
    <button id="show_witness>Show Witnesses</button>
    `
}

export const witnessForm = () => {
    render()
}
