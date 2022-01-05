import Home from '../components/Home/Home'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export const TOTAL_SCREENS = [
  {
    screen_name: 'HOME',
    component: Home
  },
  {
    screen_name: 'ABOUT ME',
    component: About
  },
  {
    screen_name: 'RESUME',
    component: Resume
  },
  {
    screen_name: 'PROJECTS',
    component: Projects
  },
  {
    screen_name: 'CONTACT ME',
    component: Contact
  }
]

export const GET_SCREEN_INDEX = screen_name => {
  if (!screen_name) {
    return -1
  } else {
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) {
        console.log(i)
        return i
      }
    }
    return -1
  }
}
