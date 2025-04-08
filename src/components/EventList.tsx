
import React from "react";
import EventCard, { EventProps } from "@/components/EventCard";

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

interface EventListProps {
  limit?: number;
  category?: string;
}

const EventList = ({ limit, category }: EventListProps) => {
  const filteredEvents = category
    ? sampleEvents.filter((event) => event.category === category)
    : sampleEvents;
  
  const displayEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
