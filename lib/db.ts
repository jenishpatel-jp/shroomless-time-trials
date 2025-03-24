import * as SQLite from 'expo-sqlite';

// Async function to open the database

export const openDatabase = async () => {
    try {
        const db = SQLite.openDatabaseAsync('stt.db');
        return db;
    } catch (error) {
        console.error('Error opening:', error);
        throw error;
    }
};