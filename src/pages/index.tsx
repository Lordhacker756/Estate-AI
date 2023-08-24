// use client
// @ts-nocheck
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [prediction, setPrediction] = useState("Get Predictions!");
  const [features, setFeatures] = useState({
    bedroom: 0.0,
    layout_type: 0,
    area: 0,
    furnish_type: 0,
    bathroom: 0,
    city: 0,
    agent: 0,
    builder: 0,
    owner: 0,
    apartment: 0,
    independent_floor: 0,
    independent_house: 0,
    penthouse: 0,
    studio_apartment: 0,
    villa: 0,
  });

  const getPredictions = async (e) => {
    e.preventDefault();
    const data = features;
    console.log(features);
    const res = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log(json);
    setPrediction(json.prediction);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call getPredictions function
  };

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
        <header className="flex justify-between bg-gradient-to-b from-black to-transparent px-10 py-4 absolute top-0 left-0 right-0 z-10">
          <div className="header_left flex md:w-[50%] w-full justify-center md:justify-start items-center gap-4">
            <Image src="/logo.png" alt="Estate AI" width={40} height={40} />
            <p
              className="text-white font-bold text-2xl
            "
            >
              Estate AI
            </p>
          </div>
          <div className="header_right md:flex hidden items-center justify-end gap-10 w-[50%]">
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
          className="hero flex py-24 md:items-center items-end px-10 gap-4 md:h-[100vh] h-[70vh] relative"
          style={{
            backgroundImage: `url(/hero.png)`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.3)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="heroLeft text-white">
            <h1 className="md:text-6xl text-3xl font-bold md:w-[65%] md:py-2 py-4">
              Looking for the best rooms to rent in a{" "}
              <span className="text-blue-500">Metro City</span>?
            </h1>
            <h2 className="text-xl md:w-[60%]">
              Use our AI Model trainded over lakhs of data points to find the
              best price as per your requirements!
            </h2>
            <button className="border-blue-500 border-2 my-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all ease-out duration-300 text-white font-bold py-2 px-10 rounded-full cursor-pointer">
              <a href="#prediction">Find Best Price!</a>
            </button>
          </div>
          <div className="bottom_gradient bg-gradient-to-t from-black to-trasnparent absolute bottom-0 left-0 right-0 h-32"></div>
        </section>

        {/* Prediction Form */}
        <section
          id="prediction"
          className="predictionForm flex md:flex-row flex-col-reverse items-center justify-around py-24 bg-black text-white"
        >
          <div className="prediction_value md:text-left md:my-0 my-5 text-center">
            <h1 className="text-4xl font-bold ">Predicted Price</h1>
            <h2 className="text-blue-500 text-4xl font-bold">
              ₹ {Math.ceil(prediction)}
            </h2>
          </div>
          <div className="prediction_form md:w-[50%] px-5 justify-center flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">
              Let the AI help you find the best rooms!
            </h1>
            <p className="text-xl text-center md:w-[50%] md:my-4 mt-5 mb-8">
              Fill in the form below to get the best rooms as per your
              requirements
            </p>
            <form
              onSubmit={(e) => {
                getPredictions(e);
              }}
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-[100%]">
                  <label className="text-lg font-bold">City</label>
                  <select
                    name="city"
                    value={features.property}
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        [e.target.name]: parseInt(e.target.value),
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="0">Ahmedabad</option>
                    <option value="1">Bangalore</option>
                    <option value="2">Chennai</option>
                    <option value="3">Delhi</option>
                    <option value="4">Hyderabad</option>
                    <option value="5">Kolkata</option>
                    <option value="6">Mumbai</option>
                    <option value="7">Pune</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <label className="text-lg font-bold">Seller</label>
                  <select
                    onChange={(e) => {
                      console.log(e.target.selectedOptions[0].dataset.seller);
                      setFeatures({
                        ...features,
                        [e.target.selectedOptions[0].dataset.seller]: 1,
                      });
                    }}
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="Agent" data-seller="agent">
                      Agent
                    </option>
                    <option value="Builder" data-seller="builder">
                      Builder
                    </option>
                    <option value="Owner" data-seller="owner">
                      Owner
                    </option>
                  </select>
                </div>
              </div>
              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Bedroom</label>
                  <select
                    value={features.bedroom}
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        bedroom: parseInt(e.target.value),
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
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
                  <select
                    value={features.bathroom}
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        bathroom: parseInt(e.target.value),
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
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
                    max={19000}
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    value={features.area}
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        area: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Furnish Type</label>
                  <select
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        furnish_type: parseInt(e.target.value),
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="1">Semi-Furnished</option>
                    <option value="2">Unfurnished</option>
                    <option value="0">Furnished</option>
                  </select>
                </div>
              </div>

              <div className="group flex justify-between gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Property Type</label>
                  <select
                    value={features.property}
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        [e.target.selectedOptions[0].dataset.property]: 1,
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    Apartment Independent Floor Independent House Penthouse
                    Studio Apartment
                    <option value="Apartment" data-property="apartment">
                      Apartment
                    </option>
                    <option
                      value="Independent House"
                      data-property="independent_house"
                    >
                      Independent House
                    </option>
                    <option
                      value="Independent Floor"
                      data-property="independent_floor"
                    >
                      Independent Floor
                    </option>
                    <option value="Penthouse" data-property="penthouse">
                      Penthouse
                    </option>
                    <option
                      value="Studio Apartment"
                      data-property="studio_apartment"
                    >
                      Studio Apartment
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-bold">Layout Type</label>
                  <select
                    onChange={(e) =>
                      setFeatures({
                        ...features,
                        layout_type: parseInt(e.target.value),
                      })
                    }
                    className="border-2 bg-gray-800 border-gray-600 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="Select" disabled selected>
                      Select
                    </option>
                    <option value="1">BHK</option>
                    <option value="2">RK</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                value="Predict Price"
                className="border-blue-500 border-2 my-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all ease-out duration-300 text-white font-bold py-2 px-20 rounded-full cursor-pointer"
              />
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex md:flex-row flex-col items-center justify-center gap-4 w-full py-5 bg-black">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-lg font-bold text-white">Made with ❤️ by</h1>
            <h1 className="text-lg font-bold text-blue-500">
              <a
                href="https://www.linkedin.com/in/theutkarshmishra/"
                target="_blank"
              >
                Utkarsh Mishra
              </a>
            </h1>
          </div>
          <div className="md:hidden flex items-center justify-evenly w-full">
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
        </footer>
      </main>
    </>
  );
}
