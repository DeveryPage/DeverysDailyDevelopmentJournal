export const entry = (entryObject) => {
    return `
      <section class="entry">
        <header>
            <h2 class="entry__title">${entryObject.conceptsCovered}</h2>
        </header>
        <h3 class="mood_type">${entryObject.mood.moodStatus}</h3>
            <h3 class="entry_date">${entryObject.dateOfEntry}</h3>
            <p class="user_name">${entryObject.journalEntry}</p>
            <div><button id="edit--${entryObject.id}">Edit</button></div>
            
      </section>
    `
  }