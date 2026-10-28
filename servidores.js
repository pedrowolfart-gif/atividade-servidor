import expresse from "express";
const app = express();

app.use(expresse.json());

let livros = [
  { id: 1, nome: "livro 1", autor: "autor 1" },
  { id: 2, nome: "livro 2", autor: "autor 2" },
  { id: 3, nome: "livro 3", autor: "autor 3" },
];

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const idUrl = req.params.id;
  const id = number(idUrl);
  const livro = livros.find((livro) => {
    return livro.id === id;
  });
});
