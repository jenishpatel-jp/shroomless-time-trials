import { type SQLiteDatabase } from "expo-sqlite";

// Set up the database schema
export const setupDatabase = async (db: SQLiteDatabase) => {
    try {
        await db.execAsync('PRAGMA journal_mode=WAL;');

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS stt (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                map TEXT NOT NULL,
                time TEXT NOT NULL
            );
            `);
        console.log('Shroomless Time Trial table successfully created');
    } catch (error) {
        console.error('Error setting up database:', error);
        throw error
    }
};

