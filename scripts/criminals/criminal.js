
export const Criminal = (criminal) => {
    return `
    <article class="criminal">
        <h2 class="criminal_name">${criminal.name}</h2>
        <div class="criminal_age">Age: ${criminal.age}</div>
        <div class="criminal_conviction">Crime: ${criminal.conviction}</div>
        <div class="incarceration_start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="incarceration_end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </article>
    `
}