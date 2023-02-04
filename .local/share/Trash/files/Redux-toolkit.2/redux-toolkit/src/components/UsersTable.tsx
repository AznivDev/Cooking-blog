import { useSelector } from "react-redux";
import { usersSelector } from "../redux/selectors";
import Table, { ITableRowData } from "./Table";
import { User } from "../types/user";

const rowData: ITableRowData<User>[] = [
  {
    header: "Image",
    field: "imageUrl",
    render: (data: User) => <img src={data.imageUrl} height={10} width={10} />,
  },
  {
    header: "Username",
    field: "username",
    render: (data: User) => <p>{`${data.username} jan`}</p>,
  },
  {
    header: "Phone",
    field: "phone",
  },
  {
    header: "Age",
    field: "age",
  },
];

const UsersTable = () => {
  const users = useSelector(usersSelector);

  return (
    <div>
      <Table<User> data={users} rowData={rowData} />
    </div>
  );
};

export default UsersTable;
