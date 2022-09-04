

const authContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return(
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    )

};