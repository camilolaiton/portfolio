import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
// import ResearchExperience from './components/ResearchExperience';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => {
  const [sharedData, setSharedData] = useState({});
  const [loading, setLoading] = useState(true);

  const loadProfileData = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/personal_information.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSharedData(data);
      document.title = data.name || 'Camilo Laiton Portfolio';
      setLoading(false);
    } catch (error) {
      console.error('Error loading profile data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'var(--gradient-hero)',
        color: 'var(--color-text-on-dark)',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        Loading portfolio...
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation />
      
      <Header 
        name={sharedData.name}
        socialInfo={sharedData.social}  
      />
      
      <About 
        languages={sharedData.speakLanguages}
      />
      
      <Projects />
      
      <WorkExperience 
        workInfo={sharedData.projects}
      />

      <Publications 
        researchInfo={sharedData.research}
      />
      
      <Skills 
        sharedSkills={sharedData.skills}
        resumeBasicInfo={sharedData.name}
      />
{/*       
      <ResearchExperience 
        researchInfo={sharedData.research}
      /> */}
      
      <About 
        honors={sharedData.honors}
        certificates={sharedData.certificates}
        showAbout={false}
        showHonors={true}
        showCertificates={false}
      />
      
      <Footer 
        socialInfo={sharedData.social}
        name={sharedData.name}  
      />
    </div>
  );
};

export default App;
