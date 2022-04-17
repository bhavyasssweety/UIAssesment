import React, { Component } from "react";
import "./Section1.css";
import logo from "../assets/logo.svg";
import homepageimage1 from "../assets/be prepared image.png";
import location from "../assets/location.svg";
import shoe from "../assets/shoe.svg";
import bag from "../assets/bag.svg";
import travelAdvisor from "../assets/Travel Advisor.svg";
import unitedTravel from "../assets/United Travel.svg";
import travelChannel from "../assets/Travel Channel.svg";
import tripraja from "../assets/tripraja.svg";
import Booking from "../assets/Booking.svg";
import safeatimg from "../assets/safe and affordable.png";
import enjoyurlife from "../assets/enjoy your life.png";
import enjoynature from "../assets/lets enjoy nature with us.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="mainContainer">
          {/* Navbar code starts here */}
          <div className="navbar">
            <div className="logo">
              <img src={logo} />
            </div>
            <ul className="nav-links">
              <div className="menu">
                <li>
                  <a href="/">Location</a>
                </li>
                <li>
                  <a href="/">Blogs</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </div>
            </ul>
          </div>
          {/* Navbar code ends here */}
          {/* Homepage code starts from here */}
          <div className="Navbar-homePage">
            <div className="homePage-Leftside">
              <div className="homePage-Mainhead">
                Be prepared for the mountains and beyond.
              </div>
              <div className="homePage-Normalhead">
                Are you looking for amazing hiking travel? Don't worry! we got
                it for you!
              </div>
              <div className="homePage-buttons">
                <button className="homePage-buttons1">Contact Us</button>
                <button className="homePage-buttons2">Watch Video</button>
              </div>
            </div>
            <div className="Navbar-rightSide">
              <img src={homepageimage1}></img>
            </div>
          </div>
          {/* Homepage code ends here */}
          {/* Section2 starts from here  */}
          <div className="Threethingslist">
            <div className="Threethingslist1">
              <div class="logo">
                <img src={location}></img>
              </div>
              <div className="Threethingslist1-head">Secret Locations</div>
              <div className="Threethingslist1-content">
                Lorem ipsum dolar sit amet, consectet adipiscing elit,sed do
                lorem ipsum
              </div>
              <a className="Threethingslist1-Link">Read More</a>
            </div>
            <div className="Threethingslist2">
              <div className="logo">
                <img src={shoe}></img>
              </div>
              <div className="Threethingslist2-head">Safe Adventure</div>
              <div className="Threethingslist2-content">
                Lorem ipsumdolar sit amet,consectet adipiscing elit,sed do lorem
                ipsum
              </div>
              <a className="Threethingslist1-Link">Read More</a>
            </div>
            <div className="Threethingslist3">
              <div className="logo">
                <img src={bag} />
              </div>
              <div className="Threethingslist3-head">Professional Killers</div>
              <div className="Threethingslist3-content">
                Lorem ipsumdolar sit amet,consectet adipiscing elit,sed do lorem
                ipsum
              </div>
              <a className="Threethingslist1-Link">Read More</a>
            </div>
          </div>
          {/* Section2 ends here  */}
          {/* Explore code starts here */}
          <div className="Explore">
            Don't hesitate to contact us to get better Information.{" "}
            <i className="Explore-italics">Explore All TREKKING.</i>
          </div>
          {/* Explore code ends here */}
        </div>
        {/* safe and affordable section starts here */}
        <div className="safeandaffordablebg">
          <div className="safeandaffordablebg-homePage">
            <div className="safeandaffordablebg-rightSide">
              <img src={safeatimg}></img>
            </div>
            <div className="safeandaffordablebg-Leftside">
              <div className="safeandaffordablebg-Mainhead">
                Safe, Affordable,And Trusted
              </div>
              <div className="safeandaffordablebg-Normalhead">
                Volunteer trail stewardship projects in America’s parks and
                forests designed specifically for college student groups and
                young professionals.
              </div>
              <div className="safeandaffordablebg-buttons">
                <button className="safeandaffordablebg-buttons1">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* safe and affordable section ends here */}
        {/* Trusted companies start here */}
        <div className="Explore-2">
          <p className="safeJourney">Safe Journey</p>
          <p className="Trustedbbc">Trusted by Big Companies </p>
        </div>

        <div className="Companies">
          <div className="Companiesimg">
            <img src={travelAdvisor} />
          </div>
          <div className="Companiesimg4">
            <img src={unitedTravel} />
          </div>
          <div className="Companiesimg1">
            <img src={travelChannel} />
          </div>
        </div>
        <div className="Companies1">
          <div className="Companiesimg3">
            <img src={tripraja}></img>
          </div>
          <div className="Companiesimg5">
            <img src={Booking}></img>
          </div>
        </div>
        {/* Trusted companies ends here */}
        {/* Enjoy life section starts here */}
        <div className="Enjoylifenow">
          <div className="Enjoylifenow-homePage">
            <div className="Enjoylifenow-Leftside">
              <div className="Enjoylifenow-Mainhead">
                Enjoy Your Life With Us Now!
              </div>
              <div className="Enjoylifenow-Normalhead">
                Volunteer trail stewardship projects in America's parks and
                forests designed specifically for college student groups and
                young professionals.
              </div>
              <div className="Enjoylifenow-buttons">
                <button className="Enjoylifenow-buttons1">Contact Us</button>
              </div>
            </div>
            <div className="Enjoylifenow-rightSide">
              <img src={enjoyurlife} />
            </div>
          </div>
        </div>
        {/* Enjoy life section ends here */}

        <div className="Explore-2"></div>
        {/* Let us enjoy nature code starts from here */}
        <div className="letusenjoy">
          <div className="letusenjoy-homePage">
            <div className="letusenjoy-rightSide">
              <img src={enjoynature}></img>
            </div>
            <div className="letusenjoy-Leftside">
              <div className="letusenjoy-Mainhead">
                Let's Enjoy Nature With Us
              </div>
              <div className="letusenjoy-Normalhead">
                <div>
                  Volunteer trail stewardship projects in America's parks and
                  forests designed specifically for college student groups and
                  young professionals.
                </div>
              </div>
              <div className="letusenjoy-buttons">
                <button className="letusenjoy-buttons1">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Let us enjoy nature code ends from here */}
        {/* slider starts here */}
        <div className="Explore-2">
          <p className="safeJourney">Happy Hikers</p>
          <p className="Trustedbbc">Client's Say About Us </p>
          <div>Need to implement slider here</div>
        </div>
        {/* slider ends here */}
        {/* Footer code starts here */}
        <div className="Footer">
          <div className="Footer-matter">
            <div className="Footer-Header">
              Subscribe to Our Newsletter For Weekly Article Update.
            </div>
            <div className="Footer-Content">
              We have hiking-related blog so we can share our thought and
              rutinity in our blog that updated weekly. We will not spam you, we
              promise.
            </div>
            <div className="Emailwrap">
              <input type="text" placeholder="Enter your e-mail address" />
              <button className="Email">Subscribe</button>
            </div>
          </div>
          <div className="Footerlast">
            <div className="highking">
              <div className="logo">
                <img src={logo}></img>
              </div>
              <div className="highking-content">
                We envision a world where everyone feels welcome in the American
                hiking community.
              </div>
              <div className="highking-icons">
                <div>
                  <img src={facebook} class="highking-icons1" />
                </div>
                <div>
                  <img src={twitter} class="highking-icons1" />
                </div>
                <div>
                  <img src={insta} class="highking-icons1" />
                </div>
              </div>
            </div>
            <div className="location">
              <b className="linkshead">Location</b>
              <a className="links">America</a>
              <a className="links">Asia</a>
              <a className="links">Europe</a>
              <a className="links">Africa</a>
            </div>
            <div className="contact">
              <b className="linkshead">Contact</b>
              <a className="links">About Me</a>
              <a className="links">Teams</a>
              <a className="links">Profile</a>
              <a className="links">FAQ</a>
            </div>
            <div className="legals">
              <b className="linkshead">Legals</b>
              <a className="links">Privacy</a>
              <a className="links">Disclaimer</a>
              <a className="links">Terms</a>
              <a className="links">Company</a>
            </div>
          </div>
          <div className="copyrights">
            Copyright © 2021. All Right Reserved.
          </div>
        </div>
        {/* Footer code ends here */}
      </div>
    );
  }
}
