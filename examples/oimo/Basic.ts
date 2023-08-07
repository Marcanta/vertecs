import { initializeBoilerplate, spawnCube, spawnSphere } from "./Boilerplate";

await initializeBoilerplate();

for (let i = 0; i < 200; i++) {
    const scale = [
        Math.random() + 0.4 * 2,
        Math.random() + 0.4 * 2,
        Math.random() + 0.4 * 2,
    ] as [number, number, number];

    const position = [
        Math.random() * 10 - 5,
        Math.random() * 8 + 2 + i * (Math.random() * 3.6 + 0.4),
        Math.random() * 10 - 5,
    ] as [number, number, number];

    const rotation = [
        Math.random() * 360,
        Math.random() * 360,
        Math.random() * 360,
    ] as [number, number, number];

    switch (Math.floor(Math.random() * 2)) {
        case 0:
            spawnCube(position, scale, rotation);
            break;
        case 1:
            spawnSphere(position, Math.random() + 0.3);
            break;
        default:
            break;
    }
}