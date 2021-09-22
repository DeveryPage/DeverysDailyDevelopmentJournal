let loggedInUser = {}

export const logoutUser = () => {
    loggedInUser = {}
  }


export const getLoggedInUser = () => {
	return loggedInUser;
}

export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj;
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


export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      console.log("parsedUser", parsedUser) //data is returned as an array
      if (parsedUser.length > 0){
        setLoggedInUser(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
        return false;
      }
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


// DELETE
export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/journalEntries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getJournalEntries)
  }
