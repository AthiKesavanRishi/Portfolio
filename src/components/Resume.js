import './Resume.css';
import imag from 'A:/React Project/portfolio/src/components/aids.jpg';


const Resume=()=>{
return(
<div className='big'>
        <h1><b><i>Resume</i></b></h1>
        <div className='hell'>
            <h2><b><i>About Me</i></b></h2>
        </div>
        <img className='imags' src ={imag} alt="ai" />
        
        <div className='bye'>
        <p><b><i>Hey Everyone! This is Athi Kesavan an aspiring Artificial Intelligence and Data Science student at Kumaraguru College 
            of Technology. <br /> I am particularly interested to work as a Data Scientist, Data Analyst and ML Engineer.<br /> My passion towards Technology and Data Science
            could strengthen up my skills and improve my career oppourtunities.</i></b></p>
        </div>

        <div className='three'>
            <div className='sea'>
            <h3><b><u>Education<i></i></u></b></h3>
            <li><b><i>Schooling at Christ The King</i></b></li>
            <li><b><i>Pursuing Artificial Intelligence and Data Science at KCT</i></b></li>
            </div>

            <div className='ocean'>
            <h3><b><u>Skills<i></i></u></b></h3>
            <li><b><i>Python</i></b></li>
            <li><b><i>HTML</i></b></li>
            <li><b><i>CSS</i></b></li>
            <li><b><i>ReactJS</i></b></li>
            <li><b><i>ML & DS</i></b></li>

            </div>

            <div className='lake'>
            <h3><b><u>Hobbies<i></i></u></b></h3>
            <li><b><i>Cricket</i></b></li>
            <li><b><i>Music</i></b></li>
            <li><b><i>NSS volunteer</i></b></li>
            </div>
        </div>
        



</div>
    );
}
export default Resume;