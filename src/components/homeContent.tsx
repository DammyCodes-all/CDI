import { ImageUp } from "lucide-react";
import { useState } from "react";
type HomeContentProps = {
  onImgChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const HomeContent = ({ onImgChange }: HomeContentProps) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div className="flex flex-col  justify-center gap-3 p-6 w-full">
      <p className="text-green-900 text-5xl capitalize font-semibold">
        Crop disease identifier
      </p>
      <p>
        Upload a crop leaf image to identify disease and get treatment advice
      </p>
      <div
        onDragEnter={() => {
          setIsDragging(true);
        }}
        onDragLeave={() => {
          setIsDragging(false);
        }}
        className={
          "flex rounded-sm bg-teal-200 items-center w-full h-10 relative hover:shadow-sm hover:border-1 hover:border-teal-900 transition-all duration-200" +
          (isDragging ? " border-2 border-teal-900 hover:shadow-sm" : "")
        }
      >
        <p className="flex gap-1 justify-center items-center w-full h-full text-teal-900 font-semibold">
          <ImageUp /> Upload image
        </p>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={onImgChange}
          placeholder=" "
          className="opacity-0 absolute w-full h-full cursor-pointer"
        />
      </div>
    </div>
  );
};
export default HomeContent;
