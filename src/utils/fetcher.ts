import axios, { AxiosRequestConfig } from "axios";

const fetcher = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios(url, config);
  return response.data;
};

export default fetcher;
