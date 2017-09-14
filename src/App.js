import React, { Component } from 'react';
import { backgroundColor, primaryTextColor } from './style'
import PageHeader from './PageHeader'
import PageSubHeader from './PageSubHeader'
import ContactInfoList from './ContactInfoList'
import ContactEntry from './ContactEntry'
import SectionHeader from './SectionHeader'
import SkillCounter from './SkillCounter'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor, color: primaryTextColor}}>
        <div class='left'>
          <PageHeader>Joshua Marantz</PageHeader>
          <PageSubHeader>Full Stack Web Developer</PageSubHeader>
          <ContactInfoList>
            <ContactEntry>Telephone 732-425-7681</ContactEntry>
            <ContactEntry>Email marantzj@gmail.com</ContactEntry>
            <ContactEntry>Github github.com/JNaftali</ContactEntry>
            <ContactEntry>LinkedIn linkedin.com/joshmarantz</ContactEntry>
          </ContactInfoList>
          <SectionHeader>Profile</SectionHeader>
          <div>Long time coding enthusiast, recent bootcamp graduate.  I like dancing, gaming, math and logic puzzles.</div>
          <SectionHeader>Education</SectionHeader>
          <div>Dev Bootcamp APR-SEP 2016</div>
          <div>18 week program (9 remote, 9 in person) teaching programming concepts and full stack development with Ruby, Rails, Javascript, and React.</div>
          <SectionHeader>Technical Skills</SectionHeader>
          <SkillCounter number={5}>Javascript</SkillCounter>
          <SkillCounter number={4}>Ruby</SkillCounter>
          <SkillCounter number={4}>React/JSX</SkillCounter>
          <SkillCounter number={5}>REGEX</SkillCounter>
          <SkillCounter number={3}>Lua</SkillCounter>
          <SkillCounter number={3}>UNIX Scripting</SkillCounter>
        </div>
        <div class='right'>
          <SectionHeader>Projects</SectionHeader>
          <div>MTA-WTF - WTF-MTA.HEROKUAPP.COM</div>
          <ul>
            <li>Dynamic visualization of the current state of the NYC subways</li>
            <li>Delays are dashed lines, lines without service don't show up</li>
            <li>Custom Rails API - serves information parsed from the MTA's GTFS feed and scraped from their live service advisories using Nokogiri and Regex</li>
            <li>Independent Javascript front end built using an unholy combination of Google Maps' API and Facebook's React JS library </li>
            <li>Ports to react-native for iOS and Android in progress</li>
          </ul>
          <SectionHeader>Experience</SectionHeader>
          <div>Dev Bootcamp - 2016-now</div>
          <ul>
            <li>Working as a teaching assistant helping students to solve coding challenges</li>
            <li>Advise them on community standards and ways to keep code readable and maintainable</li>
            <li>Review and annotate code that's been written, providing helpful feedback on good/bad practices and additional methods that might have made their coding experience easier.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
