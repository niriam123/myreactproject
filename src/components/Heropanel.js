import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Marqueeslider from './Marqueeslider'

const Heropanel = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger the animation on mount
  }, []);

  return (
    <>
        <main>
        <Navbar />
            <div className="wrap-container">
                
            <div className="hero-title">
              <div className="hero-heading-container">
              <img className='hero-big-blur-img' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDEycHgiIGhlaWdodD0iNDEycHgiIHZpZXdCb3g9IjAgMCA0MTIgNDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkZpbGwgMjU5IENvcHkgNjwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIzLjM5MDY4NzQlIiB5MT0iMTM4LjkxNzE5MiUiIHgyPSIxMjQuOTU3NjU3JSIgeTI9IjE2LjAwNzIzNTglIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyQjQyNzIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFEMEY0MSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIwNS43MTY1NzYsMCBMMjA2LjAxMjMyMywwIEMzMTkuNjI4NDAyLDAgNDExLjgyNzQ4MSw5Mi4wMzIwNjUxIDQxMiwyMDUuNzA0MjM1IEM0MTIsMjA5LjcyMTcwNCA0MTEuNjMwMzE2LDIxMy42MTU5MzcgNDExLjQwODUwNiwyMTcuNTU5NDY0IEM0MTEuMjM1OTg3LDIyMC42NjQ5OTIgNDExLjI2MDYzMywyMjMuODQ0NDYgNDEwLjk0MDI0LDIyNi45MDA2OTQgQzQxMC40NDczMjksMjMxLjg1NDc1IDQwOS41NjAwODksMjM2LjcxMDIxOCA0MDguNzIyMTM5LDI0MS41NjU2ODYgQzQwOC40MDE3NDcsMjQzLjQ2MzUwOCA0MDguMjI5MjI4LDI0NS40MzUyNzIgNDA3LjgzNDg5OSwyNDcuMzA4NDQ3IEM0MDYuNjUxOTExLDI1My4xNzQ0NDQgNDA1LjA5OTI0LDI1OC45MTcyMDUgNDAzLjQyMzM0MiwyNjQuNTg2MDI1IEM0MDMuMjAxNTMxLDI2NS4zOTkzNzggNDAzLjA1MzY1OCwyNjYuMjM3Mzc3IDQwMi44MDcyMDIsMjY3LjAwMTQzNiBDMzc2LjgzMDc3MSwzNTAuODk5OTc2IDI5OC43MDQzMTMsNDExLjg3Njc2NSAyMDYuMjgzNDI0LDQxMiBMMjA1LjAyNjUsNDEyIEM5MS43MzA4MTI5LDQxMS40NTc3NjUgMC4wMjQ2NDU1NzA0LDMxOS40OTk2NDEgMC4wMjQ2NDU1NzA0LDIwNi4wNzM5NDEgTDAsMC4yOTU3NjQ1MzcgTDIwNS43MTY1NzYsMCBaIiBpZD0iRmlsbC0yNTktQ29weS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDYuMDAwMDAwLCAyMDYuMDAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yMDYuMDAwMDAwLCAtMjA2LjAwMDAwMCkgIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=" width="426px" height="412px"></img>
              <img className='hero-small-blur-img' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iODciIHZpZXdCb3g9IjAgMCA4NyA4NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4yMjc4IDJINDMuMjg3MUM2Ni4wNTcgMiA4NC41MzQ3IDIwLjQ0ODUgODQuNTY5MyA0My4yMzQ4Qzg0LjU2OTMgNDQuMDQwMiA4NC40OTUyIDQ0LjgyMDggODQuNDUwOCA0NS42MTEzQzg0LjQxNjIgNDYuMjMzOCA4NC40MjExIDQ2Ljg3MTIgODQuMzU2OSA0Ny40ODM4Qzg0LjI1ODEgNDguNDc2OSA4NC4wODAzIDQ5LjQ1MDIgODMuOTEyNCA1MC40MjM1QzgzLjg0ODIgNTAuODAzOSA4My44MTM2IDUxLjE5OTIgODMuNzM0NiA1MS41NzQ3QzgzLjQ5NzUgNTIuNzUwNiA4My4xODYzIDUzLjkwMTcgODIuODUwNCA1NS4wMzgxQzgyLjgwNiA1NS4yMDExIDgyLjc3NjQgNTUuMzY5MSA4Mi43MjcgNTUuNTIyM0M3Ny41MjEgNzIuMzQwMyA2MS44NjM2IDg0LjU2MzUgNDMuMzQxNCA4NC41ODgySDQzLjA4OTZDMjAuMzgzOSA4NC40Nzk1IDIuMDA0OTQgNjYuMDQ1OSAyLjAwNDk0IDQzLjMwODlMMiAyLjA1OTI5TDQzLjIyNzggMloiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzJfMjU3OSkiIHN0cm9rZS13aWR0aD0iMyIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzJfMjU3OSIgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9Ijg0LjU4ODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzgwQ0RGRCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0OTlGRjkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"></img>
              <h1 className={`has-text-centered text ${animate ? 'text-animate' : ''}`}>Digital solutions<br></br>for your Business<span className="highlight-color">.</span></h1>
              <h6 className={`has-text-centered ${animate ? 'text-animate' : ""}`}>DATA. DESIGN. DEVELOPMENT. MARKETING.</h6>
            </div>
              
            </div>
        </div>
        <Marqueeslider />
        </main>
        
        
    </>
  )
}



export default Heropanel


