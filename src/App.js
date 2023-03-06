import { useEffect, useState } from "react";
import "./App.css";
import PopupAd from "./PopupAd";

function App() {
  const [isPopupClosed, setIsPopupClosed] = useState(false);

  useEffect(() => {
    const popupCloseTime = localStorage.getItem("popupCloseTime");
    if (popupCloseTime) {
      const now = new Date().getTime();
      const hoursSinceClose = (now - popupCloseTime) / 1000 / 60 / 60;
      setIsPopupClosed(hoursSinceClose < 24);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen
    bg-gradient-to-r from-slate-200 to-slate-100
    "
    >
      <h1 className="mb-6 text-7xl font-bold underline text-cyan-500">
        Website Content
      </h1>
      {!isPopupClosed && <PopupAd />}
    </div>
  );
}

export default App;
