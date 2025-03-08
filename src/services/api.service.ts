import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const baseConfig: AxiosRequestConfig = {
      baseURL: 'http://localhost:3000',
      timeout: 3000,
    };

    this.axiosInstance = axios.create(baseConfig);

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, { params });
    return response.data;
  }
}

export const apiService = new ApiService();
export default apiService;
