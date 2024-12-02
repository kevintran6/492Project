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
      <button className="sidebar-button">
        <HomeIcon />
        Home
      </button>
      <button className="sidebar-button">
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
          <button className="sidebar-button">
            <img src={AITAH} alt="AITAH" className="sidebar-button-icon" />
            r/AITAH
          </button>
          <button className="sidebar-button">
            <img src={AR} alt="AR" className="sidebar-button-icon" />
            r/AskReddit
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
          <button className="sidebar-button">
            <SportsEsportsIcon />
            Blog
          </button>
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
