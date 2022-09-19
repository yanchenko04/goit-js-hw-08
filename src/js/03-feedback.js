
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form input')
}
populateTextarea()

refs.form.addEventListener('submit', onFormSumnit)
refs.textarea.addEventListener('input', onTextareaInput)

function onTextareaInput(e){
    const message = e.target.value
    localStorage.setItem('feedback-msg', message)
    


}
function onFormSumnit(e){
    e.preventDefault()

    e.currentTarget.reset()
    localStorage.removeItem('feedback-msg')

}
function populateTextarea(){
    const savedMessage = localStorage.getItem('feedback-msg')
    if(savedMessage){
        refs.textarea.value = savedMessage
    }
}