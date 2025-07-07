const ImageView = ({ src }: { src: string }) => {
  return (
    <div className="w-full gap-2 flex flex-col items-center bg-white mx-10 my-5 p-5 max-w-[400px] rounded-md shadow-md">
      <p className="text-3xl w-full font-bold text-green-900">
        Crop Disease Breakdown
      </p>
      <div className="w-full flex justify-center items-center">
        <img
          src={src}
          alt="Preview"
          className="rounded-md w-full max-w-xs max-h-72 object-contain"
        />
      </div>
      <div className="w-full flex flex-col gap-2 justify-center ">
        <p>
          <span className="font-bold">Prediction :</span> Tomato -- Late Blight
        </p>
        <p>
          Remove infected leaves. Use fungicide containing Chlorothalonil or
          copper-based spray
        </p>
      </div>
    </div>
  );
};
export default ImageView;
