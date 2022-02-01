import React, { Component } from "react";
import '../css/Skills.css';
import { Icon } from '@iconify/react';

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var skills = this.props.sharedSkills.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-logo">
                <Icon icon={skills.class}  style={{ fontSize: "300%" }} color={skills.color}/>
                <p
                  className="text-center skills-name"
                >
                  {skills.name} 
                </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <div className="skills">
          
        <h1 className="text-white section-title">Skills</h1>

        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>

      </div>
    );
  }
}

export default Skills;