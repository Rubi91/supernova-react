import React, { Component } from 'react';

export class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="https://www.linkedin.com/in/rubivega/" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/rubivega/" target="_blank">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="https://codepen.io/supern0va/" target="_blank">
          <ion-icon name="logo-codepen"></ion-icon>
        </a>
        {/*}<a href="https://www.linkedin.com/in/rubivega/" target="_blank" rel="noopener">
          <ion-icon name="paper"></ion-icon>
        </a>*/}
      </div>
    );
  }
}
