import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const DeletetingData = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deletePhotos = (photo: Photos) => {
    const originalPhotos = [...photos];
    setPhotos(photos.filter((p) => p.id != photo.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/photos" + photo.id)
      .catch((err) => {
        setError(err);
        setPhotos(originalPhotos);
      });
  };

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
      <h2>DeletetingData</h2>
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
              <button
                className="btn btn-outline-danger"
                onClick={() => deletePhotos(photo)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-grow" role="status"></div>}
    </>
  );
};

export default DeletetingData;
