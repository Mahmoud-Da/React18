import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const ShowingALoadingIndicator = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setIsLoading(true);
    axios
      .get<Photos[]>("https://jsonplaceholder.typicode.com/photos", {
        signal: controler.signal,
      })
      .then((res) => {
        setPhotos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controler.abort();
  }, []);
  return (
    <>
      <h2>ShowingALoadingIndicator</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <th scope="row">{photo.id}</th>
              <th>{photo.title}</th>
              <th>{photo.url}</th>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-grow" role="status"></div>}
    </>
  );
};

export default ShowingALoadingIndicator;
