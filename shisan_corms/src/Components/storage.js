export const storageUserData = (data) => {
    localStorage.setItem("idToken", data);
  };
  
  export const getUserData = (data) => {
    return localStorage.getItem("idToken");
  };
  
  export const removeUserData = (data) => {
    return localStorage.removeItem("idToken");
  };