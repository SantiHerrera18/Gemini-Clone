import { assets } from "../../assets/assets";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest me something about trading</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>I don't even know what to say</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>This is another suggestion</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability if the following</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-button">
          <div className="search-box">
            <input type="text" placeholder="Ask Gemini" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            This is an educational and personal purposes project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
