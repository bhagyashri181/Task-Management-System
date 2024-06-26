import { StableBTreeMap } from "azle";

interface Task {
    id: string,
    title: string,
    description: string,
    status: 'pending' | 'in-progress' | 'complete',
    deadline: Date | null,
    createdAt: Date,
    updatedAt: Date | null
}

const TasksStorage = StableBTreeMap<string, Task>(0);

export { TasksStorage, Task }
