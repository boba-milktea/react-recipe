const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-700">
      <div className="animate-spin rounded-full h-24 w-24 border-8 border-t-sunset-orange border-b-warm-yellow border-l-warm-gray border-r-soft-cream mb-6"></div>

      <p className="text-xl font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
