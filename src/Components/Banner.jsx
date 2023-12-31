import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="sm:px-5 sm:pt-12 xl:px-32">
                <div className="flex flex-col sm:text-center  capitalize sm:gap-6 items-center justify-center">
                    <h2 className="font-normal sm:text-3xl xl:text-5xl">
                        Wait ! your order in progress.
                    </h2>
                    <h1 className="sm:text-base lg:text-2xl text-[#4D5254]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                    </h1>
                </div>

                <div className="flex xl:pb-10 xl:pt-14 justify-between">
                    <div className="flex sm:flex-col items-center sm:gap-2 sm:py-6  xl:gap-5 sm:text-xs xl:text-xl">
                        <img
                            className="sm:w-5  xl:w-10"
                            src="tipCircleIcon.svg"
                            alt="Cart Review Icon"
                        />
                        <p className=" lg:flex lg:flex-row">
                            <span className="sm:hidden lg:flex">Step 1 : </span>
                            Cart Review
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:gap-2 sm:py-6  xl:gap-5 sm:text-xs xl:text-xl">
                        <img
                            className="sm:w-5  xl:w-10"
                            src="tipCircleIcon.svg"
                            alt="Checkout Icon"
                        />
                        <p className=" lg:flex lg:flex-row">
                            <span className="sm:hidden lg:flex">Step 2 : </span>
                            Checkout
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:gap-2 sm:py-6  xl:gap-5 sm:text-xs xl:text-xl font-bold">
                        <img
                            className="sm:w-5  xl:w-10"
                            src="step3.svg"
                            alt="Special Offer Icon"
                        />
                        <p className=" lg:flex lg:flex-row">
                            <span className="sm:hidden lg:flex">Step 3 : </span>
                            Special Offer
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:gap-2 sm:py-6  xl:gap-5 sm:text-xs xl:text-xl">
                        <img
                            className="sm:w-5  xl:w-10"
                            src="step4.svg"
                            alt="Confirmation Icon"
                        />
                        <p className=" lg:flex lg:flex-row">
                            <span className="sm:hidden lg:flex">Step 4 : </span>
                            Confirmation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
