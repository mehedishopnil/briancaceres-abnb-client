import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { BsSearch } from "react-icons/bs";
import ListingCards from "../../components/ListingCards/ListingCards";
import Loading from "../../components/Loading";

const Listings = () => { 
  const { allHotelsList, user, loading } = useContext(AuthContext); 
  const [filterInput, setFilterInput] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]); 


  useEffect(() => {
    if (!loading) {
      // Filter the listings based on the filterInput only if loading is false
      const filteredData = allHotelsList.filter((property) => { 
        const propertyName = property.name ? property.name.toLowerCase() : "";
        const propertyLocation = property.location
          ? property.location.toLowerCase()
          : "";
        return (
          propertyName.includes(filterInput.toLowerCase()) ||
          propertyLocation.includes(filterInput.toLowerCase())
        );
      });
      setFilteredProperties(filteredData); 
    }
  }, [allHotelsList, filterInput, loading]);

  return (
    <div className="mt-8">
      {/* Search bar with search icon */}
      <div className="flex justify-center items-center relative w-4/5 md:w-1/2 mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full p-2 pr-10 rounded-full border border-gray-300"
          value={filterInput} // Renamed from searchTerm
          onChange={(e) => setFilterInput(e.target.value)} // Renamed onChange handler
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-2">
          <BsSearch size={20} color="#777" />
        </div>
      </div>
      <div className="flex justify-start ml-10 md:ml-[280px]">
        <h2 className="text-xl font-semibold mb-5">
          {user ? (loading ? "Loading..." : `${filteredProperties.length} Listings`) : "Please log in to view listings"} {/* Renamed user to user */}
        </h2>
      </div>
      <div className="w-4/5 md:w-2/3 mx-auto">
        {user ? (
          loading ? (
            <p><Loading/></p> // You can replace this with a loading indicator or placeholder
          ) : filteredProperties.length ? (
            filteredProperties.map((property, idx) => ( 
              <ListingCards key={property.id} item={property} index={idx} /> 
            ))
          ) : (
            <p>No listings found.</p> // Optional message for no data found
          )
        ) : (
          <p>Please log in to view listings.</p>
        )}
      </div>
    </div>
  );
};

export default Listings; // Renamed default export
