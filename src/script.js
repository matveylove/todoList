const btn = document.getElementById('button-addon2');
const input = document.querySelector('.form-control');
const list = document.querySelector('.list-group');

let allNote = [];

window.addEventListener('DOMContentLoaded', function() {
    let values = []
    
    values = Object.keys(localStorage);
    values.forEach((key) => {
        allNote.push(localStorage.getItem(key))
    })

    allNote.forEach((note) => {
        list.innerHTML += 
        `
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                ${note}
            </li>
        `
    })
})

btn.addEventListener('click', addNotes);

function addNotes(event) {
    event.preventDefault();

    addNoteLocalStorage()   
    
    list.innerHTML += 
        `
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                ${input.value}
            </li>
        `

    input.value = '';
}

function addNoteLocalStorage() {
    
    allNote.push(input.value);

    allNote.map((item, index) => {
        localStorage.setItem(`${index}`, item)
    })
}
