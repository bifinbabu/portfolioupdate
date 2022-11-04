import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function Navbar() {

    const [color, setColor] = useState('');

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            setColor('rgba(0, 0, 0, 10');
        } else {
            setColor('');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('nav .right ul li a')

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight
                if (window.scrollY > (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id')
                }
            })
            navLi.forEach(li => {
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        })

    })
    return (


        <div className='navbar' style={{ backgroundColor: color }}>
            <nav>
                <div className='left'>
                    <a href="#home" className='home'>
                        <h1 className='name'><span style={{ color: 'red' }}>Bifin Babu</span></h1>
                    </a>
                </div>
                <div className='right'>
                    <ul>
                        <li >
                            <a href="#home" className='home'>
                                <span className="material-symbols-outlined">home</span><p>Home</p>
                            </a>
                        </li>
                        <li >
                            <a href="#about" className='about'>
                                <span className="material-symbols-outlined">person</span><p>About</p>
                            </a>
                        </li>
                        <li  >
                            <a href="#service" className='service'>
                                <span className="material-symbols-outlined">design_services</span><p>Service</p>
                            </a>
                        </li>
                        <li >
                            <a href="#work" className='work'>
                                <span className="material-symbols-outlined">home_repair_service</span><p>Projects</p>
                            </a>
                        </li>
                        <li >
                            <a href="#contact" className='contact'>
                                <span className="material-symbols-outlined">mail</span><p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar