import { openDB } from 'idb';

export const initDB = async () => {
  return openDB('student-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('students')) {
        db.createObjectStore('students', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addStudent = async (student) => {
  const db = await initDB();
  return db.add('students', student);
};

export const getStudents = async () => {
  const db = await initDB();
  return db.getAll('students');
};

export const updateStudent = async (student) => {
  const db = await initDB();
  return db.put('students', student);
};

export const deleteStudent = async (id) => {
  const db = await initDB();
  return db.delete('students', id);
};
