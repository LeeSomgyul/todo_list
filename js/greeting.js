const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetings = document.querySelector(".login-greeting");

const CLASS_HIDDEN = "hidden";
const USERNAME = "username";

function submitName (submit){
    submit.preventDefault();
    loginForm.classList.add(CLASS_HIDDEN);
    const saveName = loginInput.value;
    localStorage.setItem(USERNAME,saveName);
    paintGreetings(saveName);
}

function paintGreetings(savename){
    greetings.innerText = `${savename}의 다이어리`;
    greetings.classList.remove(CLASS_HIDDEN);
}

const saveBox = localStorage.getItem(USERNAME);

if(saveBox === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",submitName);
}else{
    paintGreetings(saveBox);
}
