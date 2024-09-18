import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Loading from "../Loading";

const ListingCards = ({ item, index }) => {
  const navigate = useNavigate();
  const { allEarning, loading } = React.useContext(AuthContext);

  // If data is still loading, show a loading spinner
  if (loading) {
    return (
      <div className="border rounded border-gray-200 mb-4 md:mb-4 p-4 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-10">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 bg-gray-200"></div> {/* Placeholder for image */}
          </div>
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="truncate max-w-xs"><Loading/></p>
          </div>
        </div>
      </div>
    );
  }

  // Search the earnings list by name instead of id
  const findEarningListByName = (name) => {
    return allEarning.find((earningItem) => earningItem.name === name);
  };

  const handleClick = () => {
    const selectedEarning = findEarningListByName(item.name);

    if (selectedEarning) {
      // Navigate using name instead of id
      navigate(`/individual-earnings/${item.name}`);
    } else {
      <Loading/>
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="border rounded border-gray-200 mb-4 md:mb-4 p-4 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-10">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt={`Listing ${index + 1}`} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="truncate max-w-48">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
