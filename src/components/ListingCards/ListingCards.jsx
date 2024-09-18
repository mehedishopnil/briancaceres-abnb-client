import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const ListingCards = ({ item, index }) => {

  const navigate = useNavigate();
  const { allEarning } = React.useContext(AuthContext);

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
      console.error("Matching data not found");
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
            <p className="font-semibold">{item.name}</p>
            <p className="truncate max-w-xs">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
