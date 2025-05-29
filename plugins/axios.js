export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl;
    const baseUrlApi = config.public.apiBaseUrl;

    // await $fetch(`${baseUrl}/csrf-token`, {
    //   credentials: 'include',
    // });
  
    const axiosInstance = $fetch.create({
      baseURL: `${baseUrlApi}`,
      credentials: 'include',
    });
  
    nuxtApp.provide('axios', axiosInstance);
  });
  