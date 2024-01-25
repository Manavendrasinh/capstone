import  Header  from './Header';
import Footer from './Footer';
import ReservationHero from './ReservationHero';
import ReservationImages from './ReservationImages';
import ReservationForm from './ReservationForm';

const ReservationPage = () => {
    return (
        <>
            <Header/>
            <ReservationHero/>
            <ReservationImages/>
            <ReservationForm/>
            <Footer page={'Reservation'}/>
        </>
    );
}

export default ReservationPage;