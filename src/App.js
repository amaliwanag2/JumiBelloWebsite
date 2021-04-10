import React, { useState } from "react";
import logo from "./logo.svg";
import mainPhoto from "./mainPhoto.png";
import jumi from "./jumi.png";
import readMe from "./readMe.svg";
import { Excerpt1 } from "./excerpt1";
import flower from "./flower.png";
import footer from "./footer.svg";
import scroll from "./scroll.svg";
import "./App.css";
import { isMobile } from "react-device-detect";
import { TextField } from "@material-ui/core";
function App() {
  const [readMode, setReadMode] = useState(false);
  const readMeOnClick = () => setReadMode((prevState) => !prevState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFEF9",
        overflowX: isMobile ? "hidden" : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <img src={logo} alt="logo" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "96vw",
          }}
        >
          <img
            src={mainPhoto}
            style={{ width: "86%", maxWidth: "1250px", zIndex: "9" }}
            alt="cover"
          />
          <img
            src={scroll}
            style={{
              position: "absolute",
              top: "30%",
              right: "2%",
              zIndex: "10",
            }}
            alt="cover"
          />
        </div>
      </div>
      {/*book section */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#FFFEF9",
          marginTop: "-50px",
        }}
      >
        {!readMode ? (
          <>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                transform: "rotate(-3.39deg)",
              }}
            ></div>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                transform: "rotate(-2.37deg)",
              }}
            ></div>
            <h1 style={{ zIndex: 5 }}>The Leaving</h1>
            <p
              style={{
                position: "absolute",
                // marginTop: "200px",
                top: "60%",
                fontFamily: "'Rubik', sans-serif",
                fontSize: "16px",
              }}
            >
              an excerpt
            </p>
            <img
              onClick={readMeOnClick}
              src={readMe}
              alt="read me"
              height="70px"
              style={{
                zIndex: 10,
                cursor: "pointer",
                position: "absolute",
                top: "70%",
              }}
            />{" "}
          </>
        ) : (
          <div
            style={{
              width: "90vw",
              maxWidth: "1125px",
              height: "86vh",
              maxHeight: "950px",
              background: "#FEFDFD",
              boxShadow: "2px 5px 100px rgba(19, 18, 13, 0.2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "65px",
              }}
            >
              <p
                style={{
                  // position: "absolute",
                  marginTop: "30px",
                  marginLeft: "40px",
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: "16px",
                }}
              >
                the leaving
              </p>
              <p
                style={{
                  // position: "absolute",
                  marginTop: "30px",
                  marginRight: "40px",
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: "16px",
                }}
              >
                (an excerpt)
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "calc(100% - 85px)",
              }}
            >
              <div
                style={{
                  width: "33%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p style={{ marginTop: "60px", fontStyle: "italic" }}>
                  Twenty-eight, Beijing
                </p>
              </div>
              <div
                style={{
                  width: "calc(67%)",
                  maxWidth: "633px",
                  overflowY: "scroll",
                  height: "100%",
                  cursor: "all-scroll",
                  marginRight: "30px",
                }}
              >
                <Excerpt1 />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          background: "rgba(245, 225, 164, 0.15)",
          width: "100vw",
          height: "309px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={flower}
          width="100%"
          alt="flower"
          style={{ position: "absolute", minHeight: "309px" }}
        />
        <p
          style={{
            fontSize: isMobile ? "20px" : "36px",
            lineHeight: "140%",
            textAlign: "center",
            letterSpacing: "0.025em",
            width: isMobile ? "80%" : "60%",
          }}
        >
          I wake up and fight to show the marginalized that our stories matter.
          This world is ours too.
        </p>
      </div>
      <div className="About">
        <div
          style={{
            width: "48%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={jumi}
            style={{ maxWidth: "537px", maxHeight: "747px", width: "90%" }}
            alt="auth"
          />
        </div>
        <div className="Halfpage" style={{ paddingRight: "20px" }}>
          <h1>about</h1>
          <p>
            Jumi Bello is not your traditional black writer. She grew up in the
            Washington DC suburbs and started writing spoken word poetry at age
            sixteen. After graduating from a small liberal arts college in the
            Midwest through the luck of a Posse Foundation scholarship, she
            spent the majority of her twenties teaching high school in Taiwan
            and mainland China. She returned to the United States to study
            fiction with the support of fellowship at the Iowa Writer’s
            Workshop.
          </p>
          <p>
            Her work has received support from the University of Iowa,
            StoryStudio Chicago, the Corporeal Writing Center and Tin House. In
            fall 2021, She will be attending the University of Nevada Las Vegas
            as a Black Mountain Institute PhD candidate in nonfiction. Jumi has
            just completed her debut novel and is working on a nonfiction book
            about mental illness, race and police brutality. Jumi’s work fights
            to show the marginalized that our stories matter. This world is ours
            too.
          </p>
        </div>
      </div>
      <div
        style={{
          background: "rgba(245, 225, 164, 0.15)",
          width: "100vw",
          height: "309px",
          display: "flex",
        }}
      >
        <img
          src={footer}
          width="50%"
          alt="flower"
          style={{ minHeight: "309px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>stay updated</h1>
          <TextField label="Email" />
        </div>
      </div>
    </div>
  );
}

export default App;
