import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import $ from "jquery";
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import ResearchExperience from './components/ResearchExperience';
import Skills from './components/Skills';
import { Component } from 'react';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      language: "english",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage) {
    this.swapCurrentlyActiveLanguage(pickedLanguage);
    // console.log(pickedLanguage)
  }

  swapCurrentlyActiveLanguage(pickedLanguage) {

    if ("english" === pickedLanguage && this.state.language !== "english") {
      this.setState({ language: "english" });
      
      document
        .getElementById(pickedLanguage)
        .setAttribute("filter", "brightness(40%)");
        
      document
        .getElementById("spanish")
        .removeAttribute("filter", "brightness(40%)");
    } else if ("spanish" === pickedLanguage && this.state.language !== "spanish") {
      this.setState({ language: "spanish" });
      document
        .getElementById(pickedLanguage)
        .setAttribute("filter", "brightness(40%)");
        
      document
        .getElementById("english")
        .removeAttribute("filter", "brightness(40%)");
    }
  }

  loadProfileData() {
    $.ajax({
      url: `personal_information.json`,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ sharedData: data });
        console.log(this.state.sharedData)
        document.title = `${this.state.sharedData.name}`;
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.loadProfileData();
    this.applyPickedLanguage(
      "english"
    )
  }

  render () {
    return (
      <div className="App">
        <Header 
          name={this.state.sharedData.name}
          socialInfo={this.state.sharedData.social}  
        />
        
        {/* <div className="col-md-12 mx-auto text-center language">
          <h1>
            Select a language
          </h1>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                "english"
              )
            }
            style={{ display: "inline" }}
          >
            <Icon className='language-icon' icon="twemoji-flag-for-flag-united-states" id="english" height={50}/>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                "spanish"
              )
            }
            style={{ display: "inline" }}
          >
            <Icon className='language-icon mx-2' icon="twemoji-flag-for-flag-spain" id="spanish" height={50}/>
          </div>
        </div> */}

        <About 
          languages={this.state.sharedData.speakLanguages}
          honors={this.state.sharedData.honors}
          certificates={this.state.sharedData.certificates}
        />
        <WorkExperience 
          workInfo={this.state.sharedData.projects}
        />
        <Skills 
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.sharedData.name}
        />
        <ResearchExperience 
          researchInfo={this.state.sharedData.research}
        />
        <Footer 
          socialInfo={this.state.sharedData.social}
          name={this.state.sharedData.name}  
        />
      </div>
    );
  }
}

export default App;
