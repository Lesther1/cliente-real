import rack1 from "./src/assets/products/pedestal/pedestal-h.jpg";
import rack2 from "./src/assets/products/pedestal/pedestal-tripode.jpg";
import rack3 from "./src/assets/products/proyector/rack-para-proyector-modelo-canastilla-1.jpg";
import rack4 from "./src/assets/products/proyector/rack-para-proyector-modelo-ganchos-1.jpg";
import rack5 from "./src/assets/products/rack-14-24pg/fijo-de-14-a-24.jpg";
import rack6 from "./src/assets/products/rack-14-24pg/movil-de-14-a-24.jpg";
import rack7 from "./src/assets/products/rack-14-24pg/rack-para-tv-articulado-14.jpg";
import rack8 from "./src/assets/products/rack-14-24pg/rack-para-tv-articulado-14.jpg";
import rack9 from "./src/assets/products/rack-26-40pg/articulado-de-26-a-40.jpg";
import rack10 from "./src/assets/products/rack-26-40pg/fijo-de-26-a-40.jpg";
import rack11 from "./src/assets/products/rack-26-40pg/movil-de-26-a-40.jpg";
import rack12 from "./src/assets/products/rack-26-40pg/techo-de-26-a-40.jpg";
import rack13 from "./src/assets/products/rack-26-40pg/techo-de-26-a-40.jpg";
import rack14 from "./src/assets/products/rack-60-100pg/articulado-de-60-a-75.jpg";
import rack15 from "./src/assets/products/rack-60-100pg/movil-de-60-a-75.jpg";
import rack16 from "./src/assets/products/rack-60-100pg/movil-de-75-a-89.jpg";
import rack17 from "./src/assets/products/rack-60-100pg/rack-para-tv-fijo-de-60-a-75-pulgadas.jpg";
import rack18 from "./src/assets/products/rack-60-100pg/rack-para-tv-techo-de-60-a-75-pulgadas.jpg";
import rack19 from "./src/assets/products/rack-monitor/2-monitor-simple.jpg";
import rack20 from "./src/assets/products/rack-monitor/hidraulico-2-monitor.jpg";
import rack21 from "./src/assets/products/rack-monitor/monitor-hidraulico.jpg";
import rack22 from "./src/assets/products/rack-monitor/monitor-simple.jpg";
const Data = [
  //pedestal
    {
        "id": 0,
        "name": "Rack para Tv Pedestal de 32 a 55 Pulgadas Modelo H",
        "img": rack1,
        "category":"Pedestales", 
        "price":"999.99",
        "material":"Acero de carbono",
        "finishing":"Pintura al horno con tratamiento anticorrosivo",
        "color":"negro",
        "height":"Altura maxima: 170 cm, minima 130 cm",
        "base":"4 ruedas y frenos",
        "resiste":"50 kg"
    },
    {
      "id": 1,
      "name": "Rack para Tv Pedestal de 32 a 55 pulgadas Modelo Tripode",
      "img": rack2,
      "category":"Pedestales", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 170 cm, minima 130 cm",
      "resiste":"50 kg"
    },
    //proyector
    {
      "id": 2,
      "name": "Rack para Proyector modelo canastilla",
      "img": rack3,
      "category":"Proyector", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 30 cm, minima 20 cm",
      "turn":"Giro 360 grados",
      "inclination":"15 grados máximo",
      "resiste":"15 kg"
    },
    {
      "id": 3,
      "name": "Rack para Proyecto modelo ganchos",
      "img": rack4,
      "category":"Proyector", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 40 cm, minima 25 cm",
      "turn":"Giro 360 grados",
      "inclination":"15 grados máximo",
      "resiste":"15 kg"
    },
    //rack-14-24
    {
      "id": 4,
      "name": "Rack para Tv Fijo de 14 a 24 pulgadas",
      "img": rack5,
      "category":"Rack 14 a 24 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 5 cm, minima 5 cm",
      "resiste":"15 kg"
    },
    {
      "id": 5,
      "name": "Rack para Tv Movil de 14 a 24 pulgadas",
      "img": rack6,
      "category":"Rack 14 a 24 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 25 cm, minima 5 cm",
      "turn":"45 grados cada lado",
      "inclination":"30 grados",
      "resiste":"15 kg"
    },
    {
      "id": 6,
      "name": "Rack para Tv Articulado de 14 a 24 pulgadas",
      "img": rack7,
      "category":"Rack 14 a 24 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 35 cm, minima 5 cm",
      "turn":"90 grados cada lado",
      "inclination":"30 grados",
      "resiste":"15 kg"
    },
    {
      "id": 7,
      "name": "Rack para Tv de Techo de 14 a 24 pulgadas",
      "img": rack8,
      "category":"Rack 14 a 24 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 35 cm, minima 20 cm",
      "turn":"360 grados",
      "inclination":"30 grados",
      "resiste":"15 kg"
    },
     //rack-26-40
    {
      "id": 8,
      "name": "Rack para Tv Articulado de 26 a 40 pulgadas",
      "img": rack9,
      "category":"Rack de 26 a 40 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 55 cm, minima 5 cm",
      "turn":"90 grados cada lado",
      "inclination":"30 grados",
      "resiste":"30 kg"
    },
    {
      "id": 9,
      "name": "Rack para Tv Fijo de 26 a 40 pulgadas",
      "img": rack10,
      "category":"Rack de 26 a 40 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 5 cm, minima 5 cm",
      "resiste":"30 kg"
    },
    {
      "id": 10,
      "name": "Rack para Tv Movil de 26 a 40 pulgadas",
      "img": rack11,
      "category":"Rack de 26 a 40 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 5 cm, minima 5 cm",
      "resiste":"30 kg"
    },
    {
      "id": 11,
      "name": "Rack para Tv techo de 26 a 40 pulgadas",
      "img": rack12,
      "category":"Rack de 26 a 40 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 50 cm, minima 30 cm",
      "turn":"360 grados",
      "inclination":"30 grados",
      "resiste":"30 kg"
    },
    //rack 60-100
    {
      "id": 12,
      "name": "Rack para Tv techo de 26 a 40 pulgadas",
      "img": rack13,
      "category":"Rack de 26 a 40 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 50 cm, minima 30 cm",
      "turn":"360 grados",
      "inclination":"30 grados",
      "resiste":"30 kg"
    },
    {
      "id": 13,
      "name": "Rack para Tv articulado de 60 a 75 pulgadas",
      "img": rack14,
      "category":"Rack de 60 a 100 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 75 cm, minima 8 cm",
      "turn":"90 grados por cada lado",
      "inclination":"30 grados",
      "resiste":"60 kg"
    },
    {
      "id": 14,
      "name": "Rack para Tv movil de 60 a 75 pulgadas",
      "img": rack15,
      "category":"Rack de 60 a 100 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 5 cm, minima 5 cm",
      "resiste":"60 kg"
    },
    {
      "id": 15,
      "name": "Rack para Tv Movil de 75 a 89 pulgadas",
      "img": rack16,
      "category":"Rack de 60 a 100 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 60 cm, minima 8 cm",
      "turn":"45 grados",
      "resiste":"90 kg"
    },
    {
      "id": 16,
      "name": "Rack para Tv fijo de 26 a 40 pulgadas",
      "img": rack17,
      "category":"Rack de 60 a 100 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 5 cm, minima 5 cm",
      "resiste":"30 kg"
    },
    {
      "id": 17,
      "name": "Rack para Tv de Techo de 60 a 75 pulgadas",
      "img": rack18,
      "category":"Rack de 60 a 100 pulgadas", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "height":"Altura maxima: 70 cm, minima 40 cm",
      "turn":"360 grados",
      "inclination":"30 grados",
      "resiste":"60 kg"
    },
    //monitores
    {
      "id": 18,
      "name": "Rack para Monitor 2 pantallas",
      "img": rack19,
      "category":"Monitor", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 40 cm, minima 40 cm",
      "turn":"90 grados",
      "inclination":"90 grados",
      "resiste":"8 kg"
    },
    {
      "id": 19,
      "name": "Rack para Monitor 2 pantallas con amortiguador",
      "img": rack20,
      "category":"Monitor", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 41 cm, minima 16 cm",
      "turn":"90 grados izquierda o derecha",
      "inclination":"90 grados",
      "resiste":"7 kg"
    },
    {
      "id": 20,
      "name": "Rack para Monitor con Amortiguador",
      "img": rack21,
      "category":"Monitor", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 41 cm, minima 16 cm",
      "turn":"90 grados izquierda o derecha",
      "inclination":"90 grados",
      "resiste":"7 kg"
    },
    {
      "id": 21,
      "name": "Rack para Monitor Brazo Movible",
      "img": rack22,
      "category":"Monitor", 
      "price":"999.99",
      "material":"Acero de carbono",
      "finishing":"Pintura al horno con tratamiento anticorrosivo",
      "color":"negro",
      "distance":"Distancia maxima: 40 cm, minima 40 cm",
      "turn":"90 grados",
      "inclination":"90 grados",
      "resiste":"8 kg"
    },
  ];

  export default Data
  