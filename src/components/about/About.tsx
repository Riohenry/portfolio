import DownloadButton from "../button/DownloadButton";
import aboutImage from "../../assets/best.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

import "./about.css";
import Button from "../button/Button";

type Props = {
  Notpage?: boolean;
};

function About({ Notpage }: Props) {
  return (
    <div className="about__container">
      <div className="middle about__wrappeer">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__h2 para1">
              Developing With a Passion While Exploring The World.
            </h2>
            <div className="about__all">
              <div className="about__text1">
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <p className="about__para para1">
                    Am a Business Statistican turned Software Developer located
                    in Uganda. The passion for Tech led me to wanting to know
                    how really tech works hence Learning how to Code and being
                    an open learner. I have engaged in self-studies, Boot-camps,
                    online course and video to see that I get some fundamental
                    understanding software development and tech in General.
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <p className="about__para para1">
                    I strongly believe if there is atleast Grit, We can do
                    anything.
                  </p>
                </AnimationOnScroll>
              </div>
              <div className="about__text2">
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <p className="about__para para1">
                    I love contributing to open-source and I have learnt some
                    basics / fundamentals of Data science and AI. I think AI is
                    Cool.
                  </p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <p className="about__para">
                    Am open to work currently as Web Developer and Cloud
                    Developer. Am still learning : Mobile Development but
                    hireable and other technologies that I will find interesting
                    along the tech path.
                  </p>
                </AnimationOnScroll>
              </div>
            </div>
            {Notpage ? (
              <Button name="View Portfolio"  to="/portfolio"/>
            ) : (
              <DownloadButton
                name="Download CV"
                to="/files/Geofrey_Isiagi_Resume.pdf"
              />
            )}
          </div>
          <div className="about__image">
            <AnimationOnScroll
              initiallyVisible={true}
              duration={5}
              animateIn="animate__swing"
            >
              <img src={aboutImage} alt="hero_isiagi_geofrey.jpg" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
