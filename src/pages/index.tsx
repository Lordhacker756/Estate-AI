import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/logo.png";
import heroBg from "../assets/hero.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Estate AI</title>
        <meta
          name="description"
          content="Looking for the best rooms to rent? Let the AI help you with your customized preferences!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <header className="flex justify-between bg-gradient-to-b from-black to-transparent px-16 py-4 absolute top-0 left-0 right-0 z-10">
          <div className="header_left flex w-[50%] items-center gap-4">
            <Image src={logo} alt="Estate AI" width={40} height={40} />
            <p
              className="text-white font-bold text-2xl
            "
            >
              Estate AI
            </p>
          </div>
          <div className="header_right flex items-center justify-end gap-10 w-[50%]">
            <Link
              className="text-white text-lg hover:text-blue-500 hover:cursor-pointer"
              href="/"
            >
              <p>Home</p>
            </Link>
            <Link
              className="text-white text-lg hover:text-blue-500 hover:cursor-pointer"
              href="/about"
            >
              <p>About</p>
            </Link>
            <Link
              className="text-white text-lg hover:text-blue-500 hover:cursor-pointer"
              href="/about"
            >
              <p>GitHub</p>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section
          className="hero flex py-24 items-center px-10 gap-4 h-[100vh] relative"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.3)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="heroLeft text-white">
            <h1 className="text-6xl font-bold w-[65%] py-2">
              Looking for the best rooms to rent in a{" "}
              <span className="text-blue-500">Metro City</span>?
            </h1>
            <h2 className="text-xl w-[60%]">
              Use our AI Model trainded over lakhs of data points to find the
              best price as per your requirements!
            </h2>
            <button className="border-blue-500 border-2 my-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all ease-out duration-300 text-white font-bold py-2 px-10 rounded-full cursor-pointer">
              Find Best Price!
            </button>
          </div>
          <div className="bottom_gradient bg-gradient-to-t from-black to-trasnparent absolute bottom-0 left-0 right-0 h-32"></div>
        </section>

        {/* Prediction Form */}
        <section className="predictionForm flex items-center justify-around py-24 bg-black text-white">
          <div className="prediction_value">
            <h1 className="text-4xl font-bold ">Predicted Price</h1>
            <h2 className="text-blue-500 text-4xl font-bold">₹ 10,000</h2>
          </div>
          <div className="prediction_form w-[50%] justify-center flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">
              Let the AI help you find the best rooms!
            </h1>
            <p className="text-xl text-center w-[50%] my-4">
              Fill in the form below to get the best rooms as per your
              requirements
            </p>
            <form className="flex flex-col items-center justify-center gap-4 w-full">
              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-[100%]">
                  <label className="text-lg font-bold">City</label>
                  <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                  <label className="text-lg font-bold">Seller</label>
                  <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="Owner">Owner</option>
                    <option value="Agent">Agent</option>
                  </select>
                </div>
              </div>
              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Bedroom</label>
                  <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Bathroom</label>
                  <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Area</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="Area in sqft"
                    max={100}
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Furnish Type</label>
                  <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="Semi-Furnished">Semi-Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Furnished">Furnished</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg font-bold">Property Type</label>
                <select className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                  <option value="Select" disabled selected>
                    Select
                  </option>
                  <option value="Apartment">Apartment</option>
                  <option value="Independent House">Independent House</option>
                  <option value="Independent Floor">Independent Floor</option>
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Service Apartment">Service Apartment</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Residential Plot">Residential Plot</option>
                  <option value="Residential House">Residential House</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                </select>
              </div>
              <input
                type="submit"
                value="Predict Price"
                className="border-blue-500 border-2 my-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all ease-out duration-300 text-white font-bold py-2 px-20 rounded-full cursor-pointer"
              />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
