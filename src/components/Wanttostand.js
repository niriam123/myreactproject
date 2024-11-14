import React, { useRef, useState, useEffect } from "react";

const Wanttostand = () => {
  const [bgcolor, setBgColor] = useState('#fff')
  const [pcolor, setPColor] = useState('rgb(29, 15, 65)')
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Check if section is sticky (at the top of the viewport)
            if (rect.top <= 128) {
              setBgColor("#1d0f41");
              setPColor('#fff') // Change to desired color when sticky
            } else {
              setBgColor("white");
              setPColor('rgb(29, 15, 65)') // Reset to original color
            }
          }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

     
  return (
    <section className="section" id="want-to-stand-bg" style={{ backgroundColor: bgcolor}}>
        <div className="container section-padding">
            <div className="columns">
                <div className="column is-4-widescreen">
                    <div className="sticky-content" ref={sectionRef}>
                        <h6 className='sticky'>We want to stand out</h6>
                        <h2 style={{color: pcolor}}>Why Kromlin</h2>

                        <div className="dashed-line"></div>
                        <div>
                            <a className="a-link" href='' style={{color: pcolor}}>DISCOVER OUR SERIES 
                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z" fill="rgb(184, 79, 248)"></path><path d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z" fill="rgb(184, 79, 248)"></path></svg></a>
                        </div>
                    </div>
                </div>
                <div className="column is-5-widescreen is-offset-1">
                    <p className='padding-bottom-60' style={{color: pcolor}}>Kromin allows its clients to bring ambitious projects to life. Starting 
                        from Data Analysis we shape Marketing Strategies and Digital Products, 
                        enriched by our Contents Media. We talk about numbers and results, 
                        our services are just the tip of the iceberg. The proactivity of our approach 
                        facilitates teamwork with our clients, making us proud of what we do.</p>
                    <div>
                       <h6 className="padding-bottom-20">Digital Natives</h6>
                        <p className='padding-bottom-60' style={{color: pcolor}}>Data, experience and innovation inspire our approach. 
                        We focus on innovation, researching new digital technologies to deliver new solutions 
                        and services.</p>
                    </div>
                    <div>
                        <h6 className="padding-bottom-20">Company Network</h6>
                        <p className='padding-bottom-60' style={{color: pcolor}}>We have a solid network of digital players who, 
                        like us, believe in innovation and contribute to the success of our projects.</p>
                    </div>
                    <div>
                        <h6 className="padding-bottom-20">Multipotential</h6>
                        <p className='padding-bottom-60' style={{color: pcolor}}>Each member of the Team takes part in the Kromin 
                        project with his own skills. We love groups of highly competent people. Our Corporate 
                        Culture makes us a moving machine with focused and strategic choices. We ask our clients 
                        to get to know the teams working on the project personally, to give a face and a voice 
                        to each team member working on the project and its goals.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Wanttostand
