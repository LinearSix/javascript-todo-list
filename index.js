console.log("js file working");

document.addEventListener('DOMContentLoaded', function() {
// * A user can hit enter in the text input to add a new todo
// * A user can click on the "Add Todo" button to add a new todo
// * Make sure the app looks just like the following gif.  
// Use the CSS to figure out what element types, classnames, and id's you may need to use.

document.body.onload = addElements;

    function addElements() { 
        
        // TITLE
        // create a new div and h1 elements 
        let divTitle = document.createElement(`div`); 
        let h1Title = document.createElement(`h1`);
        // create title content 
        let titleContent = document.createTextNode(`Todo App`); 
        // add the text node to the newly created h1
        h1Title.appendChild(titleContent);
        // add the h1 node to the newly created div
        divTitle.appendChild(h1Title);

        // INPUT FIELD
        // create new input field
        let inputField = document.createElement(`input`);
        // add the type to inputField
        inputField.type = `text`;

        // SPACER DIV
        // create empty div
        let divSpacer = document.createElement(`div`);
        let pSpacer = document.createElement(`p`);
        divSpacer.appendChild(pSpacer);

        // SUBMIT BUTTON
        // create new button
        let button = document.createElement(`div`);
        let buttonContent = document.createTextNode(`Add Todo`); 
        // add the button id and text
        button.id = `add_todo`;
        button.style.width = `75px`;
        button.style.textAlign = `center`;
        button.appendChild(buttonContent);

        // add the newly created element and its content into the DOM 
        getBody = document.getElementById(`body`); 
        document.body.insertBefore(divTitle, getBody);
        document.body.insertBefore(inputField, getBody);
        document.body.insertBefore(divSpacer, getBody);
        document.body.insertBefore(button, getBody);
    }




});