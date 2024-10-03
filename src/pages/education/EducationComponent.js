import React, { Component } from "react";
import Header from "../../components/header/Header";
 
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { withRouter } from "react-router-dom";  // Import withRouter
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    const { location } = this.props; // Access location from props
    
    return (
      <div className="education-main">
        {/* Conditionally render the header */}
        {location.pathname !== "/" && location.pathname !== "/home" && (
          <Header theme={this.props.theme} />
        )}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
        
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

// Export component using withRouter HOC to get location
export default withRouter(Education);
