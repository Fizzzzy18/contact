import React, { useState } from 'react';

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Return the object with onClose, onOpen, and isOpen properties
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
