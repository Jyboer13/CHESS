export const config = {
  baseUrl: "https://test.co/api/v1/",
  prepareHeaders: (headers: Headers) => {
    const token = JSON.stringify(localStorage.getItem("auth") || "");
    headers.set("authorization", token);
    return headers;
  },
};
