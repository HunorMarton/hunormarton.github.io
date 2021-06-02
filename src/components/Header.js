import React from 'react'
import './Header.scss'

export default function Header() {
  const hi = "Hi, I'm Hunor 👋"
  return (
    <section id="header">
      <div className="hi">{hi}</div>
      <div className="subheader">
        Web developer with an interest in UX design.
      </div>
      <p className="description">
        Full-stack web developer focused on frontend with a deep understanding
        of React and Vue. Enthusiastic about UX design. I coach the next
        generation of web developers at codebar, share hobby projects on
        CodePen, publish video tutorials on YouTube, and occasionally write
        articles on CSS-Tricks and freeCodeCamp.
      </p>
    </section>
  )
}
