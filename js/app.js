import student_card from './pages/templates/student_card.js';
import register from "./pages/register_form.js";
import overviewhtml from "./pages/overview.js";

document.querySelector('body').insertAdjacentHTML('beforeend', register);
document.querySelector('body').insertAdjacentHTML('beforeend', overviewhtml);

const containerRegister = document.getElementById('register');
document.addEventListener('DOMContentLoaded', async () => {
    // Sample student data

    const studentsList = document.getElementById('studentsList');

    const registerBtn = document.getElementById('bnt_register');

    // Render students
    async function renderStudents() {
        const students = await api.getStudents();
        const template = document.createElement('template');
        template.innerHTML = student_card;
        console.log(template);
        studentsList.innerHTML = '';
        students.forEach(student => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-id').querySelector('span').innerText = student.code;
            clone.querySelector('.student-email').textContent = student.email;
            clone.querySelector('.student-photo').src = student.photo;
            const github_Button = clone.querySelector('.student-github');
            if (student.github_link) {
                github_Button.href = student.github_link;
            } else {
                github_Button.style.display = 'none';
                const div = clone.querySelector('.card_content').querySelector('div');
                div.style.justifyContent = 'center';
                div.querySelectorAll('.button').forEach(button => {
                  button.style.minWidth= '47%';
                })             
            }
            clone.addEventListener('click',  function (e) {
                console.log('click');
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                let rect = this.getBoundingClientRect();
                let size =  Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size+'px';
                ripple.style.left = e.clientX - rect.left- size / 2+'px';
                ripple.style.top = e.clientY - rect.top - size / 2 + "px";

                this.appendChild(ripple);
                ripple.style.animation = 'rippleEffect 0.6s linear';
                setTimeout(() => ripple.remove(), 600);
            })
            
            clone.querySelector('#btn_edit').addEventListener('click', async (event) => {
                const code = event.target.closest('.studentCard').querySelector('#student-code').textContent;
                await edit_form(code);
            })
            clone.querySelector('#btn_overview').addEventListener('click', async (event) => {
                const code = event.target.closest('.studentCard').querySelector('#student-code').textContent;
                overview(code);
            })
            studentsList.appendChild(clone);
        });
    }

    studentsList.addEventListener('click', (event) => {
        const githubBnt = event.target.closest('#bnt_github')
        if (githubBnt) {
            window.open(githubBnt.href, '_blank');
        }
    })

    registerBtn.addEventListener('click', async () => {
        const name = document.getElementById('new_student_name').value;
        const code = document.getElementById('new_student_code').value;
        const inputcode = document.getElementById('new_student_code');
        const email = document.getElementById('new_student_email').value;

        const github_link = document.getElementById('new_student_githubLink').value;
        const photo = document.getElementById('new_student_photo').value;
        const description = document.getElementById('new_student_description').value;

        if (!code) {
            alert('Please enter a code');
            return;
        }

        if (!name) {
            alert('Please enter a name');
            return;
        }
        const newStudent = {
            name,
            code,
            email,
            github_link,
            photo,
            description
        }
        if (inputcode.disabled){

            try {
                await api.updateStudent(code, newStudent);
            }catch (error) {
                console.error('Error updating student:', error);
            }
        }else{
            try {
                await api.createNewStudent(newStudent);
            } catch (error) {
                console.error('Error creating student:', error);
            }
        }

        hiddenRegisterForm();
        await renderStudents();
        showHome();
    });


    // Initial render
    await renderStudents();
    
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

/*ripple animation*/
document.querySelector('#add_student').addEventListener('click', function () {
    register_form()
});
document.getElementById('goBack').addEventListener('click', () => {
    hiddenRegisterForm();
    showHome();
})

function hideHome(){
    let header = document.querySelector('header');
    let containerHome = document.getElementById('list');
    header.style.display = 'none';
    containerHome.style.display = 'none';
}
function showRegisterForm(){
    let containerRegister = document.getElementById('register');
    containerRegister.style.display = 'flex';
}
function hiddenRegisterForm(){
    let containerRegister = document.getElementById('register');
    containerRegister.style.display = 'none';
}
function showHome(){
    let header = document.querySelector('header');
    let containerHome = document.getElementById('list');
    header.style.display = 'flex';
    containerHome.style.display = 'flex';
}
function register_form(){
    hideHome()
    showRegisterForm();
    containerRegister.querySelector('h2').innerText = 'Add New Student';
    containerRegister.querySelector('#bnt_register').value = 'Register';
    containerRegister.querySelector('#new_student_name').value = '';
    containerRegister.querySelector('#new_student_email').value = '';
    containerRegister.querySelector('#new_student_githubLink').value = '';
    containerRegister.querySelector('#new_student_photo').value = '';
    containerRegister.querySelector('#new_student_code').value = '';    
}
async function edit_form(code) {
    const student = await api.getStudent(code)
    const inputCode = document.getElementById('new_student_code');
    if (code) {
        hideHome();
        showRegisterForm();
        containerRegister.querySelector('h2').innerText = 'Edit Student';
        containerRegister.querySelector('#bnt_register').value = 'Save';
        containerRegister.querySelector('#new_student_name').value = student.name;
        containerRegister.querySelector('#new_student_email').value = student.email;
        containerRegister.querySelector('#new_student_githubLink').value = student.github_link;
        containerRegister.querySelector('#new_student_photo').value = student.photo;
        inputCode.value = student.code;
        inputCode.disabled = true;
    }

}
async function overview(code) {
    hideHome();
    const pageoverview = document.querySelector('.overview')
    pageoverview.style.display = 'flex';
    let student = await api.getStudent(code);
    pageoverview.querySelector('#img_perfil_overview').src = student.photo;
    pageoverview.querySelector('h2').innerText = student.name;
    pageoverview.querySelector('#span_overview_code').innerText = student.code;
    pageoverview.querySelector('#span_overview_email').innerText = student.email;
    pageoverview.querySelector('a').href = student.github_link;
    pageoverview.querySelector('#p_description_overview').innerText = student.description;
    pageoverview.querySelector('.button').addEventListener('click', async function(){
        pageoverview.style.display = 'none';
        await edit_form(code);
    })
}
