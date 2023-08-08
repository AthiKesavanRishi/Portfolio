import './Profile.css';
import React, {useState} from 'react';
import img from './me.jpg';


const Profile = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
    setshow(!show)
  }
  return(
  <div className='myself'>
    <div className='hero'>
    <h1><b>Profile</b></h1>
    <div className='beauty'>
    <img className='image' src={img} alt='me' />
    </div>
    <h2><b><i>Mr Athi Kesavan B</i></b></h2>
    <h3><b><i>Artificial Intelligence and Data Science</i></b></h3>
    <div className='year'>
            {
                show && <div className='cur_year'>
                    <p><b><i>I am studying third year</i></b></p>
                </div>
            }
               <button type='button' onClick={buttons1} className='dis_year'><b><i>Year</i></b></button>
            </div>
    <h3><b><i>Contact</i></b></h3>
    <p><b><i><u>athikesavanrishi03@gmail.com</u></i></b></p>
    <a href='https://www.linkedin.com/in/athi-kesavan-rishi-a93301237'><p><b><i>Linkedin</i></b></p></a>
    </div>
    
    
   
  </div>
  );
  }
  
  export default Profile;

  