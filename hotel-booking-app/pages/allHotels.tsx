import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import HotelList from "../components/HotelList";

function allHotels() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedHotels, setLoadedHotels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hotel-app-abf61-default-rtdb.firebaseio.com/hotels.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const hotels: any = [];

        for (const key in data) {
          const hotel = {
            id: key,
            ...data[key],
          };
          hotels.push(hotel);
        }
        console.log(data);

        setIsLoading(false);
        setLoadedHotels(hotels);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
  
   
      <HotelList hotels={loadedHotels} />

  );
}

export default allHotels;
