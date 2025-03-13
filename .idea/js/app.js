document.addEventListener('DOMContentLoaded',async () => {
    // Sample student data

    const studentsList = document.getElementById('studentsList');
    const template = document.getElementById('studentCardTemplate');
    const registerBtn = document.getElementById('bnt_register');
    // Render students
    async function renderStudents() {
        const students = await api.getStudents();
        console.log(students);
        studentsList.innerHTML = '';
        students.forEach(student => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-id').textContent = `ID: ${student.code}`;
            clone.querySelector('.student-email').textContent = student.email;
            clone.querySelector('.student-photo').src = student.photo;
            const github_Button = clone.querySelector('.student-github');
            if(student.github_link){
                github_Button.href = student.github_link;
            } else{
                github_Button.style.display = 'none';
            }
            
            studentsList.appendChild(clone);
        });
    }
    
    studentsList.addEventListener('click', (event) => {
        const githubBnt = event.target.closest('#bnt_github')
        if(githubBnt) {
            window.open(githubBnt.href, '_blank');
        }
    })
    
    registerBtn.addEventListener('click',async () => {
        const name = document.getElementById('new_student_name').value;
        const code = document.getElementById('new_student_code').value;
        const email = document.getElementById('new_student_email').value;

        const github_link = document.getElementById('new_student_githubLink').value;
        const photo = document.getElementById('new_student_photo').value;
        const description = document.getElementById('new_student_description').value;

        if(!code){
            alert('Please enter a code');
            return;
        }

        if(!name){
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
        try{
            await api.createNewStudent(newStudent);
            await renderStudents();
        }catch (error) {
            console.error('Error adding student:', error);
            throw error;
        }

    });

    // Initial render
    await renderStudents();
    
    // add student
    
    
});
