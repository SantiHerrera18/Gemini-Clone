import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { AIContext } from "../../context/AIContext";

const SideBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { prevPromts, setPrevPrompts, requestAI } = useContext(AIContext);

  const uploadPrompts = async (prompt) => {
    // setPrevPrompts((prev) => [...prev, prompt]);
    requestAI(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {!menuOpened ? <p>New chat</p> : null}
        </div>
        {!menuOpened ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPromts.map((prompt, index) => {
              return (
                <div
                  key={index}
                  className="recent-entry"
                  onClick={() => uploadPrompts(prompt)}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{prompt.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {!menuOpened ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {!menuOpened ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {!menuOpened ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
