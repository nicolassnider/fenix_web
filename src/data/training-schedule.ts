import type { TrainingSchedule } from "../types";
import trainingScheduleData from "./training-schedule.json";

const trainingSchedule: TrainingSchedule[] = trainingScheduleData as TrainingSchedule[];

export async function getTrainingSchedule(): Promise<TrainingSchedule[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(trainingSchedule);
        }, 500); // Simula un retraso de 500ms
    });
}