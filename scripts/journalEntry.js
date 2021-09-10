export const journalEntry = () => {
    return `        
    <div class="new_entry">
    <section>


<div class="new_concepts">
<section>
    <form>
        <fieldset>
            <label for="coveredConcepts">Concepts Covered</label>
            <input type="text" name="coveredConcepts" id="coveredConcepts">
        </fieldset>
    </form>
</section>
</section>
</div>


<div class="new_entry">
<section>
    <form>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea type="text" name="journalEntry" id="journalEntry"></textarea>
        </fieldset>
    </form>
</section>
</div>


<div class="new_class">
<section>
    <form>
        <fieldset>
            <label for="mood">Mood of the Day</label>
            <select class="mood_type" name="moodDrop">
                <option class="mood_type" id="1" value ="1">Sad</option>
                <option class="mood_type" id="2" value="2">Happy</option>
                <option class="mood_type" id="3" value="3">Stressed</option>
                <option class="mood_type" id="4" value="4">Accomplished</option>
                <option class="mood_type" id="5" value="5">Meh</option>
            </select>
        </fieldset>
    </form>
</section>
</div>


<div class="newEntry_submit">
<section>
    <form>
        <fieldset>
            <label for="submitBtn">Lock in your feelings</label>
            <input type="submit" name="submitBtn" id="submitBtn">
        </fieldset>
    </form>
</section>
</div>

</div>`
}