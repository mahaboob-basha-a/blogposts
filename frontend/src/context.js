
// ModalContext.js
import React, { createContext, useState } from 'react';

// Create a Context for managing modal state
export const ModalContext = createContext();

// Create a Provider component
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
