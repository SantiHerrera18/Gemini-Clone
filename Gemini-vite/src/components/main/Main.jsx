import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { AIContext } from "../../context/AIContext";

const Main = () => {
  const {
    requestAI,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(AIContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-button">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => requestAI()} />
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
