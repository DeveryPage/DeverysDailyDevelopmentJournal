const loggedInUser = {
    id: 1,
    name: "Devery",
    email: "thisemail@thisaddress",
    datjoined: "01/31/2000"
}


export const getLoggedInUser = () => {
	return loggedInUser;
}


export const getUsers = () => {

    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}


let entryCollection=[];

export const useEntryCollection = () => {
    return [...entryCollection];
}

export const getJournalEntries = () => {

    return fetch("http://localhost:8088/journalEntries?_expand=mood&_expand=user")
    .then(response => response.json())
    .then(parsedResponse => {
        entryCollection = parsedResponse
        return parsedResponse;
    })
}


export const createEntry = entryObject => {
    return fetch("http://localhost:8088/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(response => response.json())
}

