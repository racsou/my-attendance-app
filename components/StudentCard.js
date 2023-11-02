import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={`/images/${student.id}.jpg`} alt={`${student.name} - Student`} />
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
    </div>
  );
};

export default StudentCard;
