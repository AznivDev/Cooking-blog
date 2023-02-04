export const getAllUsers = async (): Promise<Response> => {
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
    return jsonData.json();
  };