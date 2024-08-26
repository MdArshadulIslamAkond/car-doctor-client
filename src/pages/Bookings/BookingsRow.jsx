import Swal from "sweetalert2";

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, img, service, price, firstName, status } = booking;
 
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{firstName}</div>
          </div>
        </div>
      </td>
      <td>
        <span>${price}</span>
      </td>
      <td>{date}</td>
      <th>
        {
            status ==="confirmed" ?
            <button className="btn btn-primary btn-xs font-bold">Confirmed</button> :
            <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs font-bold">Pending</button>
        }
      </th>
    </tr>
  );
};

export default BookingsRow;
