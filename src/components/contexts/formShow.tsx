import React, { FC, createContext, useState } from "react";

export const FormShowContext = createContext<{ currentFormIndex: number; setCurrentFormIndex: (num: number) => void }>({
  currentFormIndex: 0,
  setCurrentFormIndex: () => {},
});


export const FormShowContextWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const contextValue = {
    currentFormIndex,
    setCurrentFormIndex,
  };

  return (
    <FormShowContext.Provider value={contextValue}>
      {children}
    </FormShowContext.Provider>
  );
};
