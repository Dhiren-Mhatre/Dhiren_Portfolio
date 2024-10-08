import React, { Component } from "react";
import Header from "../../components/header/Header";
 
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { withRouter } from "react-router-dom"; // Import withRouter

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const { location } = this.props; // Access location from props
    
    return (
      <div className="experience-main">
        {/* Conditionally render the header */}
        {location.pathname !== "/" && location.pathname !== "/home" && (
          <Header theme={theme} />
        )}
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

// Export component using withRouter HOC to get location
export default withRouter(Experience);
