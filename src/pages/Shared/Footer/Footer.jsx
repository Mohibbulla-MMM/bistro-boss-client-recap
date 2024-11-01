import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className=" flex-col md:flex-row flex justify-around items-center gap-8 p-3 text-center w-full ">
        <div className="text-center">
          <p>
            123 ABS Street, Uni 21, Bangladesh
            <br />
            +88 123456789
          </p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className="">
          <h1 className="text-3xl">Follow US</h1>
          <p>Join us on social media</p>
          <div
            className="flex
           justify-center items-center gap-4 text-2xl my-4"
          >
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} CulinaryCloud. All rights
            reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
