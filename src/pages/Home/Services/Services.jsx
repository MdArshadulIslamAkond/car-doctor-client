import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router";

const Services = () => {
  // const [services, setServices] = useState();
  const [carService, setCarService] = useState([]);
  const data = useLoaderData();
  const services = data.data;
  // console.log(services);

//   useEffect(() => {
//     fetch("services.json")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         fetch("http://localhost:5000/services", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//             setCarService(data);
//           });
//       });
//   });
 
  return (
    <div>
      <div className="text-center space-y-5">
        <div>
          <h3 className="text-[#ff3811]">Service</h3>
          <h1 className="text-2xl font-bold">Our Service Area</h1>
        </div>
        <p>
          <span>
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </span>{" "}
          <br /> <span>words which don't look even slightly believable.</span>{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
