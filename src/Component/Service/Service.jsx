import React from 'react'
import './Service.css'
function Service() {
  return (

    
    <section className='service-page' id='service'>
        <h1 className='title'><span className="material-symbols-outlined ">design_services</span>Services</h1>
        <div className='content'>
          <p>I am focusing on <b> MERN Stack Web development </b>. On my learning path, I acquired skills in <b> HTML, CSS/SCSS, JavaScript, ReactJS, NodeJs,and Git </b>. Following these basic subjects, I made a good understanding of other dependent frameworks and libraries
             like <b> Axios, Handlebars, JQuery, Bootstrap, Rest API</b> and also database knowledge in <b> MongoDB & Firebase</b>.</p>
        </div>
        <div   className='service-images'>
         <div className="static" style={{textAlign:'center'}}>
           <a href="mailto:@gmail.com?subject=Need a Static website&body=Hello Bifin"> 
                <img src={require('./static-website.png')} alt="" />
                <h2 className='caption'>Web Applications</h2>
                </a>
          </div>
         <div className="webapp" style={{textAlign:'center'}}>
         <a href="mailto:bifinbau088@gmail.com?subject=Need a Web Application&body=Hello Bifin">
              <img src={require('./webapp.png')} alt="" />
              <h2 className='caption'>React Applications</h2>
              </a>
          </div>

        </div>
    </section>
  )
}

export default Service