import { createContext, useEffect, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State variables
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [AllHotelData, setAllHotelData] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  const [earningList, setEarningList] = useState([]);
  const [usersData, setUsersData] = useState([]);

  // Fetch hotel data
  useEffect(() => {
    const fetchAllHotelData = async () => {
      try {
        const response = await fetch('https://briancaceres-abnb-server.vercel.app/all-hotel-data');
        if (!response.ok) {
          throw new Error(`Error fetching all-hotel-data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setLoading(false);
        setAllHotelData(data);
      } catch (error) {
        console.error('Error fetching all-hotel-data:', error.message);
      } 
    };

    fetchAllHotelData();
  }, []);

  // Fetch users data
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch('https://briancaceres-abnb-server.vercel.app/users');
        if (!response.ok) {
          throw new Error(`Error fetching users: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  // // Fetch hotel list data
  // useEffect(() => {
  //   const fetchAllHotels = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('');
  //       if (!response.ok) {
  //         throw new Error(`Error fetching all-hotels: ${response.status} ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       setAllHotels(data);
  //     } catch (error) {
  //       console.error('Error fetching all-hotels:', error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAllHotels();
  // }, []);

  // Fetch earning list
  // useEffect(() => {
  //   const fetchEarningList = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('');
  //       if (!response.ok) {
  //         throw new Error(`Error fetching earning-list: ${response.status} ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       setEarningList(data);
  //     } catch (error) {
  //       console.error('Error fetching earning-list:', error.message);
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
