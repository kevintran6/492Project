import React, { useState } from "react";
import "./Main.css";
import AITA from "../assets/AITA.png";
import ModelInput from "./ModelInput";
import Spinner from "./Spinner";

const Main = () => {
  const [label, setLabel] = useState("");
  const [topic, setTopic] = useState("");
  const [post, setPost] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [topK, setTopK] = useState(100);
  const [topP, setTopP] = useState(0.9);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const results = {
      topic: topic,
      judgment: label,
      temperature: temperature,
      topK: topK,
      topP: topP,
    };

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(results),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPost(data.post);
    } catch (error) {
      console.error("Error generating post:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPost("");
    setLabel("");
    setTopic("");
  };

  return (
    <div className="main">
      <div className="header">
        <div className="background-header"></div>
        <div className="header-content">
          <div className="picture-container">
            <img src={AITA} alt="AITA" className="AITA-picture" />
            <h1 className="header-text">r/AITAH</h1>
          </div>
        </div>
        <div className="content">
          <div className="interface-container">
            <div className="create-post-button">Create a post</div>
            <div className="divider"></div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  <div className="button-selector">
                    <button
                      type="button"
                      onClick={() => setLabel("YTA")}
                      className={`selector-button ${
                        label === "YTA" ? "active selected" : ""
                      }`}
                    >
                      YTA
                    </button>
                    <button
                      type="button"
                      onClick={() => setLabel("NTA")}
                      className={`selector-button ${
                        label === "NTA" ? "active selected" : ""
                      }`}
                    >
                      NTA
                    </button>
                    <button
                      type="button"
                      onClick={() => setLabel("ESH")}
                      className={`selector-button ${
                        label === "ESH" ? "active selected" : ""
                      }`}
                    >
                      ESH
                    </button>
                    <button
                      type="button"
                      onClick={() => setLabel("NAH")}
                      className={`selector-button ${
                        label === "NAH" ? "active selected" : ""
                      }`}
                    >
                      NAH
                    </button>
                  </div>
                </label>
                <label>
                  <input
                    placeholder="Enter a topic here..."
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="label-input"
                  />
                </label>
              </div>
              <ModelInput
                temperature={temperature}
                setTemperature={setTemperature}
                topK={topK}
                setTopK={setTopK}
                topP={topP}
                setTopP={setTopP}
              />
              <div
                className="button-container"
                style={{
                  textAlign: "right",
                  paddingRight: "2em",
                  paddingTop: "1em",
                  paddingBottom: "1em",
                }}
              >
                {post !== "" && (
                  <button className="clear-button" onClick={handleClear}>
                    Clear
                  </button>
                )}
                {!loading && (
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                )}
              </div>
            </form>
            <div>
              {loading ? (
                <Spinner />
              ) : post !== "" ? (
                <textarea
                  placeholder="Prompt Will Be Here..."
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="prompt-input"
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="content-description">
            <p className="content-description-title">AITAH</p>
            <p className="content-description-text">
              Born from a late-night coding session between Kaden, Max, Tyler,
              and Kevin, this webpage emerged as a playful response to Tyler's
              endless Reddit rabbit holes. A chronic r/AmITheAsshole lurker,
              Tyler would spend hours scrolling, seeking validation for every
              minor life conflict. Ironically, after countless debates about
              whether AI could truly capture human drama, he decided: if you
              can't beat them, join them.
              <br></br>
              <br></br>
              Now, this is a webpage where you can explore the world of "Am I
              The Asshole?" without the rules of real subreddits. Generate fake
              interpersonal conflict scenarios, from mundane misunderstandings
              to wild hypothetical debates, using our AI model. Adjust the
              topic, judgement, temperature, top-k, and top-p to fine-tune the
              content you want - a project that started as a joke and became
              Tyler's ultimate revenge on endless Reddit drama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
