let register_form;
export default register_form = `<div class="registerContainer" id="register">

    <div class="register">

        <h2>Add New Student</h2>
        <form id="form_register" action="#" class="registerForm">
            <div class="div_register_input">
                <div class="div_left">
                    <label for="new_student_name">Full name*</label>
                    <input id="new_student_name" type="text" placeholder="Jesus Perez">
                    <label for="new_student_code">Student Code (ID)*</label>
                    <input id="new_student_code" type="text" placeholder="1234">
                    <label for="new_student_email">Email</label>
                    <input id="new_student_email" type="email" placeholder="jesusperez@gmail.com">
                </div>
                <div class="div_right">
                    <label for="new_student_githubLink">GitHub Link</label>
                    <input id="new_student_githubLink" type="text" placeholder="https://github.com/jesusperez">
                    <label for="new_student_photo">Photo URL</label>
                    <input id="new_student_photo" type="text" placeholder="https://photo.com/jesusperez.jpg">

                </div>
            </div>
            <div class="div_button_register">
                <label for="new_student_description"> Description</label>
                <textarea id="new_student_description" class="textarea_description" name="text_area" cols="30" rows="10"
                          placeholder="Description"></textarea>
                <input id="bnt_register" class="button_login" type="button" value="Register">
            </div>

        </form>
        <button class="goBackBtn" id="goBack">Go back</button>
    </div>
</div>`;