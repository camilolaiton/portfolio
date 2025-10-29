import React, { Component } from "react";
import '../css/Footer.css';
import { Icon } from '@iconify/react';

class Footer extends Component {
  render() {
    if (this.props.socialInfo) {
      var networks = this.props.socialInfo.map(function (network) {
        // console.log(network);
        return (
            <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                    <Icon icon={network.class} height={30} color={network.color} />
                </a>
            </span>
        );
      });
    }

    return (
      <footer className="footer py-4">
        <div className="col-md-12">
          <div className="social-links text-center">{networks}</div>

          <div className="copyright py-2 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.name
                  ? this.props.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
