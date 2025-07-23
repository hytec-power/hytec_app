import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    firstName: 'Employee',
    middleName: '',
    lastName: 'Lastname',
    birthday: 'December 1, 2003',
    gender: 'Female',
    contact: '+6309167305418',
    personalEmail: 'employee@email.com',
    address: 'Quezon City, Brgy. Tibay',
    position: 'Field Application Engineer',
    employmentType: 'Project-based',
    tenure: '3 months and 2 days',
    salary: 'monthly',
    dateStarted: 'April 1, 2025',
    division: 'Industrial Division / Testing / Life Long Learning Division',
    employeeId: '2211963',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
