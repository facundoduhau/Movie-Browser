import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
