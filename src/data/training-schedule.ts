import type { TrainingSchedule } from "../types";

const trainingSchedule: TrainingSchedule[] = [
    {
        day: 'Lunes',
        time: '18:00 - 20:00'
    },
    {
        day: 'Martes',
        time: '19:30 - 21:30'
    },
    {
        day: 'Miércoles',
        time: '17:00 - 19:00'
    }
];

export async function getTrainingSchedule(): Promise<TrainingSchedule[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(trainingSchedule);
        }, 500); // Simula un retraso de 500ms
    });
}