import React from 'react';
import './programming.css';
const Programming = () => {
    return (
        <>
        <div className='navcontainer'>
            <ul className='ulcontainer'>
                <li>
                    <a href="/html">HTML</a>
                </li>
                <li>
                    <a href="/css">CSS</a>
                </li>
                <li>
                    <a href="/javascript">JAVASCRIPT</a>
                </li>
                <li>
                    <a href="/react">REACT</a>
                </li>
                <li>
                    <a href="/nextjs">NEXT JS</a>
                </li>
                <li>
                    <a href="/nodejs">NODE JS</a>
                </li>
                <li>
                    <a href="/expressjs">EXPRESS JS</a>
                </li>
                <li>
                    <a href="/postgresql">PostgreSQL</a>
                </li>
            </ul>
        </div>
        <div className='bodycontainer'>
            <h1>Start to Learn</h1>
            <p>With our school web developer site.</p>
            <a href="/begin">Not sure Where to begin?</a>
        </div>
        <div className="htmlcssdiv">
            <div className="htmldiv">
                <h1>HTML</h1>
                <p>The language for building web pages</p>
                <div><a href="/html">Learn HTML</a></div>
                
            </div>
            <div className="cssdiv">
                <h1>CSS</h1>
                <p>The language for styling web pages</p>
                <div><a href="/css">Learn CSS</a></div>
                
            </div>
        </div>
        <div className="htmlcssdiv">
            <div className="htmldiv" style={{background : "#B8860B"}}>
                <h1>JAVASCRIPT</h1>
                <p>The language for programming web pages</p>
                
                <div><a href="/javascript" >Learn JAVASCRIPT</a></div>
            </div>
            <div className="cssdiv" style={{background : "#00FFFF"}}>
                <h1>REACT JS</h1>
                <p>A JavaScript library for building user interfaces</p>
                <div><a href="/react">Learn REACT</a></div>
                
            </div>
        </div>
        <div className="htmlcssdiv">
            <div className="htmldiv" style={{background : "#A9A9A9"}}>
                <h1>NEXT JS</h1>
                <p>An open-source web development framework</p>
                <div><a href="/nextjs">Learn NEXTJS</a></div>
                
            </div>
            <div className="cssdiv" style={{background : "#32CD32"}}>
                <h1>NODE JS</h1>
                <p>An open source server environmen</p>
                <div> <a href="/nodejs">Learn NODEJS</a></div>
               
            </div>
        </div>
        <div className="htmlcssdiv">
            <div className="htmldiv" style={{background : "#696969"}}>
                <h1>EXPRESS JS</h1>
                <p>a backend web application framework </p>
                <div><a href="/expressjs">Learn EXPRESS</a></div>
                
            </div>
            <div className="cssdiv" style={{background : "#1E90FF"}}>
                <h1>PostgreSQL</h1>
                <p>An advanced relational database system</p>
                <div><a href="/postgresql">Learn PostgreSQL</a></div>
                
            </div>
        </div>
        <div className="follow">
            <p>follow us:</p>
            <div className="page">
                <a href="https://github.com/WinHtooNaing"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin-square' style={{margin: "0 10px 0 10px"}}></i></a>
                <a href="https://www.facebook.com/win.h.naing.77398/"><i className='bx bxl-facebook-square'></i></a>
            </div>
            <hr style={{background : "#fff" , height : "1px" , marginTop : "10px",width : "90%" , marginLeft : "5%"}}/>
        </div>
        <p className='footer'> <i>Copyright &copy; 2022-2023 by Refsnes Data. All Rights Reserved.</i></p>
        </>
    )
}



export default Programming;