import {createContext, useState} from 'react';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [name, setName] = useState('Eren');

  return (
    <UserContext.Provider value={{name, setName}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
