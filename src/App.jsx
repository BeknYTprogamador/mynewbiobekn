import { useState, useEffect } from 'react'
import ProfilePic from './assets/profile-pic.png'
import SunIcon from './assets/sun-icon.svg'
import MoonIcon from './assets/moon-icon.svg'
import FavoriteSongs from './components/favoriteSongs'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 text-center">
        <img 
          src={ProfilePic} 
          alt="Profile Picture" 
          className="img-fluid rounded-circle mx-auto d-block mb-3"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />

        <h1 className="fw-bold fs-1">Bekn</h1>

       <button 
  className="btn btn-sm btn-outline-primary position-absolute top-0 end-0 m-3"
  onClick={toggleTheme}
>
  {theme === 'light' ? <img src={MoonIcon} alt="Moon" /> : <img src={SunIcon} alt="Sun" />}
</button>


        <h2 className="text-muted">Student (High School)</h2>
        <div id="about-me" className="d-flex flex-column gap-3">
          <h3><span className="text-primary fw-semibold">Languages:</span> English 🇬🇧 (B1), Portuguese 🇧🇷 (C2 - Native)</h3>
          <h3><span className="text-primary fw-semibold">Interests:</span> Programming, Gaming, Music, Reading, Languages Learning</h3>
          <h3><span className="text-primary fw-semibold">Hard Skills (Programming):</span> HTML, CSS, JavaScript, React</h3>
          <h3><span className="text-primary fw-semibold">Soft Skills:</span> Problem Solving, Communication, Time Management</h3>
          <h3><span className="text-primary fw-semibold">Hobbies:</span> Playing video games, Listening to music, Reading books, Learning about programming languages, 
          learning spoken languages</h3>
          <h3><span className="text-primary fw-semibold">MBTI:</span> ENTJ</h3>
          <h3><span className="text-primary fw-semibold">Favorite Music Genres:</span> Rock, Pop, Rock indie, EDM, Soft Rock</h3>
          <h3><span className="text-primary fw-semibold">Goals:</span> To become a proficient web developer and contribute to open-source projects and work abroad</h3>
        <FavoriteSongs />
        </div>
      </div>
    </div>
  )
}

export default App
