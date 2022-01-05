import React, { useState } from 'react'
import './Resume.css'
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'

export default function Resume (props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

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

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Interest', logoSrc: 'interests.svg' }
  ]

  const educationDetails = [
    {
      title: 'National University of Singapore',
      duration: { fromDate: 'Aug 2018', toDate: 'current' },
      description:
        'During my time in University, I focused on developing a holistic portfolio in both the software and hardware aspect of Computer Engineering, as well as developed my abilities as a leader. I served as the Cohort Representative for 4 years, and was elected as the President of the ECE Undergraduate Student Council for 2 years.',
      subHeading: 'BEng in Computer Engineering'
    },
    {
      title: 'Meridian Junior College',
      duration: { fromDate: 'Jan 2014', toDate: 'Dec 2015' },
      description:
        'During my time in Junior College, I focused on challenging myself to exceed my capabilties, where I undertook 4 H2 subjects in Physics, Chemistry, Mathematics and Economics. To improve on my leadership role, I served as the Captain of the Taekwondo Club for 1 year, where we took part in National events, and helped provide outreach to the school through a Community Involvement Programme to gather daily necessities for the needy.',
      subHeading: 'A levels'
    }
  ]
  const workHistoryDetails = [
    {
      title: 'NUS',
      duration: { fromDate: 'Aug 2019', toDate: 'May 2021' },
      description:
        "I was tasked with  charge of teaching lab classes. The topics I covered ranged from basic data structures such as linked lists, arrays, binary heaps and trees to complex algorithms such as Floyd Warshall, Dijkstra's and Kruskals algorithm.",
      subHeading: 'Teaching Assistant'
    },
    {
      title: 'DSTA',
      duration: { fromDate: 'Jul 2020', toDate: 'Nov 2020' },
      description:
        'I was tasked to create an application which automated the early detection of vulnerabilities in software using various Machine Learning libraries such as Spacy, NLTK, and scikit-learn.',
      subHeading: 'Natural Language Processing Intern'
    },
    {
      title: 'DSTA',
      duration: { fromDate: 'May 2021', toDate: 'Jul 2021' },
      description:
        'I worked on multiple tools to improve the development and security operations, such as a script which could pull Gradle and Javascript dependencies from an online environment to offline environment using Docker, Bash and Nexus 2.',
      subHeading: 'DevSecOps Intern'
    }
  ]
  const programmingSkillDetails = [
    { skill: 'C++', ratingPercentage: 85 },
    { skill: 'Java', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 60 },
    { skill: 'Python', ratingPercentage: 90 },
    { skill: 'Kotlin', ratingPercentage: 75 },
    { skill: 'Verilog', ratingPercentage: 75 }
  ]

  const ResumeHeading = props => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + ' - ' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      {educationDetails.map((education, index) => (
        <ResumeHeading
          key={index}
          heading={education.title}
          subHeading={education.subHeading}
          description={education.description}
          fromDate={education.duration.fromDate}
          toDate={education.duration.toDate}
        />
      ))}
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      {workHistoryDetails.map((workExperience, index) => (
        <div>
          <ResumeHeading
            key={index}
            heading={workExperience.title}
            subHeading={workExperience.subHeading}
            fromDate={workExperience.duration.fromDate}
            toDate={workExperience.duration.toDate}
            description={workExperience.description}
          />
        </div>
      ))}
    </div>,

    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Programming'
        description='Programming is one of my favourite activities as I enjoy doing it. I feel a sense of accomplishment when the people around me find my applications useful. I also like to solve programming questions as I feel a sense of satisfaction whenever I complete a problem.'
      />
      <ResumeHeading
        heading='Gaming'
        description='I enjoy playing video games in my free time as I believe it can help me improve on my ability to think out of the box. Some of the games that I play include Maplestory, Fallout 4 and Dota. Recently, I started learning to play Valorant.'
      />
      <ResumeHeading
        heading='Reading'
        description='I enjoy reading educational materials in my spare time as I believe that it value-adds to my learning experience. Some of my favourite books include "Machine Learning" by Tom Mitchell, "Algorithms by Jeff Erickson, as well as "Networking : A Top-Down Approach" by James F Kurose.'
      />
    </div>
  ]

  const handleCarousel = index => {
    let offsetHeight = 50
    let newCarouselOffset = {
      style: {
        transform: 'translateY(-' + index * offsetHeight + 'vh)'
      }
    }
    setCarouselOffSetStyle(newCarouselOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt='oops, no internet connection'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }
  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className='resume-details-carousel'
      >
        {resumeDetails.map(ResumeDetail => ResumeDetail)}
      </div>
    )
  }

  return (
    <div className='resume-container fade-in' id={props.id || ''}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullets-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}
