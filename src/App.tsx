import React from "react";
import { Menu } from "lucide-react";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
      <header className="text-white w-full flex flex-col items-center">
        <div className="bg-slate-800 w-full h-16 flex items-center">
          <div className="flex">
            <Menu size={40} />
            <span>I'm the left part</span>
          </div>
        </div>
        <div>I'm the bottom part</div>
      </header>
      <main className="text-white">I'm Main</main>
      <footer className="text-white">I'm Footer</footer>
    </div>
  );
};

export default App;
