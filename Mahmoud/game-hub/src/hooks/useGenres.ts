import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGemresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGanres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contoller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGemresResponse>("/genres", { signal: contoller.signal })
      .then((res) => {
        setGanres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contoller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;