import React, { useRef, useEffect, useState } from "react";
import Mabsan from "../assets/MERS LOGO PNG.png";
import MenuButton from "../assets/MenuButton_blue.svg";
import bayrak from "../assets/bayrak.svg";
import Navbar from "./NavBar.js"; // Importing the NavBar component
import "./css/Acilis_Sayfasi.css"; // Importing the CSS file
import AcilisApples from "../assets/apples.mp4";

const Acilis_Sayfasi = ({ change_page, SektorItems }) => {
  const videoId = "l1cBhOqSV4M"; // YouTube video ID
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [showButtons, setShowButtons] = useState(true); // State to control the visibility of buttons
  const [showNavbar, setShowNavbar] = useState(null); // State to control the visibility of the navbar
  const [initialRender, setInitialRender] = useState(true); // State to track initial render
  const containerRef = useRef(null);

  const [shouldPlay, setShouldPlay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlay(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3500); // Delay for 3.5 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = width * (9 / 16); // Aspect ratio: 16:9
        setContainerWidth(width);
        setContainerHeight(height);
      }
    };

    // Call handleResize when the window is resized
    window.addEventListener("resize", handleResize);
    // Initial call to set container width and height
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // After the component is initially rendered, set initialRender to false
    setInitialRender(false);
  }, []);

  const show_Navbar = () => {
    setShowButtons(!showButtons);
    if (!showNavbar) {
      setShowNavbar(true); // Show navbar only if it's not visible
    }
  };

  const showButtonsAgain = () => {
    setShowNavbar(false);
    setShowButtons(true);
  };

  return (
    <div
      className={`bg-cover video-1-container ${
        initialRender
          ? ""
          : showNavbar === true
          ? "slideDown"
          : showNavbar === false
          ? "slideUp"
          : ""
      }`}
      style={{
        position: "relative",
        width: "100%",
        height: window.innerWidth <= 600 ? "100vh" : "100%", // Conditionally set height
      }}
    >
      {showNavbar && (
        <Navbar change_page={change_page} showButtonsAgain={showButtonsAgain} SektorItems={SektorItems}  />
      )}
      {window.innerWidth <= 600 && (
        <div // 1. BLANK AREA BİLGİSAYARDA YOK TELEFONDA VAR
        >
          <div
            className="bg-cover bg-fixed d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              id="second"
              ref={containerRef}
              className="d-flex justify-content-center"
              style={{
                position: "relative",
                width: "100%",
                height: `${containerHeight}px`,
                backgroundColor: "transparent",
              }}
            >
              {/* Conditionally render the buttons based on showButtons state */}

              <div
                className="label d-flex flex-row justify-content-center align-content-between  p-md-5 p-3 pt-5 col-md-11 col-10"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <div className="d-flex flex-column col-10">
                  {showButtons && (
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <img
                            src={Mabsan}
                            alt="Mabsan"
                            className="mabsan h-10"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {showButtons && (
                  <div className="menu d-flex align-items-start justify-content-end col-2">
                    <button
                      className="btn p-0 position-relative"
                      onClick={show_Navbar} // Add onClick handler to toggle the visibility of buttons
                    >
                      <div className="menu_button">
                        <img src={MenuButton} />
                      </div>
                      <div className="overlay"></div>
                      {/* Semi-transparent overlay */}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div // 2. MIDDLE AREA
      >
        <div
          className="bg-cover bg-fixed d-flex justify-content-center"
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <div
            id="second"
            ref={containerRef}
            className="d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
              height: `${containerHeight}px`,
              backgroundColor: "transparent",
            }}
          >
            <div id="video-container">
              <video
                ref={videoRef}
                autoPlay={shouldPlay}
                loop
                muted
                controls={false} // This will hide the video controls
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  opacity: 1,
                }}
              >
                <source src={AcilisApples} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Conditionally render the buttons based on showButtons state */}

            <div
              className="label d-flex flex-row justify-content-center align-content-between p-md-5 p-3 col-11"
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <div className="d-flex flex-column" style={{ width: "100%" }}>
                {showButtons && window.innerWidth > 600 && (
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <div className="col-10">
                        <img
                          src={Mabsan}
                          alt="Mabsan"
                          className="mabsan h-10"
                        />
                      </div>
                      <div className="col-2">
                        <button className="mx-2 buttontr d-flex align-items-center justify-content-center">
                          <img src={bayrak} alt="bayrak" className="bayrak" />
                          <label style={{ color: "gray" }}>TR</label>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="d-flex align-items-left flex-column justify-content-center video_page_header"
                  style={{ width: "100%", minHeight: "0", flex: 1 }}
                >
                  <label style={{ color: "gray" }}>
                    Kutuda <span style={{ color: "#C12C06" }}>Kalite</span>
                  </label>
                  <label style={{ color: "gray" }}>Bizde bir okyanus var</label>
                </div>
                <div></div>
              </div>

              <div className="d-flex flex-column align-items-end col-1">
                {showButtons && window.innerWidth > 600 && (
                  <button
                    className="btn p-0 position-relative"
                    onClick={show_Navbar} // Add onClick handler to toggle the visibility of buttons
                  >
                    <div className="menu_button">
                      <img src={MenuButton} alt="Menu Button" />
                    </div>

                    {/* Semi-transparent overlay */}
                  </button>
                )}
                {window.innerWidth > 600 && (
                  <div
                    className="d-flex align-items-end"
                    style={{ height: "100%" }}
                  >
                    <div className="d-flex justify-content-end col-8  ">
                      <label style={{ color: "gray" }} className="left_bottom_big">36</label>
                      <div className="d-flex flex-column justify-content-end col-4 p-3">
                        <label style={{ color: "gray" }} className="left_bottom_small">YILLIK</label>
                        <label style={{ color: "gray" }} className="left_bottom_small">TECRÜBE</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {window.innerWidth <= 600 && ( // Check if window width is less than or equal to 600px (adjust as needed)
        <div // 3. BLANK AREA BİLGİSAYARDA YOK TELEFONDA VAR
        >
          <div
            className="bg-cover bg-fixed d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              id="second"
              ref={containerRef}
              className="d-flex justify-content-center"
              style={{
                position: "relative",
                width: "100%",
                height: `${containerHeight}px`,
                backgroundColor: "transparent",
              }}
            >
              {/* Conditionally render the buttons based on showButtons state */}

              <div
                className="label d-flex flex-row justify-content-center align-content-between pt-5 pl-3 pr-3 col-10"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <div
                  className="d-flex align-items-end"
                  style={{ width: "100%" }}
                >
                  {showButtons && (
                    <div style={{ width: "100%" }}>
                      <div
                        className="d-flex align-items-end"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="d-flex justify-content-end"
                          style={{ width: "100%" }}
                        >
                          <label className="left_bottom_big">36</label>
                          <div className="d-flex flex-column justify-content-end p-3">
                            <label className="left_bottom_small">YILLIK</label>
                            <label className="left_bottom_small">TECRÜBE</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Acilis_Sayfasi;
