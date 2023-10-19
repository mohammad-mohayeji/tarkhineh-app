export const isLoggedin = () => {
  if (document.cookie == "username=admin") return true;
  return false;
};
