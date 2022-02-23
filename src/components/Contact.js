import React from 'react'
import './Contact.scss'

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>

      <div className="column">
        <a href="mailto:bor.hunor@gmail.com">E-mail</a>
      </div>

      <div className="column">
        <div className="icon">💬</div>
        <a
          href="https://www.linkedin.com/in/hunor-marton-borbely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/HunorBorbely"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className="column">
        <div className="icon">👾</div>
        <a
          href="http://codepen.io/HunorMarton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        <a
          href="https://github.com/HunorMarton"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="column">
        <div className="icon">📚</div>
        <a
          href="https://css-tricks.com/author/hunorborbely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS-Tricks
        </a>
        <a
          href="https://www.freecodecamp.org/news/author/hunor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp
        </a>
      </div>
      <div className="column">
        <div className="icon">📺</div>
        <a
          href="https://www.youtube.com/channel/UCxhgW0Q5XLvIoXHAfQXg9oQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://www.skillshare.com/profile/Hunor-Borb%C3%A9ly/3932130"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skillshare
        </a>
      </div>
    </section>
  )
}
