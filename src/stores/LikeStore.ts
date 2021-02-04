import { writable } from 'svelte/store';
import type { LikeCounterModel } from '../types/LikeCounter';

const defaultValue = {
    count: 0
} as LikeCounterModel;
export const LikeStore = writable(defaultValue);