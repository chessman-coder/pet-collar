import Purchase_Carousel from "../components/Purchase_Carousel";

function Purchase() {
  return (
    <div className="purchase-page flex">
      <div className="right flex-1 ml-8">
        <Purchase_Carousel />
        <p></p>
      </div>
      <div className="left flex-1 ml-8">
        <h1 className="text-3xl font-bold mb-4">PetPace V2.0</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Modi in sunt, distinctio, optio nesciunt fugit animi harum <br />
          saepequia delectus soluta laudantium libero neque consequuntur <br />
          deserunt. Esse quaerat quae omnis?
        </p>
        <hr className="my-4" />
        <div className="size mb-4">
          <div className="flex items-center gap-4">
            <h4 className="text-lg font-semibold mb-2">Select a size</h4>
            <div className="size-options flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="size-option border-2 border-gray-400 rounded-full w-10 h-10 aspect-square flex items-center justify-center text-base font-medium hover:border-blue-500 transition p-0"
                  style={{ borderRadius: "50%" }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <h4>Select Your Subscription</h4>
        <div className="subscription">
          <div className=" items-center gap-4">
            <div className="subscription-option border-2 border-gray-400 rounded-lg p-4 w-110 hover:border-blue-500 transition">
              <h5 className="text-lg font-semibold mb-2">Monthly</h5>
              <p className="text-gray-600">$19.99/month</p>
            </div>
            <br />
            <div className="subscription-option border-2 border-gray-400 rounded-lg p-4 w-110 hover:border-blue-500 transition">
              <h5 className="text-lg font-semibold mb-2">Yearly</h5>
              <p className="text-gray-600">$199.99/year</p>
            </div>
            <br />
            <div className="subscription-option border-2 border-gray-400 rounded-lg p-4 w-110 hover:border-blue-500 transition">
              <h5 className="text-lg font-semibold mb-2">Lifetime</h5>
              <p className="text-gray-600">$499.99 one-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;