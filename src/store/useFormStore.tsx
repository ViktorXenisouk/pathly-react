import { create } from "zustand"
import {type Answers } from "../types/answers"

type FormState = {
  answers: Answers
  setAnswer: (key: string, value: any) => void
  reset: () => void
}

export const useFormStore = create<FormState>((set) => ({
  answers: {},

  setAnswer: (key, value) =>
    set((state) => ({
      answers: { ...state.answers, [key]: value },
    })),

  reset: () => set({ answers: {} }),
}))