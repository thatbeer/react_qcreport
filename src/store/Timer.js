import { create , useStore } from "zustand";
import React from 'react'

const useTimerStore = create((set) => ({
    startTime: null,
    duration: 0,
    setStartTime: () => set({ startTime: 0}),
    incrementDuration: () => set((state) => ({ duration : state.duration + 1})),
}));