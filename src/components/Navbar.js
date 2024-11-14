import React, { useEffect, useState } from 'react'
import $ from 'jquery';


const Navbar = () => {

  const [topscroll, setTopScroll] = useState(0)

  useEffect(() => {
    const navbarScrolling = () => {
      setTopScroll(window.scrollY)
    }
    window.addEventListener('scroll',navbarScrolling)
    return() => {
      window.removeEventListener('scroll', navbarScrolling)
    }
  })

  const navbarTopScroll = topscroll > 100 ? "navbox-shadow" : "is-transparent"

  return (
    <>
      <div className={`navbar-container is-display-flex is-align-items-end is-transparent ${navbarTopScroll}`}>
      <nav class="navbar">
      <div class="navbar-brand">
          <div class="col-auto">
            <a aria-current="page" class="" href="/en/">
            <svg width="167px" height="40px" viewBox="0 0 167 40" version="1.1"><title>Kromin</title><defs><linearGradient x1="28.8407093%" y1="71.4084694%" x2="94.6296871%" y2="5.65227239%" id="linearGradient-1"><stop stop-color="#B84FF8" offset="0%"></stop><stop stop-color="#8227EE" offset="100%"></stop></linearGradient><linearGradient x1="55.1414696%" y1="44.8585304%" x2="100%" y2="0%" id="linearGradient-2"><stop stop-color="#B84FF8" offset="0%"></stop><stop stop-color="#8227EE" offset="100%"></stop></linearGradient></defs><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="SECTION/Footer" transform="translate(-130.000000, -68.000000)"><g id="EXTRA/Logo" transform="translate(130.000000, 68.000000)"><g id="Logo" transform="translate(0.000000, 0.000000)"><g id="Logotipo" transform="translate(49.855072, 5.314010)" fill="#F9FAFB"><path d="M13.7085797,29.0057005 L7.3995942,20.5224155 L4.51708213,23.4909179 L4.51708213,28.8903382 C4.51708213,28.9970048 4.43051208,29.0835749 4.32384541,29.0835749 L0.193217391,29.0835749 C0.0863574879,29.0835749 -1.93236715e-05,28.9970048 -1.93236715e-05,28.8903382 L-1.93236715e-05,0.58173913 C-1.93236715e-05,0.475072464 0.0863574879,0.388502415 0.193217391,0.388502415 L4.32384541,0.388502415 C4.43051208,0.388502415 4.51708213,0.475072464 4.51708213,0.58173913 L4.51708213,18.3284058 L13.6229758,8.36724638 C13.6596908,8.32724638 13.7114783,8.30444444 13.7655845,8.30444444 L18.8334106,8.30444444 C19.0017198,8.30444444 19.0896425,8.50444444 18.9758261,8.62830918 L10.6260676,17.7258937 L19.2032657,28.7718841 C19.3018164,28.8986473 19.2113816,29.0835749 19.0506087,29.0835749 L13.8635556,29.0835749 C13.8024928,29.0835749 13.7449082,29.0547826 13.7085797,29.0057005" id="Fill-1"></path><path d="M21.7670531,28.8903961 L21.7670531,8.49773913 C21.7670531,8.39107246 21.8536232,8.30450242 21.9602899,8.30450242 L26.0909179,8.30450242 C26.1977778,8.30450242 26.2841546,8.39107246 26.2841546,8.49773913 L26.2841546,11.3588019 C27.7954589,9.42798068 30.2074396,7.90682126 32.841256,7.83397101 C32.9494686,7.8312657 33.0385507,7.92015459 33.0385507,8.02856039 L33.0385507,12.0720386 C33.0385507,12.190686 32.9332367,12.2818937 32.815942,12.2621836 C32.4741063,12.2047923 32.0750725,12.1763865 31.6188406,12.1763865 C29.7258937,12.1763865 27.1877295,13.4672077 26.2841546,14.9296232 L26.2841546,28.8903961 C26.2841546,28.9970628 26.1977778,29.0836329 26.0909179,29.0836329 L21.9602899,29.0836329 C21.8536232,29.0836329 21.7670531,28.9970628 21.7670531,28.8903961" id="Fill-3"></path><path d="M50.4623382,18.6724444 C50.4623382,15.0156329 48.3112271,11.7891594 44.4395362,11.7891594 C40.6105507,11.7891594 38.4594396,15.0156329 38.4594396,18.6724444 C38.4594396,22.3721546 40.6105507,25.5988213 44.4395362,25.5988213 C48.3112271,25.5988213 50.4623382,22.3721546 50.4623382,18.6724444 M33.7703575,18.6724444 C33.7703575,12.7356329 37.8571208,7.78838647 44.4395362,7.78838647 C51.1075556,7.78838647 55.1516135,12.7356329 55.1516135,18.6724444 C55.1516135,24.6523478 51.1075556,29.5997874 44.4395362,29.5997874 C37.8571208,29.5997874 33.7703575,24.6523478 33.7703575,18.6724444" id="Fill-5"></path><path d="M82.9661063,29.0836329 C82.8594396,29.0836329 82.7728696,28.9970628 82.7728696,28.8903961 L82.7728696,15.531942 C82.7728696,13.2950338 81.7833043,11.7891401 79.3742222,11.7891401 C77.3521932,11.7891401 75.4592464,13.2088502 74.5558647,14.54257 L74.5558647,28.8903961 C74.5558647,28.9970628 74.4692947,29.0836329 74.362628,29.0836329 L70.232,29.0836329 C70.1251401,29.0836329 70.0387633,28.9970628 70.0387633,28.8903961 L70.0387633,15.531942 C70.0387633,13.2950338 69.0491981,11.7891401 66.5972174,11.7891401 C64.618087,11.7891401 62.7682319,13.2088502 61.8217585,14.5856618 L61.8217585,28.8903961 C61.8217585,28.9970628 61.7351884,29.0836329 61.6285217,29.0836329 L57.4977005,29.0836329 C57.3910338,29.0836329 57.3044638,28.9970628 57.3044638,28.8903961 L57.3044638,8.49773913 C57.3044638,8.39107246 57.3910338,8.30450242 57.4977005,8.30450242 L61.6285217,8.30450242 C61.7351884,8.30450242 61.8217585,8.39107246 61.8217585,8.49773913 L61.8217585,11.1437295 C62.6822415,9.85329469 65.4354783,7.78836715 68.5759614,7.78836715 C71.6735459,7.78836715 73.5664928,9.33696618 74.2546087,11.6171594 C75.4592464,9.72421256 78.2126763,7.78836715 81.3102609,7.78836715 C85.1390531,7.78836715 87.289971,9.85329469 87.289971,14.0693333 L87.289971,28.8903961 C87.289971,28.9970628 87.2035942,29.0836329 87.0967343,29.0836329 L82.9661063,29.0836329 Z" id="Fill-7"></path><path d="M90.5398841,28.8903961 L90.5398841,8.49773913 C90.5398841,8.39107246 90.6264541,8.30450242 90.7331208,8.30450242 L94.8637488,8.30450242 C94.9704155,8.30450242 95.0569855,8.39107246 95.0569855,8.49773913 L95.0569855,28.8903961 C95.0569855,28.9970628 94.9704155,29.0836329 94.8637488,29.0836329 L90.7331208,29.0836329 C90.6264541,29.0836329 90.5398841,28.9970628 90.5398841,28.8903961 M89.980657,2.96981643 C89.980657,1.42141063 91.271285,0.173681159 92.7769855,0.173681159 C94.3255845,0.173681159 95.573314,1.42141063 95.573314,2.96981643 C95.573314,4.5186087 94.3255845,5.76614493 92.7769855,5.76614493 C91.271285,5.76614493 89.980657,4.5186087 89.980657,2.96981643" id="Fill-9"></path><path d="M112.525662,29.0836329 C112.418995,29.0836329 112.332425,28.9970628 112.332425,28.8903961 L112.332425,16.0913623 C112.332425,12.8646957 110.697836,11.7891401 108.159478,11.7891401 C105.836386,11.7891401 103.857449,13.1657585 102.824986,14.5856618 L102.824986,28.8903961 C102.824986,28.9970628 102.738415,29.0836329 102.631749,29.0836329 L98.5009275,29.0836329 C98.3942609,29.0836329 98.3076908,28.9970628 98.3076908,28.8903961 L98.3076908,8.49773913 C98.3076908,8.39107246 98.3942609,8.30450242 98.5009275,8.30450242 L102.631749,8.30450242 C102.738415,8.30450242 102.824986,8.39107246 102.824986,8.49773913 L102.824986,11.1437295 C104.201604,9.50894686 106.869043,7.78836715 110.138415,7.78836715 C114.612618,7.78836715 116.84972,10.1974493 116.84972,14.4565797 L116.84972,28.8903961 C116.84972,28.9970628 116.76315,29.0836329 116.656483,29.0836329 L112.525662,29.0836329 Z" id="Fill-11"></path></g><g id="Marchio" transform="translate(0.000000, 0.096618)"><path d="M17.8056039,17.902029 L0.849082126,34.8585507 C-0.282898551,35.9905314 -0.282898551,37.8258937 0.849082126,38.9576812 C1.41487923,39.5236715 2.15671498,39.8067633 2.89855072,39.8067633 C3.64038647,39.8067633 4.38202899,39.5236715 4.94821256,38.9576812 L21.9047343,22.0011594 C23.0365217,20.869372 23.0365217,19.0340097 21.9047343,17.902029 C21.338744,17.3362319 20.5969082,17.0531401 19.8550725,17.0531401 C19.1132367,17.0531401 18.371401,17.3362319 17.8056039,17.902029" id="Fill-15" fill="url(#linearGradient-1)"></path><path d="M23.7681159,0.0966183575 C22.167343,0.0966183575 20.8695652,1.39439614 20.8695652,2.99516908 C20.8695652,4.59594203 22.167343,5.89371981 23.7681159,5.89371981 L33.9130435,5.89371981 L33.9130435,29.9105314 L10.1656039,6.16289855 C9.62183575,5.61932367 8.88463768,5.31400966 8.11594203,5.31400966 L2.89855072,5.31400966 C1.29777778,5.31400966 0,6.61178744 0,8.21256039 C0,9.81333333 1.29777778,11.1111111 2.89855072,11.1111111 L6.91536232,11.1111111 L34.7621256,38.9576812 C35.3165217,39.5122705 36.0577778,39.8069565 36.8121739,39.8067633 C37.1855072,39.8067633 37.5623188,39.734686 37.9207729,39.5862802 C39.0038647,39.1373913 39.7101449,38.0807729 39.7101449,36.9082126 L39.7101449,2.99516908 C39.7101449,1.39439614 38.4123671,0.0966183575 36.8115942,0.0966183575 L23.7681159,0.0966183575 Z" id="Fill-18" fill="url(#linearGradient-2)"></path></g></g></g></g></g></svg>
            </a>
          </div>
        <div class="navbar-burger js-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a className='nav-menu-link'>Agency</a>
            <a className='nav-menu-link'>Services</a>
            <a className='nav-menu-link'>Success Stories</a>
            <a className='nav-menu-link'>Careers</a>
            <a className='nav-menu-link'>Academy</a>
            <a className='nav-menu-link'>Events</a>
            <a className='nav-menu-link'>Contact US</a>
            <a className='nav-menu-link is-display-flex is-align-items-center'>En 
            <svg className='ml-2' height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </a>
          </div>
        </div>
      </div>
     </nav>
      </div>
     
    </>
    
  )
}
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

export default Navbar
