import { useSQLiteContext } from "expo-sqlite";

export const useDatabase = () => {
    const db = useSQLiteContext();

    const addTime = async (map:string, time: string, callback?: ()=> void) => {
        try {
            const result = await db.runAsync(
                'INSERT INTO time (time) VALUES (?);', [time]
            );
            console.log(`Time added successfully with ID: ${result.lastInsertRowId}`);
            if (callback) callback();
        } catch (error){
            console.error('Error adding time:', error);
        }
    };

}
