import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("station");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const storeUserData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
   
  
      await AsyncStorage.setItem("station", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  export const LogoutUser = async (token) => {
    try {
     
      
      await AsyncStorage.removeItem("station");
    } catch (e) {
      console.log(e);
    }
  };