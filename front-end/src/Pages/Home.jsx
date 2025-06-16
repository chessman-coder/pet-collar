import long from '../assets/long.png';
import main from '../assets/main.png';
import stars from '../assets/stars.png';
import Card from '../Components/card'
import Star from '../Components/star';
import Star2 from '../Components/Star2';
import Subscript from '../Components/subscription';
import Phone from '../Components/phone';
import Back from '../assets/Background.png';
import 'animate.css'

export default function Home() {
  return (
    <>
      <div className="home-page relative h-screen overflow-hidden">
        {/* <div className="overlay absolute bg-black opacity-40 inset-0 mt-14 h-full"></div> */}
        {/* <video src={Paw_vid} autoPlay loop muted className='w-full h-screen object-cover'></video> */}
        <div className='long object-cover absolute'><img src={long} alt=""  /></div>
        <div className="home-content relative flex flex-col text-white justify-center right-1/4 h-full w-full animate__animated animate__fadeInUp">
          <h1 className='font-bold text-center'>Your Pet's Safety,</h1>
          <h1 className='font-bold text-center text-[#f4a905]'>Our Priority</h1>
          <p className='mt-3 text-center'>Explore our range of smart collars designed to keep your pets safe and connected.</p>
          <div className='btnn flex justify-center mt-4 gap-4'>
            <button className='mt-6 bg-[#f4a905] font-bold py-2 px-4 rounded'>Shop Now</button>
            <button className='mt-6 border-[#f4a905] border-2 font-bold py-2 px-4 rounded'>Learn More</button>
          </div>
        </div>
      </div>
      <div className="partners bg-white py-26 mx-auto">
        <div className="mx-auto max-w-7xl lg:px-8">
          <p className="text-center text-[#0f459a] text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Trusted by</p>
          <div className="mx-auto mt-9 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
      <div className='relative h-screen overflow-hidden'>
        <div className='long object-cover absolute'><img src={Back} alt="" /></div>
        <div className="relative flex items-center gap-20 py-55 mx-auto px-40">
          <div className='mx-auto max-w-md'>
            <h1>Stay Connected with Your Pet</h1>
            <p>Discover the latest in pet safety technology with our smart collars. Keep track of your pet's location, health, and activity levels.</p>
            <button className='btnn1 mt-6 bg-[#0f459a] font-bold py-2 px-4 rounded text-[#ffffff] hover:scale-105'>Learn More</button>
          </div>
          <div className='mx-auto max-w-3xl h-50'>
            <img src={main} alt="Pet Collar" className='h-80' />
          </div>
        </div>
      </div>
      
      <div className="container sm:py-32 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </div>
        </div>
      </div>
      </div>
      {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" className="container mx-auto max-w-7xl px-3 py-20">
        <h1 className="text-center font-bold">CUSTOMER REVIEWS</h1>
        <p className="text-center font-bold">over 1,000,000 SATISFIED CUSTOMERS</p>
        <div class="carousel-inner d-grid justify-center align-items-center" style={{ height: '300px' }}>
          <div class="card carousel-item active" data-bs-interval="3000" style={{ width: '26rem' }}>
            <div class="card-body">
              <h5 class="card-title">Card title 1</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <div class="card carousel-item" data-bs-interval="3000" style={{ width: '26rem' }}>
            <div class="card-body">
              <div className='flex justify-between gap-2'>
                <div>
                  <h5 class="card-title">Card title 2</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                </div>
                <img src={stars} alt="Rating Stars" className='w-20' />
              </div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <div class="card carousel-item" data-bs-interval="3000" style={{ width: '26rem' }}>
            <div class="card-body">
              <h5 class="card-title">Card title 3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="reviews mx-auto max-w-7xl py-1">  
        <p className="text-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Customer Reviews</p>
        <div className="flex justify-around ">
          <div className="flex-col mt-16 h-full w-1/3">
            <Star />
            <p className="font-medium">Based on 1,000,000 reviews</p>
            <Star2 />
            <p className="font-medium mt-4">Share your thoughts</p>
            <textarea className="mt-2 w-full rounded border border-gray-300 p-2" rows="4" placeholder="Write your review..."></textarea>
          </div>
          <div >
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className='sub mx-auto max-w-7xl'>
        <Subscript />
      </div>
      <div className='phone mx-auto max-w-7xl mb-70'>
        <Phone />
       </div>
    </>
  );
}