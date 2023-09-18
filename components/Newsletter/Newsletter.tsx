import React from "react";
import Container from "../Container";

import { GrSend } from "react-icons/gr";

const Newsletter = () => {
  return (
    <div className="bg-[var(--yellowColor)] py-6 mt-12">
      <Container>
        <div className="flex items-start sm:items-center justify-between flex-col min-[922px]:flex-row gap-5">
          <div className="flex-center gap-2 text-center justify-center w-full sm:w-auto">
            <GrSend size={32} />
            <p className="text-xl sm:text-2xl">Sign up to Newsletter</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-[14px]">
              ...and receive{" "}
              <span className="font-semibold">
                $20 coupon for first shopping
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0 w-full sm:w-auto">
            <input
              type="text"
              className="w-full sm:w-[400px] p-3 rounded-full sm:rounded-none sm:rounded-l-full outline-0"
              placeholder="Enter your email"
            />
            <button className="bg-[#333e48] text-white p-3 rounded-full sm:rounded-none sm:rounded-r-full w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
