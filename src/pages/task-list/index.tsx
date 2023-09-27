import { memo } from "react";
import { TaskRow } from "../../entities/task/ui/task-row/task-row";
import { useGetTaskListQuery } from "../../shared/task/api";

const TaskListPage = () => {
  const { isLoading, data, error }: any = useGetTaskListQuery("");

  console.log(isLoading, data, error);

  return (
    <div>
      {error && <h1>{error.error}</h1>}
      {data?.map((task: any) => (
        <TaskRow data={task} titleHref={task.ref} />
      ))}
    </div>
  );
};

export default memo(TaskListPage);
