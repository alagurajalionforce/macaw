import React , {useState} from 'react'
import "../Styles/TrendingColor.css"
import Cardone from "../Images/Cardone.png"
import Cardtwo from "../Images/cardtwo.png"
import Cardthree from "../Images/cardthree.png"
import CardFour from "../Images/cardfour.png"
import CardFive from "../Images/cardfive.png"

const mountedStyle = {
    animation: "inAnimation 0.5s ease-in"
  };
  const unmountedStyle = {
    animation: "outAnimation 0.5s ease-out",
    animationFillMode: "forwards"
  };

const TrendingColors = () => {
    const [showDiv, setShowDiv] = useState(false);
    
    return (
        <div>
            <div className="heading-one">
                <h1>Trending Colors</h1>
            </div>
            <div className="img-cards">
                <div className="first-set-card">
                    <div className="card-img">
                        <img src={Cardone} alt="" />
                    </div>
                    <div className="card-img">
                        <img src={Cardtwo} alt="" />
                    </div>
                </div>
                <div className="card-img-big">
                    <img src={Cardthree} alt="" />
                </div>
                <div className="first-set-card">
                    <div className="card-img" onClick={() => setShowDiv(!showDiv)}>
                        <img src={CardFour} alt="" />
                    </div>
                    <div className="card-img">
                        <img src={CardFive} alt="" />
                    </div>
                </div>

                <div
        className="transitionDiv"
        style={showDiv ? mountedStyle : unmountedStyle}
      ></div>
            </div>
            <div className="view-more-btn">
                <button>View More</button>
            </div>
        </div>
    )
}

export default TrendingColors