import axios from "axios";

// const token = localStorage.getItem("token");

// export const useAxios = () => {
//   const response = async ({ url, method = "GET", data, headers, params }) => {
//     try {
//       const res = await axios({
//         url: `${import.meta.env.VITE_BASE_URL}${url}`,
//         method,
//         data,
//         headers: {
//           Authorization: `token ${token}`,
//           "Content-Type": "application/json",
//           ...headers,
//         },
//         params: {
//           access_token: token,
//           ...params,
//         },
//       });

//       return res.data;
//     } catch (error) {
//       console.error("Axios xatolik:", error);
//       throw error;
//     }
//   };

//   return response;
// };

const token = localStorage.getItem("token");

export const useAxios = () => {
  const response = async ({
    url,
    method = "GET",
    data,
    headers = {},
    params = {},
    auth = true,
  }) => {
    try {
      // Avval default headersni yarataylik
      const defaultHeaders = {
        "Content-Type": "application/json",
        ...headers,
      };

      // Faqat auth kerak bo'lsa va token mavjud bo'lsa Authorization qo'shamiz
      if (auth && token) {
        defaultHeaders.Authorization = `token ${token}`;
      }

      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}${url}`,
        method,
        data,
        headers: defaultHeaders,
        params: {
          ...(auth && token ? { access_token: token } : {}),
          ...params,
        },
      });

      return res.data;
    } catch (error) {
      console.error("Axios xatolik:", error);
      throw error;
    }
  };

  return response;
};
