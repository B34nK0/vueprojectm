import Message from "element-ui/lib/message";
import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      Message({
        type: "error",
        message: `${error.config.timeout}ms 请求${error.config.url}超时，请查看操作是否已成功或刷新重试`,
        showClose: true,
      });
    }
    if (
      error.response &&
      (typeof error.response.data !== "string" ||
        error.response.data.startsWith("<html>"))
    ) {
      error.response.data = error.message;
    }
    return Promise.reject(error);
  }
);

const noTimeoutHandlerAxios = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export default instance;
export { noTimeoutHandlerAxios };
