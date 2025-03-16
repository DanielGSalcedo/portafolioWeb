let overview_page;
export default overview_page = `
<div class="overview">
    <div class="div_profile" >
            <h3> Student Information</h3>
    <div class="div_profile_basic_info">
        <div class="div_profile_top">
             <img id="img_perfil_overview" src="https://avatars.githubusercontent.com/u/1791598?v=4" alt="" class="img_profile_overview">
             </div>
             
             <div class="div_profile_bottom">
             <h2>Lorem ipsum dolor sit.</h2>
             <p>ID:<span id="span_overview_code">1234</span></p>
             <p><span class="material-symbols-outlined">mail</span>Email: <span id="span_overview_email">youremail@gmail.com</span></p>
             <p><img class="button_img" src="sources/logoGithub.png" alt=""><span>github:</span> <a href="" target="_blank">Profile <span class="material-symbols-outlined">open_in_new</span></a> </p>
             <button class="button"><span class="material-symbols-outlined">edit</span>Edit Profile</button>
        </div>
        </div> 
        <div class="div_profile_bottom">
              <h5>About</h5>
             <p id="p_description_overview"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
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
                        <div class="header_technologies">technologies</div>
                        <div class="header_technologies">level</div>
                        
                        <div class="cell_technologies">Java</div>
                        <div class="cell_technologies">0</div>
                        
                        <div class="cell_technologies">Angular</div>
                        <div class="cell_technologies">0</div>
                        
                        <div class="cell_technologies">PHP</div>
                        <div class="cell_technologies">0</div>
                        
                        <div class="cell_technologies">React JS</div>
                        <div class="cell_technologies">0</div>
                        
                        <div class="cell_technologies">Python</div>
                        <div class="cell_technologies">0</div>
                       
                    </div>
               </div>
        </div>
    </div>  
</div>`;