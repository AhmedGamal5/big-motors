// import React from "react";
// import PropTypes from "prop-types";
// import LazyLoad from "react-lazyload"; // Import LazyLoad
// import "./CarCard.css";

// function CarCard({ car, showDetails = true, className = '' }) {
//   const carNameUrl = car.name.toLowerCase().replace(/[\s()]/g, "-").replace(/[^\w-]+/g, "");

//   return (
//     <div className={`car-card ${className}`}>
//       {/* <img src={`/images/cars/${car.name}/${car.image}`} alt={car.name} /> */}
//       <LazyLoad height={200} offset={100} placeholder={<span>Loading image...</span>}>
//         <img src={`/images/cars/${car.name}/${car.image}`} alt={car.name} />       
//       </LazyLoad>
//       <h3>{car.name}</h3>
//       {showDetails && (
//         <div className="car-card-info">
//           <span className={`car-card-price ${car.sold ? "sold" : ""}`}>
//             {car.sold ? "Sold" : car.price}
//           </span>
//           <div>
//             <span className="car-card-mileage">{car.overview.mileage}</span>
//             <span className="car-card-year">{car.year}</span>
//             <span className="car-card-transmission">{car.overview.transmission}</span>
//           </div>
//         </div>
//       )}
//       <a href={`/${carNameUrl}`} className="more-details">
//         More Details {">"}
//       </a>
//     </div>
//   );
// }

// CarCard.propTypes = {
//   car: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     year: PropTypes.string,
//   }).isRequired,
//   showDetails: PropTypes.bool,
//   className: PropTypes.string
// };

// export default CarCard;

//************************************ */

//*************** using cloudinary with direct links ***********************//


// import React from "react";
// import PropTypes from "prop-types";
// import LazyLoad from "react-lazyload"; // Import LazyLoad
// import "./CarCard.css";

// function CarCard({ car, showDetails = true, className = '' }) {
//   const carNameUrl = car.name.toLowerCase().replace(/[\s()]/g, "-").replace(/[^\w-]+/g, "");

//   return (
//     <div className={`car-card ${className}`}>
//       {/* <img src={`/images/cars/${car.name}/${car.image}`} alt={car.name} /> */}
//       <LazyLoad height={200} offset={100} placeholder={<span>Loading image...</span>}>//        
        
//         {/* coudinary */}
//         <img src={car.image} alt={car.name} /> 
         
//       </LazyLoad>
//       <h3>{car.name}</h3>
//       {showDetails && (
//         <div className="car-card-info">
//           <span className={`car-card-price ${car.sold ? "sold" : ""}`}>
//             {car.sold ? "Sold" : car.price}
//           </span>
//           <div>
//             <span className="car-card-mileage">{car.overview.mileage}</span>
//             <span className="car-card-year">{car.year}</span>
//             <span className="car-card-transmission">{car.overview.transmission}</span>
//           </div>
//         </div>
//       )}
//       <a href={`/${carNameUrl}`} className="more-details">
//         More Details {">"}
//       </a>
//     </div>
//   );
// }

// CarCard.propTypes = {
//   car: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     year: PropTypes.string,
//   }).isRequired,
//   showDetails: PropTypes.bool,
//   className: PropTypes.string
// };

// export default CarCard;

//************************************ */

//*************** using cloudinary with Api ***********************//

import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { Image } from "cloudinary-react"; // Import Cloudinary's Image component
import cloudinaryConfig from "../../cloudinaryConfig";
import "./CarCard.css";
import { FaAngleRight } from "react-icons/fa";



function CarCard({ car, showDetails = true, className = '' }) {
  const carNameUrl = car.name.toLowerCase().replace(/[\s()]/g, "-").replace(/[^\w-]+/g, "");

  return (
    <div className={`car-card ${className}`}>
      <LazyLoad height={200} offset={100} placeholder={<span>Loading image...</span>}>
        <Image
          cloudName={cloudinaryConfig.cloudName}
          publicId={`Big Motors/${car.name}/${car.image}`}
          alt={car.name}
          secure
        />
      </LazyLoad>
      <h3>{car.name}</h3>
      {showDetails && (
        <div className="car-card-info">
          <span className={`car-card-price ${car.sold ? "sold" : ""}`}>
            {car.sold ? "Sold" : car.price}
          </span>
          <div>
            <span className="car-card-mileage">{car.overview.mileage}</span>
            <span className="car-card-year">{car.year}</span>
            <span className="car-card-transmission">{car.overview.transmission}</span>
          </div>
        </div>
      )}
      <a href={`/${carNameUrl}`} className="more-details">
        More Details<FaAngleRight />
      </a>
    </div>
  );
}
CarCard.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string,
  }).isRequired,
  showDetails: PropTypes.bool,
  className: PropTypes.string
};
export default CarCard;