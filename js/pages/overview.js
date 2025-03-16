let overview_page;
export default overview_page = `
<div class="overview">
    <div class="div_profile" > 
        <div class="div_profile_top">
            <h3> Student Information</h3>
             <img  src="https://avatars.githubusercontent.com/u/1791598?v=4" alt="" class="img_profile_overview">
             <h2>Lorem ipsum dolor sit.</h2>
             <p>ID:<span>1234</span></p>
        </div>
        <div class="div_profile_bottom">
             <p><span class="material-symbols-outlined">mail</span>Email: <span>youremail@gmail.com</span></p>
             <p><img class="button_img" src="sources/logoGithub.png" alt=""><span>github:</span> <a href="https://github.com/claudiagomezll">Profile</a></p>
             <h5>About</h5>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
             <button class="button"><span class="material-symbols-outlined">edit</span>Edit Profile</button>
        </div>
    </div>
    <div class="div_technologies"> 
        <h2>Technologies</h2>
        <div class="div_technologies_top">
             <p>Skills and technologies this student has mastered</p>
            <button class="button"><span class="material-symbols-outlined">add</span> Add Technology</button>
        </div>
        <div class="div_technologies_bottom">
               <div class="table_technologies_container">
                    <div class="table_technologies">
                        <div class="header_technologies">Java</div>
                        <div class="header_technologies">Angular</div>
                        <div class="header_technologies">PHP</div>
                        <div class="header_technologies">React JS</div>
                        <div class="header_technologies_end">Python</div>
                        <div class="cell_technologies">0</div>
                        <div class="cell_technologies">0</div>
                        <div class="cell_technologies">0</div>
                        <div class="cell_technologies">0</div>
                        <div class="cell_technologies_end">0</div>
                    </div>
               </div>
        </div>
    </div>  
</div>`;