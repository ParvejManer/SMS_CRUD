import { openDB } from 'idb';

export const studentDB = async () => {
  return openDB('student-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('students')) {
        db.createObjectStore('students', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addStudent = async (student) => {
  const db = await studentDB();
  return db.add('students', student);
};

export const getStudents = async () => {
  const db = await studentDB();
  return db.getAll('students');
};

export const updateStudent = async (student) => {
  const db = await studentDB();
  return db.put('students', student);
};

export const deleteStudent = async (id) => {
  const db = await studentDB();
  return db.delete('students', id);
};
