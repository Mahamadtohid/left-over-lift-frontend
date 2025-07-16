import { useState, useEffect ,useRef} from "react"
import { Link } from 'react-router-dom'
import Footer from "./Footer"
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, Send } from "lucide-react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


const mapRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.subject) {
      newErrors.subject = "Please select a subject"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Message sent successfully!")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const faqData = [
    {
      question: "How does LeftOverLift work?",
      answer:
        "LeftOverLift connects restaurants with surplus food to customers looking for great deals. Restaurants list their leftover food at discounted prices, and customers can browse, purchase, and pick up these items, reducing waste while saving money.",
    },
    {
      question: "Is the food safe to eat?",
      answer:
        "All food on our platform is fresh and safe to consume. It's simply surplus from the day's service that would otherwise go to waste. We work only with trusted restaurants and maintain strict quality standards.",
    },
    {
      question: "How can my restaurant join LeftOverLift?",
      answer:
        "Getting started is easy! Contact us through this form, email us directly, or sign up through our business portal. We'll guide you through the setup process and have you listing surplus food within 24 hours.",
    },
    {
      question: "What types of food are available?",
      answer:
        "You'll find a variety of options including fresh meals, baked goods, sandwiches, salads, and more. The selection varies daily based on what our restaurant partners have available.",
    },
    {
      question: "How much can I save?",
      answer:
        "Customers typically save 30-50% off regular menu prices. The exact discount varies by restaurant and item, but you'll always see significant savings while helping reduce food waste.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "Our platform operates 24/7, but food availability depends on restaurant hours. Most surplus food becomes available in the late afternoon and evening as restaurants prepare to close.",
    },
    {
      question: "How do I pick up my order?",
      answer:
        "After purchasing, you'll receive pickup instructions with the restaurant's address and your designated pickup time. Simply show your order confirmation at the restaurant to collect your food.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be cancelled up to 30 minutes before your pickup time. For modifications, please contact the restaurant directly using the information provided in your order confirmation.",
    },
  ]

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.subject &&
      formData.message.trim()
    )
  }

  return (
    <div
      className="min-h-screen bg-green-50"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-green-600 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about LeftOverLift? We'd love to hear from you. Get in touch with our team and we'll get back
            to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 group-hover:border-green-300 ${errors.firstName ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 group-hover:border-green-300 ${errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 group-hover:border-green-300 ${errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 group-hover:border-green-300 ${errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="business">Business Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none group-hover:border-green-300 ${errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2 ${isFormValid() && !isSubmitting
                      ? "bg-green-600 text-white hover:bg-green-700 hover:scale-105 hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div
          className={`mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Email Us</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">hello@leftoverlift.com</p>
                <p className="text-gray-600">support@leftoverlift.com</p>
                <p className="text-sm text-gray-500 mt-3">We typically respond within 24 hours</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Call Us</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm</p>
                <p className="text-sm text-gray-500 mt-3">For urgent matters and support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600">Find answers to common questions about LeftOverLift</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset rounded-xl group-hover:bg-green-50 transition-colors duration-300"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-2 duration-300">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Contact Us Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">We're Here to Help</h3>
            <p className="text-xl text-gray-600">Your questions and feedback help us improve LeftOverLift</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h4>
              <p className="text-gray-600">We respond to all inquiries within 24 hours, often much sooner.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Personal Support</h4>
              <p className="text-gray-600">Get personalized help from our dedicated customer support team.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Multiple Channels</h4>
              <p className="text-gray-600">
                Reach us through email, phone, or social media - whatever works best for you.
              </p>
            </div>
          </div>
        </div>


        <section ref={mapRef} className="mb-20">
          <h3 className="text-2xl font-bold text-green-700 text-center mb-6">Our Location</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.454567633603!2d74.2599192749174!3d16.654121284113337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffb509926fa9%3A0x9af43eb75ec2804!2sKIT&#39;s%20College%20of%20Engineering%20Kolhapur%20(Empowered%20Autonomous)!5e0!3m2!1sen!2sin!4v1752482059028!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </section>

      </main>

      {/* Footer */}
      {/* <footer className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8"> */}
      {/* Brand Section */}
      {/* <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">LeftOver</span>
                <span className="text-orange-300">Lift</span>
              </h2>
              <p className="text-green-100 leading-relaxed">
                Rescuing food. Feeding hope. Join the movement to reduce food waste across India.
              </p>
            </div> */}

      {/* Quick Links */}
      {/* <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div> */}

      {/* Connect with Us */}
      {/* <div>
              <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-4"> */}
      {/* <Link
                  href="#"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </Link> */}
      {/* <Link
                  href="#"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div> */}

      {/* Copyright */}
      {/* <div className="border-t border-green-500 mt-8 pt-8 text-center">
            <p className="text-green-100">© 2025 LeftOverLeft. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  )
}

export default Contact;