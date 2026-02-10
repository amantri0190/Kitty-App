// import React, { createContext, useContext, useEffect, useState } from "react";
// import { storage } from "@/lib/storage";

// type AuthState = {
//   isLoggedIn: boolean;
//   userId: string | null;
//   hasUsername: boolean;
//   loading: boolean;
// };

// type AuthContextType = AuthState & {
//   login: (userId: string, hasUsername: boolean) => Promise<void>;
//   logout: () => Promise<void>;
//   setUsernameCompleted: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | null>(null);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [state, setState] = useState<AuthState>({
//     isLoggedIn: false,
//     userId: null,
//     hasUsername: false,
//     loading: true,
//   });

//   useEffect(() => {
//     (async () => {
//       const stored = await storage.getAuth();

//       setState({
//         isLoggedIn: stored.isLoggedIn,
//         userId: stored.userId ?? null,
//         hasUsername: stored.hasUsername,
//         loading: false,
//       });
//     })();
//   }, []);

//   const login = async (userId: string, hasUsername: boolean) => {
//     await storage.setAuth({
//       isLoggedIn: true,
//       userId,
//       hasUsername,
//     });

//     setState({
//       isLoggedIn: true,
//       userId,
//       hasUsername,
//       loading: false,
//     });
//   };

//   const logout = async () => {
//     await storage.clearAuth();

//     setState({
//       isLoggedIn: false,
//       userId: null,
//       hasUsername: false,
//       loading: false,
//     });
//   };

//   const setUsernameCompleted = async () => {
//     if (!state.userId) return;

//     await storage.setAuth({
//       isLoggedIn: true,
//       userId: state.userId,
//       hasUsername: true,
//     });

//     setState((prev) => ({
//       ...prev,
//       hasUsername: true,
//     }));
//   };

//   return (
//     <AuthContext.Provider
//       value={{ ...state, login, logout, setUsernameCompleted }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };

import React, { createContext, useContext, useEffect, useState } from "react";
import { storage } from "@/lib/storage";

type AuthState = {
  isLoggedIn: boolean;
  userId: string | null;
  loading: boolean;
};

type AuthContextType = AuthState & {
  login: (userId: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isLoggedIn: false,
    userId: null,
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const stored = await storage.getAuth();

      setState({
        isLoggedIn: stored.isLoggedIn,
        userId: stored.userId ?? null,
        loading: false,
      });
    })();
  }, []);

  const login = async (userId: string) => {
    await storage.setAuth({
      isLoggedIn: true,
      userId,
    });

    setState({
      isLoggedIn: true,
      userId,
      loading: false,
    });
  };

  const logout = async () => {
    await storage.clearAuth();

    setState({
      isLoggedIn: false,
      userId: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};