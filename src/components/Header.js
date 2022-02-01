import React, { Component } from 'react';
import '../css/Header.css';
import PersonalImg from '../imgs/CamiloLaiton.png'
import { Icon } from '@iconify/react';
import Typical from "react-typical";
// import Switch from "react-switch";

class Header extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked });
        this.setTheme();
        console.log(document.body.getAttribute("data-theme"))
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.socialInfo) {
            var networks = this.props.socialInfo.map(function (network) {
              console.log(network);
              return (
                  <div className='col-sm'>
                      <div className='row-sm'>
                        <span key={network.name} className="m-4">
                            <a href={network.url} target="_blank" rel="noopener noreferrer">
                                <Icon icon={network.class} height={30} color={network.color} />
                            </a>
                        </span>
                    </div>
                    <div className='row-sm social-title'>
                        {network.name}
                    </div>
                  </div>
              );
            });
        }

        return (
            <div className="header">
                <div className='row mx-auto' style={{height: '100%'}}>
                    <div className="my-auto">
                        
                        <img src={PersonalImg} alt="" className="i-img" />

                        <h1 className="mb-0 title-container">
                            <Typical steps={["Camilo Laiton 💻"]} wrapper="p" loop={50} />
                            {/* <Icon icon="emojione:desktop-computer" className='' height={50}/> */}
                        </h1>

                        <div className='i-title'>
                        
                            <div className='i-title-wrapper'>
                                
                                <div className='i-title-item'>
                                    Computer Vision Engineer
                                </div>

                                <div className='i-title-item'>
                                    Machine Learning Developer
                                </div>

                                <div className='i-title-item'>
                                    Deep Learning Researcher
                                </div>

                                <div className='i-title-item'>
                                    Language Lover
                                </div>

                                <div className='i-title-item'>
                                    Enterpreneur
                                </div>
                                    
                            </div>
                        </div>

                        {/* <div className='i-theme'>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#cfd8dc"
                                onColor="#353535"
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                    <Icon icon="bi:cloud-moon-fill" style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}/>
                                }
                                checkedIcon={
                                    <Icon icon="emojione:sun" style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}/>
                                }
                                id="icon-switch"
                            />
                        </div> */}
                        <div className='i-theme row' style={{marginLeft: "70px", marginRight: "70px"}}>
                            {networks}
                        </div>
                        
                        <a href='https://raw.githubusercontent.com/camilolaiton/portfolio/master/public/DL%20Camilo%20Laiton%20-%20Resume.pdf' className="btn btn-outline-light btn-rounded i-cv" target="_blank" rel="noreferrer" data-mdb-ripple-color="dark" role="button" download>
                            Click to download my CV
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;