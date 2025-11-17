import { useState, createContext, useContext, } from "react"

const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {}
    
  })

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData))
  }

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      { children }
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

// eslint-disable-next-line react-refresh/only-export-components
export { useUser }