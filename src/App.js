import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "./components/ui/toaster";
import WhatsAppButton from '../src/components/WhatsAppButton';


function App() {
  return (
    <div className="App">
      <WhatsAppButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
