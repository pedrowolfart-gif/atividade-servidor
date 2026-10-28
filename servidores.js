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

app.post("/livros", (req, res) => {
  const livro = {
    id: livros.length + 1,
    nome: req.body.nome,
    autor: req.body.autor,
  };
  livros.push(livro);
  res.send("livro criado");
});

app.put("/livros/:id", (req, res) => {
  const idUrl = req.params.id;
  const id = number(idUrl);
  const index = livros.findIndex(() => {
    return livro.id === id;
  });
  livros[index] = {
    id: id,
    nome: req.body.nome,
    autor: req.body.autor,
  };
  res.send("atualizado com sucesso");
});

app.delete(
  ("/livros/:id",
  (req, res) => {
    const idUrl = req.params.id;
    const id = number(idUrl);
  }),
);

app.listen(3000, () => {
  console.log("servidor rodando");
});
