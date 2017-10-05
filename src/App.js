import React, { Component } from 'react';
import { backgroundColor, primaryTextColor } from './style';
import PageHeader from './PageHeader';
import PageSubHeader from './PageSubHeader';
import ContactInfoList from './ContactInfoList';
import ContactEntry from './ContactEntry';
import SectionHeader from './SectionHeader';
import SkillCounter from './SkillCounter';
import Entry from './Entry';
import EntryList from './EntryList';
import EntryBullet from './EntryBullet';
import {
  marginPageTop,
  marginPageLeft,
  marginPageRight,
  centerColumnMargin,
} from './style';

const mainStyle = {
  backgroundColor,
  color: primaryTextColor,
  paddingTop: marginPageTop,
  paddingLeft: marginPageLeft,
  paddingRight: marginPageRight,
  display: 'flex',
};

const leftStyle = {
  width: '40vw',
  borderRight: '1px solid rgb(59,59,59)',
  paddingRight: centerColumnMargin,
};

const rightStyle = {
  paddingLeft: centerColumnMargin,
};

function App() {
  return (
    <div style={mainStyle}>
      <div className="left" style={leftStyle}>
        <PageHeader>Joshua Marantz</PageHeader>
        <PageSubHeader>Full Stack Web Developer</PageSubHeader>
        <ContactInfoList>
          <ContactEntry>Telephone 732-425-7681</ContactEntry>
          <ContactEntry>Email marantzj@gmail.com</ContactEntry>
          <ContactEntry>Github github.com/JNaftali</ContactEntry>
          <ContactEntry>LinkedIn linkedin.com/in/joshmarantz</ContactEntry>
        </ContactInfoList>
        <SectionHeader>Profile</SectionHeader>
        <div>
          Long time coding enthusiast, recent bootcamp graduate. I like dancing,
          gaming, math and logic puzzles.
        </div>
        <SectionHeader>Education</SectionHeader>
        <Entry>
          Dev Bootcamp APR-SEP 2016
          <div>
            18 week program (9 remote, 9 in person) teaching programming
            concepts and full stack development with Ruby, Rails, Javascript,
            and React.
          </div>
        </Entry>
        <SectionHeader>Technical Skills</SectionHeader>
        <SkillCounter number={5}>Javascript</SkillCounter>
        <SkillCounter number={4}>Ruby</SkillCounter>
        <SkillCounter number={4}>React/JSX</SkillCounter>
        <SkillCounter number={5}>REGEX</SkillCounter>
        <SkillCounter number={3}>Lua</SkillCounter>
        <SkillCounter number={3}>UNIX Scripting</SkillCounter>
      </div>
      <div className="right" style={rightStyle}>
        <SectionHeader>Experience</SectionHeader>
        <Entry>
          Junior Frontend Developer at Sesame Workshop - 2017
          <EntryList>
            <EntryBullet>
              Worked with the Sesame English team, which designed and deployed
              content for early childhood English language courses for certain
              Japanese schools
            </EntryBullet>
            <EntryBullet>
              Implemented a redesign of the main site in React
            </EntryBullet>
            <EntryBullet>
              Fixed bugs and expanded capabilities of the backend Node API that
              tracked student data
            </EntryBullet>
            <EntryBullet>
              Rewrote (from web components into React), expanded upon, and
              delivered an app that queried and organized student data and
              allowed teachers to respond to and grade students' assignments
            </EntryBullet>
            <EntryBullet>
              Projects are all owned by Sesame Workshop and as such I'm
              precluded from publishing the code - all is available upon request
            </EntryBullet>
          </EntryList>
        </Entry>
        <Entry>
          Dev Bootcamp - 2016-now
          <EntryList>
            <EntryBullet>
              Working as a teaching assistant helping students to solve coding
              challenges
            </EntryBullet>
            <EntryBullet>
              Advise them on community standards and ways to keep code readable
              and maintainable
            </EntryBullet>
            <EntryBullet>
              Review and annotate code that's been written, providing helpful
              feedback on good/bad practices and additional methods that might
              have made their coding experience easier.
            </EntryBullet>
          </EntryList>
        </Entry>
        <SectionHeader>Projects</SectionHeader>
        <Entry>
          Sesame Portfolio App - code available upon request
          <EntryList>
            <EntryBullet>
              App to allow students to view work submitted through the main site
              and teachers to grade that work, as well as track the progress of
              students in their class
            </EntryBullet>
            <EntryBullet>React code with custom css</EntryBullet>
            <EntryBullet>
              Supports reviewing text and audio submissions on both Apple and
              Android phones and tablets as well as Chrome, Firefox, and
              Edge/Safari on both Windows and Mac OS X
            </EntryBullet>
            <EntryBullet>
              API module easy to replace or reconfigure, so the app could easily
              be integrated into any similar future projects
            </EntryBullet>
          </EntryList>
        </Entry>
        <Entry>
          MTA-WTF - WTF-MTA.HEROKUAPP.COM
          <EntryList>
            <EntryBullet>
              Dynamic visualization of the current state of the NYC subways
            </EntryBullet>
            <EntryBullet>
              Delays are dashed lines, lines without service don't show up
            </EntryBullet>
            <EntryBullet>
              Custom Rails API - serves information parsed from the MTA's GTFS
              feed and scraped from their live service advisories using Nokogiri
              and Regex
            </EntryBullet>
            <EntryBullet>
              Independent Javascript front end built using an unholy combination
              of Google Maps' API and Facebook's React JS library{' '}
            </EntryBullet>
          </EntryList>
        </Entry>
      </div>
    </div>
  );
}

export default App;
