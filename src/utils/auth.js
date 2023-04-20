export const getUserDataFromCookies = (cookies) => {
  const token = cookies.get('token');
  const name = cookies.get('name');
  const last_name = cookies.get('last_name');
  const email = cookies.get('email');
  const user_role = cookies.get('user_role');
  
  if (token && name && last_name && email) {
    return {
      token,
      name,
      last_name,
      email,
      user_role
    };
  }
  return null;
}