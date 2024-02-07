// userRole.jsx
import { useQuery } from "react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UserRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  if (loading) {
    return <h1>Loading.</h1>;
  }
  const {
    data: role,
    isLoading: roleLoading,
    error,
  } = useQuery(
    {
      queryKey: ["isAdmin", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/api/auth/users/role/${user.email}`);
        console.log("User Role is", res.data.data);
        return res.data.data;
      },
    },
    {
      enabled: !!user?.email,
    }
  );

  return { role, roleLoading, error };
};

export default UserRole;
