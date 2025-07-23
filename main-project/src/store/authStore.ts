import { create } from 'zustand';

// Tipi invariati
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
  setBioAndPreferenze: (
    bio: string,
    preferenze: [string, string, string]
  ) => void;
};

const hydrate = (): { isLoggedIn: boolean; loggedId: number | null } => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loggedIdRaw = localStorage.getItem('loggedId');
  const loggedId = loggedIdRaw ? Number(loggedIdRaw) : null;
  return { isLoggedIn, loggedId };
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoggedIn: false,

  login: (user) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedId', user.id.toString());
    set({ user, isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedId');
    set({ user: null, isLoggedIn: false });
  },

  setBioAndPreferenze: (bio: string, preferenze: [string, string, string]) =>
    set((state) => {
      if (state.user) {
        return { user: { ...state.user, bio, preferenze } };
      }
      return {};
    }),
}));

export const rehydrateAuthStore = (users: User[]) => {
  const { isLoggedIn, loggedId } = hydrate();
  if (isLoggedIn && loggedId !== null) {
    const user = users.find((u) => u.id === loggedId) || null;
    useAuthStore.setState({ user, isLoggedIn: !!user });
  } else {
    useAuthStore.setState({ user: null, isLoggedIn: false });
  }
};
