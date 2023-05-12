import "../App.css";
import contact from "../Images/Mask group (3).png";

import "../Styles/About.css";
import "../Styles/Products.css";
function ContactUs() {
  return (
    <div>
      <section className="section-gap">
        <div className="w-100 about-us contact-us">
          <img className="w-100" src={contact} />
          <p>Contact Us</p>
        </div>
      </section>
      <section className="products-body">
        <div className="sub-con-cen">
          <div className="submit-con">
            <div className="submit-cards">
              <div className="heading-submit">
                <h1>Get in Touch</h1>
                <p>
                  Looking for something? Drop your query and will contact you.
                </p>
              </div>

              <div className="input-set-one">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="typeone"
                />
                <input
                  type="text"
                  className="typetwo"
                  placeholder="Full Name*"
                />
                <input type="text" className="typetwo" placeholder="Mobile*" />
              </div>
              <div className="input-set-two">
                <input type="text" className="typetwo" placeholder="Email*" />
                <input type="text" className="typetwo" placeholder="Pincode*" />
                <input type="text" className="typeone" placeholder="Message" />
              </div>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="map-section">
          <p className="store-locator">Store Locator</p>
          <div className="map-location">
            <div className="scroll">
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <div className="d-flex">
                <div className="w-70">
                  
                    <p className="map-content pd">
                      Opens 10AM - Closes 8PM | PH: 9876543210
                    </p>
                    <p className="map-content pd">
                      122 Gandhi Nagar, 2nd Main Road
                    </p>
                    <p className="km pd">5.6 km (7 mins)</p>
                    <p className="products-services">PRODUCTS & SERVICES </p>
                 
                </div>
                <div className="w-30 d-flex">
                  <div className="blue"></div>
                  <div className="white"></div>
                </div>
                </div>
                <p className="border"></p>
              </div>
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <p className="map-content pd">
                  Opens 10AM - Closes 8PM | PH: 9876543210
                </p>
                <p className="map-content pd">
                  122 Gandhi Nagar, 2nd Main Road
                </p>
                <p className="km pd">5.6 km (7 mins)</p>
                <p className="products-services">PRODUCTS & SERVICES </p>
                <p className="border"></p>
              </div>
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <p className="map-content pd">
                  Opens 10AM - Closes 8PM | PH: 9876543210
                </p>
                <p className="map-content pd">
                  122 Gandhi Nagar, 2nd Main Road
                </p>
                <p className="km pd">5.6 km (7 mins)</p>
                <p className="products-services">PRODUCTS & SERVICES </p>
                <p className="border"></p>
              </div>
            </div>

            <div className="map-location-two">
              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
