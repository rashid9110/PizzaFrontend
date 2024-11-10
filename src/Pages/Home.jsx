import IconArrowRight from "../Components/Icon/Arrow_righr.jsx";

function Home() {
  return (
    <div>
      {/* Herro section */}
      <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
           <div className="flex justify-center text-4xl md:justify-normal">
             <h1 className="pd-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                Enjoy the Slice {" "}
             </h1>
             <h1>😋</h1>
           </div>
           <p className="pd-4 text-[#6B7280]">
            The Pizza App lets you order your favorite pizza from the comfort of your home.
           </p>
           <button className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">
            Order Now
            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
              <IconArrowRight/>
            </span>
           </button>
        </div>
      </section>
    </div>
  );
}

export default Home;