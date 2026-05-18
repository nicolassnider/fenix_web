import type { TrainingSchedule } from "../types";

const trainingSchedule: TrainingSchedule[] = [
    {
        day: 'Martes',
        time: '18:30 - 19:30',
        category: 'Infantiles'
    },
    {
        day: 'Jueves',
        time: '18:30 - 19:30',
        category: 'Infantiles'
    },
    {
        day: 'Martes',
        time: '19:30 - 20:30',
        category: 'Juveniles y Adultos'
    },
    {
        day: 'Jueves',
        time: '19:30 - 20:30',
        category: 'Juveniles y Adultos'
    }
];

export async function getTrainingSchedule(): Promise<TrainingSchedule[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(trainingSchedule);
        }, 500); // Simula un retraso de 500ms
    });
}