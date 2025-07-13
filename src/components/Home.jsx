import { useEffect, useRef, useState } from "react"
import { animateImageOnScroll, initializeScrollAnimations, cleanupScrollAnimations } from "./gsapImageScroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from "./Footer"

function Home() {
  const imgRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const [activeFAQ, setActiveFAQ] = useState(null)
  const featuresRef = useRef()
  const testimonialsRef = useRef()
  const impactRef = useRef()
  const faqRef = useRef()
  const ctaRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    animateImageOnScroll(imgRef)
    setIsVisible(true)

    initializeScrollAnimations()

    const initializeLangChainAnimations = () => {
      const initializeHowItWorksAnimation = () => {
        const cards = gsap.utils.toArray(".feature-card-langchain")

        if (cards.length >= 3 && featuresRef.current) {
          // Set initial positions - first card on top, second in middle, third at bottom
          gsap.set(cards[0], {
            x: 0,
            y: 0, // No vertical movement
            opacity: 0.8,
            scale: 0.9,
            zIndex: 30,
            willChange: "transform, opacity, scale",
          })

          gsap.set(cards[1], {
            x: 0,
            y: 0, // No vertical movement
            opacity: 1,
            scale: 1,
            zIndex: 20,
            willChange: "transform, opacity, scale",
          })

          gsap.set(cards[2], {
            x: 0,
            y: 0, // No vertical movement
            opacity: 0.8,
            scale: 0.9,
            zIndex: 10,
            willChange: "transform, opacity, scale",
          })

          ScrollTrigger.create({
            trigger: featuresRef.current,
            start: "top top",
            end: "+=900", // Slightly extended scroll distance for better separation
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress

              // Animate first card - move further left and scale up slightly
              gsap.to(cards[0], {
                x: -500 * progress, // Increased to -500 for more separation
                y: 0, // No vertical movement
                opacity: 1, // Fully opaque
                scale: 1 + 0.08 * progress, // Reduced max scale to 1.08
                zIndex: 30,
                duration: 0.3,
                ease: "power2.out",
              })

              // Animate middle card - stay centered and scale up slightly
              gsap.to(cards[1], {
                x: 0,
                y: 0, // No vertical movement
                opacity: 1,
                scale: 1 + 0.08 * progress, // Reduced max scale to 1.08
                zIndex: 20,
                duration: 0.3,
                ease: "power2.out",
              })

              // Animate third card - move further right and scale up slightly
              gsap.to(cards[2], {
                x: 500 * progress, // Increased to 500 for more separation
                y: 0, // No vertical movement
                opacity: 1, // Fully opaque
                scale: 1 + 0.08 * progress, // Reduced max scale to 1.08
                zIndex: 10,
                duration: 0.3,
                ease: "power2.out",
              })
            },
          })
        }
      }

      const initializeOverlappingSections = () => {
        const sections = [testimonialsRef.current, impactRef.current, faqRef.current, ctaRef.current].filter(Boolean)

        sections.forEach((section, index) => {
          if (section) {
            gsap.set(section, {
              y: 100,
              opacity: 0,
              zIndex: 50 + index,
              willChange: "transform, opacity",
            })

            ScrollTrigger.create({
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
              onUpdate: (self) => {
                const progress = self.progress

                gsap.to(section, {
                  y: 100 - progress * 100,
                  opacity: progress,
                  duration: 0.3,
                  ease: "power2.out",
                })
              },
            })

            if (index > 0) {
              ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                end: "top 20%",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress
                  const prevSection = sections[index - 1]

                  if (prevSection) {
                    gsap.to(prevSection, {
                      y: -progress * 150,
                      scale: 1 - progress * 0.1,
                      opacity: 1 - progress * 0.8,
                      duration: 0.3,
                      ease: "power2.out",
                    })
                  }
                },
              })
            }
          }
        })
      }

      initializeHowItWorksAnimation()
      initializeOverlappingSections()
    }

    initializeLangChainAnimations()

    return () => {
      cleanupScrollAnimations()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const faqs = [
    {
      question: "How does LeftOverLift ensure food safety?",
      answer:
        "We partner with certified vendors and implement strict food safety protocols. All food items are properly labeled with expiration dates and storage requirements. Our community rating system helps maintain quality standards.",
    },
    {
      question: "What types of food can I donate or find?",
      answer:
        "You can donate or find a wide variety of food including fresh produce, bakery items, prepared meals, packaged goods, and more. All items must be properly sealed and within safe consumption dates.",
    },
    {
      question: "How do payments work on the platform?",
      answer:
        "We use secure payment processing with multiple options including credit cards, digital wallets, and in-app payments. All transactions are protected and you can track your payment history in your account.",
    },
    {
      question: "Is LeftOverLift available in my city?",
      answer:
        "We're rapidly expanding across the country. Check our coverage map or enter your location to see if we're available in your area. We're adding new cities every month!",
    },
  ]

  const featureSteps = [
    {
      image: "/Home/Home8.jpg",
      title: "List Leftover Food",
      description:
        "Vendors quickly upload surplus food with photos, descriptions, and pickup times. Our smart categorization makes listing effortless.",
      icon: "📱",
      features: ["Photo upload", "Smart categorization", "Real-time inventory"],
    },
    {
      image: "/Home/Home3.jpg",
      title: "Discover & Reserve",
      description:
        "Users browse real-time listings, filter by location, dietary preferences, and reserve their preferred items instantly.",
      icon: "🔍",
      features: ["Location-based search", "Dietary filters", "Instant booking"],
    },
    {
      image: "/Home/Home7.jpg",
      title: "Pickup & Enjoy",
      description:
        "Seamless pickup process with secure payments, quality assurance, and customer support throughout the experience.",
      icon: "🎉",
      features: ["Secure payments", "Quality guarantee", "24/7 support"],
    },
  ]

  return (
    <div className="w-full relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 font-poppins overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="floating-element absolute top-40 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="floating-element absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <section className="hero-section relative min-h-screen flex items-center justify-center px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`hero-content space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium reveal-text">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Join the Food Rescue Revolution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight reveal-text">
                Rescue.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  {" "}
                  Share.
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  {" "}
                  Serve.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg reveal-text">
                Transform food waste into community nourishment. Connect with local vendors to rescue surplus food and
                feed those in need while saving money and the environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Start Donating Food</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105">
                Find Amazing Deals
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 counter-number">10K+</div>
                <div className="text-sm text-gray-600">Meals Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 counter-number">500+</div>
                <div className="text-sm text-gray-600">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 counter-number">50+</div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <img
                ref={imgRef}
                src="/Home/Home1.jpg"
                alt="Food Sharing Community"
                className="hero-image w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instant Match</div>
                    <div className="text-sm text-gray-600">Find food near you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-text">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                LeftOverLift
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal-text">
              Join thousands of users and vendors who are making a difference every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌱",
                title: "Environmental Impact",
                description: "Reduce food waste and carbon footprint while supporting sustainable practices.",
              },
              {
                icon: "💰",
                title: "Save Money",
                description: "Get quality food at discounted prices while helping vendors reduce losses.",
              },
              {
                icon: "🤝",
                title: "Community Building",
                description: "Connect with local businesses and neighbors in your community.",
              },
              {
                icon: "⚡",
                title: "Real-time Updates",
                description: "Instant notifications and live inventory updates for the best deals.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="benefit-card text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section py-20 px-6 md:px-20 bg-gray-50 relative" ref={featuresRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-text">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                LeftOverLift
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal-text">
              Our simple three-step process makes food rescue effortless and impactful
            </p>
          </div>
          <div className="relative flex justify-center items-center min-h-[600px]">
            {featureSteps.map((step, index) => (
              <div
                key={index}
                className="feature-card-langchain absolute w-full max-w-xs md:max-w-sm"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        className="w-full h-56 object-cover rounded-xl transition-transform duration-300"
                      />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section py-20 px-6 md:px-20 bg-white relative" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-text">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal-text">
              Real stories from vendors and users making a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Restaurant Owner",
                image: "/Home/Home2.jpg",
                quote:
                  "LeftOverLift has transformed how we handle surplus food. We're saving money and helping our community at the same time.",
                rating: 5,
              },
              {
                name: "Marcus Johnson",
                role: "Regular User",
                image: "/Home/Home5.jpg",
                quote:
                  "I love finding amazing deals on quality food while knowing I'm helping reduce waste. The app is incredibly user-friendly.",
                rating: 5,
              },
              {
                name: "Elena Rodriguez",
                role: "Bakery Manager",
                image: "/Home/Home6.jpg",
                quote:
                  "Since using LeftOverLift, we've reduced our food waste by 80% and built stronger connections with our customers.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="impact-section py-20 px-6 md:px-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden"
        ref={impactRef}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 reveal-text">
            Making a Real <span className="text-yellow-300">Impact</span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto reveal-text">
            Every meal rescued is a step toward a more sustainable and compassionate world
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "50K+", label: "Meals Rescued", icon: "🍽️" },
              { number: "25K", label: "CO₂ Tons Saved", icon: "🌱" },
              { number: "$100K+", label: "Money Saved", icon: "💰" },
              { number: "1000+", label: "Happy Users", icon: "😊" },
            ].map((stat, index) => (
              <div key={index} className="text-center impact-stat">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 counter-number">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="environmental-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Environmental Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 counter-number">2.5M</div>
                <div className="text-green-100">Gallons of Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 counter-number">150K</div>
                <div className="text-green-100">Pounds of CO₂ Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 counter-number">75K</div>
                <div className="text-green-100">Square Feet of Land Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section py-20 px-6 md:px-20 bg-gray-50 relative" ref={faqRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 reveal-text">Everything you need to know about LeftOverLift</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${activeFAQ === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-20 px-6 md:px-20 bg-white relative" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-content">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people already reducing food waste and feeding communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="app-download-section bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Our App</h3>
            <p className="text-gray-600 mb-6">Get the best experience with our mobile app</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="app-download-btn flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-.69 1.85-.09 2.65.59.79.98 1.61 1.02 2.53.04.92-.36 1.81-.98 2.39-.62.59-1.42 1.02-2.3 1.21-.88.19-1.82.24-2.76.14-.94-.1-.94-1.24 0-1.44.94-.2 1.88-.24 2.82-.14.88.19 1.82.24 2.76.14.94-.1.94-1.24 0-1.44z" />
                </svg>
                <span className="ml-2">Download Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Home;