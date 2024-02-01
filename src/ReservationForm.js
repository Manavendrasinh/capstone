import { useState } from "react";

const ReservationForm = ({reservationsList, setReservationsList}) => {

    const [reservation, setReservation] = useState({date: "", time: "17:00", seats: 0, occasion: 0, seatingOption: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        setReservationsList((prevList) => [...prevList, reservation]);

        console.log(reservationsList);
        console.log("Submitted successfully");

        setReservation({
            date: "",
            time: "",
            seats: 0,
            occasion: 0,
            seatingOption: ""
        });
    }

    const reservationOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);

        setReservation((prevReservation) => {
            return {...prevReservation, [name] : value};
        });
    }

    return (
        <div className="reservationForm">
            <form onSubmit={handleSubmit}>
                <div className="dateNTimeContainer">
                    <div className="formDate">
                        <label htmlFor="occasionDate">Date:</label>
                        <input
                            type="date"
                            id="occasionDate"
                            name="date"
                            value={reservation.date}
                            onChange={reservationOnChange}/>
                    </div>
                    <div className="formTime">
                        <label htmlFor="occasionTime">Time:</label>
                        <select
                            id="occasionTime"
                            name="time"
                            value={reservation.time}
                            onChange={reservationOnChange}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>10:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                </div>
                <div className="numberOfSeats">
                    <select
                        id="numberOfSeats"
                        name="seats"
                        value={reservation.seats}
                        onChange={reservationOnChange}>
                        <option value={2}>Seats</option>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8}>8</option>
                    </select>
                </div>
                <div className="occasion">
                    <select
                        id="occasion"
                        name="occasion"
                        value={reservation.occasion}
                        onChange={reservationOnChange}>
                        <option value={0}>Occasion</option>
                        <option value={1}>Birthday</option>
                        <option value={2}>Engagement</option>
                        <option value={3}>Anniversary</option>
                    </select>
                </div>
                <div className="seatingOptions">
                    <div className="seatingOptionContainer">
                        <h3>Seating Options</h3>
                        <div className="seatingRadioGroup">
                            <div>
                                <label htmlFor="standard">Standard</label>
                                <input
                                    type="radio"
                                    id="standard"
                                    name="seatingOption"
                                    value={reservation.seatingOption = "standard"}
                                    onChange={reservationOnChange}/>
                            </div>
                            <div>
                                <label htmlFor="outside">Outside</label>
                                <input
                                    type="radio"
                                    id="outside"
                                    name="seatingOption"
                                    value={reservation.seatingOption = "outside"}
                                    onChange={reservationOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submitBtn">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;