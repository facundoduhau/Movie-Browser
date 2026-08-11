import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="text-white w-full flex flex-col items-center">
      <div className="bg-slate-800 w-full h-16 flex items-center">
        <div>
          <Menu className="ml-5" size={40} />
        </div>
        <div className="w-full flex justify-center pr-11.25">
          <div className="font-poppins font-extrabold text-4xl shadow-2xl">
            📽 FILM ROLL
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
