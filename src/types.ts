// src/types.ts

export interface Testimonial {
    name: string;
    text: string;
    image?: string; // opcional
}

export interface TrainingSchedule {
    day: string;
    time: string;
    category: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image?: string;
}