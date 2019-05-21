// My own jQuery Selector
const $ = (query)=>document.querySelector(query);

document.addEventListener('DOMContentLoaded', ()=>{
const close = $('.close');
const submit = $('.message-submit');
const recepientInput = $('#recepient');
const messsagesInput = $('.message');
const userForm = $('.user-form');
const submitContainer = $('.submit-container')
// Close alert 
close.addEventListener('click', ()=>{
    $('.alert').style.display="none";
});
//==================================================================================
const preventDef = (query)=>$(query).addEventListener('click',e=>e.preventDefault());

// Save and cancel button dont do anything
preventDef('.btn-save');
preventDef('.btn-cancel');
//=========================================================================
//* MESSAGE SENT FUNC
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
            // Display loading 
            let loader = document.createElement('div');
            loader.classList.add('loader');
            submitContainer.prepend(loader);
            // Hide button
            submit.style.display="none";
            // Display message and button after 3s
            setTimeout(()=>{
                //Remove loader
                submitContainer.firstElementChild.remove();
                // Display to user message has been submitted
                let newSpan = document.createElement('span');
                newSpan.innerHTML="Message Submitted!"
                newSpan.classList+="submit-sucess";
                newSpan.style.color="#5bc0be";
                userForm.firstElementChild.prepend(newSpan);
                submit.style.display="";

            },3000);
            }
});

//=========================================================================
//TODO: Displays working autocomplete search input field that lets the user search for members.

// Implement with static data.
const arrNames = ['Alex',"Bob","Cathy","Doug","Ernie","Frank","Greg","Harry","Ike","Jack","Kathy","Lee","Moe","Ned","Oliver","Pat","Quinn","Rob","Sam","Ted","Urkel","Ven","Will","Xavier","Yasmin","Zion"]

// Keypress event for textbox
    // When user types display first 5 names that are relevant
        // Display first 5 relevant text in textbox

// ========================================================================
//TODO:  Displays at least two notifications at the same time when the user clicks the alerts icon (this could be a pop-up window or dropdown menu).



// * Local storage is used to save the settings. When page is reloaded the settings are remembered.

// Checks if browser supports localStorage
const supportsLocalStorage =()=> {
    try{
     return 'localStorage' in window && window['localStorage'] !== null
    } catch(e){
      return false;
    }
   }

   if(supportsLocalStorage()){
    const checkboxes = document.querySelectorAll('.onoffswitch input');
    const selectTimezone = $('.timezone-setting');
    // Checkboxes settings saved
    checkboxes.forEach(e=>{
        if(localStorage.getItem(`${e.id}`)==="true"){
            e.setAttribute('checked', true);
        }else if(localStorage.getItem(`${e.id}`)==="false"&&localStorage.getItem(`${e.id}`)!==null){
            e.removeAttribute('checked');
        }
        e.addEventListener('click',()=>{
            if(e.hasAttribute('checked')){
                e.removeAttribute('checked')
            }else{
                e.setAttribute('checked', true)
            }
            localStorage.setItem(e.id, e.hasAttribute('checked'));
        });

        // When user clicks an option or arrows down and presses enter, save setting
        // Timezone-setting saved
        selectTimezone.addEventListener('change',()=>{
            localStorage.setItem('timezone',selectTimezone.selectedIndex);
        });
        if(localStorage.getItem('timezone')!==null){
            selectTimezone.selectedIndex = localStorage.getItem('timezone');
        }
    })
   }

});


