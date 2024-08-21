import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { userSchema } from "@/types";
import { zod as z } from "@/config/es-zod" 

type UserData = z.infer<typeof userSchema>;
// Define el tipo del valor que va a contener el contexto
interface AuthContextType {
  data: UserData | undefined; // Cambia `any` por el tipo específico de `data`
  isLoading: boolean;
  isError: boolean;
}

// Creando el contexto con un valor por defecto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Creando un proveedor para el contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError } = useAuth();

  return (
    <AuthContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};

// Creando un hook personalizado para usar el contexto
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext debe usarse dentro de AuthProvider');
  }
  return context;
};
