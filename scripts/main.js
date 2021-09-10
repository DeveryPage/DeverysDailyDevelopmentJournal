import { getLoggedInUser, useEntryCollection, createEntry } from "./dataManager.js";
import { getJournalEntries, getUsers } from "./dataManager.js";
import { entryList } from "./journalList.js";
import { Footer } from "./footer.js";
import { journalEntry } from "./journalEntry.js";



const applicationElement = document.querySelector(".dailyJournal");

const showEntryList = () => {
  const entryElement = document.querySelector(".entryList");
  getJournalEntries().then((allEntries) => {
  entryElement.innerHTML = entryList(allEntries.reverse());
  })
}

const showJournalEntry = () => {
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = journalEntry();
}

applicationElement.addEventListener("click", event => {
  if (event.target.id === "journalDate") {
    console.log("you clicked journalEntry date")
  }
})

applicationElement.addEventListener("click", event => {
  if (event.target.id === "journalEntry") {
    console.log("you clicked journalEntry")
  }
})

applicationElement.addEventListener("change", event => {
  if (event.target.id === "moodOfTheDay") {
    console.log("you clicked a Mood of the Day")
  }
})

applicationElement.addEventListener("click", event => {
  if (event.target.id === "coveredConcepts") {
    console.log("you clicked conceptsCovered")
  }
})




applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})





applicationElement.addEventListener("change", event => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value)
    console.log(`User wants to see posts since ${yearAsNumber}`)
    showFilteredEntries(yearAsNumber)
  }
})

const showFilteredEntries = (year) => {
  const epoch = Date.parse(`01/01/${year}`);

  const filteredEntries = useEntryCollection().filter(singleEntry => {
    if (singleEntry.timestamp >= epoch) {
      return singleEntry
    }
  })
  const entryElement = document.querySelector(".entryList");
  entryElement.innerHTML = entryList(filteredData);
}






applicationElement.addEventListener("click", event => {
  if (event.target.id === "newEntry__cancel") {
      //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "submitBtn") {
  //collect the input values into an object to post to the DB
    const concepts = document.querySelector("input[name='coveredConcepts']").value
    const mood = document.querySelector("select[name='moodDrop']").value
    const entry = document.querySelector("textarea[name='journalEntry']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    console.log(mood)
    const entryObject = {
        conceptsCovered: concepts,
        moodId: parseInt(mood),
        journalEntry: entry,
        userId: 1,
        dateOfEntry: Date.now()
    }

  // be sure to import from the DataManager
      createEntry(entryObject).then(response => showEntryList())
  }
})









const startJournal = () => {
  // const postElement = document.querySelector(".postList");
  //   postElement.innerHTML = "THis is the journal"
  showEntryList();
  showJournalEntry();
  Footer();
}

startJournal();