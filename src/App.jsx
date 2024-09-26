import React, { useEffect, useState } from 'react';
import { getStudents, addStudent, updateStudent, deleteStudent } from './utils/indexdDB';
import { Box, Typography } from '@mui/material';
import StudentForm from './components/StudentForm';
import ListOfStudents from './components/ListOfStudents';

const App = () => {
  const [student, setStudent] = useState([]);
  const [updateStudents, setUpdateStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const allStudents = await getStudents();
      setStudent(allStudents);
    };
    fetchStudents();
  }, []);

  const handleAddStudent = async (student) => {
    if (updateStudents) {
      await updateStudent({ ...updateStudents, ...student });
      setUpdateStudents(null);
    } else {
      await addStudent(student);
    }

    const allStudents = await getStudents();
    setStudent(allStudents);
  };

  const handleUpdateStudent = (student) => {
    setUpdateStudents(student);
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    const allStudents = await getStudents();
    setStudent(allStudents);
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      minHeight: '100vh', 
      paddingTop: '50px', 
    }}
    >
      <Box
        sx={{ width: "100%", padding: "0 320px" }}
      >
        <Typography variant='h2' align='center' gutterBottom>
          Student Management System
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "800px", padding: "20px 320px" }}>
        <StudentForm initialValues={updateStudents || { name: '', class: '', rollNumber: '' }} onSubmit={handleAddStudent} />

        {student.length > 0 && <ListOfStudents students={student} onUpdate={handleUpdateStudent} onDelete={handleDeleteStudent} />}
      </Box>
    </Box>
  );
};

export default App;
