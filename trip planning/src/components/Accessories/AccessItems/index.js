import React from 'react';
import '../AccessItems/index.css'; // Import your custom CSS file

const placesToTravel = [
  {
    title: '7-Day Kullu Manali Trip',
    description: 'Embrace the Majestic Peaks, Adventure Beckons in the Valley of Gods.',
    image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VsbHUlMjBtYW5hbGl8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: '4-Day Temple Pilgrimage',
    description: 'Explore and experience various religious or historic temples in Tamil Nadu.',
    image: 'https://images.unsplash.com/photo-1538460120076-604b93a2ce88?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVtcGxlfGVufDB8fDB8fHww',
  },
  {
    title: '15-Day Europe Trip',
    description: 'Unveiling History, Embracing Culture, and Creating Timeless Memories while visiting different countries in Europe.',
    image: 'https://e0.pxfuel.com/wallpapers/919/1011/desktop-wallpaper-european-travel-european-travel-background-on-bat-travel-and-tourism.jpg',
  },
  {
    title: '2-Day Pondicherry Tour',
    description: 'Explore where French Charm Meets Indian Spirituality, Unveiling Tranquility by the Bay.',
    image: 'https://c0.wallpaperflare.com/preview/78/157/95/human-person-building-architecture.jpg',
  },
 
]
const TravelCard = () => {
  return (
    <div className="travel-cards">
      {placesToTravel.map((place, index) => (
        <div key={index} className="card">
          <img src={place.image} alt={place.title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{place.title}</h2>
            <p className="card-description">{place.description}</p>
            <br></br>
            <button className="card-button">Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCard;