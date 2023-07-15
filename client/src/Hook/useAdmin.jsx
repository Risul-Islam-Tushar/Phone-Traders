// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

// const useAdmin = () => {
//   const { user, loading } = useContext(AuthContext);

//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ["isAdmin", user?.email],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/users/admin/${user?.email}`
//       );
//       console.log(user.email);
//       return res.data.admin;
//     },
//   });
//   return [isAdmin, isAdminLoading];
// };
// export default useAdmin;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/admin/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [user?.email]);
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
