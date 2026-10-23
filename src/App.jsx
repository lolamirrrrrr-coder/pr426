import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Katalog } from "./components/Katalog/Katalog";
import { Pasilka } from "./components/Pasilka/Pasilka";

export function App() {
  return (
    <div className="layout">
      <Header/>
      <Banner/>
      <Katalog/>
      <Pasilka/>
      <Footer/>
    </div>
  )
}


