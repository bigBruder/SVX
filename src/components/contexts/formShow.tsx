import React, { FC, createContext, useState } from "react";

type ContextType = {
  currentFormIndex: number;
  increaseCurrentFormIndex: () => void;
  decreaseCurrentFormIndex: () => void;
};

export const FormShowContext = createContext<ContextType>({
  currentFormIndex: 0,
  increaseCurrentFormIndex: () => {},
  decreaseCurrentFormIndex: () => {},
});

export const FormShowContextWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const increaseCurrentFormIndex = () => {
    setCurrentFormIndex(currentFormIndex + 1);
  };

  const decreaseCurrentFormIndex = () => {
    if (!currentFormIndex) return;
    setCurrentFormIndex(currentFormIndex - 1);
  };

  const contextValue = {
    currentFormIndex,
    setCurrentFormIndex,
    increaseCurrentFormIndex,
    decreaseCurrentFormIndex,
  };

  return (
    <FormShowContext.Provider value={contextValue}>
      {children}
    </FormShowContext.Provider>
  );
};
