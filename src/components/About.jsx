const About = () => {
  return (
    <div
      className="min-h-screen bg-white font-sans"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About LeftOverLift</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to reduce food waste while making quality food accessible to everyone. Join us in
            creating a more sustainable future, one meal at a time.
          </p>
        </div>

        {/* Mission Section*/}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Every day, restaurants and bakeries have perfectly good food that goes unsold. Instead of letting it go to
              waste, LeftOverLift connects these businesses with customers who can purchase quality food at half the
              original price.
            </p>
            <p className="text-gray-600">
              We believe that good food shouldn't go to waste, and everyone deserves access to quality meals at
              affordable prices.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">40% of food produced globally goes to waste</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Food waste contributes to climate change</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Millions struggle with food insecurity</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Small changes can make a big difference</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Restaurants List</h4>
              <p className="text-gray-600">
                Partner restaurants and bakeries list their surplus food at the end of the day
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Customers Browse</h4>
              <p className="text-gray-600">Customers discover great deals on quality food near them at 50% off</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Everyone Wins</h4>
              <p className="text-gray-600">Less waste, more savings, and a positive impact on our community</p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different*/}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Makes Us Different</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Availability</h4>
                <p className="text-gray-600">
                  Our platform updates in real-time, so you always know what's available right now. No more
                  disappointment from outdated listings.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quality Guaranteed</h4>
                <p className="text-gray-600">
                  We work only with trusted restaurants and bakeries. Every item is fresh and safe - just surplus from
                  the day's service.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fair Pricing</h4>
                <p className="text-gray-600">
                  Our 50% discount model ensures fair value for customers while helping businesses recover costs instead
                  of losing everything.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Focus</h4>
                <p className="text-gray-600">
                  We prioritize local communities, connecting neighborhood businesses with nearby customers for maximum
                  freshness and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics*/}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Growing Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Reduction in food waste</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">1,200+</div>
              <div className="text-sm text-gray-600">Meals saved daily</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-sm text-gray-600">Partner restaurants</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">15,000+</div>
              <div className="text-sm text-gray-600">Happy customers</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Drives Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Sustainability
              </h4>
              <p className="text-gray-700">
                We're committed to reducing food waste and creating a more sustainable food system for future
                generations.
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Accessibility
              </h4>
              <p className="text-gray-700">
                Quality food should be accessible to everyone, regardless of their budget or background.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Community
              </h4>
              <p className="text-gray-700">
                We bring together businesses and customers to create stronger, more connected local communities.
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Quality
              </h4>
              <p className="text-gray-700">
                We ensure that all food on our platform meets high quality and safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Join the Movement*/}
        <div className="text-center bg-gray-100 border border-gray-200 rounded-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every meal saved is a step towards a more sustainable future. Be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🍕</div>
              <div className="text-sm text-gray-600 font-medium">For Food Lovers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏪</div>
              <div className="text-sm text-gray-600 font-medium">For Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm text-gray-600 font-medium">For Our Planet</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-green-600">LeftOver</span>
              <span className="text-orange-500">Lift</span>
            </h2>
            <p className="text-gray-600 mb-4">Saving surplus. Serving smiles.</p>
            <p className="text-sm text-gray-500">
              © 2024 LeftOverLift. All rights reserved. Making a difference, one meal at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About;
