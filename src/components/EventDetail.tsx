
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, Share2, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { EventProps } from "./EventCard";

// Sample data - in a real app, this would come from an API
const sampleEvents: EventProps[] = [
  {
    id: "1",
    title: "Annual Campus Festival",
    date: "Apr 15, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Main Campus Quad",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    attendees: 315,
  },
  {
    id: "2",
    title: "Engineering Symposium",
    date: "Apr 20, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Engineering Building",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
    attendees: 124,
  },
  {
    id: "3",
    title: "Spring Concert Series",
    date: "Apr 25, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Campus Auditorium",
    category: "Music",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop",
    attendees: 278,
  },
  {
    id: "4",
    title: "Career Fair",
    date: "May 5, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Student Union",
    category: "Career",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",
    attendees: 220,
  },
  {
    id: "5",
    title: "Alumni Networking Mixer",
    date: "May 10, 2025",
    time: "6:30 PM - 9:00 PM",
    location: "University Club",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
    attendees: 87,
  },
  {
    id: "6",
    title: "Hackathon 2025",
    date: "May 15, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "Computer Science Building",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
    attendees: 142,
  },
];

// Additional details for event description
const eventDescriptions: Record<string, string> = {
  "1": "Join us for the biggest campus event of the year! The Annual Campus Festival features live music, food vendors from local restaurants, carnival games, art exhibitions from student artists, and more. This all-day event is perfect for students, faculty, staff, and their families. Don't miss out on this campus tradition!",
  "2": "The Engineering Symposium brings together industry professionals, faculty researchers, and students to showcase the latest innovations in engineering. The day includes keynote speeches, research presentations, panel discussions, and networking opportunities. A great opportunity for engineering students to connect with potential employers.",
  "3": "Experience an evening of incredible performances at our Spring Concert Series. Featuring the university symphony orchestra, jazz ensemble, and choir, the concert will showcase classical masterpieces and contemporary works. A must-attend event for music lovers!",
  "4": "Prepare for your future career at our annual Career Fair. Meet recruiters from over 50 companies across various industries. Bring your resume and dress professionally to make a good impression. Opportunities range from internships to full-time positions for graduating seniors.",
  "5": "Connect with successful alumni from your field at our networking mixer. This casual event provides a unique opportunity to build professional relationships, gather career advice, and potentially discover job opportunities. Light refreshments will be served.",
  "6": "Put your coding skills to the test at our 12-hour Hackathon! Work in teams to develop innovative solutions to real-world problems. Prizes will be awarded for the most creative, impactful, and technically impressive projects. All skill levels welcome!",
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isRegistered, setIsRegistered] = useState(false);
  
  const event = sampleEvents.find((event) => event.id === id);
  
  if (!event) {
    return <div className="text-center py-10">Event not found</div>;
  }

  const handleRegister = () => {
    setIsRegistered(true);
    toast.success("You've successfully registered for this event!");
  };

  const handleShareEvent = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleAddToCalendar = () => {
    // In a real app, this would create a calendar event
    toast.success("Event added to your calendar!");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-college-800">{event.title}</h1>
            <div className="mt-2">
              <Badge className="bg-gold-400 text-black hover:bg-gold-500">{event.category}</Badge>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleShareEvent}>
              <Share2 className="h-4 w-4 mr-2" /> Share
            </Button>
            <Button variant="outline" onClick={handleAddToCalendar}>
              <CalendarIcon className="h-4 w-4 mr-2" /> Add to Calendar
            </Button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 mb-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        <Card className="mb-6">
          <CardContent className="grid sm:grid-cols-2 gap-4 p-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-college-800" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-3 text-college-800" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-college-800" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-3 text-college-800" />
              <div>
                <p className="text-sm text-gray-500">Attendees</p>
                <p className="font-medium">{event.attendees} registered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">About This Event</h2>
          <p className="text-gray-700 leading-relaxed">
            {eventDescriptions[event.id] || "No description available."}
          </p>
        </div>

        <div className="mt-8">
          {isRegistered ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
              <p className="text-green-800 font-medium">You're registered for this event!</p>
              <p className="text-green-600 text-sm mt-1">Check your email for confirmation details.</p>
            </div>
          ) : (
            <Button 
              className="w-full py-6 text-lg bg-college-800 hover:bg-college-700"
              onClick={handleRegister}
            >
              Register for Event
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
