import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AITAH from "../assets/AITA.png";
import AR from "../assets/ask_reddit.png";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import NiceGuys from "../assets/nice_guys.jpg";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([0, 1, 2]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="sidebar">
      <button
        className="sidebar-button"
        onClick={() => (window.location.href = "/")}
      >
        <HomeIcon />
        Home
      </button>
      <button
        className="sidebar-button"
        onClick={() =>
          window.open(
            "https://www.reddit.com/r/AmItheAsshole/comments/1hc8yg4/aita_for_stealing_my_roommates_food_because_there/",
            "_blank"
          )
        }
      >
        <ArrowCircleUpIcon />
        Popular
      </button>
      <div className="divider"></div>
      <button
        className="sidebar-button-accordion"
        onClick={() => toggleAccordion(0)}
      >
        Recent
        {openAccordions.includes(0) ? (
          <KeyboardArrowUpIcon
            style={{
              transform: "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <KeyboardArrowUpIcon style={{ transition: "transform 0.3s" }} />
        )}
      </button>
      {openAccordions.includes(0) && (
        <>
          <button
            className="sidebar-button"
            onClick={() =>
              window.open("https://www.reddit.com/r/AmItheAsshole/", "_blank")
            }
          >
            <img src={AITAH} alt="AITAH" className="sidebar-button-icon" />
            r/AITAH
          </button>
          <button
            className="sidebar-button"
            onClick={() =>
              window.open("https://www.reddit.com/r/AskReddit/", "_blank")
            }
          >
            <img src={AR} alt="AR" className="sidebar-button-icon" />
            r/AskReddit
          </button>
          <button
            className="sidebar-button"
            onClick={() =>
              window.open("https://www.reddit.com/r/NiceGuys/", "_blank")
            }
          >
            <img
              src={NiceGuys}
              alt="NiceGuys"
              className="sidebar-button-icon"
            />
            r/NiceGuys
          </button>
        </>
      )}
      <div className="divider"></div>
      <button
        className="sidebar-button-accordion"
        onClick={() => toggleAccordion(1)}
      >
        Topics
        {openAccordions.includes(1) ? (
          <KeyboardArrowUpIcon
            style={{
              transform: "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <KeyboardArrowUpIcon style={{ transition: "transform 0.3s" }} />
        )}
      </button>
      {openAccordions.includes(1) && (
        <>
          <button className="sidebar-button">
            <SentimentVerySatisfiedIcon />
            Internet Culture
          </button>
          <button className="sidebar-button">
            <SportsEsportsIcon />
            Gaming
          </button>
          <button className="sidebar-button">
            <LiveHelpIcon />
            Q&As
          </button>
          <button className="sidebar-button">
            <DeveloperBoardIcon />
            Technology
          </button>
        </>
      )}
      <div className="divider"></div>
      <button
        className="sidebar-button-accordion"
        onClick={() => toggleAccordion(2)}
      >
        Resources
        {openAccordions.includes(2) ? (
          <KeyboardArrowUpIcon
            style={{
              transform: "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <KeyboardArrowUpIcon style={{ transition: "transform 0.3s" }} />
        )}
      </button>
      {openAccordions.includes(2) && (
        <>
          <button className="sidebar-button">
            <SentimentVerySatisfiedIcon />
            About Rabbit
          </button>
          {/* <button className="sidebar-button">
            <SportsEsportsIcon />
            Blog
          </button> */}
          <button className="sidebar-button">
            <LiveHelpIcon />
            Help
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
