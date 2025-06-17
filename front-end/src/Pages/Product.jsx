import Purchase_Carousel from "../Components/Purchase_Carousel";

export default function Product() {
  return (
    <div>
      <div className="product-page">
            <div className="banner flex">
                <div className="right flex-1">
                    <img src="https://i.pinimg.com/736x/10/bc/bd/10bcbdc51fdacda178fbf70267e19251.jpg" alt="" className="w-90 h-48 rounded-2xl ml-75"/>
                </div>
                <div className="left flex-1 ml-30">
                    <h1 className="text-3xl font-bold">Product Name</h1>
                    <p>The new socail experience for you and your friends. Sign up to learn more.</p>
                </div>
            </div>
      </div>
      <div className="product_detail mt-10  ">
        <div className="detail flex">
            <div className="left flex-1">
                    <div className="detail_right ml-70">
                      <h1 className="text-3xl font-bold">Add Sections or <br/> Complete Pages</h1>
                      <p>Add breakpoints to your blank page,<br />  then drop sections to have them <br />responsive out of the box.</p>
                        <div className="flex gap-4">
                          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Get Start
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                            Learn more
                          </button>
                        </div>
                    </div>
                </div>
             <div className="left flex-1">
                    <img src="https://i.pinimg.com/736x/10/bc/bd/10bcbdc51fdacda178fbf70267e19251.jpg" alt="" className="w-100 h-49 rounded-2xl  "/>
            </div>
        </div>
      </div>
      <div className="slider">
        <br />
        <Product_Carousel />
      </div>
    </div>
  );
}