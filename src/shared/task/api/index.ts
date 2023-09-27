import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery(config),
  endpoints: (builder) => ({
    getTaskList: builder.query<any, string>({
      query: () => "list",
    }),
  }),
});

export const { useGetTaskListQuery } = taskApi;
