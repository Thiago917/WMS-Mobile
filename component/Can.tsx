import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

interface CanProps {
  allowedRoles: string[]; // Ex: ['12', '6']
  children: React.ReactNode;
}

export default function Can({ allowedRoles, children }: CanProps) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRole = async () => {
      const role = await AsyncStorage.getItem('@userRole');
      setUserRole(role);
      setLoading(false);
    };
    getRole();
  }, []);

  if (loading) return null; 

  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  return null; 
}