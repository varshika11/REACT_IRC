import React from 'react';
import '../MenItems/men.css'; // Import your custom CSS file

const placesToTravel = [
  {
    title: 'Hotels in Coimbatore',
    description: 'Book the cheapest hotel rooms on the best offers in Coimbatore.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/0b/58/finest-contemporary-business.jpg',
  },
  {
    title: 'Best Hotels on Offer in Paris',
    description: 'Experience the best views from your hotel room.',
    image: 'https://media.architecturaldigest.com/photos/61045b2b5059849fda8cf214/master/pass/ChevalBlancParis%20@AlexandreTabaste.jpg',
  },
  {
    title: 'Resorts',
    description: 'Escape to Serenity: Unwind, Indulge, and Create Timeless Memories at Our Luxurious Resorts.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fHww',
  },
  {
    title: 'Hotel of the Month',
    description: 'The Leela Palace, Jaipur.',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201711221909293154-fbab1c08734711ebb48b0242ac110003.jpg',
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
            <br/>
            <button className="card-button">Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCard;
