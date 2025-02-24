const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-white">
      <div
        className="w-16 h-16 border-4 border-orangeColor border-t-transparent rounded-full animate-spin"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
