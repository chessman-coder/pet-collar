import main from '../assets/logo.png';

function Header() {
  return (
    <>
        <header className="header d-flex justify-around bg-[#ffffff] h-14 sticky">
            <a href="/"><img src={main} alt="Logo" className="h-10 mt-2"/></a>
            <div className="nav-bar">
                <ul className="flex h-14 items-center m-0 p-0 gap-4 ">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/price">Pricing</a></li>
                </ul>
            </div>
            <a href="/login" className="login flex items-center h-14 m-0 p-0 font-semibold">Sign In / Sign Up</a>
        </header>
    </>
  );
}

export default Header;