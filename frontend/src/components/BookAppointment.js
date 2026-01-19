import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function BookAppointment() {
  const { user } = useContext(AuthContext);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '60px auto',
      padding: '25px',
      background: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '12px 0',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px'
    },
    button: {
      width: '100%',
      padding: '10px',
      background: '#4f46e5',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '15px',
      cursor: 'pointer'
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', {
      patient: user._id,
      doctor,
      date
    });
    alert('Appointment booked!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Doctor ID"
          value={doctor}
          onChange={e => setDoctor(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="datetime-local"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <button style={styles.button} type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
