import { Link } from "react-router-dom";
import navbarLogo from "../assets/images/navbar_logo.jpg";

export default function Navbar() {
  return (
    <div className="bg-white flex items-center justify-between py-2 px-2 shadow-lg fixed top-0 left-0 right-0 z-10 md:px-10">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <h3 className="font-bold pb-4 text-3xl md:text-5xl bg-gradient-to-r from-[#1D4EFE] to-[#1A8DF7] inline-block text-transparent bg-clip-text">
            Prakalpa
          </h3>
        </Link>
        {/* <Link to={"/"}>
          <img
            src={navbarLogo}
            alt="VESIT"
            className="text-3xl font-extrabold text-yellow-400 h-10 w-36 md:h-[44.4px] md:w-[181.2px]"
          />
        </Link> */}
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#E0E7FF] md:px-5 py-2 px-2 rounded-full hover:opacity-80 active: outline-none placeholder:text-black opacity-60"
        />
      </div>
    </div>
  );
}
