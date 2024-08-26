import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, service_id, price, img } = service;
//   console.log(service);
  const {user} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form to backend
    const serviceForm = e.currentTarget;
    const form = new FormData(serviceForm);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const phone = form.get("phone");
    const date = form.get("date");
    const message = form.get("message");
    const booking = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        date:date,
        img: img,
        email: user?.email,
        service: title,
        service_id: service_id,
        price: price,
        message: message,
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-500 text-center">
        Book Service: {title}
      </h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Your date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input
            type="submit"
            value="ORDER CONFIRM"
            className="btn btn-primary btn-block "
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
