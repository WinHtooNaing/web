import React from 'react';
import './begin.css';
const Begin = () => {
    return (
        <>
        <div className='begincontainer'>
            <h1>Where To Start</h1>
            <p className='p1'>To become a web developer, start with the subjects below,<br/>in the following order:</p>
            <div className="learn">
                <h4>1. Create your first web page</h4>
                <p>The  first thing you have to learn, is HTML,
                     which is the standard markup <br/>language for creating web pages.</p>
                     <div><a href="/html">Learn HTML</a></div>
            </div>
            <div className="learn">
                <h4>2. Style your web page</h4>
                <p>The next step is to learn CSS, to set the layout of your
                     web page<br/> with beautiful colors, fonts, and much more.</p>
                     <div><a href="/css">Learn CSS</a></div>
            </div>
            <div className="learn">
                <h4>3. Make your web page interactive</h4>
                <p>After studying HTML and CSS, you should learn JavaScript
                     to create<br/> dynamic and interactive web pages for your users.</p>
                     <div><a href="/javascript">Learn JAVASCRIPT</a></div>
            </div>
        </div>
        <h1 className='next'>What's Next?</h1>
        <p className='bodyp'>Now you know how to use HTML, CSS, and JavaScriptto create, style,<br/> and make interactive web pages.</p>
        <p className='bodyp'>The next step is to publish your website,so that the rest of the world<br/> can see your work.</p>
        <p className='bodyp'>There are tons of hosting services to choose from.We have made one <br/>for you, for free:</p>
        <hr style={{background : "#fff" , height : "1px" , marginTop : "10px",width : "90%" , marginLeft : "5%"}}/>
        <div className="follow">
            <p>follow us:</p>
            <div className="page">
                <a href="https://github.com/WinHtooNaing"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin-square' style={{margin: "0 10px 0 10px"}}></i></a>
                <a href="https://www.facebook.com/win.h.naing.77398/"><i className='bx bxl-facebook-square'></i></a>
            </div>
            <hr style={{background : "#fff" , height : "1px" , marginTop : "10px",width : "90%" , marginLeft : "5%"}}/>
        </div>
        <p className='footer'><i>Copyright &copy; 2022-2023 by Refsnes Data. All Rights Reserved.</i></p>
        </>
    )
}



export default Begin;