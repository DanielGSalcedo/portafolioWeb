
    let containerRegister = document.getElementById("register");
    let containerLogin = document.getElementById("list");

    document.getElementById("add_student").addEventListener("click", function() {

    containerLogin.classList.remove("loginShow_anim");

    setTimeout(() => {
    containerLogin.classList.add("loginHide_anim");
    containerRegister.classList.remove("registerHide_anim");

    setTimeout(() => {
    containerLogin.style.display="none";

    containerRegister.style.display="flex";
    containerRegister.classList.add("registerShow_anim");
}, 200);

}, 200);

}, false);


    document.getElementById("goBack").addEventListener("click", function () {

    containerRegister.classList.remove("registerShow_anim");

    setTimeout(() => {

    containerLogin.classList.remove("loginHide_anim");
    containerRegister.classList.add("registerHide_anim");

    setTimeout(() => {
    containerRegister.style.display="none";

    containerLogin.style.display="flex";
    containerLogin.classList.add("loginShow_anim");
}, 200);

}, 200);


}, false);

