import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const baseConfig: AxiosRequestConfig = {
      baseURL: import.meta.env.VITE_API_BASE_URL,
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
        console.error('API Error:', error.response?.data);

        switch (error.response?.status) {
          case 404:
            console.warn('Recurso não encontrado');
            break;
          case 500:
            console.error('Erro interno do servidor');
            break;
        }

        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, {
      params,
    });
    return response.data;
  }

  async post<T>(url: string, data: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url);
    return response.data;
  }

  async put<T>(url: string, data: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data);
    return response.data;
  }

  async patch<T>(url: string, data: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch(
      url,
      data,
    );
    return response.data;
  }
}

export const apiService = new ApiService();
export default apiService;
