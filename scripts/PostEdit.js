export const PostEdit = (entryObject) => {
	return `
	<div class="newPost">
	<h3>Edit This Post</h3>
		<div>
			<input value="${entryObject.conceptsCovered}"
				   name="conceptsCovered"
				   class="newEntry__input"
				   type="text"
				   placeholder="Concepts Covered" />
		</div>

    	<textarea name="entryDescription"
    	class="newEntry__input newEntry__description"
    	placeholder="Story behind your Entry...">${entryObject.journalEntry}</textarea>
		
		<input type="hidden" value="${entryObject.id}" name="entryId">
		<input type="hidden" value="${entryObject.dateOfEntry}" name="dateOfEntry">	
		<button id="updateEntry__${entryObject.id}">Update</button>
		<button id="newEntry__cancel">Cancel</button>
	</div>
	`
}