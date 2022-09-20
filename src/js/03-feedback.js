import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state'
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form input')
}

let formData = {}

populateTextarea()

refs.form.addEventListener('submit', onFormSumnit)
refs.form.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(e){
    e.preventDefault();

    input: document.querySelector('.feedback-form input')
     const emailInput = refs.input.value;
     const messageInput = refs.textarea.value;

    formData = { email: emailInput, message: messageInput }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    


}
function onFormSumnit(e){
    e.preventDefault()
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData)

}
function populateTextarea(){
        const savedDataMessage = localStorage.getItem(STORAGE_KEY);
        const parseDataMessage = JSON.parse(savedDataMessage);
    
        if (savedDataMessage) {
            (refs.textarea.value = parseDataMessage.message || "");
            (refs.input.value = parseDataMessage.email || "");
        
            
        }
    
}