
// Fetches the map and times from the database and sets the state
export const fetchTimes = async (
    getTimes: () => Promise<Record<string, string[]>>,
    setMapAndTime: React.Dispatch<React.SetStateAction<Record<string, string[]>>>,
) => {
    try {
        const allMapAndTimes = await getTimes();
        setMapAndTime(allMapAndTimes);
    } catch (error) {
        console.error("Error fetching map and times", error);
    }
};

