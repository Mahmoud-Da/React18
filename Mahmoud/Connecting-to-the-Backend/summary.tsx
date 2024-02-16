import { useEffect, useState } from "react";
// USING THE EFFECT HOOK
function App() {
  useEffect(() => {
    document.title = "App";
  }, []);
}
// FETCHING DATA WITH AXIOS
const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  axios.get<User[]>("https://...").then((res) => setUsers(res.data));
}, []);
// HANDLING ERRORS
const [error, setError] = useState("");
useEffect(() => {
  axios
    .get<User[]>("https://...")
    .then((res) => setUsers(res.data))
    .catch((err) => setError(err.message));
}, []);
// CANCELLING AN HTTP REQUEST
useEffect(() => {
  const controller = new AbortController();
  axios
    .get<User[]>("https://...", { signal: controller.signal })
    .then((res) => setUsers(res.data))
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
    });
  return () => controller.abort();
}, []);
// DELETING DATA
axios.delete("https://...");
// CREATING DATA
axios.post("https://...", newUser);
// UPDATING DATA
axios.put("https://...", updateUser);
