import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Testimonials/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
const [selectedDate,setSelectedDate] = useState(new Date())

    const handelDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handelDateChange={handelDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;