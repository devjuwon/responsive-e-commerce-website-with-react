import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        setProducts(product[0]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo({top: 0, behaviour: "smooth"})
  }, [id]);

  const { title, category, price, image, status } = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-5">
          <a href="/" className="text-0gray-600">Home</a>
          <a href="/shop" className="font-bold tex-black">/Shop</a>
        </div>


        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>

            {/* product details */}
            <div>
              <h1 className="text-base font-semibold mb-2 text-left">
                {title}
              </h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia illum possimus iste totam dicta ad facere enim, et error
                doloribus tempora qui distinctio commodi molestias excepturi
                mollitia, nemo molestiae quas Lorem ipsum dolor sit amet
              </p>
              <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                ${price}
              </p>

              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:text-red-500 lg:m-0 md:px-6">
                    <span>Confirm Order</span> <FaArrowAltCircleRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-black/75 mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            ducimus delectus id labore, facere qui eos corrupti optio quo
            possimus veniam, debitis a earum suscipit odit! Asperiores
            temporibus tempora illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            ducimus delectus id labore, facere qui eos corrupti optio quo
            possimus veniam, debitis a earum suscipit odit! Asperiores
            temporibus tempora illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            ducimus delectus id labore, facere qui eos corrupti optio quo
            possimus veniam, debitis a earum suscipit odit! Asperiores
            temporibus tempora illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            ducimus delectus id labore, facere qui eos corrupti optio quo
            possimus veniam, debitis a earum suscipit odit! Asperiores
            temporibus tempora illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
