import Footer from './Footer'
function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white shadow-sm"

      >


        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-green-700 leading-tight mb-4">
            Rescue. Share. Serve.
          </h1>
          <p className="text-gray-600 text-lg mb-6 font-poppins">
            Join the movement to reduce food waste and feed communities with LeftOverLift.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">

            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">Donate Food</button>
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-50 transition">Find Deals</button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="/Home/Home1.jpg"
            alt="Food Sharing"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white-200 text-white text-center py-16 px-4 mt-12 rounded-xl shadow-lg overflow-hidden">
        <div
          className="relative w-full min-h-[90vh] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('Home/Home4.jpg')" }}
        >
          
          <div className="absolute inset-0 backdrop-blur-sm bg-black/60 rounded-xl"></div>

          
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
            <h1 className="text-4xl md:text-6xl font-bold mt-20 font-poppins">Welcome to <span className="text-orange-300">LeftOverLift</span></h1>

            <h2 className="text-5xl md:text-7xl font-bold font-poppins mt-10 leading-snug max-w-4xl">
              Lifting <span className="text-orange-300">leftovers</span>, feeding <span className="text-green-300 text-8xl md:text-8xl">hope</span>
            </h2>

            <button className="mt-12 px-8 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-green-100 transition-all duration-300">
              Join Now
            </button>
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="px-6 md:px-20 py-16 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <img src="Home/Home8.jpg" alt="Step 1" className="w-full h-60 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">List Leftover Food</h3>
            <p className="text-gray-600">Vendors quickly upload what food is left at the end of the day.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <img src="Home/Home3.jpg" alt="Step 2" className="w-full h-60 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Users Find Deals</h3>
            <p className="text-gray-600">Nearby users can see real-time updates and choose meals to rescue.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <img src="Home/Home7.jpg" alt="Step 3" className="w-full h-60 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pickup & Enjoy</h3>
            <p className="text-gray-600">Pick up from the vendor and enjoy delicious food at a discounted price.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>


  );


}

export default Home;
