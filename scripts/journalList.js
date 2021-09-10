import { entry } from "./journal.js";



export const entryList = (allEntries) => {
    let entryHTML = "";
        for (const entryObject of allEntries) {
            console.log(entryObject)
            entryHTML += entry(entryObject)
        }
        return entryHTML;
}