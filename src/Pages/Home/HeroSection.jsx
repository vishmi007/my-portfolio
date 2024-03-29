/* Author : Vishmi Kalansooriya
File Name: HeroSection.jsx
Purpose: To implement the landing page of my(vishmi's) portfoio
Date: 18/02/2023
Last modified: 19/02/2023
*/

export default function HeroSection() {

  const handleDownloadResume = () => {
   
    const resumePath = './Vishmi-Resume.pdf';
    
    // Create an anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = resumePath;

    // Specify the filename for the download
    downloadLink.download = 'Vishi_K_Resume.pdf';

    // Trigger the click event on the anchor element
    downloadLink.click();
  };

    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hi!, I'm </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color"> Vishi K.</span>{" "}
            </h1>
            <p className="hero--section-description">             
            A recent graduate with a degree in Software Engineering and a passion for crafting digital solutions.
            I am actively seeking opportunities to kick-start my career as a junior software engineer or a junior devOps Engineer. Whether you need a website developed or are looking to add a dynamic team member, I'm eager to contribute my skills and enthusiasm to make an impact.    
            </p>
          </div>
          <button className="btn btn-primary"  onClick={handleDownloadResume}>Download resume</button>
        </div>
        <div className="hero--section--img">
          <img src={process.env.PUBLIC_URL + '/img/me-image.png'} alt="About Me" />
        </div>
      </section>
    );
  }
