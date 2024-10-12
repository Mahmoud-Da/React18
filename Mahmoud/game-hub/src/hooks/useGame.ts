import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
// TODO: refactor depends on other hook
import { Game } from "../entity/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
