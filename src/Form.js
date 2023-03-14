import React, { useState } from "react";

function Form(){

    return (
        <form>
            <label>
                Date:
            <input type="text" name="date" />
            </label>
            <label>
                Journal Entry:
                <input type="text" name="journal" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;