export const associateHTML = (criminal) => {
    return `
    <article class="associates">
        <h1 class="known">Known Associates</h1>
        <h1 class="associate_name">${criminal.name}</h1>
        <div class="associate_alibi">Alibi: ${criminal.alibi}</div>
        `
}