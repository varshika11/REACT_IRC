import React from 'react';
import '../WomenItems/travel.css'; // Import your custom CSS file

const placesToTravel = [
  {
    title: 'Beach Paradise',
    description: 'Relax and unwind on the sandy beaches.',
    image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/1-1-1-1280x720.webp',
  },
  {
    title: 'Mountain Retreat',
    description: 'Experience breathtaking views in the mountains.',
    image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp',
  },
  {
    title: 'City Exploration',
    description: 'Discover the vibrant culture of the city.',
    image: 'https://t3.ftcdn.net/jpg/01/69/13/46/360_F_169134635_BtuUZImNHXOb5x2GZPQMVA4BMnEbPjiQ.jpg',
  },
  {
    title: 'Desert Exploration',
    description: 'Bathe in the warm hues of the city.',
    image: 'https://media2.thrillophilia.com/images/photos/000/361/198/original/1605603729_cover_places_to_visit_in_raj._in_oct..jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true',
  },
  {
    title: 'Backwater Exploration',
    description: 'Enjoy the natural beauty and relaxation on a private tour in tropical Kerala.',
    image: 'https://media2.thrillophilia.com/images/photos/000/012/947/original/1513318534_India_Sea_Ships_450719.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true',
  },
  {
    title: 'Wellness Retreat',
    description: 'Focus on health and well-being through activities like yoga, meditation, spa treatments, and healthy cuisine.',
    image: 'https://assets.architecturaldigest.in/photos/6423e34c146946464c905a76/master/w_1600%2Cc_limit/Zenana%2520Mahal%2520Courtyard.jpg',
  },
  {
    title: 'Thailand: The Land of Smiles',
    description: 'Immerse yourself in the energetic pulse of cities like Bangkok',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Honeymoon',
    description: 'Tailored for newlyweds, honeymoon trips offer romantic experiences, luxurious accommodations, and intimate settings.',
    image: 'https://shayokatravels.com/wp-content/uploads/2019/07/60009dbaae15cd92ef73dc61_shutterstock_1463319173-1.jpg',
  },
];

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
