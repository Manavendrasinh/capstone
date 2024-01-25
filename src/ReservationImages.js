import reservationPhoto1 from './assets/restaurant.jpg'
import reservationPhoto2 from './assets/restauranfood.jpg'

const ReservationImages = () => {
    return (
        <div className="reservationImages">
            <div className='reservationPhoto1'>
                <img src={reservationPhoto1}/>
            </div>
            <div className='reservationPhoto2'>
                <img src={reservationPhoto2}/>
            </div>
        </div>
    );
}

export default ReservationImages;