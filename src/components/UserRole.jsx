import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function UserRole() {
  const navigate = useNavigate();
  const businessCardRef = useRef(null);
  const consumerCardRef = useRef(null);

  const handleRole = (role) => {
    navigate(`/sign-up/${role}`);
  };

  useEffect(() => {
    [businessCardRef.current, consumerCardRef.current].forEach((ref) => {
      gsap.fromTo(
        ref,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-100 to-white min-h-screen font-poppins flex flex-col justify-between">
        {/* <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium reveal-text">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Join the Food Rescue Revolution
                </div> */}
      <main className="flex-grow max-w-5xl mx-auto px-4 py-12">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-4">
          Join LeftOverLift
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Select the account type that best describes you and help us build a sustainable future by rescuing food and reducing waste.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Card */}
          <div
            ref={businessCardRef}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="UserRole/business.png"
              alt="Business Icon"
              className="w-24 h-24 mb-6"
            />
            <h2 className="text-2xl font-bold text-green-600 mb-2">I'm a Business</h2>
            <p className="text-gray-600 mb-6 px-3">
              Got leftover food? Join us to list surplus meals and serve your community while minimizing waste.
            </p>
            <button
              onClick={() => handleRole("business")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105"
            >
              Continue as Business
            </button>
          </div>

          {/* Consumer Card */}
          <div
            ref={consumerCardRef}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="UserRole/consumer.png"
              alt="Consumer Icon"
              className="w-24 h-24 mb-6"
            />
            <h2 className="text-2xl font-bold text-orange-500 mb-2">I'm a Consumer</h2>
            <p className="text-gray-600 mb-6 px-3">
              Looking for affordable meals? Find delicious leftover food nearby and support the cause.
            </p>
            <button
              onClick={() => handleRole("consumer")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105"
            >
              Continue as Consumer
            </button>
          </div>
        </div>
      </main>

      
      <Footer />
    </div>
  );
}

export default UserRole;
