import Botao from "./components/Botao";
import { Header } from "./components/Header";
import { Imagem } from "./components/Imagem";
import { ListaItens } from "./components/ListaItens";
import { Paragrafo } from "./components/Paragrafo";
import { Quadrado } from "./components/Quadrado";
import { Rodape } from "./components/Rodape";
import { Titulo } from "./components/Titulo";

export default function Home() {
  return (
    <main>
      <Header />
      <Titulo />
      <Quadrado />
      <Botao />
      <ListaItens />
      <Imagem />
      <Paragrafo />
      <Rodape />
    </main>
  );
}
