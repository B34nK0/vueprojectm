import axios, { noTimeoutHandlerAxios } from "../axios";

const baseUrl = "/v1";

const testA = async ({ id, config }, workspace) => {
  const { data } = await axios.post(`${baseUrl}/${id}/testA`, {
    config,
    workspace,
  });
  return data;
};

const testB = async ({ fid, id }, workspace) => {
  const { data } = await noTimeoutHandlerAxios.get(
    `${baseUrl}/${fid}/testB`,
    {
      params: { workspace, taskId: id },
    }
  );
  return data;
};

export default {
  testA,
  testB,
};
