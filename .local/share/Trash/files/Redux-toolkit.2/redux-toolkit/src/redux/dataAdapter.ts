import { User } from "../types/user";

const adaptUsers = (users: any[]) => {
  return users.map(
    (user) =>
      ({
        username: user.name,
        email: user.email,
        phone: user.phone,
        age: user.address.zipcode,
      } as unknown as User)
  );
};

export default adaptUsers;