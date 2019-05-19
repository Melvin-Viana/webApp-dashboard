// My own jQuery Selector
const $ = (query)=>document.querySelector(query);

document.addEventListener('DOMContentLoaded', ()=>{
const close = $('.close');
const submit = $('.message-submit');
const recepientInput = $('#recepient');
const messsagesInput = $('.message');
const userForm = $('.user-form');

// Close alert 
close.addEventListener('click', ()=>{
    $('.alert').style.display="none";
});
//==================================================================================
const preventDef = (query)=>$(query).addEventListener('click',e=>e.preventDefault());

// Save and cancel button dont do anything
preventDef('.btn-save');
preventDef('.btn-cancel');
//MESSAGE SENT FUNC
submit.addEventListener('click', 
function(event){
    event.preventDefault();
    if($('.submit-sucess')){
        $('.submit-sucess').remove()
    }
    //Uses JS to display error messages if both or either the user or message field is empty.
if(recepientInput.value===""||messsagesInput.value===""){
alert('Please enter recipient and/or message content before sending your message! ');
}
else{
// Display message was sent
let loader = document.createElement('div');
loader.classList.add('loader');
userForm.prepend(loader);
userForm.lastElementChild.style.display="none"
setTimeout(()=>{
    userForm.lastElementChild.style="";
    userForm.firstElementChild.remove();
    let newSpan = document.createElement('span');
    newSpan.innerHTML="Message Submitted!"
    newSpan.classList+="submit-sucess";
    newSpan.style.color="#5bc0be";
    userForm.firstElementChild.prepend(newSpan);
}
,3000);

//=========================================================================


}
});
//TODO: Uses JS to display error messages if both or either the user or message field is empty.

//TODO: Displays working autocomplete search input field that lets the user search for members.

//TODO:  Displays at least two notifications at the same time when the user clicks the alerts icon (this could be a pop-up window or dropdown menu).

/* TODO: Traffic chart widget:
Includes navigation allowing user to switch between viewing an Hourly, Daily, and Weekly chart.
Traffic chart widget:
Hourly, Daily, Weekly and Monthly buttons display a different line chart on click.
 */

 //T
});