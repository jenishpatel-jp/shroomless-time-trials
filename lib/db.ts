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

// Set up the database schema

export const setupSTTDatabase = async () => {
    try {
        const db = await openDatabase();
        await db.execAsync('PRAGMA jounal_mode=WAL;');

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS stt (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                time TEXT NOT NULL
            )
            `);
        console.log('Shroomless Time Trial table successfully created');
    } catch (error) {
        console.error('Error setting up database:', error);
        throw error
    }
};

// Insert a new time trial record

export const insertSTT = async (name: string, time: string, callback?: () => void) => {
    try {
        const db = await openDatabase();
        await db.runAsync(
            'INSERT INTO stt (name, time) VALUES (?, ?)',
            [name, time]
        );
        console.log('New record successfully inserted');
    } catch (error) {
        console.error('Error inserting record:', error);
        throw error;
    }
};

// Delete a time trial record

export const deleteSTT = async (id: number, callback?: () => void) => {
    try {
        const db = await openDatabase();
        await db.runAsync('DELETE FROM stt WHERE id = ?', [id]);
        console.log('Record successfully deleted');
    } catch (error) {
        console.error('Error deleting record:', error);
        throw error;
    }
}

// Get all time trial records

