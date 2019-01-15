import React, { Component } from "react";
import "./Home.css";
import About from "../../sections/About";
import Portfolio from "../../sections/Portfolio";
import Contact from "../../sections/Contact";
import Nav from "../../components/Nav";
// import Typing from "react-typing-animation";
import Typed from "react-typed";
import ScrollableAnchor from "react-scrollable-anchor";
import LogoWhite from "../../components/Nav/images/mylogoDesignDec2018-white.png";
import LogoDark from "../../components/Nav/images/mylogoDesignDec2018.png";
import ScrollBtn from "../../components/ScrollBtn";
import Breakpoint, { BreakpointProvider } from "react-socks";
import SideNav from "../../components/SideNav";

//ADD BREAKPOINTS:
//TODO: Portfolio: Medium (icon size)

const scroll = {
  opacity: "0.3",
  backgroundColor: "gray",
  width: "40px",
  height: "40px",
  position: "fixed",
  bottom: "10px",
  right: "10px",
  borderRadius: "5px",
  border: "none"
};

const arrowUp = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-9px",
  marginLeft: "-5px"
};

class Home extends Component {
  state = {
    isTop: true,
    intervalId: 0,
    scrollStepInPx: 50,
    delayInMs: 16.66
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 850;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
    console.log(window.innerWidth);
  }

  openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    return (
      <div>
        <div>
          <BreakpointProvider>
            <Breakpoint small down>
              <SideNav
                AboutUrl="#About"
                PortfolioUrl="#Portfolio"
                ContactUrl="#Contact"
                image={this.state.isTop ? LogoWhite : LogoDark}
              />
            </Breakpoint>
            <Breakpoint medium up>
              <Nav
                AboutUrl="#About"
                PortfolioUrl="#Portfolio"
                ContactUrl="#Contact"
                image={this.state.isTop ? LogoWhite : LogoDark}
                style={
                  this.state.isTop
                    ? { opacity: 0.6, color: "#ffffff" }
                    : { opacity: 0.6, color: "#000000" }
                }
              />
            </Breakpoint>

            {/* <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */}

            <div className="jumbotron jumbotron-fluid heading-background text-white">
              <div className="container mb-5 text-center margin-top heading-font">
                <Breakpoint small down>
                  <h3>
                    <Typed
                      strings={[
                        "<h3>Binh (Cindy) Lam</h1> <h5>A Full Stack Web Developer</h3>"
                      ]}
                      typeSpeed={100}
                      cursorChar="</>"
                    />
                  </h3>
                </Breakpoint>

                <Breakpoint medium up>
                  <h3>
                    <Typed
                      strings={[
                        "<h1>Binh (Cindy) Lam</h1> <h5>A Full Stack Web Developer</h5>"
                      ]}
                      typeSpeed={100}
                      cursorChar="</>"
                    />
                  </h3>
                </Breakpoint>
                <br />

                {/* Typing npm is more customized, but there is some visual display issues when scrolling */}
                {/* <Typing speed={50}>
                <h2 className="h2">
                  WELCOME...
                  <Typing.Delay ms={400} />
                  <Typing.Backspace count={11} />
                  HELLO! I AM
                  <Typing.Delay ms={400} />
                </h2>
                <br />
                <h1 className="display-4 heading-title">Binh (Cindy) Lam</h1>
                <br />
                <Typing.Delay ms={400} />
                <p className="h4">A Full Stack Web Developer</p>
              </Typing> */}

                {/* <a className="btn btn-light heading-button" href="/">Find Out More</a> */}
              </div>
            </div>

            {/* About Page */}
            <ScrollableAnchor id={"About"}>
              <div>
                <About />
              </div>
            </ScrollableAnchor>

            <Breakpoint small down>
            <div className="subSection-small" />
            </Breakpoint>

            <Breakpoint medium up>
            <div className="subSection" />
            </Breakpoint>

            {/* Portfolio Page */}
            <ScrollableAnchor id={"Portfolio"}>
              <div>
                <Portfolio />
              </div>
            </ScrollableAnchor>

            <Breakpoint small down>
            <div className="subSection-small" />
            </Breakpoint>

            <Breakpoint medium up>
            <div className="subSection" />
            </Breakpoint>

            {/* Contact Page */}
            <ScrollableAnchor id={"Contact"}>
              <div>
                <Contact
                  githublink={() =>
                    this.openInNewTab("https://github.com/ngl4")
                  }
                  linkedinlink={() =>
                    this.openInNewTab(
                      "https://www.linkedin.com/in/binh-cindy-lam-49524a84/"
                    )
                  }
                />
              </div>
            </ScrollableAnchor>
          </BreakpointProvider>
        </div>

        {this.state.isTop ? (
          ""
        ) : (
          <ScrollBtn
            scrollStepInPx="50"
            delayInMs="16.66"
            scroll={scroll}
            arrowUp={arrowUp}
          />
        )}
      </div>
    );
  }
}

export default Home;
