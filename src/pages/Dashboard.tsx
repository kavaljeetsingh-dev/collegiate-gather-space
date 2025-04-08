
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, User, Settings, Bell, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import { EventProps } from "@/components/EventCard";

// Sample data - in a real app, this would come from an API
const registeredEvents: (EventProps & { status: string })[] = [
  {
    id: "1",
    title: "Annual Campus Festival",
    date: "Apr 15, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Main Campus Quad",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    attendees: 315,
    status: "Upcoming",
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
    status: "Upcoming",
  },
];

const pastEvents: (EventProps & { status: string })[] = [
  {
    id: "7",
    title: "Student Government Debate",
    date: "Mar 20, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Student Union Ballroom",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop",
    attendees: 154,
    status: "Attended",
  },
  {
    id: "8",
    title: "Research Symposium",
    date: "Mar 10, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Science Building",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop",
    attendees: 87,
    status: "Attended",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const userName = "Alex Johnson"; // In a real app, this would come from auth state
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-college-100 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-college-800" />
                  </div>
                  <h2 className="text-xl font-semibold">{userName}</h2>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
                
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <h1 className="text-2xl font-bold mb-6">My Events</h1>
            
            <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                {registeredEvents.length > 0 ? (
                  <div className="space-y-4">
                    {registeredEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 h-40">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-3/4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                  {event.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.location}</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <Badge variant="outline">{event.category}</Badge>
                                <Link to={`/events/${event.id}`}>
                                  <Button variant="outline" size="sm">View Details</Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-500 mb-4">You haven't registered for any upcoming events.</p>
                      <Link to="/events">
                        <Button>Browse Events</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="past">
                {pastEvents.length > 0 ? (
                  <div className="space-y-4">
                    {pastEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 h-40">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-3/4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <Badge variant="outline">
                                  {event.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2 text-college-800" />
                                  <span className="text-sm">{event.location}</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <Badge variant="outline">{event.category}</Badge>
                                <Link to={`/events/${event.id}`}>
                                  <Button variant="outline" size="sm">View Details</Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-500">You haven't attended any events yet.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
