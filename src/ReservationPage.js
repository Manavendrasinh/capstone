import  Header  from './Header';
import Footer from './Footer';
import ReservationHero from './ReservationHero';
import ReservationImages from './ReservationImages';
import ReservationForm from './ReservationForm';

const ReservationPage = () => {

    const [reservationsList, setReservationsList] = useState([]);

    return (
        <>
            <ReservationHero/>
            <ReservationImages/>
            <ReservationForm reservationsList = {reservationsList} setReservationsList={setReservationsList}/>
            <Footer page={'Reservation'}/>
        </>
    );
}

export default ReservationPage;