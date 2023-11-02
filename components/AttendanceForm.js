import React from 'react';

const AttendanceForm = ({ onAttendanceSubmit }) => {
  const handleAttendanceSubmit = (event) => {
    event.preventDefault();
    // Perform attendance submission logic here
    onAttendanceSubmit();
  };

  return (
    <form onSubmit={handleAttendanceSubmit}>
      <button type="submit">Mark Attendance</button>
    </form>
  );
};

export default AttendanceForm;
