import React, { Component } from 'react';
import profilePic from "./img1.png";
import mespic from "./img2.jpg";
import solarpic from "./img3.jpg";
import hitphams from "./img4.jpg";


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  toggleBio = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={profilePic} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
        <h1>Sobhan Babu</h1>
        <button onClick={this.toggleBio} style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {this.state.showMore ? 'Show Less' : 'Read More'}
        </button>
        {this.state.showMore && (
          <p style={{ padding: '10px', maxWidth: '600px', margin: 'auto' }}>
            Hello! I am Sobhan Babu, </p>
        )}
        
        <h2>Highlighted Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
          <div>
            <img src={mespic} alt="MES" style={{ width: '150px', height: '100px' }} />
            <h3>HTMLProject</h3>
            <p>A HTML prohect is project done by me hence project done  in real time.</p>
            <a href="#MES">Project Link</a>
          </div>
          <div>
            <img src={solarpic} alt="Solar GRAPH" style={{ width: '150px', height: '100px' }} />
            <h3>FRont-end</h3>
            <p>front end is a good course i learned it well hard javascript node js what  else.</p>
            <a href="#Solar Graph">Project Link</a>
          </div>
          <div>
            <img src={hitphams} alt="HITPHAMS" style={{ width: '150px', height: '100px' }} />
            <h3>Backend</h3>
            <p>A software which is Backend production process.</p>
            <a href="#HITPHAMS">Project Link</a>
          </div>
        </div>
        
        <h2>Connect with me!!!</h2>
        <div style={{ fontSize: '24px' }}>
          <a href="mailto:sobhanch2000@gmail.com" style={{ margin: '0 10px' }}>📧</a>
          <a href="https://github.com/sobhanbabuch" style={{ margin: '0 10px' }}>🐱</a>
        </div>
      </div>
    );
  }
}

export default MyProfile;