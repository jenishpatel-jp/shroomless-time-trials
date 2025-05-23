import { type SQLiteDatabase } from "expo-sqlite";

export const useDatabase = (db: SQLiteDatabase) => {

    // Add a new time to the database
    const addTime = async (map: string, time: string) => {
        try {
            const result = await db.runAsync(
                'INSERT INTO stt (map, time) VALUES (?, ?);', [map, time]
            );
            console.log(`Time added successfully with ID: ${result.lastInsertRowId}`);
        } catch (error){
            console.error('Error adding time:', error);
        }
    };

    // Delete a time from the database
    const deleteTime = async (time:string) => {
        try {
            const result = await db.runAsync(
                `DELETE FROM stt WHERE time = ?`, [time]
            );

            if (result.changes > 0){
                console.log(`Time wtih ID ${time} was successfully deleted`)
            } else {
                console.log(`No time with ${time} to delete.`)
            }

        } catch(error){
            console.error('Error deleting the time', error);
        }
    };

    type TimeRow = {
        id: number;
        map: string;
        time: string;
    } 

    // Get all times from the database
    const getTimes = async () => {
        try {
            const allRows: TimeRow[] = await db.getAllAsync('SELECT * FROM stt');
            console.log('All times:', allRows);

            const result: Record<string, string[]> = {}

            allRows.forEach((row:any) => {
    
                const map = row.map;
                const time = row.time;

                if (!result[map]){
                    result[map] = [];
                }

                if (time !== null){
                    result[map].push(time);
                }
            });

            return result;
            // Should return in the format { map: [time, time], map: [time, time, time], map: [time]}

        } catch(error){
            console.error('Error getting times for each map', error);
            return {};
        }
    }

    return { addTime, deleteTime, getTimes }
}
