console.log("js file working");

document.addEventListener('DOMContentLoaded', function() {
// * A user can hit enter in the text input to add a new todo
// * A user can click on the "Add Todo" button to add a new todo
// * Make sure the app looks just like the following gif.  
// Use the CSS to figure out what element types, classnames, and id's you may need to use.

document.body.onload = addElements;

    // ADD THE ONLOAD ELEMENTS
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
        inputField.id = `return_todo`;
        inputField.placeholder = `What do you need to do?`;

        // UL
        // create empty ul
        let ul = document.createElement(`ul`);
        ul.id = (`todo_list`);
        // let pSpacer = document.createElement(`p`);
        // divSpacer.appendChild(pSpacer);

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
        document.body.insertBefore(ul, getBody);
        document.body.insertBefore(button, getBody);

        // CREATE THE INPUT FIELS ACTIONS
        const inputReturn = document.getElementById(`return_todo`);
        // console.log(inputReturn);

        inputReturn.addEventListener('keydown', (x) => {
            //console.log(`returned ${x.key}!`);
            let strTodo = ``
            let newLi;
            let liContent;
            let liNum = 1;
            // let todoContent = document.createTextNode(``)
            if (x.key === 'Enter') {
                inputField.placeholder = `What do you need to do?`;
                console.log(`returned ${x.returnValue}!`);
                console.log(`returned ${x.key}!`);
                console.log(`strTodo: ${strTodo}`);
                // create new li and add it to ul
                newLi = document.createElement(`li`);
                newLi.id = liNum;
                ul.appendChild(newLi);

                newLi = document.getElementById('todo_list');
                newLi.innerHTML += `<li>${strTodo}</li>`;

                // liMarker = document.getElementById(liNum);
                // liMarker. = strTodo;
                // // add the text node to the newly created li
                // newLi.appendChild(liMarker);
                // // add the li node to the existing ul
                // // strTodo = ``
            } else {
                strTodo = strTodo + x.key;
                console.log(`strTodo: ${strTodo}`);
            };
        });

        // CREATE THE BUTTON ACTIONS
        const buttonClick = document.getElementById(`add_todo`);
        console.log(buttonClick);

        buttonClick.addEventListener('click', () => {
            console.log(`click`);
        });
    };

});