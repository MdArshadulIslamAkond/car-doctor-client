import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxios();
  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url)
    .then((res) =>{
        setBookings(res.data);
      });
    // axios.get(url, {withCredentials: true})
    // .then((res) =>{
    //   setBookings(res.data);
    // });
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: data.message,
                icon: "success",
              });
              const updatedBookings = bookings.filter(
                (booking) => booking._id!== id
              );
              setBookings(updatedBookings);
            }
          });
      }
    });
  };
  const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: 'confirmed'}),
    })
     .then((res) => res.json())
     .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Confirmed!",
            text: data.message,
            icon: "success",
          });
          const updatedBookings = bookings.map((booking) =>
            booking._id === id? {...booking, status:"confirmed" } : booking
          );
          setBookings(updatedBookings);
        }
      });
  }
  return (
    <div>
      <h2 className="text-2xl">Your Bookings:{bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>   */}
          <tbody className="">
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
