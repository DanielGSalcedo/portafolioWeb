document.addEventListener('DOMContentLoaded',async () => {
    // Sample student data

    const studentsList = document.getElementById('studentsList');
    const template = document.getElementById('studentCardTemplate');

    // Render students
    async function renderStudents() {
        const students = await api.getStudents();
        studentsList.innerHTML = '';
        students.forEach(student => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-id').textContent = `ID: ${student.code}`;
            clone.querySelector('.student-email').textContent = student.email;
            clone.querySelector('.student-photo').src = student.photo;
            clone.querySelector('.github-link').href = `https://github.com/${student.github}`;
            
            studentsList.appendChild(clone);
        });
    }

    // Initial render
    await renderStudents();

});
