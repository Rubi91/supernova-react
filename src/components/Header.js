import React, {Component} from 'react';
import { Social } from '../components/Social';
import { About } from '../components/About';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Social/>
        <About/>
      </header>
    );
  }
}
