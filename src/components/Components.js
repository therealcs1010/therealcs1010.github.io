import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'
import Header from './Header/Header'
import './Components.css'
import ScrollService from '../utilities/ScrollService'

export default function Components () {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map(screen =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    )
  }
  return (
    <div>
      <Header />
      {mapAllScreens()}
      <button
        className='go-home-btn'
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <i className='fa fa-arrow-up fa-lg'></i>
      </button>
    </div>
  )
}
