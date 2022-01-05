import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './Projects.css'
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'

export default function Projects (props) {
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

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  }

  const projects = [
    {
      header: 'Personal Portfolio Website',
      libraries: 'HTML, CSS, JavaScript, ReactJS',
      description:
        'My original website was built using HTML, CSS and JavaScript as it was my introducation to\
         frontend development. The website was a minimalistic single-paged design with zero interaction.\
         However, it has now been upgraded and updated using ReactJS as it is one of the most popular tools\
         for frontend development.',
      image: 'expitem7.png'
    },
    {
      header: 'Robot Cikgu Jamal',
      libraries: 'Telegram API, Python, PostgreSQL',
      description:
        'I named this project after my Malay Language Teacher as it served as \
        an online practice which students can utilise to practice their malay vocabulary. \
        This project was created due to a lack of practice provided in the module, and since \
        practice is important in learning a new language, there was a high demand for this chatbot.',
      image: 'expitem8.png'
    },
    {
      header: 'Smart Dance Wearable',
      libraries: 'Vivado HLS, Python',
      description:
        "This wearable was designed with the intention of encouraging healthy living through simple \
        dancing in the comfort of people's home. This was accomplished through a Machine Learning model\
         which was trained to detect different dance moves using a hardware accelerator. ",
      image: 'expitem4.jpg'
    },
    {
      header: 'Automated Maze Navigator',
      libraries: 'C++, Arduino',
      description:
        'This automobile was created to maneuver in a maze automaticcaly to overcome various obstacles using an array\
         of sensors. Some of the tasks it could accomplish include colour detection, audio frequency detection\
          as well as collision prevention using a variety of low-cost sensors.',
      image: 'expitem1.jpg'
    },
    {
      header: 'Remote Maze Navigator',
      libraries: 'C++, Arduino, TCP, Raspberry Pi',
      description:
        'This automobile was created to maneuver in a maze remotely to overcome various obstacles using a\
        powerful LiDAR sensor as well as the Hector SLAM algorithm. The robot is operated from a significant\
         distance away using TCP which allowed for communication between an on-board Raspberry Pi and the computer.',
      image: 'expitem2.jpg'
    }
  ]
  return (
    <div className='projects-container fade-in' id={props.id || ''}>
      <ScreenHeading title={'Projects'} subHeading={'Some of my projects'} />
      <section className='projects-section'>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='projects-carousel'
              {...options}
            >
              {projects.map((project, index) => (
                <div className='col-lg-12'>
                  <div className='projects-item'>
                    <div className='projects-info'>
                      <img
                        src={
                          require('../../assets/Projects/' + project.image)
                            .default
                        }
                        alt='no internet connection'
                      ></img>
                      <h5>{project.header}</h5>
                    </div>
                    <div className='projects-libraries'>
                      <p>{project.libraries}</p>
                    </div>
                    <div className='projects-comment'>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div className='footer-image'>
          <img
            src={require('../../assets/Projects/shape-bg.png').default}
            alt='no internet connection'
          />
        </div>
      </section>
    </div>
  )
}
