// import { useNavigate } from "react-router-dom";
import NewHotelForm from "../components/NewHotelForm";
import { useRouter } from "next/router";
function NewHotelPage() {
  // const navigate = useNavigate();
  const router = useRouter();

  function addHotelHandler(hotelData: any) {

    fetch(
      "https://hotel-app-abf61-default-rtdb.firebaseio.com/hotels.json",
      {
        method: "POST",
        body: JSON.stringify(hotelData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // navigate("/");
      // router.push('/')
    });
  }

  return (
      <NewHotelForm onAddHotel={addHotelHandler} />
  );
}

export default NewHotelPage;