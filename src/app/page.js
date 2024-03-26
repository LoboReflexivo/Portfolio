import Image from "next/image";
import AsideComponent from "./components/aside/page";
import HeaderComponent from "./components/header/page";
import ButtonComponent from "./components/buttonreturn/page";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <AsideComponent />
      <div className="image-background"></div>
      <div className="text" id="about-me">
        <div className="principal-title">
          <Image
            src="/foto_principal.jpg"
            alt="personal photo"
            className="about-me-photo"
            width={200}
            height={200}
          />
          <div>
            <h1>Darío Guerra García</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </div>
        <div className="description">
          <p className="description-paragraph">
            My name is Darío and after a year of self-taught learning, I have
            completed my studies at CodeSpace, a technological school in Málaga.
            During my time there, I have strengthened and acquired various
            essential skills for a developer. Currently, I am completing my
            internship at a company.
          </p>
          <p className="description-paragraph">
            I am a curious and patient individual, capable of working
            effectively in teams. Additionally, I am currently in the process of
            improving my fluency in English.
          </p>
          <p className="description-paragraph">
            I studied Spanish Philology at the University of Salamanca, which
            has provided me with linguistic skills and a natural curiosity for
            learning different languages.
          </p>
          <p className="description-paragraph">
            Due to my career and previous experience as a Spanish teacher, I
            possess a range of social skills and abilities.
          </p>
        </div>
      </div>
      <div className="image-background"></div>
      <div className="text" id="projects">
        <h2>Skills:</h2>
        <div className="skills-list">
          <ul className="list-container">
            <li className="list">HTML5</li>
            <li className="list">CSS3</li>
            <li className="list">JavaScript</li>
            <li className="list">TypeScript</li>
          </ul>
          <ul className="list-container">
            <li className="list">MySQL</li>
            <li className="list">MongoDB</li>
            <li className="list">Git</li>
            <li className="list">React</li>
          </ul>
        </div>
        <h2>Aptitudes</h2>
        <ul className="list-container">
          <li className="list">Mistake tolerance</li>
          <li className="list">Active listening</li>
          <li className="list">Public speaking</li>
          <li className="list">Problem solving</li>
        </ul>
      </div>
      <div className="image-background"></div>
      <div className="text" id="studies">
        Studies
      </div>
      <div className="image-background"></div>
      <div className="text" id="hobbies">
        <h2>Hobbies</h2>
        <ul className="list-container">
          <li className="list hobby">
            <h4>Languages and linguistic</h4>
            <p>
              The linguistic has turn into my hobby after that I finished my
              degree at University of Salamanca.
            </p>
          </li>
          <li className="list hobby">
            <h4>Video games</h4>
            <p>
              Since I was a child I've played videogames, especially tactical
              games like League of Legends or shooters like Counter-Strike or
              Valorant.
            </p>
          </li>
          <li className="list hobby">
            <h4>Music</h4>
            <p>
              I love the music. I played piano when I was a teenager and
              currently I love to go a concerts and festivals.
            </p>
          </li>
          <li className="list hobby">
            <h4>Technology and programming</h4>
            <p>
              Always I had curiosity for the technology because of video games.
              Also because of the computational linguistic I decided to start to
              do autodidactic programming.
            </p>
          </li>
        </ul>
      </div>
      <ButtonComponent />
    </div>
  );
}
