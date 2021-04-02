import React from 'react'
import './Header.scss'

export default function Header() {
  const hi = "Hi, I'm Hunor 👋"
  return (
    <section id="header">
      <div className="hi">{hi}</div>
      <div className="subheader">
        <span className="job-title">Senior software engineer</span> based in
        Berlin. Currently open for <span className="underline">freelance</span>{' '}
        opportunities.
      </div>
      <p className="description">
        Full stack web developer focused on frontend with a deep understanding
        of React and Vue. Enthusiastic about UX design. Coaching the next
        generation of web developers at codebar, sharing hobby projects on
        CodePen, publishing video tutorials on YouTube, and occasionally writing
        articles on CSS-Tricks and freeCodeCamp.
      </p>
    </section>
  )
}
