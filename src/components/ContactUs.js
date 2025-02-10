import React from 'react'

const ContactUs = ({contactusTitle, contactusSubtitle, contactusBtnText}) => {
  return (
    <section className='contact-us-section purple-bg white-color'>
        <div className="container container-padding ">
            <div className="columns is-vcentered">
                <div className="column is-6-widescreen">
                    <h3 className='white-color padding-bottom-10'>{contactusTitle}</h3>
                    <p className='small white-color' dangerouslySetInnerHTML={{ __html: contactusSubtitle }}></p>
                </div>
                <div className="column is-6-widescreen is-display-flex is-justify-content-center">
                    <a href=''>
                      <button className='white-btn contact-us-btn'>{contactusBtnText}
                      <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5075 6.13733L12.894 1.49673C12.5536 1.15433 12.5536 0.599194 12.894 0.256797C13.2344 -0.0855991 13.7863 -0.0855991 14.1267 0.256797L19.3565 5.51736C19.6969 5.85976 19.6969 6.4149 19.3565 6.75729L14.1267 12.0179C13.7863 12.3603 13.2344 12.3603 12.894 12.0179C12.5536 11.6755 12.5536 11.1203 12.894 10.7779L17.5075 6.13733Z" fill="rgba(0, 0, 0, 0.7)"></path><path d="M18.7401 5.26064C19.2215 5.26064 19.6118 5.65318 19.6118 6.1374C19.6118 6.62162 19.2215 7.01416 18.7401 7.01416L0.871634 7.01416C0.390244 7.01416 0 6.62162 0 6.1374C0 5.65318 0.390244 5.26064 0.871634 5.26064L18.7401 5.26064Z" fill="rgba(0, 0, 0, 0.7)"></path></svg>
                      </button>
                    </a>
                </div>
            </div>
        </div>
        <img className='transparent-drop-img' src={`${process.env.PUBLIC_URL}/transparent_dropImg.png`}></img>
    </section>
  )
}

export default ContactUs
