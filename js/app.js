// My own jQuery Selector
const $ = (query) => document.querySelector(query);
// DOMContent load
document.addEventListener('DOMContentLoaded', () => {
    const close = $('.close');
    const submit = $('.message-submit');
    const recepientInput = $('#recepient');
    const messsagesInput = $('.message');
    const userForm = $('.user-form');
    const submitContainer = $('.submit-container');
    const sideBar = $('#sidebar');
    // Close alert
    close.addEventListener('click', () => {
        $('.alert').style.display = "none";
    });
    //==================================================================================
    const preventDef = (query) => $(query).addEventListener('click', e => e.preventDefault());
    // Save and cancel button dont do anything
    preventDef('.btn-save');
    preventDef('.btn-cancel');
    //=========================================================================
    //* MESSAGE SENT FUNC
    submit.addEventListener('click',
        function (event) {
            event.preventDefault();
            if ($('.submit-sucess')) {
                $('.submit-sucess').remove()
            }
            //Uses JS to display error messages if both or either the user or message field is empty.
            if (recepientInput.value === "" || messsagesInput.value === "") {
                alert('Please enter recipient and/or message content before sending your message! ');
            } else {
                // Display loading 
                let loader = document.createElement('div');
                loader.classList.add('loader');
                submitContainer.prepend(loader);
                // Hide button
                submit.style.display = "none";
                // Display message and button after 3s
                setTimeout(() => {
                    //Remove loader
                    submitContainer.firstElementChild.remove();
                    // Display to user message has been submitted
                    let newSpan = document.createElement('span');
                    newSpan.innerHTML = "Message Submitted!"
                    newSpan.classList += "submit-sucess";
                    newSpan.style.color = "#5bc0be";
                    userForm.firstElementChild.prepend(newSpan);
                    submit.style.display = "";
                }, 3000);
            }
        });
    //================================================================================================
    // * Local storage is used to save the settings. When page is reloaded the settings are remembered.
    // Checks if browser supports localStorage
    const supportsLocalStorage = () => {
        try {
            return 'localStorage' in window && window['localStorage'] !== null
        } catch (e) {
            return false;
        }
    }
    if (supportsLocalStorage()) {
        const checkboxes = document.querySelectorAll('.onoffswitch input');
        const selectTimezone = $('.timezone-setting');
        // Checkboxes settings saved
        checkboxes.forEach(e => {
            if (localStorage.getItem(`${e.id}`) === "true") {
                e.setAttribute('checked', true);
            } else if (localStorage.getItem(`${e.id}`) === "false" && localStorage.getItem(`${e.id}`) !== null) {
                e.removeAttribute('checked');
            }
            e.addEventListener('click', () => {
                if (e.hasAttribute('checked')) {
                    e.removeAttribute('checked')
                } else {
                    e.setAttribute('checked', true)
                }
                localStorage.setItem(e.id, e.hasAttribute('checked'));
            });
            // When user clicks an option or arrows down and presses enter, save setting
            // Timezone-setting saved
            selectTimezone.addEventListener('change', () => {
                localStorage.setItem('timezone', selectTimezone.selectedIndex);
            });
            if (localStorage.getItem('timezone') !== null) {
                selectTimezone.selectedIndex = localStorage.getItem('timezone');
            }else if(localStorage.getItem('timezone') === null){
                selectTimezone.selectedIndex=0;
            }
        })
    }
    // ========================================================================
    //** Displays at least two notifications at the same time when the user clicks the alerts icon (this could be a pop-up window or dropdown menu).
    function myFunction() {
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    $('.popup').addEventListener('click', myFunction);
    document.querySelector('body').addEventListener("click", function (e) {
        let popup = document.querySelector('.popuptext');
        if (popup.classList.contains('show') && e.target.classList.contains('bell') === false) {
            popup.classList.remove('show');
        }
    });
    if(window.innerWidth>512){
    if(window.pageYOffset<149){sideBar.style.position="static"}
    if(window.pageYOffset>149){sideBar.style.position="fixed"}
    }else{
        if(window.pageYOffset<75){sideBar.style.position="static"}
        if(window.pageYOffset>75){sideBar.style.position="fixed"}

    }
    window.onscroll=function(){
        if(window.innerWidth<512){
            if(window.pageYOffset<149){sideBar.style.position="static"}
            if(window.pageYOffset>149){sideBar.style.position="fixed"}
            } 
        if(window.innerWidth>=512){
                if(window.pageYOffset<75){sideBar.style.position="static"}
                if(window.pageYOffset>75){sideBar.style.position="fixed"}
            }  
    }
});