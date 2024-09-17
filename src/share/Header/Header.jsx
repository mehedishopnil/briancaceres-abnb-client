import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react"; // Used for handling the mobile menu
import { MdMenu } from "react-icons/md"; // Icon for the mobile menu button
import { FaUserCircle } from "react-icons/fa"; // Default user icon
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"; // Importing AuthContext for authentication

const Header = () => {
  const { usersData } = useContext(AuthContext); // Getting user data from AuthContext
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to handle mobile menu visibility

  const user = usersData?.[0]; // Extracting the first user from usersData (if available)


  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the user is logged in by confirming if usersData exists and has content
  const isUserLoggedIn = usersData && usersData.length > 0;

  return (
    <div className="container mx-auto bg-slate-300 py-5 px-5">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
              className="w-20 md:w-32" // Responsive sizing for different screen sizes
              alt="Airbnb Logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden lg:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={toggleMobileMenu} // Open/close the mobile menu
                  className="flex gap-5 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  {/* User Profile or Default Icon */}
                  {isUserLoggedIn ? (
                    <Link to="profile">
                      <img
                        src={user.img}
                        alt="User Profile"
                        className="w-[30px] h-[30px] rounded-full"
                      />
                    </Link>
                  ) : (
                    <Link to="profile" className="text-3xl">
                      <FaUserCircle />
                    </Link>
                  )}
                  {/* Hamburger Menu Icon */}
                  <MdMenu size={24} />
                </Disclosure.Button>

                {/* Mobile Menu Transition */}
                <Transition
                  show={open}
                  enter="transition-transform duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-transform duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  {/* Mobile Menu Links */}
                  <Disclosure.Panel >
                    <div className="">
                    <ul className="menu p-4 text-gray-700 font-bold text-xl">
                      <li>
                        <Link to="/" onClick={toggleMobileMenu}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMobileMenu}>
                          Bookings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/hosting-dashboard/listing"
                          onClick={toggleMobileMenu}
                        >
                          My Hosting
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={toggleMobileMenu}>
                          Contact
                        </Link>
                      </li>
                    </ul>

                    <div className="w-4/3 border border-gray-400"></div>

                    {/* Conditional Links (Login/Register or Profile/Logout) */}
                    <ul className="menu p-4 text-gray-700 font-bold text-xl">
                      {isUserLoggedIn ? (
                        <>
                          <li>
                            <Link
                              to="/"
                              onClick={() => {
                                /* Handle logout */
                              }}
                            >
                              Log Out
                            </Link>
                          </li>
                          <li>
                            <Link to="profile" onClick={toggleMobileMenu}>
                              Profile
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/login" onClick={toggleMobileMenu}>
                              Log In
                            </Link>
                          </li>
                          <li>
                            <Link to="/register" onClick={toggleMobileMenu}>
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 font-semibold text-lg text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/">Bookings</Link>
          <Link to="/hosting-dashboard/listing">My Hosting</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Conditional Buttons (Login/Register or Profile/Logout) */}
        <div className="hidden md:flex gap-5 justify-end">
          {isUserLoggedIn ? (
            <div className="flex gap-5 justify-center items-center">
              <Link
                className="btn btn-sm"
                to="/"
                onClick={() => {
                  /* Handle logout */
                }}
              >
                Log Out
              </Link>
              <Link to="profile" className="">
                <img
                  src={user.img}
                  alt="User Profile"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </Link>
            </div>
          ) : (
            <>
              <Link className="btn btn-sm" to="/login">
                Log In
              </Link>
              <Link className="btn btn-sm" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
