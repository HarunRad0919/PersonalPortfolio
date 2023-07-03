import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faHouse, faSchool, faFile} from '@fortawesome/free-solid-svg-icons';
import Profile from './images/Profile.jpg';
import Resume from './Resume/PersonalResume.pdf';
import CCLogo from './images/c++logo.png';
import CLogo from './images/clogo.png';
import CSSLogo from './images/csslogo.png';
import HtmlLogo from './images/htmllogo.png';
import JavaLogo from './images/javalogo.png';
import JSLogo from './images/jslogo.png';
import PythonLogo from './images/pythonlogo.png';
import { useRef } from 'react';

function App() {
  const downloadFile = (url) =>{
    const fileName = url.split("/").pop();
    const aTag =document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  function scroll(element) {
    console.log(element);
  }

  const targetHome = useRef<HTMLDivElement>(null);
  const targetBio = useRef<HTMLDivElement>(null);
  const targetProjects = useRef<HTMLDivElement>(null);
  const targetResume = useRef<HTMLDivElement>(null);

  return (
    <html>
      <body>
        <div className="Background">
        <div className='menu'>
            <ul onClick={() => console.log("test")}>
              <li><a onClick={() => targetHome.current?.scrollIntoView()}><FontAwesomeIcon icon = {faHouse}></FontAwesomeIcon></a></li>
              <li><a onClick={() => targetBio.current?.scrollIntoView()}><FontAwesomeIcon icon = {faUser}></FontAwesomeIcon></a></li>
              <li><a onClick={() => targetProjects.current?.scrollIntoView()}><FontAwesomeIcon icon = {faSchool}></FontAwesomeIcon></a></li>
              <li><a onClick={() => targetResume.current?.scrollIntoView()} ><FontAwesomeIcon icon = {faFile}></FontAwesomeIcon></a></li>
            </ul>
          </div>
          <div className = 'container'>
            <section className = 'Homepage' useRef = {targetHome}>
              <h1>
                Welcome to my page! 
              </h1>
              <div class = "arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>

            <section className = 'Bio' useRef={targetBio}>
              <div>
                <img src={Profile} alt="" className='profileImg'/>
              </div>
              <h1>
                My name is Harun Radoncic and I am a first generation Bosnian-American senior at the University of Missouri - Kansas City and am majoring in Computer Science. 
                My main interests in the field is AI, Software Development and as of recent Web Development.
                Some goals of mine are to one day create a piece of software that allow to express my own creative ideas and allow me to support my friends and family with my own ideas.
              </h1>
            </section>

            <section className = 'Projects' useRef={targetProjects}>
              <div className='dur'>
                <h1>
                  Educational Background
                </h1>
                <h2>
                  Languages known:
                </h2>
              </div>
              <div className='dur'>
                <img src={CCLogo} alt="" className='CCLogo'/>
                <img src={CLogo} alt="" className='CLogo'/>
                <img src={CSSLogo} alt="" className='CSSLogo'/>
                <img src={HtmlLogo} alt="" className='HtmlLogo'/>
                <img src={JavaLogo} alt="" className='JavaLogo'/>
                <img src={JSLogo} alt="" className='JSLogo'/>
                <img src={PythonLogo} alt="" className='PythonLogo'/>
                </div>
              <div className='dur'>
                <h3>
                  Courses taken:
                </h3>
              </div>
              <div className='dur'>
                <h4>
                Some of the courses I have taken throughout my academic career are AI, computer networking, operating systems, programming language design, database management and many more!<br></br><br></br>
               Some courses that I am interested in dipping my toes into when I finish my bachelors here at UMKC are web development, software development, vr implementation and game development. 
                </h4>   
              </div>
            </section>

            <section className = 'Resume' useRef={targetResume}>
              <div className='download' onClick={()=>downloadFile(Resume)}>
                <a href = "#">Download</a>
              </div>
              <h1>
                <iframe src = {Resume}></iframe>
              </h1>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
