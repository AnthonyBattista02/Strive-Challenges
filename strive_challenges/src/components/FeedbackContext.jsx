import React, { createContext, useContext, useState } from 'react';


const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  
  const contextValue = {
    code,
    setCode,
    feedback,
    setFeedback,
    selectedCategory,
    setSelectedCategory,
  };

  return <FeedbackContext.Provider value={contextValue}>{children}</FeedbackContext.Provider>;
};


export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};
