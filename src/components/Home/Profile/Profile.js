import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Profile () {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Developer.',
        'ML Enthusiast.',
        'Leader.',
        'Scholar.',
        'Gamer.'
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 70,
      cursorChar: '|'
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://t.me/bleepboopbloop'>
                <i className='fa fa-phone-square fa-2x'></i>
              </a>
              <a href='https://github.com/therealcs1010'>
                <i className='fa fa-github-square fa-2x'></i>
              </a>
              <a href='https://www.linkedin.com/in/sim-yu-jie/'>
                <i className='fa fa-linkedin-square fa-2x'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>Hello, my name is</span>
            <span className='primary-text'>Yu Jie</span>
          </div>
          <div className='profile-details-role'>
            <div className='primary-text'>
              <h1>
                <span className='primary-text-fixed'>And I'm a</span>
                <span className='primary-text-typing' ref={el}></span>
              </h1>
            </div>
          </div>

          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire me
            </button>
            <a href='yu-jie-cv.pdf' download='yu-jie-cv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
