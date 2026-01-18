import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
export default function BookAppointment() {
  const { user } = useContext(AuthContext);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', { patient: user._id, doctor, date });
    alert('Appointment booked!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Doctor ID" value={doctor} onChange={e=>setDoctor(e.target.value)} required />
      <input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}