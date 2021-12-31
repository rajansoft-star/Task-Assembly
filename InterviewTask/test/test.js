import { GetAttendance } from '../api/task.controller';

test('Get musium total visitors', async () => {
    const res = {
        month: '2014-07-01T00:00:00.000',
        america_tropical_interpretive_center: '13490',
        avila_adobe: '32378',
        chinese_american_museum: '2239',
        firehouse_museum: '5406',
        hellman_quon: '120',
        pico_house: '3375',
    };
    const result = await GetAttendance(res);
    expect(result.attendance.total).toMatch(32378);

});

test('Get musium highest visitors', async () => {
    const res = {
        month: '2014-07-01T00:00:00.000',
        america_tropical_interpretive_center: '13490',
        avila_adobe: '32378',
        chinese_american_museum: '2239',
        firehouse_museum: '5406',
        hellman_quon: '120',
        pico_house: '3375',
    };
    const result = await GetAttendance(res);
    expect(result.attendance.highest.visitors).toMatch(32378);

});

test('Get musium lowest visitors', async () => {
    const res = {
        month: '2014-07-01T00:00:00.000',
        america_tropical_interpretive_center: '13490',
        avila_adobe: '32378',
        chinese_american_museum: '2239',
        firehouse_museum: '5406',
        hellman_quon: '120',
        pico_house: '3375',
    };
    const result = await GetAttendance(res);
    expect(result.attendance.lowest.visitors).toMatch(32378);

});

test('Get musium ignore visitors', async () => {
    const res = {
        month: '2014-07-01T00:00:00.000',
        america_tropical_interpretive_center: '13490',
        avila_adobe: '32378',
        chinese_american_museum: '2239',
        firehouse_museum: '5406',
        hellman_quon: '120',
        pico_house: '3375',
    };
    const result = await GetAttendance(res, 'avila_adobe');
    expect(result.attendance.ignore.visitors).toMatch(32378);

});
