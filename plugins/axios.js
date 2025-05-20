export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;

    const axiosInstance = $fetch.create({
      baseURL: baseUrl,
      credentials: 'include',
    });
  
    nuxtApp.provide('axios', axiosInstance);
  });
  