import { useDispatch } from "react-redux";
import { removeLastUser } from "../redux/userSlice";

const DeleteUser = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(removeLastUser())}>Remove Last user</button>
  );
};

export default DeleteUser;
