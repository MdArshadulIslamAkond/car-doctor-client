import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 w-full shadow">
        <figure className="px-4 pt-4">
          <img
            src={img}
            alt="Shoes"
            className=" h-[256px] rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="flex items-center justify-between">
          <p className="text-[#ff3811]">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
            <FaArrowRight className="text-[#ff3811]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
