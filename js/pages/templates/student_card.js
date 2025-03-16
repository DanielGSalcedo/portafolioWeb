let student_card;
export default student_card =`<div class="studentCard">
        <div class="div_card_buttons_top">
            <button class="button">
                <span class="material-symbols-outlined">more_horiz</span>
            </button>
            <button class="button">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <figure class="div_card">
            <img class="profileImg student-photo" src="" alt="foto del estudiante">
        </figure>

        <div class="card_content">
            <p class="nombre student-name">Estudiante</p>
            <p class="codigo student-id">ID: <span id="student-code" >123</span></p>
            <p class="correo student-email"> estudiante@gmail.com</p>
            <div>
                <button id="btn_edit" class="button ">
                    <span class="material-symbols-outlined">edit_square</span> <label> Edit</label>
                </button>
                <button id="btn_overview" class="button ">
                    <span class="material-symbols-outlined">import_contacts</span><label>  Overview</label>
                </button>
                <button class="student-github ">
                    <img class="button_img" alt="" src="sources/logoGithub.png">
                </button>
            </div>
        </div>
    </div>`;

