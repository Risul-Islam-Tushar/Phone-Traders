import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);

  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
