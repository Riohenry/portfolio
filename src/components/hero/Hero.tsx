import "./hero.css";
import Button from "../button/Button";


function Hero() {
  return (
    <div className="hero__container">
      <div className="middle hero__wrapper">
        <div className="hero__first">
        <h1 className="hero__h1">I am Lwanga Samson</h1>
          <h1 className="hero__h1">Am a Developer</h1>
          <p className="hero__para">
            I do fullstack Web, Cloud Development with Proficience in
            Javascript. I also have some learning experience in Mobile
            development and Data Science / AI
          </p>
          <Button name="Learn More" to="/about"/>
        </div>
        {/* <div className="hero__second">
          <img src={heroImage} alt="hero_isiagi_geofrey.jpg" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;

// *165*1*01*774002535*46112*age 35*pin23456#
