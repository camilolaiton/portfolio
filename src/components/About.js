import React, { Component } from "react";
import '../css/About.css';
import { Icon } from '@iconify/react';

class About extends Component {

    render () {

        if (this.props.languages) {
            var languages = this.props.languages.map(function(language, i) {
                return (
                    <div className="col-sm" key={i}>
                        <div className="row-sm language-title">
                            {language.name} <Icon className='language-icon' icon={language.class} height={20}/>
                        </div>
                        <div className="row-sm language-subtitle">
                            {language.level}
                        </div>
                    </div>
                );
            });
        }

        if (this.props.honors) {
            var honors = this.props.honors.map(function(honor, i) {
                return (
                    <div className="row-sm" key={i}>
                        <li>
                            <span style={{fontWeight: "bold"}}>[{honor.year}]</span> {honor.honor}
                        </li>
                    </div>
                );
            });
        }

        if (this.props.certificates) {
            var certificates = this.props.certificates.map(function(certificate, i) {
                return (
                    <div className="row-sm" key={i}>
                        <Icon 
                            className='certificate-icon' 
                            icon={certificate.class} 
                            color={certificate.color} 
                            height={30}
                        /> &nbsp;
                        <a href={certificate.url} target="_blank" rel="noreferrer" className="i-certificate">
                            {certificate.title}
                        </a>
                    </div>
                );
            });
        }

        return (

            <div className="about col-md-12">
                <h1>
                    <span>About me</span>
                </h1>
                
                <p className="about-info container">
                    Camilo Laiton is a MsC candidate in Systems Engineering at the <a href="https://medellin.unal.edu.co/" target="_blank" rel="noreferrer" className="a-item">National University of Colombia - Medellín </a> 
                    under the supervision of <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000479918" target="_blank" rel="noreferrer" className="a-item">Prof. German Sanchez</a> and <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000027090" target="_blank" rel="noreferrer" className="a-item">Prof. Jhon Branch</a>.
                    He received the B.S. degree from the University of Magdalena in 2020 from where he graduated with highest honors.

                    He has substantial experience in deep learning, process development, image processing, and computer vision with the goal of developing AI-based 
                    solutions to address real-world challenges.
                </p>
                
                <hr className="hr"/>
                
                <h1>
                    <span>Languages</span>
                </h1>

                <div className="row" style={{marginBottom: "20px", marginRight: "120px"}}>
                    {languages}
                </div>

                <hr className="hr"/>
                
                <h1>
                    <span>Selected honors</span>
                </h1>

                <div className="row-sm honors container" style={{marginBottom: "20px", marginRight: "120px"}}>
                    {honors}
                </div>

                <hr className="hr"/>
                
                <h1>
                    <span>Certificates</span>
                </h1>

                <div className="row-sm certificates container" style={{marginBottom: "20px", marginRight: "120px"}}>
                    {certificates}
                </div>
                
            </div>
        )
    }
}

export default About;