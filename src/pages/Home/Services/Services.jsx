import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('');
  // const [carService, setCarService] = useSta te([]);

  const services = useServices(asc, search);
  // console.log(services);

  const handleSearch = e =>{
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
  }
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
        <form action="" onSubmit={handleSearch}>
          <div className="w-1/4 mx-auto flex gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" name="search" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <input type="submit" name="submit" className="btn" id="" value='Search' />
          </div>
        </form>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
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
