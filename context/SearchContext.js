// context/SearchContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const saved = await AsyncStorage.getItem('search_history');
      if (saved) setSearchHistory(JSON.parse(saved));
    };
    loadHistory();
  }, []);

  const addToHistory = async (query) => {
    const trimmed = query.trim();
    if (trimmed === '') return;

    // Remove if exists, then add to top
    const updated = [trimmed, ...searchHistory.filter(item => item !== trimmed)];
    setSearchHistory(updated);
    await AsyncStorage.setItem('search_history', JSON.stringify(updated));
  };

  return (
    <SearchContext.Provider value={{ searchHistory, addToHistory }}>
      {children}
    </SearchContext.Provider>
  );
};
