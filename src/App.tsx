import "./App.css";
import HomeContent from "./components/homeContent.tsx"; // Remove .jsx extension for TS
import { useState } from "react";
import ImageView from "./components/imageView.tsx";
function App() {
  // State to store the preview URL of the selected image
  const [preview, setPreview] = useState<string | null>(null);

  // Event handler for image file input changes
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e?.target?.files?.[0]; // Optional chaining with array access
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen w-full bg-teal-100 flex flex-col md:flex-row px-6 py-3 md:px-20 md:py-10 gap-5 items-center justify-center">
      <HomeContent onImgChange={handleImageChange} />
      {preview ? (
        <ImageView src={preview || ""} />
      ) : (
        <div className="w-full"></div>
      )}
    </div>
  );
}

export default App;
