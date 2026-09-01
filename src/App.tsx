import { useState, useEffect } from 'react';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
 
type Film = {
  id: number;
  title: string;
  image: string;
  original_title: string;
  description: string;
};
 
function App() {
  const [data, setData] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

 
  function viewProfile(name: string) {
    alert(`Abrir los detalles de ${name}`);
  }
 
  return (
    <Stack spacing={2} sx={{ padding: 3 }}>
      <h1>Peliculas de Studio Ghibli</h1>

      {data.map((film) => (
        <Stack
          key={film?.id}
          direction="row"
          spacing={2}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: 2,
            alignItems: "center",
          }}
        >
          <Avatar src={film.image} alt={film.title} variant="square" sx={{ width: 250, height: 300 }} />

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <strong>{film.title}</strong>

            {film.original_title !== undefined && (
              <p>Título original: {film.original_title}</p>
            )}
          </div>

          <Button
            variant="outlined"
            onClick={() => viewProfile(film.title)}
            style={{ marginLeft: "auto" }}
          >
            Ver detalles de pelicula
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}
 
export default App;