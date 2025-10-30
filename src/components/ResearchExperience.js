import React, { Component } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../css/Experience.css';
import { Icon } from '@iconify/react';
import Badge from "react-bootstrap/Badge";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

class ResearchExperience extends Component {
    
    // Helper function to determine if URL is external
    getImageSrc(imageUrl) {
        if (!imageUrl) return '';
        // Check if it's an external URL (starts with http:// or https://)
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }
        // Otherwise, treat as local path
        return process.env.PUBLIC_URL + '/' + imageUrl;
    }
    
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

                var researchImages = item.images.map(function(image, rkey) {
                    return (
                        <React.Fragment key={rkey}>  {/* Move key here! */}
                            <img 
                                className="d-block w-100 sliderimg" 
                                src={this.getImageSrc(image.url)} 
                                alt={image.desc}
                                title="Click to expand" 
                                onDragStart={handleDragStart}
                                // Remove key from here
                                onClick={function changeCardState() {
                                    let modal = document.getElementById("modal_" + rkey + "_" + item.id);
                                    modal.style.display = "block";
                                }}
                            />
                        </React.Fragment>
                    )
                }.bind(this));

                var modals = item.images.map(function(image, rkey) {
                    return (
                        <React.Fragment key={rkey}>  {/* Move key here! */}
                            <div id={"modal_" + rkey + "_" + item.id} className="modal" tabIndex="-1" role="dialog" style={{paddingTop: "10px"}}>
                                {/* Remove key from the div */}
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{item.english.title}</h5>
                                    </div>
                                    <div className="modal-body">
                                    <img 
                                        className="d-block w-200 sliderimgzoomed zoom" 
                                        src={this.getImageSrc(image.url)} 
                                        alt={image.desc}
                                        title="Click to expand"
                                    />
                                    </div>
                                    <p className="sliderimgDesc">{image.desc}</p>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={function() {
                                            let modal = document.getElementById("modal_" + rkey + "_" + item.id);
                                            modal.style.display = "none";
                                        }}>Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }.bind(this));

                return (
                    <React.Fragment key={i}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', borderRadius: "30px", border: '1px solid var(--color-surface-alt)'}}
                            contentArrowStyle={{ borderRight: '7px solid var(--color-surface)' }}
                            date={item.startDate + " - " + item.endDate}
                            dateClassName="dateTimeElement"
                            iconStyle={{ background: "var(--color-secondary)", color: '#fff', boxShadow: '0 0 0 4px var(--color-background), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)' }}
                            icon={<Icon icon={item.technologies[0].class}/> }
                            visible={false}
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

                            {
                                item.images.length ? <div>
                                        <h4 className="vertical-timeline-element-subtitle itemSubtitle">Images </h4>
                                        <AliceCarousel 
                                            mouseTracking 
                                            items={researchImages}
                                            animationDuration={1000}
                                            autoHeight={true}
                                            autoWidth={true}
                                            autoPlay={true}
                                            autoPlayInterval={5000}
                                            // disableSlideInfo={false}
                                            // infinite={true}
                                            // autoPlayControls={true}
                                            disableButtonsControls={true}
                                            disableDotsControls={false}
                                            animationType={"slide"}
                                        />
                                        {modals}
                                    </div> : null
                            }
                            
                            <p style={{fontStyle: "italic"}}>
                                {item.organization} - {item.researchGroup}
                            </p>
                            <hr className="itemHr"/>
                            
                            <div className="technologyTimeElement">
                                {technologies}
                            </div>
                        </VerticalTimelineElement>
                    </React.Fragment>
                );
            });
        }

        return (

            <div className="about col-md-12" id="research-experience">
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