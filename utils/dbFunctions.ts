import { useSQLiteContext } from "expo-sqlite";

export const useDatabase = () => {
    const db = useSQLiteContext();

    const addTime = async (map: string, time: string, callback?: ()=> void) => {
        try {
            const result = await db.runAsync(
                'INSERT INTO sst (map, time) VALUES (?, ?);', [map, time]
            );
            console.log(`Time added successfully with ID: ${result.lastInsertRowId}`);
            if (callback) callback();
        } catch (error){
            console.error('Error adding time:', error);
        }
    };

    const deleteTime = async (time:string, callback?: ()=> void) => {
        try {
            const result = await db.runAsync(
                `DELETE FROM sst WHERE time = ?`, [time]
            );

            if (result.changes > 0){
                console.log(`Time wtih ID ${time} was successfully deleted`)
            } else {
                console.log(`No time with ${time} to delete.`)
            }

            if (callback) callback();

        } catch(error){
            console.error('Error deleting the time', error);
        }
    };

    type TimeRow = {
        id: number;
        map: string;
        time: string;
    } 

    const getTimes = async () => {
        try {
            const allRows: TimeRow[] = await db.getAllAsync('SELECT * FROM sst');
            console.log('All times:', allRows);

            const result: Record<string, [string][]> = {}

            allRows.forEach((row:any) => {
                
                const map = row.map;
                const time = row.time;

                if (!result[map]){
                    result[map] = [];
                }

                if (time !== null){
                    result[map].push([time]);
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
