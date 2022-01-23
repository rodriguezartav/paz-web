import React from "react";

export function useFetch(url, options) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(process.env.API_URL + url, {
          headers: {
            "Content-Type": "application/json",

            ...options,
          },
        });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
}

export function useMutate(
  url,
  options = {
    method: "POST",
  }
) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const mutate = async (body, dynamicUrl) => {
    setIsLoading(true);
    try {
      const res = await fetch(dynamicUrl || url, {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      const json = await res.json();
      if (res.status != 200) {
        return setError(json);
      }
      setResponse(json);
      setIsLoading(false);
      return json;
    } catch (error) {
      setError(error.message || error);
    }
  };

  return { response, error, isLoading, mutate };
}
