import React from 'react';
import Menu from './componets/menu'
import dadosInicias from './data/dados_iniciais.json';
import Carousel from './componets/Carousel';
import BannerMain from './componets/BannerMain'
import Footer from './componets/Footer';

function App() {
  return (
      <div style={{background: "#141414"}}>

      <Menu />

      <BannerMain 
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"Um pouco sobre o assunto!"}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosInicias.categorias[0]}
      />

      <Carousel
      category={dadosInicias.categorias[1]}
      />

      <Carousel
      category={dadosInicias.categorias[2]}
      />

      <Carousel
      category={dadosInicias.categorias[3]}
      />

      <Carousel
      category={dadosInicias.categorias[4]}
      />

      <Footer />
      </div>
   );
}

export default App;
