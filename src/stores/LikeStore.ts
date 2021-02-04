import { writable } from 'svelte/store';
import type { LikeCounterModel } from '../types/like-counter';

const defaultValue = {
    count: 0
} as LikeCounterModel;
export const LikeStore = writable(defaultValue);