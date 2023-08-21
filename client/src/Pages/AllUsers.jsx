import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
// import { FaTrashAlt } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import Swal from "sweetalert2";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://server-risul-islam-tushar.vercel.app/users"
    );
    return res.json();
  });

  // const handleDelete = (user) => {};
  const handleAdmin = (user) => {
    fetch(
      `https://server-risul-islam-tushar.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} Admin Now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-2/3">
      <Helmet>
        <title>PHone Traders | Users</title>
      </Helmet>
      <h3 className=" text-2xl uppercase font-semibold">
        Total Users:- {users.length}
      </h3>
      <div className="overflow-x-auto mt-9">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-amber-600 rounded-xl">
              <th>#</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>

                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-ghost btn-md bg-teal-600"
                    >
                      <RiUserSettingsFill></RiUserSettingsFill>
                    </button>
                  )}
                </td>
                {/* <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-md bg-red-500"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
