import React, { useEffect } from 'react'
import './About.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function About (props) {
  let fadeInScreenHandler = screen => {
    if (screen.fadeInScreen !== props.id) {
      return
    } else {
      Animations.animations.fadeInScreen(props.id)
    }
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  )

  const SCREEN_CONSTANTS = {
    description:
      'I am a Year 4 Computer Engineering Student studying in NUS. I am \
      currently serving as a DSTA Scholar, as well as EXCO Advisor for \
      the ECE Undergraduate Student Council. My hobbies include reading up \
      on programming books, as well as solving programming questions on Kattis.\
       My current side-project includes maintaining a private Maplestory Server.\
        I aspire to specialize in the fields of Artificial Intelligence, but also\
         have a deeper understanding on topics such as Algorithm Optimization, \
         Game Development as well as Hardware Synthesis.',
    highlights: {
      bullets: [
        'Machine Learning',
        'Software Engineering',
        'Hardware Design Language'
      ],
      heading: 'Here are a few of my highlights: '
    }
  }

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  }

  return (
    <div
      className='about-me-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='about-me-parent'>
        <ScreenHeading
          title={'About Me'}
          subHeading={'Why You Should Choose Me'}
        />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
