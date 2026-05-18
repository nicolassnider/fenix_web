// src/data/testimonials.ts

import type { Testimonial } from "../types";
import testimonialsData from "./testimonials.json";

const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export async function getTestimonials(): Promise<Testimonial[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testimonials);
        }, 500); // Simula un retraso de 500ms
    });
}