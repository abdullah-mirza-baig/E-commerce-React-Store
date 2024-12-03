import React from 'react';
import { Col, Row } from 'antd';

const Banner = () => {
  return (
    <>
      <Row className="bg-[#F2F0F1] h-auto sm:h-[500px] banner">
        {/* Left Section */}
        <Col xs={24} sm={12}>
          <div className="left-wrapper flex justify-center items-center">
            <div className="content py-6 sm:py-[85px] w-[90%] m-auto text-center">
              <h1 className="text-3xl sm:text-5xl sm:text-left  font-extrabold mb-3 px-2 sm:px-[45px] ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="px-2 sm:px-[45px] text-black text-sm sm:text-[1em] sm:text-left mb-3">
                Browse through our diverse range of meticulously crafted garments, 
                designed to bring out your individuality and cater to your sense of style.
              </p>
              <div className="btn-wrapper px-2 sm:ps-[45px] sm:text-left">
                <button className="w-full sm:w-auto px-4 sm:pe-[45px] sm:ps-[45px] bg-black text-white py-2 border rounded-2xl mb-5">
                  Shop Now
                </button>
              </div>
              <div className="ratings  sm:flex text-center  gap-3 px-2 ">
                <div className="first  mb-3 sm:mb-0">
                  <h1 className="text-2xl sm:text-3xl font-bold">200+</h1>
                  <p className="text-[#00000099] text-sm sm:text-[0.9em]">International Brands</p>
                </div>
                <div className="second mb-3 sm:mb-0">
                  <h1 className="text-2xl sm:text-3xl font-bold">200+</h1>
                  <p className="text-[#00000099] text-sm sm:text-[0.9em]">High-Quality Products</p>
                </div>
                <div className="third  mb-3 sm:mb-0">
                  <h1 className="text-2xl sm:text-3xl font-bold">200+</h1>
                  <p className="text-[#00000099] text-sm sm:text-[0.9em]">High-Quality Products</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} sm={12}>
          <div className="right-wrapper flex justify-center mt-4 sm:mt-0">
            <div className="image-wrapper w-[300px] sm:w-[500px] h-[300px] sm:h-[500px]">
              <img
                className="w-full h-full object-cover banimage object-top"
                src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciejQeSBFzSx1N7DvYVVTkRotQMXwAxeV7I3Jh5vVFNjHuvOEdRnIGSLMfYwqniOoB7dnD2KtE8CES9ZkSp7Hc8YCSazD3IzadRETRZPvIaUWIDnjiuxDfMIGXGYq-j6NJUNRryo9XBe3u6OkFAdZyUwhzC0Jy6yhKbpg-6Lm-mTjbsBeWjopqJRm7YGAD97x3IyrL8CB8Fuf7KdQf57K6bxjJNRXzy9A7O6Glia8BGfsPAEAu5QrmWTN2WFssOJiKvusPyIfgwFF7NTW5gwucPPxkBbdA82wTz1oCUo3SpDbpvYq8f8GK8supXoBSXdG2CzWNbTRTtYbyztmg9JVQ__"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>

      {/* Black Row for Brands */}
      <Row className="w-full h-full  sm:h-[100px] bg-black flex items-center">
        <Col span={24}>
          <div className="main-wrapper py-[8px] sm:py-0 w-[95%] m-auto flex flex-wrap gap-7 sm:gap-[120px] justify-center">
            <img className="w-[70px] sm:w-[120px] object-contain" src="./assets/images/Group.png" alt="" />
            <img className="w-[70px] sm:w-[120px] object-contain" src="./assets/images/Group (1).png" alt="" />
            <img className="w-[70px] sm:w-[120px] object-contain" src="./assets/images/gucci-logo-1 1.png" alt="" />
            <img className="w-[70px] sm:w-[120px] object-contain" src="./assets/images/prada-logo-1 1.png" alt="" />
            <img className="w-[50px] sm:w-[70px] object-contain" src="./assets/images/zara-logo-1 1.png" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
