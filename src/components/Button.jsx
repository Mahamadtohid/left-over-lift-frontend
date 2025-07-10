import React, { useState } from 'react';
import { Heart, MapPin, Clock, Star } from 'lucide-react';

// Custom Button Component
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-300 ease-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#379237] text-white hover:bg-[#2d7a2d] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#379237]/50",
    secondary: "bg-[#6BCB77] text-white hover:bg-[#FFB26B] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#6BCB77]/50",
    outline: "border-2 border-[#379237] text-[#379237] hover:bg-[#379237] hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#379237]/50",
    ghost: "text-[#379237] hover:bg-[#379237]/10 hover:shadow-md focus:ring-[#379237]/50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed transform-none hover:transform-none" : "";
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Food Card Component
const FoodCard = ({ 
  name, 
  originalPrice, 
  discountedPrice, 
  seller, 
  image, 
  description,
  distance,
  timeLeft,
  rating,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "/api/placeholder/300/200"} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Favorite Button */}
        <button 
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-300 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
        
        {/* Time Left Badge */}
        {timeLeft && (
          <div className="absolute top-3 left-3 bg-[#FFB26B] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {timeLeft}
          </div>
        )}
        
        {/* Discount Badge */}
        <div className="absolute bottom-3 left-3 bg-[#379237] text-white px-3 py-1 rounded-full text-sm font-bold">
          50% OFF
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-1 line-clamp-1">{name}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
          </div>
          {rating && (
            <div className="flex items-center gap-1 bg-[#6BCB77]/10 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-[#FFB26B] text-[#FFB26B]" />
              <span className="text-sm font-semibold text-[#333333]">{rating}</span>
            </div>
          )}
        </div>
        
        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-[#6BCB77] to-[#379237] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{seller.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-[#333333] text-sm">{seller}</p>
            {distance && (
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <MapPin className="w-3 h-3" />
                {distance}
              </div>
            )}
          </div>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#379237]">₹{discountedPrice}</span>
            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          </div>
          
          <Button 
            variant="primary" 
            size="sm"
            onClick={onAddToCart}
            className={`transition-all duration-300 ${
              isHovered ? 'shadow-lg' : ''
            }`}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

// Page Layout Wrapper
const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-[#FDF6EC] ${className}`}>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

// Section Component
const Section = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`mb-12 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="text-4xl font-bold text-[#333333] mb-4 animate-fade-in">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="animate-fade-in animation-delay-400">
        {children}
      </div>
    </section>
  );
};

// Demo Component
const Demo = () => {
  const [favorites, setFavorites] = useState(new Set());
  
  const sampleFoods = [
    {
      id: 1,
      name: "Margherita Pizza",
      originalPrice: 400,
      discountedPrice: 200,
      seller: "Pizza Palace",
      description: "Fresh tomatoes, mozzarella, and basil on crispy crust",
      distance: "1.2 km",
      timeLeft: "2h left",
      rating: 4.5,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      originalPrice: 350,
      discountedPrice: 175,
      seller: "Spice Garden",
      description: "Aromatic basmati rice with tender chicken and spices",
      distance: "0.8 km",
      timeLeft: "1h left",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Chocolate Cake",
      originalPrice: 600,
      discountedPrice: 300,
      seller: "Sweet Treats",
      description: "Rich chocolate cake with creamy frosting",
      distance: "2.1 km",
      timeLeft: "3h left",
      rating: 4.3,
      image: "/api/placeholder/300/200"
    }
  ];
  
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };
  
  return (
    <PageLayout>
      <Section 
        title="Fresh Food, Half Price" 
        subtitle="Discover delicious meals from local restaurants at amazing discounts. Help reduce food waste while enjoying great food!"
      >
        {/* Button Examples */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        
        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleFoods.map((food) => (
            <FoodCard
              key={food.id}
              {...food}
              isFavorite={favorites.has(food.id)}
              onToggleFavorite={() => toggleFavorite(food.id)}
              onAddToCart={() => console.log(`Added ${food.name} to cart`)}
            />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default Demo;