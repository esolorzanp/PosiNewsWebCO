/**
 * id
 * fuente
 * titular
 * descripcion
 * fecha
 * autor
 * categoria
 * img
 * url
 * palabrasClave
 * pais
 * estado
 * ciudad
 */

const dataBase = {
  users: [
    {
      user: "esolorzanop@estudiantes.uniajc.edu.co",
      password: "Solo2023",
      nombres: "Edwin",
      apellidos: "Solórzano Pardo",
    },
    {
      user: "usuario1@estudiantes.uniajc.edu.co",
      password: "123456",
      nombres: "usuario1",
      apellidos: "",
    },
    {
      user: "usuario2@estudiantes.uniajc.edu.co",
      password: "123456",
      nombres: "usuario2",
      apellidos: "",
    },
  ],
  news: [
    {
      id: 1,
      fuente: "Semana Colombia",
      titular:
        "James Rodríguez, ante un posible gran cambio para 2024: atento a oferta desde Arabia",
      descripcion:
        "El volante colombiano tendría más opciones de jugar y además recuperaría la número ‘10′.",
      categoria: "Deportes",
      autor: "Redacción Deportes",
      fecha: "2 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/Outy7Vo-JsGnrxGcAa7Ddcj1Qu8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/IAU3SDKELJGH3M3YRYVP3AT4ZU.jpg",
      url:
        "https://www.semana.com/deportes/articulo/james-rodriguez-ante-un-posible-gran-cambio-para-2024-atento-a-oferta-desde-arabia/202314/",
      palabrasClave: ["James", "Futbol", "Arabia"],
      pais: "Brasil",
      estado: "Sao Paulo",
      ciudad: "Sao Paulo",
    },
    {
      id: 2,
      fuente: "Semana Colombia",
      titular:
        "Estos son los usos caseros que se le pueden dar a la cáscara de la cebolla",
      descripcion:
        "Estos residuos tienen propiedades que pueden aprovecharse de varias formas. Una de ellas, abonar el jardín.",
      categoria: "Salud",
      autor: "Redacción Cómo",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/lYU6vWLYdOzfr3uXUdE9Bf_HpOk=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/L3OVGK7PLFB7HDWRYGIR3EGTY4.jpg",
      url:
        "https://www.semana.com/como/articulo/estos-son-los-usos-caseros-que-se-le-pueden-dar-a-la-cascara-de-la-cebolla/202313/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 3,
      fuente: "Semana Colombia",
      titular:
        "Primeros constructores de vivienda sin cuota inicial, entre los ganadores del premio Empresario del año 2023",
      descripcion:
        "La santandereana Constructora Marval obtuvo el máximo galardón en los Premios Empresario Colombiano 2023 de la Universidad del Rosario. Tres jóvenes líderes también sobresalieron por su empuje.",
      categoria: "Premios",
      autor: "Redacción Economía",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/gFh23bc-mqOi7URJiwpkrQbCtbo=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/7MRH3MHN6ZFWPL3V3KS2IK747M.jpg",
      url:
        "https://www.semana.com/economia/empresas/articulo/primeros-constructores-de-vivienda-sin-cuota-inicial-entre-los-ganadores-del-premio-empresario-del-ano-2023/202300/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 4,
      fuente: "Semana Colombia",
      titular:
        "Producción de café tuvo una impresionante recuperación en octubre, según la Federación Nacional de Cafeteros",
      descripcion:
        "La buena noticia va de la mano con el incremento en las exportaciones del grano.",
      categoria: "Agro",
      autor: "Redacción Economía",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/QqFUN2BD73TFdhhANWbSr49FIZg=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/GJNJYOINKZHCTBIAGUTQAU6JGU.jpg",
      url:
        "https://www.semana.com/economia/empresas/articulo/produccion-de-cafe-tuvo-una-impresionante-recuperacion-en-octubre-segun-la-federacion-nacional-de-cafeteros/202324/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 5,
      fuente: "Semana Colombia",
      titular:
        "En Canadá están buscando colombianos; ofrecen “pasaje de avión” y “ayuda para establecerse” en ese país",
      descripcion:
        "El proceso de selección final le compete única y exclusivamente al empresario.",
      categoria: "Economía",
      autor: "Redacción Economía",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/eEvkUrtxeAu1mGwr_fM9jwSqWqo=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/YUKIGIGCCBBXDNSXZA455NVDRU.jpg",
      url:
        "https://www.semana.com/economia/articulo/en-canada-estan-buscando-colombianos-ofrecen-pasaje-de-avion-y-ayuda-para-establecerse-en-ese-pais/202327/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 6,
      fuente: "Semana Colombia",
      titular:
        "Max Verstappen dio cátedra en la ‘pole’ del GP de Brasil; así quedó la grilla de salida",
      descripcion:
        "El vigente campeón volvió a mostrar su poderío en el circuito de Interlagos.",
      categoria: "Deportes",
      autor: "Redacción Deportes",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/H_QW1spYh9iWjnJrzhqvjWM_3yY=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BR2HTOLUJBBODM55RWTRNX5JSQ.png",
      url:
        "https://www.semana.com/deportes/articulo/max-verstappen-dio-catedra-en-la-pole-del-gp-de-brasil-asi-quedo-la-grilla-de-salida/202329/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 7,
      fuente: "Semana Colombia",
      titular:
        "Esta es la estrategia que llevó las iniciativas sociales en Colombia a otro nivel",
      descripcion:
        "A través del programa Aflora, la Fundación Bolívar Davivienda trabaja por contribuir al empoderamiento de las organizaciones sociales desde lo económico y la autogestión. Anualmente se les reconoce el esfuerzo en un encuentro que este año contará con el reconocido emprendedor social Miquel de Paladella.",
      categoria: "Desarrollo social",
      autor: "Redacción Semana",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/_s3fVO6M54GyTUBLK2k6ka0JYQw=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/U4NAXLHZGBEILJ3QV2MOG2KFX4.jpeg",
      url:
        "https://www.semana.com/mejor-colombia/articulo/esta-es-la-estrategia-que-llevo-las-iniciativas-sociales-en-colombia-a-otro-nivel/202300/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 8,
      fuente: "Semana Colombia",
      titular:
        "Dunkin’ Donuts: de emprendimiento familiar a una franquicia que emplea 1.200 jóvenes en Colombia",
      descripcion:
        "Hace 40 años, Miguel Merino, trajo a Colombia la franquicia estadounidense. Hoy, se ha consolidado como una marca apreciada por los colombianos y una de las primeras oportunidades de empleo para muchos jóvenes.",
      categoria: "Empresas",
      autor: "Redacción Semana",
      fecha: "3 de noviembre de 2023",
      img:
        "https://www.semana.com/resizer/_s3fVO6M54GyTUBLK2k6ka0JYQw=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/U4NAXLHZGBEILJ3QV2MOG2KFX4.jpeg",
      url:
        "https://www.semana.com/mejor-colombia/articulo/dunkin-donuts-de-emprendimiento-familiar-a-una-franquicia-que-emplea-1200-jovenes/202342/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 9,
      fuente: "El Tiempo",
      titular:
        "Así podrá activar la nueva característica de seguridad de WhatsApp desde iOS y Android",
      descripcion:
        "Le contamos cuál es el paso a paso para ocultar su dirección IP en una llamada.",
      categoria: "Whatsapp",
      autor: "Nataly Barrera Perico",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/08/24/64e7f657d514a.jpeg",
      url:
        "https://www.eltiempo.com/tecnosfera/apps/whatsapp-ofrece-a-sus-usuarios-una-nueva-funcion-de-seguridad-le-contamos-cual-es-824238",
      pais: "Colombia",
      estado: "Bogotá D.C.",
      ciudad: "Bogotá D.C.",
    },
    {
      id: 10,
      fuente: "El Tiempo",
      titular:
        "Beneficios de tomar café y cuántas son las tazas máximas al día",
      descripcion:
        "Para obtener los beneficios del café hay que consumirlo con moderación.",
      categoria: "Café",
      autor: "Luz Angela Dominguez Coral",
      fecha: "8 de noviembre de 2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/08/654bd08de4d48.jpeg",
      url:
        "https://www.eltiempo.com/cultura/gente/beneficios-de-tomar-cafe-y-cuantas-son-las-tazas-maximas-al-dia-824091",
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 11,
      fuente: "El Tiempo",
      titular:
        "MacBook Pro M3 Max: estas son las primeras impresiones del nuevo equipo de Apple",
      descripcion:
        "Apple lanzo su nuevo MacBook apenas diez meses después del MacBook Pro M2 Max. Los nuevos dispositivos cuentan con los nuevos chips de la marca: el M3, el M3 Pro y el M3 Max.",
      categoria: "Tecnología",
      autor: "Alejandro Victoria Tobón",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/08/654bf8484fbea.png",
      url:
        "https://www.eltiempo.com/tecnosfera/novedades-tecnologia/macbook-pro-m3-max-estas-son-las-primeras-impresiones-del-nuevo-equipo-de-apple-824161",
      pais: "Colombia",
      estado: "Valle del Cauca",
      ciudad: "Santiago de Cali",
    },
    {
      id: 12,
      fuente: "El Espectador",
      titular:
        "Hachiko: la conmovedora y triste historia del perro más fiel del mundo",
      descripcion:
        "Se conmemoran 100 años de la historia de Hachiko, el perro más fiel del mundo. El canino, de raza akita inu, nació el 10 de noviembre de 1923 y murió el 8 de marzo de 1935.",
      categoria: "Perros",
      autor: "La Red Zoocial y Agencia AFP",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/IisiXX7KcustWZzc_Dme_fMFeD0=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IILFGLWTM5A3TAJYSWHDQFX334.jpg",
      url:
        "https://www.elespectador.com/la-red-zoocial/perros/hachiko-la-emotiva-historia-del-perro-mas-fiel-del-mundo-siempre-a-tu-lado-hachiko/",
      pais: "Japón",
      estado: "",
      ciudad: "Tokio",
    },
    {
      id: 13,
      fuente: "El Espectador",
      titular: "Transición energética: limpia, segura y con enfoque humano",
      descripcion:
        "Potenciar las energías renovables, diversificar la matriz eléctrica y disminuir el impacto ambiental son algunos de los retos y las grandes acciones de Empresas Públicas de Medellín (EPM).",
      categoria: "Especiales",
      autor: "Redacción Especiales",
      fecha: "5 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/5P5UI5uWY4kvf8rkEEUkbkZ7kAM=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/3DALDFMX3VHUZINTPAPCLBS2CU.jpeg",
      url:
        "https://www.elespectador.com/especiales/transicion-energetica-limpia-segura-y-con-enfoque-humano/",
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 14,
      fuente: "El Espectador",
      titular:
        "Esta es la receta para cocinar una deliciosa cazuela de fríjoles con pollo",
      descripcion:
        "Decora con hojitas de cilantro y acompañar con una buena arepa blanca.",
      categoria: "Gastronomía",
      autor: "Mónica Díaz",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/xfocR_OhHIJ9JkH2mQIpsoZD8s4=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/JS42OKV6YZDHFGD4YAYOHFIMUE.jpg",
      url:
        "https://www.elespectador.com/gastronomia-y-recetas/receta-asi-se-prepara-una-deliciosa-cazuela-de-frijoles-con-pollo/",
      pais: "Colombia",
      estado: "Bogota D.C.",
      ciudad: "Bogota D.C.",
    },
    {
      id: 15,
      fuente: "El Espectador",
      titular: "El impacto de internet en la vida diaria",
      descripcion:
        "El desarrollo de internet ha puesto en marcha un debate sobre el modo en el que la comunicación, a través de la web, afecta las relaciones sociales.",
      categoria: "Emprendimiento y liderazgo",
      autor: "Zaryn Dentzel",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/go5bd75IV4WSYdKbcft1yeObff0=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/AD6YDSALXBB6DCUCU66745BQ2A.jpg",
      url:
        "https://www.elespectador.com/economia/emprendimiento-y-liderazgo/el-impacto-de-internet-en-la-vida-diaria/",
      pais: "España",
      estado: "Madrid",
      ciudad: "Tuenti",
    },
    {
      id: 16,
      fuente: "El Espectador",
      titular: "Instagram habilita un “botón antiacoso” ¿Cómo funciona?",
      descripcion:
        "De momento la función solo está disponible en Francia. Sin embargo, de resultar exitosa, podría extenderse a otros países del mundo.",
      categoria: "Tecnología",
      autor: "Agencia AFP",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/jIBtPJmL6TwWYm9fkpRY8S9Rmxo=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/II2G65RJXRH27EQ37RX3H6UMDA.jpg",
      url:
        "https://www.elespectador.com/tecnologia/instagram-habilita-un-boton-antiacoso-como-funciona/",
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 17,
      fuente: "El Espectador",
      titular:
        "Voces de autoridad: mujeres en cargos directivos en hoteles de Bogotá",
      descripcion:
        "Cifras de la importancia de la mujer en el sector turístico y experiencias de cuatro gerentes en la capital colombiana.",
      categoria: "Turismo",
      autor: "Maria Alejandra Castaño Carmona",
      fecha: "8 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/VJm58FmmkHLVy0cRlRPxCq7ifrU=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/3T3CJHZ66ZAUREFB3GTCZQVCFE.png",
      url:
        "https://www.elespectador.com/turismo/voces-de-autoridad-mujeres-en-cargos-directivos-en-hoteles-de-bogota/",
      pais: "Colombia",
      estado: "Bogotá D.C.",
      ciudad: "Bogotá D.C.",
    },
    {
      id: 18,
      fuente: "El Espectador",
      titular: "Prepara coliflor gratinada con esta sencilla receta",
      descripcion:
        "El queso parmesano será el mejor aliado en esta preparación. ¡Exquisita!",
      categoria: "Gastronomía y Recetas",
      autor: "Camila Gómez D'Eltorre",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/DSAgmo6E0M5KnGvg-kmZDwxWAco=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/2GLOOCTYCBBINIJ7ZP4UFG6QSA.jpg",
      url:
        "https://www.elespectador.com/gastronomia-y-recetas/receta-asi-se-prepara-la-coliflor-gratinada/",
      pais: "Colombia",
      estado: "Risaralda",
      ciudad: "Pereira",
    },
    {
      id: 19,
      fuente: "El Espectador",
      titular: "Recetas con carne: tres propuestas para tu almuerzo de hoy",
      descripcion:
        "Llena de sabor este día con una deliciosa sobrebarriga, un steak pimienta o un tradicional y delicioso goulash.",
      categoria: "Gastronomía y recetas",
      autor: "Anónimo",
      fecha: "9 de noviembre de 2023",
      img:
        "https://www.elespectador.com/resizer/d85O7rKZe4KR3lr6l8iY8oS7HXA=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/E2QULHF6ANAFVO34AF7HC246TU.jpg",
      url:
        "https://www.elespectador.com/gastronomia-y-recetas/recetas-con-carne-tres-propuestas-para-tu-almuerzo-de-hoy/",
      pais: "Colombia",
      estado: "Quindío",
      ciudad: "Armenia",
    },
    {
      id: 20,
      fuente: "El Tiempo",
      titular:
        "Luis Díaz, clave en crucial empate de Liverpool contra el City: fundamental en el gol",
      descripcion:
        "Luis Díaz ingresó en el segundo tiempo ante la mirada de su papá Luis Manuel, quien fue al Etihad.",
      categoria: "Deportes",
      autor: "Harold Yepes Izquierdo",
      fecha: "25-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/25/6562077facdf2.jpeg",
      url:
        "https://www.eltiempo.com/deportes/futbol-internacional/luis-diaz-fue-clave-en-empate-1-1-entre-liverpool-vs-city-su-papa-fue-al-estadio-829372",
      pais: "England",
      estado: "North Wset England",
      ciudad: "Liverpool",
    },
    {
      id: 21,
      fuente: "El tiempo",
      titular:
        "Primer crucero en Buenaventura: lo que comieron y visitaron los turistas alemanes",
      descripcion:
        "Uno de los guías explica a EL TIEMPO las actividades que realizaron. 'Estuvieron felices', dijo.",
      categoria: "Viajar",
      autor: "Camilo Andrés Peña Castañeda",
      fecha: "25-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/24/6561092095469.jpeg",
      url:
        "https://www.eltiempo.com/vida/viajar/primer-crucero-en-buenaventura-lo-que-comieron-y-visitaron-los-turistas-alemanes-829210",
      pais: "Colombia",
      estado: "Valle del Cauca",
      ciudad: "Buenaventura",
    },
    {
      id: 22,
      fuente: "El Tiempo",
      titular:
        "La decisión que tomó esta ciudad de Estados Unidos para ayudar a los migrantes",
      descripcion:
        "Chicago comenzó a trasladar a los inmigrantes que dormían en la vía pública",
      categoria: "Inmigración",
      autor: "Ignacio Díaz",
      fecha: "24-11-2023",
      img:
        "https://www.eltiempo.com/files/image_950_534/uploads/2019/12/27/5e0619c0efe59.jpeg",
      url:
        "https://www.eltiempo.com/mundo/eeuu-y-canada/la-decision-que-tomo-esta-ciudad-de-estados-unidos-para-ayudar-a-los-migrantes-829140",
      palabrasClave: ["Estados Unidos", "Inmigrantes", "Chicago", "Refugios"],
      pais: "Estados Unidos",
      estado: "Illinois",
      ciudad: "Chicago",
    },
    {
      id: 23,
      fuente: "El Tiempo",
      titular:
        "Forma correcta de consumir cúrcuma: ¿como especia en la comida o suplemento dietario?",
      descripcion:
        "Se obtienen todos los beneficios de la cúrcuma al consumirla pura, más que en suplementos.",
      categoria: "Salud",
      autor: "Luz Angela Dominguez Coral",
      fecha: "23-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/23/655f615c2a51f.jpeg",
      url:
        "https://www.eltiempo.com/salud/forma-correcta-de-consumir-curcuma-como-especia-en-la-comida-o-suplemento-dietario-828624",
      palabrasClave: ["Salud", "Cúrcuma", "Vida", "Alimentación"],
      pais: "Colombia",
      estado: "Valle del Cauca",
      ciudad: "Cali",
    },
    {
      id: 24,
      fuente: "El Tiempo",
      titular:
        "Los 10 beneficios de los arándanos en nuestra salud: ¿cada cuánto comerlos?",
      descripcion:
        "El consumo de esta fruta silvestre trae múltiples ventajas para su salud, según los expertos.",
      categoria: "Salud",
      autor: "Alejandro Victoria Tobón",
      fecha: "24-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2022/11/17/6376a9544f68b.jpeg",
      url:
        "https://www.eltiempo.com/salud/los-10-beneficios-de-los-arandanos-en-nuestra-salud-como-comerlos-correctamente-829028",
      palabrasClave: [
        "Salud",
        "Vida",
        "Arándanos",
        "Nutrición",
        "Alimentación",
        "Frutas",
      ],
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 25,
      fuente: "El Tiempo",
      titular:
        "¿Va a viajar? Esta es la guía para consultar si hay retrasos en su vuelo",
      descripcion:
        "Ante los problemas que se han presentado en el Aeropuerto El Dorado, estas son algunas sugerencias.",
      categoria: "Viajar",
      autor: "Redacción El Tiempo",
      fecha: "25-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/21/655cd940038b4.jpeg",
      url:
        "https://www.eltiempo.com/vida/viajar/va-a-viajar-esta-es-la-guia-para-consultar-si-hay-retrasos-en-su-vuelo-829267",
      palabrasClave: ["Viajar", "Vuelos", "Turismo", "Retrasos", "Aeropuerto"],
      pais: "Colombia",
      estado: "Bogotá D.C.",
      ciudad: "Bogotá D.C.",
    },
    {
      id: 26,
      fuente: "El Tiempo",
      titular: "Medellín transforma la educación con tecnología",
      descripcion:
        "A la fecha, la Alcaldía de Medellín ha entregado 130.000 computadores de punta a estudiantes.",
      categoria: "Educación",
      autor: "Mas contenido",
      fecha: "16-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/15/65559eae3b46b.jpeg",
      url:
        "https://www.eltiempo.com/mas-contenido/medellin-transforma-la-educacion-con-tecnologia-826295",
      palabrasClave: [
        "Educación",
        "Tecnología",
        "Medellín",
        "Alcaldía de Medellín",
      ],
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 27,
      fuente: "El Tiempo",
      titular:
        "Tome nota de estas recomendaciones para ahorrar dinero y eliminar gastos innecesarios",
      descripcion:
        "Las condiciones de vida de una persona mejoran en el momento en el que sabe administrar su dinero.",
      categoria: "Finanzas Personales",
      autor: "Lady Daniela Ortiz Góngora",
      fecha: "25-11-2023",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/05/24/646eb480994a0.jpeg",
      url:
        "https://www.eltiempo.com/economia/finanzas-personales/como-ahorrar-dinero-identificando-gastos-que-puede-eliminar-829196",
      palabrasClave: ["Economia", "Finanzas", "Ahorro", "Gastos"],
      pais: "Colombia",
      estado: "Risaralda",
      ciudad: "Pereira",
    },
    {
      id: 28,
      fuente: "El Tiempo",
      titular:
        "Así puede viajar por Colombia a fin de año desde 1.000 pesos: le contamos",
      descripcion:
        "Son muchas las empresas que buscan fidelizar a sus clientes y lanzan promociones imperdibles.",
      categoria: "Gente",
      autor: "Tania Alejandra Hernández Torres",
      fecha: "",
      img:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2023/11/24/656146c09b492.jpeg",
      url:
        "https://www.eltiempo.com/cultura/gente/asi-puede-viajar-por-colombia-con-solo-1-000-pesos-829301",
      palabrasClave: ["Gente", "Viajar", "Bajo costo"],
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 29,
      fuente: "El Espectador",
      titular:
        "Así ha crecido la oferta para los nómadas digitales en el mundo",
      descripcion:
        "El número de destinos que ofrecen visados ha aumentado considerablemente en los últimos años, y hoy en día casi la mitad los ofrecen por al menos un año.",
      categoria: "Turismo",
      autor: "Redacción Turismo",
      fecha: "26-11-2023",
      img:
        "https://www.elespectador.com/resizer/wTbNc1A-3mmYC_0YMfdZnOwyvHA=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/C3JAFBGDHBEJLGFSZU6ZELPLUI.jpg",
      url:
        "https://www.elespectador.com/turismo/asi-ha-crecido-la-oferta-para-los-nomadas-digitales-en-el-mundo/",
      palabrasClave: ["Turismo", "Nomadas", "Trabajo digital", "Exterior"],
      pais: "Colombia",
      estado: "Valle del Cauda",
      ciudad: "Cali",
    },
    {
      id: 30,
      fuente: "El Espectador",
      titular:
        "¿Por qué en Colombia se toma mal café cuando se produce uno de excelente calidad?",
      descripcion:
        "La mayor parte del café colombiano se exporta, mientras que nacionalmente se consumen mezclas de menor calidad. Le contamos de qué está hecho el tinto que se toma en el país.",
      categoria: "Economía",
      autor: "Maria Camila Ramírez Cañón",
      fecha: "26-11-2023",
      img:
        "https://www.elespectador.com/resizer/3XeHRQVewCqNou61uhb8eGTxI9k=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/OCYWQLSG7BEJFGDMVYMIJ2NWDU.jpg",
      url:
        "https://www.elespectador.com/economia/finanzas-personales/por-que-en-colombia-se-toma-mal-cafe-cuando-se-produce-uno-de-excelente-calidad-noticias-hoy/",
      palabrasClave: ["Cafe", "Consumo", "Gente"],
      pais: "Colombia",
      estado: "Bogota D.C.",
      ciudad: "Bogota D.C.",
    },
    {
      id: 31,
      fuente: "Portafolio",
      titular:
        "Las cinco reglas de oro para lograr la estabilidad financiera al cierre de año",
      descripcion:
        "Una de las recomendaciones es ir ahorrando de manera paulatina.",
      categoria: "Ahorro",
      autor: "Portafolio",
      fecha: "25-11-2023",
      img:
        "https://www.portafolio.co/files/article_new_multimedia/uploads/2023/11/21/655d5c4920f11.jpeg",
      url:
        "https://www.portafolio.co/mis-finanzas/ahorro/estabilidad-financiera-las-cinco-reglas-de-oro-para-tener-una-buena-salud-financiera-592764",
      palabrasClave: ["Ahorro", "Economía", "Finanzas personales"],
      pais: "Colombia",
      estado: "Valle del Cauca",
      ciudad: "Cali",
    },
    {
      id: 32,
      fuente: "Portafolio",
      titular:
        "¿Qué es el abono inteligente?: así puede pagar más rápido su crédito de vivienda",
      descripcion:
        "En el mercado existen algunas alternativas que permiten acelerar ese proceso. Le contamos cuáles son y lo que debe tener en cuenta.",
      categoria: "Vivienda",
      autor: "Portafolio",
      fecha: "26-11-2023",
      img:
        "https://www.portafolio.co/files/main_video_image/uploads/2023/11/24/6560c68b9a26a.jpeg",
      url:
        "https://www.portafolio.co/mis-finanzas/vivienda/abono-inteligente-como-puede-usarlo-para-pagar-mas-rapido-su-credito-de-vivienda-592971",
      palabrasClave: ["Vivienda", "Ahorro", "Crédito hipotecario"],
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 33,
      fuente: "Portafolio",
      titular:
        "Fondo Mujer Emprende ha beneficiado a más de 15 mil mujeres emprendedoras del país",
      descripcion:
        "La participación femenina en proyectos de emprendimiento ha incrementado 15 puntos porcentuales frente a los datos registrados durante el año 2021.",
      categoria: "Créditos",
      autor: "Portafolio",
      fecha: "25-11-2023",
      img:
        "https://www.portafolio.co/files/article_new_multimedia/uploads/2023/11/15/65559745afde2.jpeg",
      url:
        "https://www.portafolio.co/mis-finanzas/creditos/fondo-mujer-emprende-ha-beneficiado-a-mas-de-15-mil-mujeres-emprendedoras-del-pais-593050",
      palabrasClave: ["Crédito", "Vivienda", "Fondo", "Mujer"],
      pais: "Colombia",
      estado: "Antioquia",
      ciudad: "Medellín",
    },
    {
      id: 34,
      fuente: "Portafolio",
      titular:
        "Diez consejos para resguardar datos de manera segura y efectiva",
      descripcion:
        "Se recomienda crear una copia de seguridad  y hacer una revisión periódica a la información.",
      categoria: "Tecnología",
      autor: "Portafolio",
      fecha: "26-11-2023",
      img:
        "https://www.portafolio.co/files/article_new_multimedia/uploads/2023/11/21/655d6a258a870.jpeg",
      url:
        "https://www.portafolio.co/tecnologia/como-proteger-sus-datos-personales-y-los-de-su-empresa-592766",
      palabrasClave: ["Backup", "Información personal", "Tecnología"],
      pais: "Colombia",
      estado: "Bogota D.C.",
      ciudad: "Bogota D.C.",
    },
    {
      id: 35,
      fuente: "Portafolio",
      titular:
        "¿Buscando trabajo en el exterior para hacerlo remoto? 'Tips' para conseguirlo fácil",
      descripcion:
        "En el contexto del trabajo remoto, este tipo de vacantes suelen ser más atractivas debido a los beneficios que ofrecen. Tenga en cuenta estos 'tips'.",
      categoria: "Empleo",
      autor: "Portafolio",
      fecha: "23-11-2023",
      img:
        "https://www.portafolio.co/files/article_new_multimedia/uploads/2023/11/23/655fd2d75e09e.jpeg",
      url:
        "https://www.portafolio.co/economia/empleo/claves-a-tener-en-cuenta-a-la-hora-de-postularse-a-trabajos-en-el-exterior-592927",
      palabrasClave: ["Empleo", "Exterior", "Teletrabajo", "Remoto"],
      pais: "Colombia",
      estado: "Bogota D.C.",
      ciudad: "Bogota D.C.",
    },
    {
      id: 36,
      fuente: "Portafolio",
      titular:
        "La universidad colombiana que podrá entregar certificación internacional de inglés",
      descripcion:
        "Firmó un convenio con Pearson con el cual se incorpora a la red de centros autorizados para administrar estas autorizaciones. Vea de qué se trata.",
      categoria: "Innovación",
      autor: "Portafolio",
      fecha: "25-11-2023",
      img:
        "https://www.portafolio.co/files/article_new_multimedia/files/crop/uploads/2023/11/25/65623fc2d5c22.r_1700937678296.141-0-539-300.jpeg",
      url:
        "https://www.portafolio.co/innovacion/la-universidad-colombiana-que-podra-entregar-certificacion-internacional-de-ingles-593041",
      palabrasClave: [
        "Innovación",
        "Certificación",
        "Inglés",
        "Reconocimiento",
      ],
      pais: "Colombia",
      estado: "Valle del Cauda",
      ciudad: "Cali",
    },
    {
      id: 37,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 38,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 39,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 40,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 41,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 42,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 43,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 44,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 45,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 46,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 47,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 48,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 49,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
    {
      id: 50,
      fuente: "Plantilla",
      titular: "",
      descripcion: "",
      categoria: "",
      autor: "",
      fecha: "",
      img: "",
      url: "",
      palabrasClave: [],
      pais: "",
      estado: "",
      ciudad: "",
    },
  ],
};
