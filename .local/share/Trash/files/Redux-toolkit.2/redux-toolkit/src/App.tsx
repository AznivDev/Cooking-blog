import React from "react";
import { useDispatch } from "react-redux";
import { getAllUsersAction } from "./redux/userSlice";
import DeleteUser from "./components/DeleteUser";
import UsersTable from "./components/UsersTable";
import "./App.css";

function App () {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  return (
    <>
      <UsersTable />
      <DeleteUser />
    </>
  );
}

export default App;