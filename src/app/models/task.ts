export default interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  created?: Date;
  owner?: any;
}
