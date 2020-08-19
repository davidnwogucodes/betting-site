export const isDev = process.env.NODE_ENV === "development";
export const server_url = "https://troisplay.herokuapp.com/api";
export const dev_url = "http://localhost:4050/api";
export const url = isDev ? dev_url : server_url;
