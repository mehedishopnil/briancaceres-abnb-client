import { createContext, useEffect, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Initialize Firebase Auth

// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // State variables
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [AllHotelData, setAllHotelData] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  const [earningList, setEarningList] = useState([]);
  const [usersData, setUsersData] = useState([]);


  // Fetch hotel data
  useEffect(() => {
    const fetchAllHotelData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://briancaceres-abnb-server.vercel.app/all-hotel-data');
        if (!response.ok) {
          throw new Error(`Error fetching hotelData.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAllHotelData(data);
      } catch (error) {
        console.error('Error fetching hotelData.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllHotelData();
  }, []);


  // Fetch users data
  useEffect(() => {
    const fetchUsersData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://briancaceres-abnb-server.vercel.app/users');
        if (!response.ok) {
          throw new Error(`Error fetching hotelData.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error('Error fetching UsersData.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  // Fetch hotel list data
  useEffect(() => {
    const fetchAllHotels = async () => {
      setLoading(true);
      try {
        const response = await fetch('');
        if (!response.ok) {
          throw new Error(`Error fetching AllHotels.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAllHotels(data);
      } catch (error) {
        console.error('Error fetching AllHotels.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllHotels();
  }, []);

  // Fetch earning list
  // useEffect(() => {
  //   const fetchEarningList = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('');
  //       if (!response.ok) {
  //         throw new Error(`Error fetching earningList.json: ${response.status} ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       setEarningList(data);
  //     } catch (error) {
  //       console.error('Error fetching earningList.json:', error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEarningList();
  // }, []);

  // // Registration and login functions
  // const registration = (email, password) => {
  //   setLoading(true);
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       console.error('Registration failed:', error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // const login = (email, password) => {
  //   setLoading(true);
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       console.error('Login failed:', error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // Create user placeholder (can be removed or replaced as needed)
  useEffect(() => {
    if (loading) {
      const createUser = () => {
        const user = "Mehedi Hasan"; // Placeholder, replace or remove as needed
        setUser(user);
      };

      createUser();
    }
  }, [loading]);

  // Context value
  const authInfo = {
    user,
    AllHotelData,
    allHotels,
    loading,
    earningList,
    usersData,
    // login,
    // registration,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;