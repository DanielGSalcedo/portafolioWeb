document.addEventListener('DOMContentLoaded', async () => {
    // Sample student data

    const studentsList = document.getElementById('studentsList');
    const template = document.getElementById('studentCardTemplate');
    const registerBtn = document.getElementById('bnt_register');
    const containerRegister = document.getElementById('register');
    const containerHome = document.getElementById('list');

    // Render students
    async function renderStudents() {
        const students = await api.getStudents();
        console.log(students);
        studentsList.innerHTML = '';
        students.forEach(student => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-id').querySelector('span').innerText = student.code;
            clone.querySelector('.student-email').textContent = student.email;
            clone.querySelector('.student-photo').src = student.photo;
            clone.querySelector('.student-description').textContent = student.description
            const github_Button = clone.querySelector('.student-github');
            if (student.github_link) {
                github_Button.href = student.github_link;
            } else {
                github_Button.style.display = 'none';
            }

            studentsList.appendChild(clone);
        });
    }

    studentsList.addEventListener('click', (event) => {
        const githubBnt = event.target.closest('#bnt_github')
        if (githubBnt) {
            window.open(githubBnt.href, '_blank');
        }
    })
    studentsList.addEventListener('click', async (event) => {
        const editBnt = event.target.closest('#btn_edit')
        const code = event.target.closest('.studentCard').querySelector('span').textContent;
        const student = await api.getStudent(code)
        const inputCode = document.getElementById('new_student_code');
        if (editBnt) {
            containerHome.style.display = 'none';
            containerRegister.style.display = 'flex';
            containerRegister.querySelector('h2').innerText = 'Edit Student';
            containerRegister.querySelector('#bnt_register').value = 'Save';
            containerRegister.querySelector('#new_student_name').value = student.name ;
            containerRegister.querySelector('#new_student_email').value = student.email;
            containerRegister.querySelector('#new_student_githubLink').value= student.github_link;
            containerRegister.querySelector('#new_student_photo').value = student.photo;
            containerRegister.querySelector('#new_student_description').value = student.description;
            inputCode.placeholder= student.code;
            inputCode.disabled = true;
        }
    })

    registerBtn.addEventListener('click', async () => {
        const name = document.getElementById('new_student_name').value;
        const code = document.getElementById('new_student_code').value;
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
        console.log(newStudent);
        try {
            await api.createNewStudent(newStudent);
            await renderStudents();
        } catch (error) {
            console.error('Error adding student:', error);
            throw error;
        }

    });


    // Initial render
    await renderStudents();
});
