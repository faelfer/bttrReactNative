import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import environment from "../utils/resources/environment";

const baseQuery = fetchBaseQuery({
  baseUrl: environment.baseUrl,
  prepareHeaders(headers, { getState }) {
    const { token } = getState().user;
    if (token !== undefined) {
      headers.set("authorization", `Token ${token}`);
    }

    return headers;
  },
});

const tagTypes = ["User", "Skill", "Time"];

const api = createApi({
  baseQuery,
  tagTypes,
  endpoints: () => ({}),
});

export default api;
