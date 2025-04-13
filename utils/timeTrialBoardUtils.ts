export const converToMilliseconds = (time: string) => {
    const [minutes, seconds, milliseconds] = time.split(/[:.]/).map(Number);
    return minutes * 60000 + seconds * 1000 + milliseconds;
};