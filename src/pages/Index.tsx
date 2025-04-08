
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventList from "@/components/EventList";
import Navbar from "@/components/Navbar";
import { Calendar, CheckCircle, Users } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-college-800 mb-6">
              Discover Campus Events
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find, join, and create events that connect you with your campus community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/events">
                <Button className="text-lg py-6 px-8 bg-college-800 hover:bg-college-700">
                  Browse Events
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="text-lg py-6 px-8">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-college-800">
                Upcoming Events
              </h2>
              <Link to="/events" className="text-college-800 hover:underline font-medium">
                View all events
              </Link>
            </div>
            <EventList limit={3} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-college-800 text-center mb-12">
              Why Use Campus Events?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Calendar className="h-8 w-8 text-college-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover Events</h3>
                <p className="text-gray-600">
                  Find campus events that match your interests, from academic lectures to social gatherings.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <CheckCircle className="h-8 w-8 text-college-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Registration</h3>
                <p className="text-gray-600">
                  Register for events in just one click and get reminders before they start.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Users className="h-8 w-8 text-college-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect with Peers</h3>
                <p className="text-gray-600">
                  Meet like-minded students and build your campus network through shared interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-college-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to join your campus community?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Create an account to register for events and stay updated on what's happening on campus.
            </p>
            <Link to="/register">
              <Button className="text-college-800 bg-white hover:bg-gray-100 text-lg py-6 px-8">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-college-800 mr-2" />
                  <span className="text-xl font-bold text-college-800">Campus Events</span>
                </div>
                <p className="text-gray-500 mt-2">
                  © {new Date().getFullYear()} Campus Events. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-college-800">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-college-800">
                  Contact
                </a>
                <a href="#" className="text-gray-500 hover:text-college-800">
                  Privacy
                </a>
                <a href="#" className="text-gray-500 hover:text-college-800">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
