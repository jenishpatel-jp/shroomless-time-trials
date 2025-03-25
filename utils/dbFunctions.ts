import { openDatabase } from "@/lib/db";
import { useSQLiteContext } from "expo-sqlite";

export const useDatabase = () => {
    const db = useSQLiteContext();
}

// Insert a new time trial record

export const addST = async (name: string, time: string, callback?: () => void) => {
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

export const deleteST = async (id: number, callback?: () => void) => {
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
export const getAllSTT = async () => {
    try {
        const db = await openDatabase();
    } catch (error){
        
    }

}