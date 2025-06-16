import Appp from '../assets/apppp.png';
import GG from '../assets/GGplay.png';
import apple from '../assets/apple.png';

export default function AppDownloadSection() {
  return (
    <div className="border-2 border-[#f4a905] text-black px-6 py-6 rounded-3xl flex flex-col md:flex-row items-center justify-between mx-auto gap-8">
      {/* Left - Phone Image */}
      <div className="flex-shrink-0 w-64 h-60">
        <img src={Appp} alt="" />
      </div>

      {/* Right - Text & Buttons */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Download the app and feel the best experience in purchasing
        </h2>
        <p className="text-lg mb-6">the app is available at</p>

        <div className="flex md:justify-start gap-4 px-26 ml-40">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bttn"
          >
            <img src={GG} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bttn"
          >
            <img src={apple} alt="" className='w-50'/>
          </a>
        </div>
      </div>
    </div>
  );
}
