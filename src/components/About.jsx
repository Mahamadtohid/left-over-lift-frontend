import Footer from "./Footer";

const About = () => {
  return (
    <div
      className="bg-gradient-to-r from-green-200  to-white-100 animate-bg-slide bg-size-200 min-h-screen font-poppins transition-all duration-1000"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-green-700 mb-6">About LeftOverLift</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Turning leftovers into lifesavers — we help reduce food waste by connecting food providers to people in need of delicious meals.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-3">
              Every day, businesses throw away tons of good food. LeftOverLift rescues that food and makes it available to communities at affordable prices.
            </p>
            <p className="text-gray-600">
              We're building a more sustainable food ecosystem, fighting waste and hunger one meal at a time.
            </p>
          </div>
          <div>
            <img
              src="About/About4.jpeg"
              alt="Food Rescue"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px] "
            />
          </div>
        </section>

        {/* Animation Section */}
        <section className="mb-20 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-8">Why It Matters</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img
                src="About/About1.png"
                alt="Waste Reduction"
                className="w-20 mx-auto mb-4 animate-bounce"
              />
              <h4 className="text-xl font-semibold mb-2">Food Waste Crisis</h4>
              <p className="text-gray-600">Over 1/3 of food goes to waste globally — while millions go hungry.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img
                src="About/About2.png"
                alt="Sustainable"
                className="w-20 mx-auto mb-4 animate-wiggle"
              />
              <h4 className="text-xl font-semibold mb-2">Sustainable Future</h4>
              <p className="text-gray-600">Fighting waste helps save our planet — one rescued meal at a time.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img
                src="About/About3.png"
                alt="Local Impact"
                className="w-20 mx-auto mb-4 animate-Fade-In"
              />
              <h4 className="text-xl font-semibold mb-2">Local Community</h4>
              <p className="text-gray-600">We connect nearby food spots with people who truly need it.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "List Surplus",
                desc: "Restaurants list unsold meals at day's end.",
                color: "from-green-300 to-green-400",
              },
              {
                step: "2",
                title: "Discover Deals",
                desc: "Users find meals at 50% off nearby.",
                color: "from-orange-300 to-orange-400",
              },
              {
                step: "3",
                title: "Rescue & Enjoy",
                desc: "Pick up, enjoy, and reduce waste!",
                color: "from-teal-300 to-emerald-400",
              },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="text-center group">
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br ${color} mb-4 shadow-md group-hover:scale-110 transition-transform`}
                >
                  {step}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-white rounded-2xl shadow-md p-12 mb-20">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-12">Our Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">50%</p>
              <p className="text-gray-600">Less food waste</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-500 mb-2">1,200+</p>
              <p className="text-gray-600">Meals saved daily</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">250+</p>
              <p className="text-gray-600">Restaurant partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-500 mb-2">15,000+</p>
              <p className="text-gray-600">Happy customers</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-4xl font-extrabold text-green-700 mb-6">Join the Movement</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Help build a sustainable future where no meal goes to waste. Whether you're a foodie or a food provider — you can make a difference.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">
            Get Started
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
