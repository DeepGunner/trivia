import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/footer.scss';

class Footer extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<footer>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/singh-deepinder" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://github.com/deepgunner" target="_blank"><i className="fa fa-github"></i></a></li>
        </ul>
        <p><span>Deepinder Singh</span></p>
      </footer>
		);
  }
}

export default Footer;