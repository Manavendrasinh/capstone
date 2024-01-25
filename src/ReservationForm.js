const ReservationForm = () => {
    return (
        <div className="reservationForm">
            <form>
                <div className="formDate">
                    <label for="occasionDate">Date:</label>
                    <input type="date"  id="occasionDate"/>
                </div>
                <div className="numberOfSeats">
                    <select id="numberOfSeats" name="numberOfSeats">
                        <option value={2}>Seats</option>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8}>8</option>
                    </select>
                </div>
                <div className="occasion">
                    <select id="numberOfSeats" name="numberOfSeats">
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
                                <label for="standard">Standard</label>
                                <input type="radio" id="standard" name="sittingOption" value="standard"/>
                            </div>
                            <div>
                                <label for="html">Outside</label>
                                <input type="radio" id="outside" name="sittingOption" value="Outside"/>
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