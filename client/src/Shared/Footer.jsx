/* eslint-disable react/no-unknown-property */
import img from "../assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="footer footer-center py-6 bg-zinc-700 text-primary-content ">
      <div className="pt-1">
        <img className="h-14 w-30 " src={img} />
        <p className="font-bold">
          PHONE TRADERS Ltd. <br />
          Providing reliable tech since 2000
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
