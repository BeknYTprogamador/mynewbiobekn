import React from 'react'
import GorillazDD from '../assets/gorillazdd.jpg'
import Gorillaz from '../assets/gorrillaz.jpg'
import Bighero6 from '../assets/bighero6.jpg'

const FavoriteSongCard = () => {
  return (
    <div className="container my-5">
      <h1 className="text-dark mb-4">Favorite Songs</h1>

      {/* Wrapper for spacing between cards */}
      <div className="d-flex flex-column align-items-center gap-5">

        {/* Card 1 - Feel Good Inc */}
        <div 
          className="card text-light border-0 shadow-lg mx-auto" 
          style={{
            maxWidth: '700px',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #0f1325 0%, #051f41 50%, #071017 100%)'
          }}
        >
          <img 
            src={GorillazDD} 
            alt="Gorillaz - Feel Good Inc" 
            className="card-img-top"
            style={{ 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '20px 20px 0 0'
            }}
          />
          <div className="card-body text-center">
            <h3 id="gorillaz" className="fw-bold mb-2">GORILLAZ</h3>
            <h5 className="text-light mb-3" id="feel-good-inc">FEEL GOOD INC</h5>
            <button 
              className="btn btn-outline-light btn-sm w-50 mb-3" 
              style={{ position: 'relative', top: '-10px' }}
              onClick={() => window.open('https://music.youtube.com/watch?v=NxxjLD2pmlk', '_blank')}
            >
              Listen on YouTube Music
            </button>
            <p className="card-text small">
              A modern classic blending alternative rock and electronic music with a catchy bassline and memorable vocals, making it one of Gorillaz's most iconic songs.
            </p>
          </div>
        </div>

        {/* Card 2 - 19-2000 */}
        <div 
          className="card text-light border-0 shadow-lg mx-auto" 
          style={{
            maxWidth: '700px',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #dadce2 0%, #0a7028 50%, #071017 100%)'
          }}
        >
          <img 
            src={Gorillaz} 
            alt="Gorillaz - 19-2000" 
            className="card-img-top"
            style={{ 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '20px 20px 0 0'
            }}
          />
          <div className="card-body text-center">
            <h3 id="gorillaz" className="fw-bold mb-2">GORILLAZ</h3>
            <h5 className="text-light mb-3" id="Gorillaz192000">19‑2000</h5>
            <button 
              className="btn btn-outline-light btn-sm w-50 mb-3" 
              style={{ position: 'relative', top: '-10px' }}
              onClick={() => window.open('https://music.youtube.com/watch?v=J8NKwTYkDH8&si=xxkpE0oB02beXO_P', '_blank')}
            >
              Listen on YouTube Music
            </button>
            <p className="card-text small">
              A catchy and upbeat track with a blend of alternative rock and electronic elements, featuring memorable vocals and a groovy rhythm that has made it a fan favorite since its release.
            </p>
          </div>
        </div>

        {/* Card 3 - Immortals */}
        <div 
          className="card text-light border-0 shadow-lg mx-auto" 
          style={{
            maxWidth: '700px',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #f1f1f1 0%, #d32f2f 45%, #2b0a0a 100%)'
          }}
        >
          <img 
            src={Bighero6} 
            alt="Fall Out Boy - Immortals" 
            className="card-img-top"
            style={{ 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '20px 20px 0 0'
            }}
          />
          <div className="card-body text-center">
            <h3 className="fw-bold mb-2" id="FallOutBoy">Fall Out Boy</h3>
            <h5 className="text-light mb-3" id="Immortals">Immortals</h5>
            <button 
              className="btn btn-outline-light btn-sm w-50 mb-3" 
              style={{ position: 'relative', top: '-10px' }}
              onClick={() => window.open('https://music.youtube.com/watch?v=PHn5Q7hCjxw&si=G8aGSE9SFYQDFiFC', '_blank')}
            >
              Listen on YouTube Music
            </button>
            <p className="card-text small">
              A high-energy anthem with a powerful blend of rock and pop-punk elements, featuring catchy hooks and an uplifting message about resilience and perseverance, making it a standout track from the Big Hero 6 soundtrack and a fan favorite among Fall Out Boy fans.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FavoriteSongCard
