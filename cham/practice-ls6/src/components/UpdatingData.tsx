import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const UpdatingData = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deletePhoto = (photo: Photos) => {
    const originalPhotos = [...photos];
    setPhotos(photos.filter((p) => p.id != photo.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/photos" + photo.id)
      .catch((err) => {
        setError(err);
        setPhotos(originalPhotos);
      });
  };

  const addPhoto = () => {
    const originalPhotos = [...photos];

    const newPhoto: Photos = {
      id: 0,
      title: "Hana",
      url: "lala@gmail.com",
    };
    setPhotos([newPhoto, ...photos]);

    axios
      .post("https://jsonplaceholder.typicode.com/photos", newPhoto)
      .then(({ data: savePhotos }) => setPhotos([savePhotos, ...photos]))
      .catch((err) => {
        setError(err.message);
        setPhotos(originalPhotos);
      });
  };
  const updatePhoto = (photo: Photos) => {
    const originalPhotos = [...photos];
    const updatedPhoto = { ...photos, title: photo.title + "!AAA" };
    setPhotos(photos.map((p) => (p.id === photo.id ? updatedPhoto : p)));
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/photos" + photo.id,
        updatedPhoto
      )
      .catch((err) => {
        setError(err.message);
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
      <h2>UpdatingData</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          <button className="btn btn-outline-primary mb-3" onClick={addPhoto}>
            Add
          </button>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <th scope="row">{photo.id}</th>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deletePhoto(photo)}
              >
                Delete
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => updatePhoto(photo)}
              >
                Update
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

export default UpdatingData;
