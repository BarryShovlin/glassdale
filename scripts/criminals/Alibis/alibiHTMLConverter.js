export const associateHTML = (criminal) => {
    return `
    <article class="associates">
        <h2 class="associate_name">${criminal.name}</h2>
        <div class="associate_alibi">Alibi: ${criminal.alibi}</div>
        `
}