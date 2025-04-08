
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees: number;
}

const EventCard = ({
  id,
  title,
  date,
  time,
  location,
  category,
  image,
  attendees,
}: EventProps) => {
  return (
    <Card className="event-card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <Badge className="bg-gold-400 text-black hover:bg-gold-500">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2 text-college-800" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2 text-college-800" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2 text-college-800" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-2 text-college-800" />
          <span>{attendees} attendees</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/events/${id}`} className="w-full">
          <Button className="w-full bg-college-800 hover:bg-college-700">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
