import React from 'react';
import './home.css';
import Language from './Language';
import Navbar from './Navbar';
const Home = () => {
    return (
        <>
        <Navbar/>
        <div className='home'>
        <h1>What is Web Development?</h1>
            <p>Web development refers to the process 
                of creating and building websites and web applications. 
                It involves various tasks, including web design, front-end development, 
                back-end development, and web server configuration. Web developers use programming languages,
                 frameworks, and tools to create functional and visually 
                appealing websites that are accessible to users on the internet.</p>
               <button><a href="/programming">start to learn</a></button>
        </div>
            <div className='home1'>
                 <i className='bx bx-package package'></i>
                <h1>Full stack</h1>
                <p className='p1'>Optimal for <b>Front-End & Back-End Developers.</b>
                Develop your next powerful <b>Web Applications </b>in no time,
                all in the cloud!
                </p>
                <div className='div'>
                    <div className='div1'>
                        
                        <div className="html div3">
                        <i className='bx bxl-html5'></i>
                        <p>html</p>
                        </div>
                        <div className="css div3">
                        <i className='bx bxl-css3' ></i>
                        <p>css</p>
                        </div>
                        <div className="javascript div3">
                        <i className='bx bxl-javascript' ></i>
                        <p>javascript</p>
                        </div>
                        <div className="react div3">
                        <i className='bx bxl-react' ></i>
                        <p>react js</p>
                        </div>
                        
                    </div>
                    <div className='div2'>
                    <div className="NextJs div3">
                        <img src="https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png" alt="next" />
                        <p>NextJs</p>
                        </div>
                        <div className="node div3">
                        <i className='bx bxl-nodejs'></i>
                        <p>node js</p>
                        </div>
                        <div className="express div3">
                        <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" />
                        <p>express js</p>
                        </div>
                        <div className="PostgreSQL div3">
                        <i className='bx bxl-postgresql'></i>
                        <p>PostgreSQL </p>
                        </div>
                    </div>
                </div>
            </div>
            <Language/>
        </>
    )
}



export default Home;