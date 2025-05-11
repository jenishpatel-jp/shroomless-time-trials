import { setUpTestDatebase } from "../testUtils";

describe('useDatabase', () => {

    const map = 'testMap';
    const time = '1:23:456';
    const callback = jest.fn();

    test('addTime should add time to the database', async () => {

        const { db, addTime } = setUpTestDatebase();

        await addTime(map, time, callback);

        expect(db.runAsync).toHaveBeenCalledWith(
            'INSERT INTO stt (map, time) VALUES (?, ?);',
            [map, time]
        );
    });

    test('deleteTime should delete time from the database', async () => {
        const { db, deleteTime } = setUpTestDatebase();

        await deleteTime(time, callback);

        expect(db.runAsync).toHaveBeenCalledWith(
            'DELETE FROM stt WHERE time = ?',
            [time]
        );
    });

    test('getTimes should retrieve times from the database', async () => {
        const { db, getTimes } = setUpTestDatebase();

        await getTimes();

        expect(db.getAllAsync).toHaveBeenCalledWith('SELECT * FROM stt');
    });
});