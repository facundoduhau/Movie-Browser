import React from "react";
import { Menu } from "lucide-react";

const App = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
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
      <main className="text-white w-full flex flex-col">
        <div className="justify-center text-center mt-5 mb-5">
          <span className="text-2xl font-poppins">
            Your{" "}
            <span className="italic font-bold text-violet-200">favorite</span>{" "}
            films. In your new{" "}
            <span className="italic font-bold text-violet-200">favorite</span>{" "}
            streaming site.
          </span>
        </div>
      </main>
      <footer className="text-white bg-green-600 w-full h-8">I'm Footer</footer>
    </div>
  );
};

export default App;
