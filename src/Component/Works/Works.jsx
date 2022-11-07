import React from 'react'
import './Works.css'
function Works() {
  return (
    <section className='work-page' id='work'>
      <h1 className='title'><span className="material-symbols-outlined ">home_repair_service</span>My Projects</h1>
      <div className='content'>
        {/* <p>Following are some of my  works : </p> */}
      </div>
      <div className='works-display' >
        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./ScHelmetcart.jpg')} alt="" />
          <a className="link-icon" href="https://www.bifinprojectcart.com/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span><b>E-Commerce Website (Helmet Cart)</b></span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>Handlebars, Bootstrap</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>Express.JS</b> </p>
        </div>

        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./mybrarysc.jpg')} alt="" />
          <a className="link-icon" href="https://bifinmybrary.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span><b>Library Sharing App (Mybrary)</b></span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>EJS, CSS</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>ExpressJS</b> </p>
        </div>

        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./olxCS.jpg')} alt="" />
          <a className="link-icon" href="https://olx-clone-c5480.web.app/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span><b>OLX Clone</b></span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>ReactJS</b> <br />Back-end : <b>Firebase</b> <br />Data Base : <b>Firebase Firestore</b> <br />Authentication : <b>Firebase Authentication</b> </p>
        </div>


        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./netflix.JPG')} alt="" />
          <a class="link-icon" href="https://bifinbabu.github.io/React-Netflix-Clone/" target="_blank" rel="noopener noreferrer">
          <div class="item-title netflix">
            <span><b>Netflix-Clone</b></span>
            
              <i class="fa fa-external-link" aria-hidden="true" ></i>
            
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem'}}>
            Front-end : <b>ReactJS</b> <br />Back-end : <b>Nil</b> <br />API used : <b>TMDB (The Movie Database)</b> <br />Library used : <b>React-YouTube</b>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Works