import axios from "axios";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = import.meta.env.VITE_APP_TEMPLATE_API;

axiosApiInstance.interceptors.request.use(
  async (config) => { 
    
    
    // const token = localStorage.getItem("token");
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
      config.headers["Referrer-Policy"] = "no-referrer";
      config.headers["Access-Control-Allow-Origin"]= "*"
      config.headers["Access-Control-Allow-Headers"]= "*"
      // config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["X-XSS-Protection"] = "1; mode=block";
      config.headers["X-Content-Type-Options"] = "no-sniff";
      config.headers["X-Download-Options"] = "noopen";
      config.headers["Strict-Transport-Security"] =
        "max-age=31536000; includeSubDomains;";
    }

    console.log("aqui", config)
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
