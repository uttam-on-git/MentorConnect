import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare, User, Book, Star, Settings, Search } from 'lucide-react';

// Navbar Component (unchanged)
const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">MentorConnect</h1>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-200">Home</a>
        <a href="#" className="hover:text-blue-200">Find Mentor</a>
        <a href="#" className="hover:text-blue-200">My Sessions</a>
        <a href="#" className="hover:text-blue-200">Profile</a>
      </div>
    </div>
  </nav>
);

// Landing Page Component
const LandingPage = () => (
  <div className="bg-blue-100 py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MentorConnect</h1>
      <p className="text-xl mb-8">Connect with industry experts and boost your career</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
        Get Started
      </button>
    </div>
  </div>
);

// User Registration / Login Component
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto mt-10 max-w-md">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <form className="space-y-4">
        {!isLogin && (
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        )}
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a href="#" onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
          {isLogin ? 'Register' : 'Login'}
        </a>
      </p>
    </div>
  );
};

// Mentor Profile Component
const MentorProfile = () => (
  <div className="container mx-auto mt-10 max-w-2xl">
    <h2 className="text-2xl font-bold mb-4">Mentor Profile</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <User size={64} className="text-blue-600 mr-4" />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Software Engineering Expert</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">About Me</h4>
        <p>15+ years of experience in software development and leadership roles...</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Availability</h4>
        <p>Monday to Friday, 2 PM - 6 PM EST</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
        Book a Session
      </button>
    </div>
  </div>
);

// Mentor Booking System Component
const MentorBookingSystem = () => (
  <div className="container mx-auto mt-10 max-w-2xl">
    <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <Calendar />
        {/* Calendar implementation goes here */}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-blue-100 p-2 rounded hover:bg-blue-200">9:00 AM</button>
          <button className="bg-blue-100 p-2 rounded hover:bg-blue-200">11:00 AM</button>
          <button className="bg-blue-100 p-2 rounded hover:bg-blue-200">2:00 PM</button>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
        Confirm Booking
      </button>
    </div>
  </div>
);

// Mentor Dashboard Component
const MentorDashboard = () => (
  <div className="container mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-4">Mentor Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
        {/* List of upcoming sessions */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Session History</h3>
        {/* List of past sessions */}
      </div>
    </div>
  </div>
);

// Mentee Dashboard Component
const MenteeDashboard = () => (
  <div className="container mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-4">Mentee Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">My Upcoming Sessions</h3>
        {/* List of upcoming sessions */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recommended Mentors</h3>
        {/* List of recommended mentors */}
      </div>
    </div>
  </div>
);

// Search Bar Component
const SearchBar = () => (
  <div className="container mx-auto mt-10">
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
      <Search className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search for mentors by expertise, industry, etc."
        className="w-full outline-none"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 ml-2">
        Search
      </button>
    </div>
  </div>
);

// Video Call Component (updated with voice call option)
const VideoCall = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <div className="aspect-w-16 aspect-h-9 bg-black mb-4">
      {/* Video call implementation goes here */}
    </div>
    <div className="flex justify-center space-x-4">
      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
        <Video />
      </button>
      <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
        <MessageSquare />
      </button>
      <button className="bg-yellow-600 text-white p-2 rounded-full hover:bg-yellow-700">
        Voice Only
      </button>
      <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
        End Call
      </button>
    </div>
  </div>
);

// Feedback and Rating Component
const FeedbackForm = () => (
  <div className="container mx-auto mt-10 max-w-2xl">
    <h2 className="text-2xl font-bold mb-4">Session Feedback</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Rate your session</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="text-yellow-400 cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Leave a comment</h3>
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Share your thoughts about the session..."
        ></textarea>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
        Submit Feedback
      </button>
    </div>
  </div>
);

// Admin Panel Component
const AdminPanel = () => (
  <div className="container mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">User Management</h3>
        {/* User management tools */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Analytics</h3>
        {/* Analytics dashboard */}
      </div>
    </div>
  </div>
);

// Main App Component
const App = () => (
  <div>
    <Navbar />
    <LandingPage />
    <AuthPage />
    <MentorProfile />
    <MentorBookingSystem />
    <MentorDashboard />
    <MenteeDashboard />
    <SearchBar />
    <VideoCall />
    <FeedbackForm />
    <AdminPanel />
  </div>
);

export default App;
