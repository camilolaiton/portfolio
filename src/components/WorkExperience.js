import React, { Component } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../css/Experience.css';
import { Icon } from '@iconify/react';
import Badge from "react-bootstrap/Badge";

class WorkExperience extends Component {

    render () {

        if (this.props.workInfo) {
            var workItems = this.props.workInfo.map(function(item, i) {

                var technologies = item.technologies.map(function(technology, iTech) {
                    return (
                        <Badge pill className="main-badge mr-2 mb-2" key={iTech} bg="secondary">
                            {technology.name} <Icon icon={technology.class} height={15} color={technology.color}/>
                        </Badge>
                    );
                });

                var descriptions = item.english.description.map(function(desc, iDes) {
                    return (
                        <div className="inline-block" style={{paddingLeft: "30px"}} key={iDes}>
                            <li>
                                {desc}
                            </li>
                        </div>
                    );
                });

                return (
                    <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#000', borderRadius: "30px"}}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date={item.startDate + " - " + item.endDate}
                            dateClassName="dateTimeElement"
                            iconStyle={{ background: "#dadada", color: '#fff' }}
                            icon={<Icon icon={item.technologies[0].class}/> }
                            visible={false}
                            key={i}
                        >
                        <h3 className="vertical-timeline-element-title workItemTitle">
                            <Badge pill className="main-badge mr-2 mb-2" bg="secondary">
                                {item.english.title}
                            </Badge>
                        </h3>
                        <hr className="itemHr"/>
                        
                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">
                            Organization
                            <div className="inline-block" style={{paddingLeft: "10px"}}>
                                {item.organization}
                            </div>
                        </h4>

                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">
                            Location
                            <div className="inline-block" style={{paddingLeft: "10px"}}>
                                {item.location}
                            </div>
                        </h4>
                        
                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">Description {descriptions}</h4>

                        <hr className="itemHr"/>
                        
                        <div className="technologyTimeElement">
                            {technologies}
                        </div>
                    </VerticalTimelineElement>
                );
            });
        }

        return (

            <div className="about col-md-12">
                <hr className="hr"/>
                <h1>
                    <span>Work experience</span>
                </h1>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline animate={true}>   
                        {workItems}
                    </VerticalTimeline>
                </div>
                <hr className="hr"/>
            </div>
        )
    }
}

export default WorkExperience;