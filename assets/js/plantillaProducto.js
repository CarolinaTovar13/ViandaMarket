let producto = [
    {
      "id": 1,
      "corte": "Ribeye",
      "marca": "Japanese Beef",
      "calidad": "A5 (BMS 8-11)",
      "origen": "Japon",
      "precio": "5.750,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899814/ViandaMarket/Ribeye-wagyujapones3_a3zdff.jpg",
      "gramos": "350 / 370 / 400",
      "descripcionCorte": "El preferido de muchos, esto gracias a su balance de sabor, suavidad y cantidad de grasa, es un corte sin hueso que proviene de la parte superior de las costillas.",
      "descripcionMarca": "La carne Japonesa es la mejor del mundo, su certificacion refleja autenticidad y calidad, nuestros productos cuentan con el grado A5 BMS 8-11, lo mejor en la escala Japonesa."
    },
    {
      "id": 2,
      "corte": "New York",
      "marca": "Japanese Beef",
      "calidad": "A5 (BMS 8-11)",
      "origen": "Japon",
      "precio": "5.750,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "350 / 370 / 400",
      "descripcionCorte": "Es un corte muy bien valorado, viene del lomo de la res. Es popular por su gran suavidad y poca grasa.",
      "descripcionMarca": "La carne Japonesa es la mejor del mundo, su certificacion refleja autenticidad y calidad, nuestros productos cuentan con el grado A5 BMS 8-11, lo mejor en la escala Japonesa."
    },
    {
      "id": 3,
      "corte": "Ribeye",
      "marca": "Stone Axe",
      "calidad": "BMS 9+",
      "origen": "Australia",
      "precio": "3.850,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899816/ViandaMarket/Ribeye-wagyustoneaxe3_oki70a.jpg",
      "gramos": "420 / 440 / 470 / 490",
      "descripcionCorte": "El preferido de muchos, esto gracias a su balance de sabor, suavidad y cantidad de grasa, es un corte sin hueso que proviene de la parte superior de las costillas.",
      "descripcionMarca": "Stone Axe es un Wagyu Fullblood Australiano con BMS 9+, lo mas alto en la escala de marmoleo australiana."
    },
    {
      "id": 4,
      "corte": "New York",
      "marca": "Stone Axe",
      "calidad": "BMS 9+",
      "origen": "Australia",
      "precio": "3.790,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe2_gwu63x.jpg",
      "gramos": "360 / 380 / 430",
      "descripcionCorte": "Es un corte muy bien valorado, viene del lomo de la res. Es popular por su gran suavidad y poca grasa.",
      "descripcionMarca": "Stone Axe es un Wagyu Fullblood Australiano con BMS 9+, lo mas alto en la escala de marmoleo australiana."
    },
    {
      "id": 5,
      "corte": "Ribeye",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "3.170,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899809/ViandaMarket/Ribeye_-Margaret3_to5nqd.jpg",
      "gramos": "360 / 380 / 430",
      "descripcionCorte": "El preferido de muchos, esto gracias a su balance de sabor, suavidad y cantidad de grasa, es un corte sin hueso que proviene de la parte superior de las costillas.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 6,
      "corte": "New York",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "3.150,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "360 / 380 / 430",
      "descripcionCorte": "Es un corte muy bien valorado, viene del lomo de la res. Es popular por su gran suavidad y poca grasa.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 7,
      "corte": "Porterhouse",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "3.500,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899809/ViandaMarket/Porterhouse-Margaret5_g3fmm0.jpg",
      "gramos": "770 / 800",
      "descripcionCorte": "Muy conocido por ser agradable a la vista, pero tambien por su peculiaridad, esta conformado por dos cortes muy populares, el New York y Filete, lo que crea un balance sin igual.\n\nMas conocido como \"T-Bone\" pero la diferencia es el tamaño de la porcion de Filete, se llama Porterhouse si el filete mide al menos 1.25 pulgadas de grosor.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 8,
      "corte": "T-Bone",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "3.450,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899821/ViandaMarket/Tbone-Margaret2_xvhnqc.jpg",
      "gramos": "760 / 780",
      "descripcionCorte": "El corte perfecto para tener un balance entre dos cortes, por un lado tenemos el Filete, conocido por ser el corte mas blando y por el otro lados el New York, uno de los favoritos de la parrilla por su suavidad y sabor.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 9,
      "corte": "Tomahawk",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "3.250,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "1.2kg",
      "descripcionCorte": "El corte mas popular en la actualidad por su increible apariencia y tamaño, el nombre lo toma de una \"Hacha\" por su aspecto, este es un ribeye con hueso, lo que ayuda a compartir ese increible sabor del hueso y evitar perdida de jugos, una excelente eleccion para cualquier situacion que lo necesitres.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 10,
      "corte": "Picana",
      "marca": "Margaret River",
      "calidad": "BMS 8-9",
      "origen": "Australia",
      "precio": "1.700,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "2kg",
      "descripcionCorte": "Popularizado por su reconocimiento en espadas Brasileñas, es un corte de gran sabor y suavidad, excelente para asar en laminas pero tambien para el ahumado.",
      "descripcionMarca": "Margaret River es un Wagyu Pure Bred con BMS 8-9, su genetica Wagyu esta en el 94%, un marmoleo y sabor excepcional."
    },
    {
      "id": 11,
      "corte": "Ribeye",
      "marca": "Excel / CAB",
      "calidad": "Prime (BMS 4-5)",
      "origen": "USA / Canada",
      "precio": "1.250,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899817/ViandaMarket/Ribeye-wagyustoneaxe4_qvdaoi.jpg",
      "gramos": "520 / 1kg",
      "descripcionCorte": "El preferido de muchos, esto gracias a su balance de sabor, suavidad y cantidad de grasa, es un corte sin hueso que proviene de la parte superior de las costillas.",
      "descripcionMarca": "CAB con sus 10 normas adicionales a la USDA genera una gran confianza a garantia a sus clientes, una excelente opcion para saborear lo mejor de USA y Canada"
    },
    {
      "id": 12,
      "corte": "New York",
      "marca": "Excel / CAB",
      "calidad": "Prime (BMS 4-5)",
      "origen": "USA / Canada",
      "precio": "1.160,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "330 / 350 / 370",
      "descripcionCorte": "Es un corte muy bien valorado, viene del lomo de la res. Es popular por su gran suavidad y poca grasa.",
      "descripcionMarca": "Excel es uno de los mayores comercializadores de carne en norte america, sin duda, una garantia obtener sus productos."
    },
    {
      "id": 13,
      "corte": "Porterhouse",
      "marca": "Excel / CAB",
      "calidad": "Prime (BMS 4-5)",
      "origen": "USA / Canada",
      "precio": "790,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "900 / 1kg",
      "descripcionCorte": "Muy conocido por ser agradable a la vista, pero tambien por su peculiaridad, esta conformado por dos cortes muy populares, el New York y Filete, lo que crea un balance sin igual.\n\nMas conocido como \"T-Bone\" pero la diferencia es el tamaño de la porcion de Filete, se llama Porterhouse si el filete mide al menos 1.25 pulgadas de grosor.",
      "descripcionMarca": "CAB con sus 10 normas adicionales a la USDA genera una gran confianza a garantia a sus clientes, una excelente opcion para saborear lo mejor de USA y Canada"
    },
    {
      "id": 14,
      "corte": "T-Bone",
      "marca": "Excel / CAB",
      "calidad": "Prime (BMS 4-5)",
      "origen": "USA / Canada",
      "precio": "470,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "720 / 750",
      "descripcionCorte": "El corte perfecto para tener un balance entre dos cortes, por un lado tenemos el Filete, conocido por ser el corte mas blando y por el otro lados el New York, uno de los favoritos de la parrilla por su suavidad y sabor.",
      "descripcionMarca": "Excel es uno de los mayores comercializadores de carne en norte america, sin duda, una garantia obtener sus productos."
    },
    {
      "id": 15,
      "corte": "Picana",
      "marca": "Sterling Silver",
      "calidad": "High Choice (BMS 3)",
      "origen": "USA / Canada",
      "precio": "500,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "1.5kg / 2kg / 2.5kg",
      "descripcionCorte": "Popularizado por su reconocimiento en espadas Brasileñas, es un corte de gran sabor y suavidad, excelente para asar en laminas pero tambien para el ahumado.",
      "descripcionMarca": "Famosa por sus productos High Choice, lo mejor dentro de su categoria. Su proceso de añejamiento de 21 potencializa el sabor y suavidad de la carne."
    },
    {
      "id": 16,
      "corte": "Short Ribs",
      "marca": "Sterling Silver",
      "calidad": "High Choice (BMS 3)",
      "origen": "USA / Canada",
      "precio": "720,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899819/ViandaMarket/ShortRibs-Prime2_phxmxx.jpg",
      "gramos": "",
      "descripcionCorte": "La costilla cargada es exquisita, su balance de carne y hueso le da un tremendo sabor y suavidad, tambien por tener un abundante marmoleo desde las calidades mas bajas. Excelente opcion para la botana o ahumado.",
      "descripcionMarca": "Famosa por sus productos High Choice, lo mejor dentro de su categoria. Su proceso de añejamiento de 21 potencializa el sabor y suavidad de la carne."
    },
    {
      "id": 17,
      "corte": "Vacio Argentino",
      "marca": "Sterling Silver",
      "calidad": "High Choice (BMS 3)",
      "origen": "USA / Canada",
      "precio": "750,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "400 / 700",
      "descripcionCorte": "Corte que apenas esta ganando popularidad, su textura es similar a la arrachera pero con mucho mas sabor y suavidad.",
      "descripcionMarca": "Famosa por sus productos High Choice, lo mejor dentro de su categoria. Su proceso de añejamiento de 21 potencializa el sabor y suavidad de la carne."
    },
    {
      "id": 18,
      "corte": "Ribeye",
      "marca": "",
      "calidad": "Nacional",
      "origen": "Mexico",
      "precio": "698,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899813/ViandaMarket/Ribeye-choicemx_ssi9q1.jpg",
      "gramos": "380 / 400 / 420 / 450",
      "descripcionCorte": "El preferido de muchos, esto gracias a su balance de sabor, suavidad y cantidad de grasa, es un corte sin hueso que proviene de la parte superior de las costillas.",
      "descripcionMarca": "El producto que manejamos en esta categoria proviene de Sonora, con un excelente sabor, calidad y textura. Su marmoleo es similar a los productos Choice y Prime."
    },
    {
      "id": 19,
      "corte": "New York",
      "marca": "",
      "calidad": "Nacional",
      "origen": "Mexico",
      "precio": "456,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "350 / 370 / 400",
      "descripcionCorte": "Es un corte muy bien valorado, viene del lomo de la res. Es popular por su gran suavidad y poca grasa.",
      "descripcionMarca": "El producto que manejamos en esta categoria proviene de Sonora, con un excelente sabor, calidad y textura. Su marmoleo es similar a los productos Choice y Prime."
    },
    {
      "id": 20,
      "corte": "Picana",
      "marca": "",
      "calidad": "Nacional",
      "origen": "Mexico",
      "precio": "367,00",
      "imagen": "https://res.cloudinary.com/dw1mig7ts/image/upload/v1682899806/ViandaMarket/NewYork_-wagyustoneaxe3_wgtwty.jpg",
      "gramos": "1.7kg / 2kg",
      "descripcionCorte": "Popularizado por su reconocimiento en espadas Brasileñas, es un corte de gran sabor y suavidad, excelente para asar en laminas pero tambien para el ahumado.",
      "descripcionMarca": "El producto que manejamos en esta categoria proviene de Sonora, con un excelente sabor, calidad y textura. Su marmoleo es similar a los productos Choice y Prime."
    }
  ];
    let productoCarne = document.getElementsByClassName("productoCarne");

    
     window.addEventListener("load", function (event){
      if (localStorage.getItem("productoSeleccionado")==null){
        console.log("Error");
        console.log(typeof(localStorage.getItem("productoSeleccionado")));
        let error = `<h1> No se pudo cargar la página correctamente por favor
        vuelve a intentarlo </h1>`
        productoCarne[0].innerHTML = error;


      }

      if (localStorage.getItem("productoSeleccionado")!=null){    
        console.log(producto.find(id => id.id == (parseInt(localStorage.getItem("productoSeleccionado")))));
        let selProd = producto.find(id => id.id == (parseInt(localStorage.getItem("productoSeleccionado"))));

        selProd =   `
                 <div class="imagenContenedor">
                 <img src=${selProd.imagen} alt="" class="imagen" width="200vw">
                 </div>
                 <div class="productoTexto">
                     <h1>${selProd.corte}</h1>
                     <h2>${selProd.marca}</h2>
                     <h3>${selProd.calidad}</h3>
                     <h3>${selProd.origen}</h3>
                     <h4 style="color:rgb(20, 179, 20)">Existencia</h4>
                     <div class="dropdown">
                         <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Seleccionar
                         </button>
                         <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Aquí</a></li>
                           <li><a class="dropdown-item" href="#">Va</a></li>
                           <li><a class="dropdown-item" href="#">Inventario</a></li>
                         </ul>
                       </div>
                       <div class="precio">
                       <h2 style="color:rgba(184, 28, 0, 1)">$${selProd.precio}</h2>
                       <button type="button" class="btnCompra">Agregar al carrito</button>
                    
                       </div>
                       <p class="descripcion"> <h3>Descripción del corte:</h3> <span> ${selProd.descripcionCorte} </span><br>
                       <h3>Descripción de la marca:</h3>
                       <span>${selProd.descripcionMarca}</span>
                       </p>

                 </div>`;
            
                     productoCarne[0].insertAdjacentHTML("beforeend", selProd);

      }


     })//window