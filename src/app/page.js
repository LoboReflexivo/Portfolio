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
            essential skills for a developer. I currently am completing my
            internship at a company.
          </p>
          <p className="description-paragraph">
            I am a curious and patient individual, capable of working
            effectively in teams. Additionally, I am currently in the process of
            improving my fluency in English.
          </p>
          <p className="description-paragraph">
            Experienced in both front-end and back-end technologies, I am a
            developer primarily focused on front-end development. I am curious
            and possess a strong desire to learn about various programming
            languages and technologies, as well as languages for my linguistic
            development.
          </p>
        </div>
      </div>
      <div className="image-background"></div>
      <div className="text" id="projects">
        <h2>Projects and skills</h2>
        <p className="description-paragraph">
          While I don&apos;t have significant projects to showcase yet due to
          privacy constraints, I warmly invite you to visit my GitHub and
          LinkedIn profiles. There, you can find some of my projects and explore
          my progress in web development.
        </p>
        <div className="skills-list">
          <div className="programming-tools">
            <ul className="list-container">
              <li className="list">
                <Image
                  src="/html.png"
                  className="logo"
                  alt="html logo"
                  width={100}
                  height={100}
                />
                HTML5
              </li>
              <li className="list">
                <Image
                  src="/css.png"
                  className="logo"
                  alt="css logo"
                  width={100}
                  height={100}
                />
                CSS3
              </li>
              <li className="list">
                <Image
                  src="/react.png"
                  className="logo"
                  alt="React logo"
                  width={100}
                  height={100}
                />
                React
              </li>
            </ul>
            <ul className="list-container">
              <li className="list">
                <Image
                  src="/node.png"
                  className="logo"
                  alt="nodejs logo"
                  width={100}
                  height={100}
                />
                NodeJS
              </li>

              <li className="list">
                <Image
                  src="/mongo.png"
                  className="logo"
                  alt="mongo logo"
                  width={100}
                  height={100}
                />
                mongoDB
              </li>
              <li className="list">
                <Image
                  src="/mysql.png"
                  className="logo"
                  alt="mysql logo"
                  width={100}
                  height={100}
                />
                MySQL
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {" "}
              <li className="list">
                {" "}
                <Image
                  src="/git.png"
                  className="logo"
                  alt="git logo"
                  width={100}
                  height={100}
                />
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-background"></div>
      <div className="text studies_container" id="studies">
        <div>
          <h2>Studies</h2>
        </div>
        <div className="studies_container">
          <ul className="studies">
            <li className="list ">
              <b>Code space Academy, Málaga - Full stack developer course</b>
              <p>
                <small>2023-2024</small>
              </p>
              <p className="description-paragraph">
                Throughout the course, I&apos;ve delved into a myriad of
                industry-standard tools, ranging from foundational languages
                like HTML5 and CSS3 to advanced technologies such as React and
                Node.js. These skills have been complemented by hands-on
                experience with database management, enriching my understanding
                of backend development. Moreover, I&apos;ve honed soft skills
                such as teamwork and problem-solving, ensuring a well-rounded
                skill set for real-world projects.
              </p>
            </li>
            <hr />
            <li className="list ">
              {" "}
              <b>
                University of Málaga, Málaga - Spanish for foreigners&apos;
                master
              </b>
              <p>
                <small>2022-2023</small>
              </p>
              <p className="description-paragraph">
                During my university master&apos;s program, I solidified my
                expertise in applied linguistics for teaching Spanish to
                foreigners. Within this program, I was able to delve deeper into
                computational linguistics, which is why I am currently in the
                technology sector.
              </p>
            </li>
            <hr />
            <li className="list ">
              {" "}
              <b>
                University of Salamanca, Salamanca - Spanish philology and
                linguistics degree
              </b>
              <p>
                <small>2018-2022</small>
              </p>
              <p className="description-paragraph">
                Thanks to this degree, I delved into various areas of knowledge,
                from literature to linguistics. Specifically, I specialized in
                linguistics, where I developed an interest in computational
                linguistics.
              </p>
            </li>
          </ul>
          <p></p>
        </div>
      </div>
      <div className="image-background"></div>
      <div className="text" id="hobbies">
        <h2>Hobbies</h2>
        <ul className="hobby-container">
          <li className="list hobby">
            <h4>Languages and linguistic</h4>
            <p className="description-paragraph">
              The linguistic has turn into my hobby after that I finished my
              degree at University of Salamanca.
            </p>
          </li>
          <hr />
          <li className="list hobby">
            <h4>Video games</h4>
            <p className="description-paragraph">
              Since I was a child I&apos;ve played videogames, especially
              tactical games like League of Legends or shooters like
              Counter-Strike or Valorant.
            </p>
          </li>
          <hr />
          <li className="list hobby">
            <h4>Music</h4>
            <p className="description-paragraph">
              I love the music. I played piano when I was a teenager and
              currently I love to go a concerts and festivals.
            </p>
          </li>
          <hr />
          <li className="list hobby">
            <h4>Technology and programming</h4>
            <p className="description-paragraph">
              Always I had curiosity for the technology because of video games.
              Also because of the computational linguistic I decided to start to
              do autodidactic programming.
            </p>
          </li>
          <hr />
        </ul>
      </div>
      <div className="image-background"></div>
      <ButtonComponent />
    </div>
  );
}
