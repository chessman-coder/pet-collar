import main from '../assets/main.png';
import Landing_Vid from '../assets/Landing_Vid.mp4';

export default function Home() {
  return (
    <>
      <div className="home-page">
        {/* <div className="overlay absolute bg-black opacity-50 inset-0 mt-14 h-full"></div> */}
        <video src={Landing_Vid} autoPlay loop muted className='w-full'></video>
        <div className='flex items-center justify-center'>
          <p className='absolute'>Welcome to the Pet Collar Store</p>
        </div>
      </div>
    </>
  );
}