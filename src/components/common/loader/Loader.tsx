const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="w-16 h-16 border-4 border-orangeColor border-t-transparent rounded-full animate-spin"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
