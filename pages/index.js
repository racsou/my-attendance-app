import React from 'react';
import Header from '../components/Header';
import StudentCard from '../components/StudentCard';
import AttendanceForm from '../components/AttendanceForm';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more student data as needed
];

const HomePage = () => {
  const handleAttendanceSubmit = () => {
    // Logic to handle attendance submission
    console.log('Attendance marked!');
  };

  return (
    <div>
      <Header />
      {students.map((student) => (
        <div key={student.id}>
          <StudentCard student={student} />
          <AttendanceForm onAttendanceSubmit={handleAttendanceSubmit} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
