const Appointment = require('../models/Appointment');
exports.bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
};
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patient', 'name email').populate('doctor', 'name email');
    res.json(appointments);
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
};