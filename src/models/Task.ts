let currentId = 0;

export interface Task {
    id: string
    isCompleted: boolean
    rating: number
    text: string
}

export const createTask = (text: string): Task => {
    return {id: (++currentId).toString(), isCompleted: false, rating: 2, text: text }
}