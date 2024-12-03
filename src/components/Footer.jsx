import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 mb-6">
            <h2 className="text-2xl font-bold text-black">SHOP.CO</h2>
            <p className="text-sm mt-2">
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-black">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  How-to Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-wrap justify-between items-center text-sm">
          <p className="text-gray-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <img
              src="./assets/images/Badge.png"
              alt="Visa"
              className="w-[75px] object-contain"
            />
            <img
              src="./assets/images/Badge1.png"
              alt="PayPal"
              className="w-[75px] object-contain"
            />
            <img
              src="./assets/images/Badge2.png"
              alt="Apple Pay"
              className="w-[75px] object-contain"
            />
            <img
              src="./assets/images/Badge3.png"
              alt="Google Pay"
              className="w-[75px] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
