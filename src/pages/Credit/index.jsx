import './styles.css'

export default function Credit() {
  return (
    <div className="CreditContainer">
      <div className="CreditWidth">
        <div className="Content">
          <img className="Portrait" src="/images/aboutme-portrait.jpg" alt="portrait" />
          <div className="Text">
            <p><strong>This project is made Nhat K. "James" Nguyen.</strong></p>
            <p><i>(the source code of the project can be found via the 'GitHub' link above)</i></p>
            <p>I'm Vietnamese 🇻🇳 and I am currently living in Australia 🇦🇺 working as a ReactJS frontend developer. I have 2+ years of doing web (specifically frontend/UI) development and I always look forward to building sites &amp; apps that optimal yet also eye-catching.</p>
          </div>
        </div>
        
        <div className="Socials">
          <a href="https://www.linkedin.com/in/nhatnguyen9813/" target="_blank" rel="noopener noreferrer">
            <img className="Social LinkedIn" src="/images/icon-linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://www.github.com/nhatnguyen9813/" target="_blank" rel="noopener noreferrer">
            <img className="Social LinkedIn" src="/images/icon-github.svg" alt="github" />
          </a>
          <a href="mailto://kimnhat98@gmail.com/" target="_blank" rel="noopener noreferrer">
            <img className="Social Mail" src="/images/icon-mail.svg" alt="mail" />
          </a>
        </div>
      </div>
    </div>
  )
}
