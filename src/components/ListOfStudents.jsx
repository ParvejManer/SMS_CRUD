import React from 'react';
import { Button, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const ListOfStudents = ({ students, onUpdate, onDelete }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Class</strong></TableCell>
                    <TableCell><strong>Roll Number</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.rollNumber}</TableCell>
                        <TableCell>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => onUpdate(student)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant='contained'
                                    color='error'
                                    onClick={() => onDelete(student.id)}
                                >

                                    Delete
                                </Button>
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ListOfStudents;
