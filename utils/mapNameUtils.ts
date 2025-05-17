import { state$ } from "@/app/_layout";

// Fetches the map and times from the database and sets the state
export const fetchTimes = async (
    getTimes: () => Promise<Record<string, string[]>>,
    // setMapAndTime: React.Dispatch<React.SetStateAction<Record<string, string[]>>>,
) => {
    try {
        const allMapAndTimes = await getTimes();
        // setMapAndTime(allMapAndTimes);
        state$.mapAndTime.set(allMapAndTimes);
    } catch (error) {
        console.error("Error fetching map and times", error);
    }
};

// adds a time to the database and updates the state
export const handleAddTime = async (
    map: string, 
    time: string,
    // setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    addTime: (map: string, time: string, callback?: () => void) => Promise<void>
) => {
    if (!time) {
        console.warn("time is empty");
        return;
    }
    if (!map) {
        console.warn("map is empty")
    }
    await addTime(map, time);

    const currentTimes = state$.mapAndTime.get()[map] || [];
    state$.mapAndTime[map].set([...currentTimes, time]);
};

// deletes a time from the database and updates the state
export const handleDeleteTime = async(
    map:string,
    time:string,
    // setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    deleteTime: (time: string) => Promise<void>
) => {
    await deleteTime(time);

    const currentTimes = state$.mapAndTime[map].get() || [];
    state$.mapAndTime[map].set(currentTimes.filter((t: string) => t !== time));
};

