import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>

      <div>
        <a href="mailto:bor.hunor@gmail.com">E-mail</a>
        <a href="skype:borbely.hunor.marton">Skype</a>
      </div>

      <div>
        <a href="https://twitter.com/HunorBorbely" target="_blank">
          Twitter
        </a>

        <a href="http://codepen.io/HunorMarton/" target="_blank">
          CodePen
        </a>
        <a href="https://github.com/HunorMarton" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.skillshare.com/profile/Hunor-Borb%C3%A9ly/3932130"
          target="_blank"
        >
          Skillshare
        </a>
        <a href="https://www.linkedin.com/in/hunor-marton-borbely/" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
