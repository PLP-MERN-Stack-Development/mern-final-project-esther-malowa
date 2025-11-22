import { create } from "zustand";
import api from "./api";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  login: async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    set({ user: res.data.user, token: res.data.token });
    return res.data.user.role; // return role for redirection
  },

  register: async (data) => {
    const res = await api.post("/auth/register", data);
    localStorage.setItem("token", res.data.token);
    set({ user: res.data.user, token: res.data.token });
    return res.data.user.role; // return role for redirection
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
