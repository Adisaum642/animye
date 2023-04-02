const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchUsers };