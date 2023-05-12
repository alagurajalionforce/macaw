import "../App.css";
import CEOimg from "../Images/Team 1.png";
import "../Styles/About.css";
import PaintSplione from "../Images/paint-spill-3 1.png";
import PaintSpliTwo from "../Images/paint-spill-4 1.png";
import OurStory from "../Images/ourStory.png"
import Aboutus from "../Images/aboutus.png"
import Mask from "../Images/Mask group (2).png"
function AboutUs() {
  return (
    <div>
      {/* aboutus baner start */}
      <section className="section-gap">
        <div className="w-100 about-us">
          <img className="w-100 mask-img" src={Mask}/>
          <img className="w-100" src={Aboutus}/>
          
          <p>About Us</p>
        </div>
      </section>
      {/* aboutus baner end */}
      
      {/* our story start */}
      <section className="section-gap">
      <div className="d-flex container">
        <div className="w-50 m-r">
          <p className="our-story-header">Our Story</p>
          <p className="our-story-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="w-50 m-l">
          <div className="our-story-img">
          <img src={OurStory}/>
          </div>
        
        </div>
      </div>
      </section>
      {/* our story end */}
      
      {/* section card start */}
      <section className="section-gap">
        <div className="container-card">
          <div className="d-flex justify">
            <div className="w-50 vision-mission">
              <div className="vision">
                <p className="vision-position vision-mission-text">Vision</p>
                <img src={PaintSplione} alt="" />
              </div>
              <div className="vision-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugziat nulla pariatur.{" "}
                </p>
              </div>
            </div>
            <div className="w-50 vision-mission">
              <div className="mission">
                <p className="mission-position vision-mission-text">Mision</p>
                <img src={PaintSpliTwo} alt="" />
              </div>
              <div className="vision-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugziat nulla pariatur.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section card end */}

      <div className="container">
        {/* section CEO Start */}
        <section className="section-gap">
          <div className="d-flex">
            <div className="w-50 ">
              <div className="ceo-section-one">
                <img src={CEOimg} alt="" />
              </div>
            </div>
            <div className="w-50  flex-center">
              <p className="ceo clr-blu">CEO</p>
              <p className="ceo">John Doe</p>
              <p className="abut-ceo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        {/* section CEO end */}
        {/* section CEO Start */}
        <section className="section-gap">
          <div className="d-flex">
            <div className="w-50  flex-center">
              <p className="ceo clr-blu">CEO</p>
              <p className="ceo">John Doe</p>
              <p className="abut-ceo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-50 ">
              <div className="ceo-section-one">
                <img src={CEOimg} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* section CEO end */}
      </div>
    </div>
  );
}

export default AboutUs;
