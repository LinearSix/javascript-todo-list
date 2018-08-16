console.log("js file working");

document.addEventListener('DOMContentLoaded', function() {
// * A user can hit enter in the text input to add a new todo
// * A user can click on the "Add Todo" button to add a new todo
// * Make sure the app looks just like the following gif.  
// Use the CSS to figure out what element types, classnames, and id's you may need to use.

document.body.onload = addElements;

    // ADD THE ONLOAD ELEMENTS
    function addElements() { 
        
        // HEAD
        // update title tag
        let titleTag = document.getElementsByTagName(`title`)[0];
        titleTag.textContent = (`Todo List`)

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
        // inputField.innerHTML = `keyTest()`
        // inputField.id = `return_todo`;
        inputField.placeholder = `What do you need to do?`;

        // UL
        // create empty ul
        let ul = document.createElement(`ul`);
        ul.id = (`todo_list`);
        // let pSpacer = document.createElement(`p`);
        // divSpacer.appendChild(pSpacer);

        // SUBMIT BUTTON
        // create new button
        let button = document.createElement(`button`);
        let buttonContent = document.createTextNode(`Add Todo`); 
        // add the button id and text
        button.id = `add_todo`;
        button.appendChild(buttonContent);

        // add the newly created element and its content into the DOM 
        getBody = document.getElementById(`body`); 
        document.body.insertBefore(divTitle, getBody);
        document.body.insertBefore(inputField, getBody);
        document.body.insertBefore(ul, getBody);
        document.body.insertBefore(button, getBody);

    // CHANGE ELEMENTS

        // CREATE THE INPUT FIELDS ACTION
        let strTodo = ``;
        let newLiId = 1;
        let liText;
        let newLi;
        let liSpan;

        inputField.addEventListener('keydown', addTodo);
        button.addEventListener('click', addTodo);

        function addTodo(x) {
            if (x.key === `Enter` && (strTodo!==``) || x.type === 'click' && (strTodo!==``)) {
                // create X span to go in new li
                const newLi = document.createElement(`li`);
                ul.appendChild(newLi);
                newLi.textContent = `${strTodo}    `;
                newLi.id = `li${newLiId}`;

                // DELETE BUTTON
                const xSpan = document.createElement(`span`);
                xSpan.textContent = `X`;
                xSpan.style.float = `right`;
                newLi.appendChild(xSpan);

                xSpan.addEventListener(`click`, (ev) => {
                    ul.removeChild(newLi);
                });

                // EDIT BUTTON
                const eSpan = document.createElement(`span`);
                eSpan.textContent = `EDIT`;
                eSpan.style.width = `50px`;
                eSpan.style.float = `right`;
                newLi.appendChild(eSpan);

                eSpan.addEventListener(`click`, (ev) => {
                let eInput = document.createElement('input');
                eInput.style.width = `120px`;
                eInput.style.height = `12px`;
                eInput.style.float = `auto`;
                newLi.appendChild(eInput);
                eInput.id = `input${newLiId}`;
                    
                });

                strTodo = ``;
                inputField.value = (``);
                inputField.placeholder = `What do you need to do?`;
                // newLiId ++;

            } else {
                strTodo += x.key;
                strTodo = strTodo.replace(/[^a-z0-9]/gi,'');
                console.log(`strTodo: ${strTodo}`);

                // HIT ENTER IN EDIT FIELD
                // eFinish = document.getElementById(`input${newLiId}`);
                // eFinish.addEventListener(`keydown`, addTodo);
            };
        }
    };



    // // CREATE THE X ACTIONS
    // const delLi = document.getElementById()
    // liSpan.addEventListener(`click`, (y) => {
    //     console.log(y);
    //     // document.getElementById()
    //     // ul.removeChild(newLi)
    // });

});