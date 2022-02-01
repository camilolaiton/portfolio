import React, { Component } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../css/Experience.css';
import { Icon } from '@iconify/react';
import Badge from "react-bootstrap/Badge";

class ResearchExperience extends Component {

    render () {

        if (this.props.researchInfo) {
            var researchItems = this.props.researchInfo.map(function(item, i) {
                var topics = item.topics.map(function(topic, iTopic) {
                    return (
                        <Badge pill className="main-badge mr-2 mb-2" key={iTopic} bg="secondary">
                            {topic}
                        </Badge>
                    );
                });

                var tutors = item.tutors.map(function(tutor, iTutor) {
                    return (
                        <div className="inline-block" style={{paddingLeft: "30px"}} key={iTutor}>
                            <li>
                                <a href={tutor.cvlac} target="_blank" rel="noreferrer" className="tutorTimeElement">
                                    {tutor.name}
                                </a>
                            </li>
                        </div>
                    );
                });

                var papers = item.pubs.map(function(pub, iPub) {
                    return (
                        <div className="inline-block" style={{paddingLeft: "30px"}} key={iPub}>
                            <li>
                                <a href={pub.url} target="_blank" rel="noreferrer" className="tutorTimeElement">
                                    {pub.title}
                                </a>
                                &nbsp;({pub.state})
                            </li>
                        </div>
                    );
                });

                var technologies = item.technologies.map(function(technology, iTech) {
                    return (
                        <Badge pill className="main-badge mr-2 mb-2" key={iTech} bg="secondary">
                            {technology.name} <Icon icon={technology.class} height={15} color={technology.color}/>
                        </Badge>
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
                        <h3 className="vertical-timeline-element-title itemTitle">
                            {topics}
                        </h3>
                        <hr className="itemHr"/>
                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">
                            Title 
                            <div className="inline-block" style={{paddingLeft: "10px", fontStyle: "italic"}}>
                                {item.english.title}
                            </div>
                        </h4>
                        
                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">Mentors {tutors}</h4>

                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">Publications {papers}</h4>
                        
                        <p style={{fontStyle: "italic"}}>
                            {item.organization} - {item.researchGroup}
                        </p>
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
                    <span>Research experience</span>
                </h1>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline animate={true}>   
                        {researchItems}
                    </VerticalTimeline>
                </div>
                <hr className="hr"/>
            </div>
        )
    }
}

export default ResearchExperience;