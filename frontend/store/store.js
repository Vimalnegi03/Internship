import { create } from 'zustand';
import axiosInstance from './axios';

const useAuth = create((set) => ({
  user: null,  // initial user state, can be null or {} depending on your use case
  isLoggedOut:false,
  isLoading:false,

  signup: async (data) => {
    try {
        set({isLoading:true});
      const response = await axiosInstance.post('/register', data);
      // Assuming response.data contains user info
      set({ user: response.data });
      set({ isLoading:false });
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error; // Let the caller handle error
    }
  },
 login: async (data) => {
    try {
         set({isLoading:true});
      const response = await axiosInstance.post('/login', data);
      // Assuming response.data contains user info
      set({ user: response.data });
       set({isLoading:false});
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error; // Let the caller handle error
    }
  },
  getUser:async()=>{
    try {
        set({isLoading:true})
        const response=await axiosInstance.get("/getUser");
        set({user:response.data})
        set({isLoading:false})
        return response.data;
    } catch (error) {
        throw error;
    }
  },
  logout: async() => {
    const response=await axiosInstance.post("/logout");
    if(response.data.success)
       set({isLoggedOut:true}) ;
  }, // example logout action
}));

export default useAuth;
