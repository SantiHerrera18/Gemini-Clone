import { useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";

const SideBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

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
        <div className="recent">
          {!menuOpened ? <p className="recent-title">Recent</p> : null}
          {!menuOpened ? (
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What the hell</p>
            </div>
          ) : null}
        </div>
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
