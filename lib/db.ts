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

