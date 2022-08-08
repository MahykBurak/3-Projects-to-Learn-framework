export type todo = {
  title: string
  completed: boolean
}

export enum ActionType {
  ADD_TODO = 'add_todo',
  REMOVE_TODO = 'remove_todo',
}
export type Action =
  | { type: ActionType.ADD_TODO; payload: todo }
  | { type: ActionType.REMOVE_TODO; payload: todo }
