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

    const deleteTime = async (id:number, callback?: ()=> void) => {
        try {
            const result = await db.runAsync(
                `DELETE FROM sst WHERE id = ?`, [id]
            );

            if (result.changes > 0){
                console.log(`Time wtih ID ${id} was successfully deleted`)
            } else {
                console.log(`No time with ${id} to delete.`)
            }

            if (callback) callback();

        } catch(error){
            console.error('Error deleting the time', error);
        }
    }

    

}
