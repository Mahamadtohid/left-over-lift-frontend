import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef();
  const missionRef = useRef();
  const awarenessRef = useRef();
  const howItWorksRef = useRef();
  const impactRef = useRef();
  const galleryRef = useRef();
  const joinRef = useRef();

  useEffect(() => {
    const sections = [
      heroRef.current,
      missionRef.current,
      awarenessRef.current,
      howItWorksRef.current,
      impactRef.current,
      galleryRef.current,
      joinRef.current
    ];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end:"end 50%",
            toggleActions: "play reverse play reverse",
            scrub:true
          }
        }
      );
    });

    // Animation for hero content on load
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { autoAlpha: 0, y: -100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-200 to-white min-h-screen font-poppins transition-all duration-1000">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section ref={heroRef} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium reveal-text">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Join the Food Rescue Revolution
                </div>
          <h2 className="text-5xl font-extrabold text-green-700 mb-6 mt-5">About LeftOverLift</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Turning leftovers into lifesavers — we help reduce food waste by connecting food providers to people in need of delicious meals.
          </p>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="grid md:grid-cols-2 gap-10 items-center mb-20">
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
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
        </section>

        {/* Awareness Section */}
        <section ref={awarenessRef} className="mb-20 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-8">Why It Matters</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img src="About/About1.png" alt="Waste Reduction" className="w-20 mx-auto mb-4 animate-bounce" />
              <h4 className="text-xl font-semibold mb-2">Food Waste Crisis</h4>
              <p className="text-gray-600">Over 1/3 of food goes to waste globally — while millions go hungry.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img src="About/About2.png" alt="Sustainable" className="w-20 mx-auto mb-4 animate-pulse" />
              <h4 className="text-xl font-semibold mb-2">Sustainable Future</h4>
              <p className="text-gray-600">Fighting waste helps save our planet — one rescued meal at a time.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
              <img src="About/About3.png" alt="Local Impact" className="w-20 mx-auto mb-4 animate-fade-in" />
              <h4 className="text-xl font-semibold mb-2">Local Community</h4>
              <p className="text-gray-600">We connect nearby food spots with people who truly need it.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section (Replaced) */}
        <section ref={howItWorksRef} className="mb-20">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-12">The Journey of a Rescued Meal</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              icon: "🥡",
              title: "Surplus Meal Identified",
              desc: "Restaurants tag unsold food near closing hours."
            }, {
              icon: "📲",
              title: "Real-Time Alerts",
              desc: "App notifies nearby users of available rescued meals."
            }, {
              icon: "🤝",
              title: "Pickup & Gratitude",
              desc: "Users collect and enjoy meals while reducing waste."
            }].map(({ icon, title, desc }, i) => (
              <div key={i} className="text-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Gallery Section */}
        <section ref={galleryRef} className="mb-20">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-10">Gallery of Rescued Meals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={`About/Food/About${n}.png`}
                  alt={`Meal ${n}`}
                  className="object-cover w-full h-60"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section ref={impactRef} className="bg-white rounded-2xl shadow-md p-12 mb-20">
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
        <section ref={joinRef} className="text-center">
          <h3 className="text-4xl font-extrabold text-green-700 mb-6">Join the Movement</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Help build a sustainable future where no meal goes to waste. Whether you're a foodie or a food provider — you can make a difference.
          </p>
          <Link to ="/select-role">
          <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">
            Get Started
          </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
