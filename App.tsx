import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("search");

  const [tripType, setTripType] = useState("One Way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("1 Traveller");
  const [travelClass, setTravelClass] = useState("Economy");

  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [seatNo, setSeatNo] = useState("");

  const flights = [
    {
      airline: "IndiGo",
      flightNo: "6E6494",
      departure: "05:55",
      arrival: "08:05",
      duration: "2h 10m",
      price: "₹8576",
    },
    {
      airline: "Air India",
      flightNo: "AI541",
      departure: "06:45",
      arrival: "09:10",
      duration: "2h 25m",
      price: "₹7999",
    },
    {
      airline: "Vistara",
      flightNo: "UK878",
      departure: "08:15",
      arrival: "10:25",
      duration: "2h 10m",
      price: "₹8250",
    },
    {
      airline: "Akasa Air",
      flightNo: "QP1432",
      departure: "09:50",
      arrival: "12:15",
      duration: "2h 25m",
      price: "₹7650",
    },
  ];

  if (page === "ticket") {
    return (
      <div className="ticket-page">
        <div className="ticket">
          <h1>✅ Booking Confirmed</h1>

          <h2>E-Ticket</h2>

          <p><b>PNR:</b> SKY12345</p>
          <p><b>Passenger:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Phone:</b> {phone}</p>
          <p><b>Seat Number:</b> {seatNo}</p>

          <p><b>Route:</b> {from} ➜ {to}</p>
          <p><b>Date:</b> {date}</p>

          <p><b>Airline:</b> {selectedFlight?.airline}</p>
          <p><b>Flight No:</b> {selectedFlight?.flightNo}</p>
          <p><b>Departure:</b> {selectedFlight?.departure}</p>
          <p><b>Arrival:</b> {selectedFlight?.arrival}</p>
          <p><b>Fare:</b> {selectedFlight?.price}</p>
        </div>
      </div>
    );
  }

  if (page === "booking") {
    return (
      <div className="booking-page">
        <div className="booking-box">
          <h1>Passenger Details</h1>

          <input
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              const seat =
                Math.floor(Math.random() * 30 + 1) +
                ["A", "B", "C", "D", "E", "F"][
                  Math.floor(Math.random() * 6)
                ];

              setSeatNo(seat);
              setPage("ticket");
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }

  if (page === "results") {
    return (
      <div className="results-page">
        <div className="top-bar">
          <h2>
            Flights from {from} to {to}
          </h2>
        </div>

        <div className="flight-list">
          {flights.map((flight, index) => (
            <div className="flight-card" key={index}>
              <div>
                <h3>{flight.airline}</h3>
                <p>{flight.flightNo}</p>
              </div>

              <div>
                <h2>{flight.departure}</h2>
                <p>{from}</p>
              </div>

              <div>
                <h3>{flight.duration}</h3>
                <p>Non Stop</p>
              </div>

              <div>
                <h2>{flight.arrival}</h2>
                <p>{to}</p>
              </div>

              <div>
                <h2>{flight.price}</h2>

                <button
                  className="view-btn"
                  onClick={() => {
                    setSelectedFlight(flight);
                    setPage("booking");
                  }}
                >
                  VIEW PRICES
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="overlay">
        <h1>✈ SkyWay Airlines</h1>

        <div className="search-box">
          <h2>Search Flights</h2>

          <div className="trip-options">
            <label>
              <input
                type="radio"
                checked={tripType === "One Way"}
                onChange={() => setTripType("One Way")}
              />
              One Way
            </label>

            <label>
              <input
                type="radio"
                checked={tripType === "Round Trip"}
                onChange={() => setTripType("Round Trip")}
              />
              Round Trip
            </label>

            <label>
              <input
                type="radio"
                checked={tripType === "Multi City"}
                onChange={() => setTripType("Multi City")}
              />
              Multi City
            </label>
          </div>

          <div className="inputs">
            <input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="inputs">
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            >
              <option>1 Traveller</option>
              <option>2 Travellers</option>
              <option>3 Travellers</option>
              <option>4 Travellers</option>
            </select>

            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          <button
            className="search-btn"
            onClick={() => setPage("results")}
          >
            SEARCH FLIGHTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;