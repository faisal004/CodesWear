import React from "react";
import Link from "next/link";

const orders = () => {
  //const oid=Math.floor(Math.random()*100000)
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              GymWears.com
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order id- #899006
            </h1>
            <p className="leading-relaxed mb-4 font-semibold">
              Your order is successfully placed.
            </p>
            <div className="flex mb-4">
              <a className="flex-grow text-slate-500 border-slate-500 py-2 text-lg px-1 text-center">
                Description
              </a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-1 text-center">
                Quantity
              </a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-1 text-center">
                Item Total
              </a>
            </div>
            
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear The Muscle(XL/Black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear The Muscle(XL/Black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Wear The Muscle(XL/Black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal: ₹1188
              </span>
              <Link href={'./track'}><button  className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">
                Track Order
              </button></Link>
              
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://e7.pngegg.com/pngimages/341/867/png-clipart-white-check-with-green-background-illustration-fingerprint-comcast-circle-symbol-technology-tick-miscellaneous-angle.png"
          />
        </div>
      </div>
    </section>
  );
};

export default orders;
