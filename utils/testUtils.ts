import { SQLiteDatabase } from "expo-sqlite";
import { useDatabase } from "./dbFunctions";

type MockDatabase = Pick<SQLiteDatabase, "runAsync" | "getAllAsync">;

export const createteMockDatabase = () :MockDatabase => {
    return {
        runAsync: jest.fn(),
        getAllAsync: jest.fn()
    };
};

export const setUpTestDatebase = () => {
    const db = createteMockDatabase();
    const dbFunctions = useDatabase(db as SQLiteDatabase);
    return { db, ...dbFunctions };
};