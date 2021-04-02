import React from 'react'
import unuLogo from '../data/logos/unu.png'
import leoLogo from '../data/logos/leo.png'
import sapLogo from '../data/logos/sap.png'
import universityLogo from '../data/logos/university.png'
import upLogo from '../data/logos/up.png'
import codebarLogo from '../data/logos/codebar.png'
import ResumeBlock from './ResumeBlock'
import './Resume.scss'

export default function Resume() {
  return (
    <section id="resume">
      <h1>Hunor Márton Borbély</h1>
      <article>
        <h2>Experience</h2>
        <ResumeBlock
          header="unu"
          subheader="Full stack developer"
          pic={unuLogo}
          link="https://unumotors.com"
          sub1="Berlin, Germany"
          sub2="2019 - 2020"
        />
        <ResumeBlock
          header="LEO Innovation Lab"
          subheader="Full stack developer"
          pic={leoLogo}
          link="https://leoinnovationlab.com/"
          sub1="Copenhagen, Denmark"
          sub2="2017 - 2018"
        />
        <ResumeBlock
          header="SAP"
          subheader="Full stack developer, UX Designer"
          pic={sapLogo}
          link="https://www.sap.com/hungary/"
          sub1="Budapest, Hungary"
          sub2="2012 - 2017"
        />
      </article>
      <article>
        <h2>Education</h2>
        <ResumeBlock
          header="Budapest University of Technology and Economics"
          subheader="Bachelor&#39;s Degree"
          pic={universityLogo}
          link="https://www.bme.hu/"
          sub1="Computer Science"
          sub2="2007 - 2012"
        />
      </article>
      <article>
        <h2>Volunteer</h2>
        <ResumeBlock
          header="Budapest UP!"
          subheader="Founder"
          pic={upLogo}
          link="https://www.facebook.com/budapest.up"
          sub1="Organizing urban playground events"
          sub2="2011 - 2016"
        />
        <ResumeBlock
          header="codebar"
          subheader="Coach"
          pic={codebarLogo}
          link="https://codebar.io/berlin"
          sub1="Coaching future web developers"
          sub2="2019 - present"
        />
      </article>
    </section>
  )
}
