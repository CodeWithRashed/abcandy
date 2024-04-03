"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import ContactUs from "./ContactUs";
const NavigationBar = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);

  const onClose = () => {
    setIsShowModal(false);
  };
  return (
    <nav className="bg-white py-6 text-text-primary">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <ul className="hidden lg:flex gap-5 items-center">
          <li>About Us</li>
          <li>Services</li>
          <li>What&apos;s New?</li>
        </ul>
        <div className="logo w-full lg:w-auto flex justify-between items-center lg:block">
          {/* Logo */}
          <div className="logo">
            <svg
              width="130"
              height="23"
              viewBox="0 0 130 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.768 23H0.919998V8.92003C0.919998 6.61603 1.656 4.65336 3.128 3.03203C4.62133 1.4107 6.54133 0.600029 8.888 0.600029H16.216V23H13.208V3.41603H8.888C7.33067 3.41603 6.08266 3.8747 5.144 4.79203C4.22666 5.70936 3.768 7.1707 3.768 9.17603V11.896C4.96267 10.6374 6.66933 10.008 8.888 10.008H11.8V12.824H8.888C7.65067 12.824 6.63733 12.9734 5.848 13.272C5.08 13.5707 4.38666 14.0827 3.768 14.808V23Z"
                fill="#2C2347"
              />
              <path
                d="M23.5247 23H20.5487V7.73603C20.5487 5.5387 21.2527 3.7467 22.6607 2.36003C24.0901 0.973363 25.8501 0.280029 27.9407 0.280029C30.2447 0.280029 31.9727 0.866696 33.1247 2.04003C34.2981 3.19203 34.8848 4.6107 34.8848 6.29603C34.8848 8.4507 33.8821 9.99736 31.8767 10.936V11.064C34.6287 11.8534 36.0048 13.7627 36.0048 16.792C36.0048 20.9307 33.5621 23 28.6767 23H24.6767V20.184H28.6447C30.1167 20.184 31.1941 19.8854 31.8767 19.288C32.5594 18.6907 32.9007 17.7307 32.9007 16.408C32.9007 15.256 32.5274 14.3707 31.7807 13.752C31.0554 13.1334 30.0634 12.824 28.8047 12.824H25.6367V10.168H27.6847C28.8367 10.168 29.8181 9.8587 30.6287 9.24003C31.4607 8.60003 31.8767 7.7467 31.8767 6.68003C31.8767 5.65603 31.5567 4.8027 30.9167 4.12003C30.2981 3.43736 29.2847 3.09603 27.8767 3.09603C26.5967 3.09603 25.5514 3.50136 24.7407 4.31203C23.9301 5.10136 23.5247 6.26403 23.5247 7.80003V23Z"
                fill="#2C2347"
              />
              <path
                d="M39.3575 11.8C39.3788 8.23736 40.3602 5.48536 42.3015 3.54403C44.2642 1.58136 46.9628 0.600029 50.3975 0.600029H52.4775V3.41603H50.0135C47.6455 3.41603 45.8215 4.20536 44.5415 5.78403C43.2828 7.34136 42.6322 9.3467 42.5895 11.8C42.6322 14.2534 43.2828 16.2694 44.5415 17.848C45.8215 19.4054 47.6455 20.184 50.0135 20.184H52.4775V23H50.3975C46.9628 23 44.2642 22.0294 42.3015 20.088C40.3602 18.1254 39.3788 15.3627 39.3575 11.8Z"
                fill="#2C2347"
              />
              <path
                d="M59.018 23H56.17V8.92003C56.17 6.61603 56.906 4.65336 58.378 3.03203C59.8713 1.4107 61.7913 0.600029 64.138 0.600029H71.466V23H68.458V3.41603H64.138C62.5807 3.41603 61.3327 3.8747 60.394 4.79203C59.4767 5.70936 59.018 7.1707 59.018 9.17603V11.896C60.2127 10.6374 61.9193 10.008 64.138 10.008H67.05V12.824H64.138C62.9007 12.824 61.8873 12.9734 61.098 13.272C60.33 13.5707 59.6367 14.0827 59.018 14.808V23Z"
                fill="#2C2347"
              />
              <path
                d="M78.9668 23H75.9587V0.600029H83.8627C86.5081 0.600029 88.4814 1.19736 89.7828 2.39203C91.0841 3.56536 91.7347 5.42136 91.7347 7.96003V23H88.7268V7.54403C88.7268 6.09336 88.2787 5.04803 87.3828 4.40803C86.5081 3.7467 85.3454 3.41603 83.8948 3.41603H78.9668V23Z"
                fill="#2C2347"
              />
              <path
                d="M111.445 11.8C111.423 15.3627 110.431 18.1254 108.468 20.088C106.527 22.0294 103.839 23 100.405 23H96.0525V0.600029H100.405C103.839 0.600029 106.527 1.58136 108.468 3.54403C110.431 5.48536 111.423 8.23736 111.445 11.8ZM100.788 20.184C103.157 20.184 104.97 19.4054 106.229 17.848C107.508 16.2694 108.17 14.2534 108.213 11.8C108.17 9.3467 107.508 7.34136 106.229 5.78403C104.97 4.20536 103.157 3.41603 100.788 3.41603H99.0605V20.184H100.788Z"
                fill="#2C2347"
              />
              <path
                d="M129.311 0.600029V2.20003C129.311 4.8027 128.82 7.19203 127.839 9.36803C126.879 11.5227 125.471 13.1654 123.615 14.296V23H120.607V14.36C118.751 13.2507 117.322 11.64 116.319 9.52803C115.316 7.3947 114.815 5.04803 114.815 2.48803V0.600029H117.887V2.20003C117.887 4.39736 118.196 6.28536 118.815 7.86403C119.455 9.42136 120.554 10.7014 122.111 11.704C124.906 9.84803 126.303 6.68003 126.303 2.20003V0.600029H129.311Z"
                fill="#2C2347"
              />
            </svg>
          </div>
          <button
            className="lg:hidden bg-color-primary px-3 py-3 text-white"
            onClick={() => {
              setIsShowModal(true);
            }}
          >
            Contact Us
          </button>
        </div>
        <ul className="hidden lg:flex flex-col lg:flex-row gap-5 items-center">
          <li>Community</li>
          <li>Blog</li>
          <button
            className="bg-color-primary px-3 py-3 text-white"
            onClick={() => {
              setIsShowModal(true);
            }}
          >
            Contact Us
          </button>
        </ul>
      </div>
      <Modal
        isShowModal={isShowModal}
        onClose={onClose}
        modalTitle="Contact Us"
      >
        <ContactUs />
      </Modal>
    </nav>
  );
};

export default NavigationBar;
