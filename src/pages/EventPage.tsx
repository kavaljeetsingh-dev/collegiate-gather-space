
import React from "react";
import Navbar from "@/components/Navbar";
import EventDetail from "@/components/EventDetail";

const EventPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <EventDetail />
      </div>
    </>
  );
};

export default EventPage;
