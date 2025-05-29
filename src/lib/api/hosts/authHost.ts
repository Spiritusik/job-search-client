import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from "axios";

const authInterceptorRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
};

const authInterceptorResponceError = async (error: AxiosError): Promise<AxiosResponse | never> => {
  const originalRequest = error.config as InternalAxiosRequestConfig & { _isRetry?: boolean };

  if (error.response?.status === 401 && !originalRequest._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<{ accessToken: string }>(
        `${process.env.REACT_APP_BASE_URL}api/user/refresh`,
        { withCredentials: true }
      );

      localStorage.setItem("token", response.data.accessToken);
      return $authHost.request(originalRequest);
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response?.data?.message) {
        console.error(e.response.data.message);
      } else if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error("Unknown error:", e);
      }
    }
  }

  throw error;
};

const $authHost = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_SITE_URL,
});

$authHost.interceptors.request.use(authInterceptorRequest);
$authHost.interceptors.response.use(
  (response) => response,
  authInterceptorResponceError
);

export default $authHost;
