import { create } from 'zustand';

export type User = {
  id: number;
  username: string;
  photo: string;
  nome: string;
  cognome: string;
  dataNascita: string;
  bio: string;
  preferenze: [string, string, string];
};

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
