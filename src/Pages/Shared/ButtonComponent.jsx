import { CiGlobe } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const buttonData = [
  {
    to: "/changeLanguage",
    text: "EN",
    icon: <CiGlobe className="mt-1 ml-1" />,
  },
  { to: "/contactSales", text: "Contact Sales" },
  { to: "/login", text: "Login" },
  {
    to: "/signup",
    text: "Sign up for",
    className: "text-white bg-blue-500",
    icon: <FaLongArrowAltRight className="mt-1 ml-1" />,
  },
];

const commonButtonStyles =
  "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-white rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-gray-800 active:text-white focus-visible:outline-black";

const Button = ({ to, text, className = "", icon }) => (
  <Link to={to}>
    <button className={`${commonButtonStyles} ${className}`}>
      {text}
      {icon && icon}
    </button>
  </Link>
);

const NavbarLeftButtons = () => (
  <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
    {buttonData.map((button, index) => (
      <Button key={index} {...button} />
    ))}
  </div>
);

export default NavbarLeftButtons;
