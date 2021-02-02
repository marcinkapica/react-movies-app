import { useEffect, useState } from 'react';

const getApiData = async (url) => {
  const responseObj = {};

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok || data.error) {
      responseObj.isLoading = false;
      responseObj.error = true;
      throw new Error(
        data.error || `A error occurred (error status: ${res.status})`
      );
    }
    responseObj.isLoading = false;
    responseObj.data = data;
  } catch (e) {
    console.log(e.message);
  }
  return responseObj;
};

export const useFetchData = (url, initialData) => {
  const [responseObj, setResponseObj] = useState({
    isLoading: true,
    error: false,
    data: initialData,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getApiData(url);
      setResponseObj(response);
    }

    fetchData();
  }, [url]);
  console.log(responseObj);
  return responseObj;
};

export default useFetchData;
