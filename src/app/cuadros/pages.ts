import type { CuadroPage } from "./catalog";

const link = (href: string, label: string) => `{link:${href}|${label}}`;

export const CUADRO_PAGES: CuadroPage[] = [
  {
    slug: "",
    path: "/cuadros",
    navLabel: "Todos los cuadros",
    title: "Cuadros al óleo para tu casa | Marcela Pedrosa",
    description:
      "Cuadros originales al óleo de Marcela Pedrosa en Concepción. Living, dormitorio, oficina, bosque o fachada. Consulta por WhatsApp.",
    h1: "Cuadros al óleo para elegir según el espacio",
    ogKey: "bosque",
    ogAlt: "Bosque al óleo de Marcela Pedrosa, pintora en Concepción",
    whatsappText:
      "Hola Marcela, quiero consultar por un cuadro al óleo. Te cuento el espacio y la obra que vi en el sitio.",
    ctaTitle: "Consulta la obra que te interesa",
    ctaBody:
      "Escribe el lugar y el nombre de la pintura. Marcela confirma disponibilidad por WhatsApp o por correo. El valor se acuerda en esa conversación.",
    consultaIntro:
      "Esta página ordena por el lugar de la casa. Elige la ficha y escribe el nombre de la obra.",
    gridHeading: "Una obra de cada grupo",
    workIds: ["c3", "c7", "c5", "c2", "c1", "c13", "c4", "c15"],
    workLinks: {
      c3: "/cuadros/para-living",
      c7: "/cuadros/para-dormitorio",
      c5: "/cuadros/para-comedor",
      c2: "/cuadros/para-oficina",
      c1: "/cuadros/paisajes-bosques-biobio",
      c13: "/cuadros/fachadas-arquitectura",
      c4: "/cuadros/grandes-al-oleo",
      c15: "/cuadros/regalar-pintura-original",
    },
    blocks: [
      {
        type: "p",
        text: "Si buscas un cuadro y ya sabes el muro, parte por aquí. Marcela Pedrosa, pintora en Concepción, tiene óleos reales en la galería del sitio. Esta serie de páginas los agrupa por el motivo de la consulta: el living, el dormitorio, el comedor, la oficina, un bosque, una fachada, un formato con medida publicada o un regalo. Cada grupo usa solo pinturas que están en esa galería.",
      },
      {
        type: "p",
        text: `Cada miniatura abre la ficha de esa tela: ${link("/pinturas/elefante", "Elefante")}, ${link("/pinturas/figura-recostada", "Figura recostada")}, ${link("/pinturas/bodegon-calabazas", "Bodegón de calabazas")}, ${link("/pinturas/grupo-de-figuras", "Grupo de figuras")}, ${link("/pinturas/bosque-troncos-luz", "Bosque con luz entre troncos")}, ${link("/pinturas/casas-dia-y-noche", "Casas de día y de noche")}, ${link("/pinturas/retrato-de-mujer", "Retrato de mujer")} y ${link("/pinturas/gato-recostado", "Gato recostado")}. Por motivo, entra a ${link("/comprar-arte-chile", "comprar arte en Chile")}. Para medir antes de elegir, el índice es ${link("/guias", "guías")}. Un óleo con envío está en ${link("/comprar-cuadros-al-oleo-chile", "comprar cuadros al óleo")}. Otros nombres, con fuente, están en ${link("/artistas-chilenas", "artistas chilenas")}.`,
      },
      {
        type: "h2",
        text: "Cómo se compra",
      },
      {
        type: "p",
        text: `Marcela vende a pedido. Escribes por WhatsApp al +56 9 5618 9912 o al correo contacto@marcelapedrosa.com, nombras la obra y ella confirma si está disponible. También puedes usar el ${link("/contacto", "formulario de contacto")}. Si la pieza ya no está, se puede conversar un ${link("/encargos-pintura", "encargo")} del mismo tema. El valor de cada obra se confirma al escribir. La ficha de la galería no trae precio; la oferta del mes, si está vigente, está en la portada.`,
      },
      {
        type: "p",
        text: `La galería guarda la medida en cuatro óleos. El bosque figura como 158x122 óleo sobre tela. El grupo de figuras, como 110x110 óleo sobre tela. El elefante, como 90x120 óleo sobre tela. El retrato, como 100x130 óleo sobre tela. El resto está registrado como óleo sobre tela, sin números. Cuando la ficha no trae medida, aquí se pide junto con la disponibilidad. El detalle de esas cuatro está en ${link("/cuadros/grandes-al-oleo", "cuadros grandes al óleo")}.`,
      },
      {
        type: "h2",
        text: "Qué hay en cada página",
      },
      {
        type: "p",
        text: `Para el ${link("/cuadros/para-living", "living")} están las piezas que se leen desde el sofá: el bosque de troncos, las figuras en color, el elefante, el retrato vertical, la ciudad de casas y cerros, los dos caballos, el bosque en planos de color y los rostros con máscara. Son obras con presencia. La página explica cada tela y cómo mirar el muro antes de escribir.`,
      },
      {
        type: "p",
        text: `Para el ${link("/cuadros/para-dormitorio", "dormitorio")} el criterio es la cercanía. Hay una figura recostada de espaldas sobre sábanas claras, un cuadro de manos superpuestas, un rostro en primer plano, un gato acostado sobre un textil y el retrato de 100x130. El bosque de 158x122 es calmo, pero pide un muro ancho, así que quedó en paisaje y en formato grande, no como primera opción de dormitorio.`,
      },
      {
        type: "p",
        text: `El ${link("/cuadros/para-comedor", "comedor")} se mira sentado, desde la mesa, y no usa la lista del living. Entran el bodegón de calabazas, la ciudad de casas de colores y el par de casas de día y de noche. Ninguna de esas tres fichas publica medida. Cómo medir el paño, sin repetir las telas, está en ${link("/guias/elegir-cuadro-para-el-comedor", "cómo elegir un cuadro para el comedor")}.`,
      },
      {
        type: "p",
        text: `Para la ${link("/cuadros/para-oficina", "oficina")} el criterio es un carácter más público: el grupo de figuras, la vista de ciudad, el par de fachadas de día y de noche, los rostros gráficos, el retrato con lentes redondos y los caballos. Los encargos del taller ya contemplan un espacio corporativo o un interior residencial. Si ninguna pieza calza con el muro, el camino es el encargo.`,
      },
      {
        type: "p",
        text: `Los ${link("/cuadros/paisajes-bosques-biobio", "paisajes de bosque")} que sí están en la galería son dos. Uno es el óleo de troncos verticales y luz entre el follaje, el de 158x122. El otro es un bosque en planos de verde, turquesa, rosa y ocre, con un tronco blanco al centro, sin medida publicada. Marcela pinta desde Concepción, en la Región del Biobío. Las imágenes no nombran un parque, y la página tampoco.`,
      },
      {
        type: "p",
        text: `Las ${link("/cuadros/fachadas-arquitectura", "fachadas")} son otras dos fichas. Un par de telas de casas, una de día y otra de noche, con escaleras y torres. Y una ciudad de casas de colores, con un tren, árboles en flor y cerros nevados. Es arquitectura pintada. El texto más largo sobre esa serie sigue en ${link("/pintura-fachadas-concepcion", "pintura de fachadas en Concepción")}.`,
      },
      {
        type: "h2",
        text: "Regalo, plazo y galería completa",
      },
      {
        type: "p",
        text: `Para ${link("/cuadros/regalar-pintura-original", "regalar una pintura original")} importa que la obra se pueda nombrar en una frase y que alcance a llegar. Un gato, un elefante, unos caballos, un bodegón de zapallos, un retrato o un cuadro de manos se explican solos. Los plazos, desde 48 horas en el Biobío sin marco, están en ${link("/tiempos-de-entrega", "tiempos de entrega")} y pueden moverse.`,
      },
      {
        type: "p",
        text: `Al escribir, di el lugar, el nombre de la obra tal como aparece en la ficha de abajo y, si lo tienes, el ancho del muro. Si es regalo o si quieres enmarcado, dilo en la primera línea: el marco cambia el plazo. La galería completa, sin este filtro, sigue en ${link("/pinturas", "pinturas")}.`,
      },
    ],
  },
  {
    slug: "para-living",
    path: "/cuadros/para-living",
    navLabel: "Para el living",
    title: "Cuadros para living al óleo | Marcela Pedrosa",
    description:
      "Cuadros para el living: óleos de Marcela Pedrosa con color y presencia. Medidas publicadas y consulta de disponibilidad en Concepción.",
    h1: "Cuadros para el living",
    ogKey: "elefante",
    ogAlt: "Elefante al óleo de Marcela Pedrosa, para un muro de living",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro para el living. Te cuento el muro y la obra que vi en el sitio.",
    ctaTitle: "Pide el cuadro para tu living",
    ctaBody:
      "Cuéntale el ancho del muro y qué obra viste: el bosque, el elefante, las figuras, el retrato, la ciudad, los caballos, el bosque en color o los rostros.",
    consultaIntro:
      "Si ya mediste el muro, nombra la tela del living que viste y el ancho libre.",
    gridHeading: "Óleos que se leen desde el sofá",
    workIds: ["c1", "c2", "c3", "c4", "c12", "c9", "c14", "c8"],
    blocks: [
      {
        type: "p",
        text: "Un cuadro para el living tiene que funcionar cuando hay visitas, con la tele apagada y con la luz de la tarde. En la galería de Marcela Pedrosa hay óleos que aguantan esa distancia por lo que se ve en la tela y, cuando existe, por la medida publicada. La selección sigue el formato y el motivo.",
      },
      {
        type: "p",
        text: `Esta página lista las telas. Cómo medir el muro, la altura y la luz está en ${link("/guias/elegir-cuadro-para-el-living", "cómo elegir un cuadro para el living")}, y no se repite aquí. Fichas: ${link("/pinturas/bosque-troncos-luz", "Bosque con luz entre troncos")} (158x122), ${link("/pinturas/grupo-de-figuras", "Grupo de figuras")} (110x110), ${link("/pinturas/elefante", "Elefante")} (90x120), ${link("/pinturas/retrato-de-mujer", "Retrato de mujer")} (100x130), ${link("/pinturas/ciudad-casas-de-colores", "Ciudad de casas de colores")}, ${link("/pinturas/dos-caballos", "Dos caballos")}, ${link("/pinturas/bosque-troncos-de-colores", "Bosque de troncos de colores")} y ${link("/pinturas/rostros-superpuestos", "Rostros superpuestos")}.`,
      },
      {
        type: "h2",
        text: "Las telas y su medida",
      },
      {
        type: "p",
        text: `El bosque de troncos es el de mayor presencia. La ficha dice 158x122, óleo sobre tela. Son troncos verticales, luz clara entre el follaje y un suelo con vegetación baja. De lejos se lee como una franja de luz; de cerca aparecen las pinceladas. Pide holgura. Si el living es corto de muro, mira antes ${link("/cuadros/grandes-al-oleo", "cuadros grandes al óleo")} y decide con el número en la mano. El mismo bosque está contado como paisaje en ${link("/cuadros/paisajes-bosques-biobio", "bosques del Biobío")}.`,
      },
      {
        type: "p",
        text: `El grupo de figuras está en 110x110, óleo sobre tela. Es un cuadrado de personas de pie, rostros simplificados y ropa en azul, rojo, morado, amarillo y verde. No hay paisaje detrás. En un living funciona como una conversación colgada: el conjunto se entiende sin acercarse. La misma obra, leída para un espacio de trabajo, está en ${link("/cuadros/para-oficina", "cuadros para oficina")}.`,
      },
      {
        type: "p",
        text: "El elefante mide 90x120, óleo sobre tela. Está de frente, con naranjos, azules y rojos sobre un fondo gris. Es vertical y se reconoce al entrar. Queda como punto de color cuando el muro del sofá está despejado. El retrato de mujer figura como 100x130, óleo sobre tela: rostro en azules, naranjos y violetas, fondo cálido, también vertical. En el living se cuelga como retrato, no como una lámina chica. Si lo quieres junto a la cama, la altura hay que mirarla en la página de dormitorio, porque 100x130 no es una franja baja.",
      },
      {
        type: "p",
        text: `La ciudad no trae números, solo óleo sobre tela. Se ve una aglomeración de casas de colores, torres, un tren amarillo y azul, árboles en flor y cerros nevados. Se lee de lejos por el color. Encaja en un living amplio. Si el muro es el de la mesa, la misma tela está en ${link("/cuadros/para-comedor", "cuadros para el comedor")}, con el bodegón y el par de día y noche. La arquitectura, en ${link("/cuadros/fachadas-arquitectura", "fachadas y arquitectura")}.`,
      },
      {
        type: "p",
        text: "Los dos caballos tampoco traen medida publicada. Uno ocupa el primer plano y el otro va en movimiento, sobre un fondo azul. Es una escena clara, fácil de compartir con quien no habla de pintura. El bosque en planos de color —verdes, turquesas, rosa y ocre, con un tronco blanco al centro— es la otra tela de árboles: más ritmo y menos penumbra que el bosque de troncos. Los rostros con máscara cierran el grupo. Planos de rojo, ocre y violeta, un abanico azul, una imagen gráfica que no depende de un horizonte.",
      },
      {
        type: "h2",
        text: "Cómo mirar el muro",
      },
      {
        type: "p",
        text: "Mide el paño libre, no la muralla completa. Resta la puerta, el ventanal y el mueble que ya está. Un 158x122 no es lo mismo que un 110x110: el primero ocupa más alto y más ancho. Si la ficha no trae medida, pídela antes de marcar el clavo. El enmarcado suma borde. El sitio separa los plazos con marco y sin marco, y conviene decir cuál quieres al escribir.",
      },
      {
        type: "p",
        text: "La luz del living en Concepción cambia bastante entre invierno y verano. Un bosque de tonos fríos y un elefante de naranjos no se comportan igual junto a una ventana. Si puedes, cuenta hacia dónde mira el muro y si el sol le pega directo. Marcela pinta óleo sobre tela en su taller y puede decirte si esa pieza sigue disponible.",
      },
      {
        type: "p",
        text: `Para pedirla, nombra la obra con lo que ves y agrega el ancho aproximado. Si ninguna calza, el ${link("/encargos-pintura", "encargo")} existe: ella confirma viabilidad, plazo y valor. La galería sin este filtro está en ${link("/pinturas", "pinturas")}. El índice de todos los grupos está en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "para-dormitorio",
    path: "/cuadros/para-dormitorio",
    navLabel: "Para el dormitorio",
    title: "Cuadros para dormitorio | Marcela Pedrosa",
    description:
      "Cuadros para el dormitorio: óleos íntimos de Marcela Pedrosa, figura, manos, retrato y gato. Consulta disponibilidad por WhatsApp.",
    h1: "Cuadros para el dormitorio",
    ogKey: "c7",
    ogAlt: "Figura recostada al óleo de Marcela Pedrosa",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro para el dormitorio. Te nombro la obra que vi en el sitio.",
    ctaTitle: "Consulta un cuadro para el dormitorio",
    ctaBody:
      "Di que es para el dormitorio y nombra la obra: la figura recostada, las manos, el rostro cercano, el gato o el retrato de 100x130.",
    consultaIntro:
      "Di que es para el dormitorio y nombra la ficha: la figura recostada, las manos, el rostro, el gato o el retrato.",
    gridHeading: "Óleos para ver de cerca",
    workIds: ["c7", "c11", "c6", "c15", "c4"],
    blocks: [
      {
        type: "p",
        text: "Un dormitorio pide una imagen que aguante verse de cerca, de mañana y con poca luz. En la galería de Marcela Pedrosa hay óleos que sirven para eso por lo que muestran. No existe una serie llamada dormitorio: esta página elige las telas de cercanía y deja fuera las de impacto alto.",
      },
      {
        type: "p",
        text: `Fichas de esta selección: ${link("/pinturas/figura-recostada", "Figura recostada")}, ${link("/pinturas/manos-superpuestas", "Manos superpuestas")}, ${link("/pinturas/retrato-con-mano", "Retrato con mano al mentón")}, ${link("/pinturas/gato-recostado", "Gato recostado")} y ${link("/pinturas/retrato-de-mujer", "Retrato de mujer")} (100x130). Para colgar un óleo sin dañar la tela, la guía es ${link("/guias/cuidar-y-colgar-pintura-al-oleo", "cuidar y colgar una pintura al óleo")}.`,
      },
      {
        type: "h2",
        text: "Qué se ve en cada tela",
      },
      {
        type: "p",
        text: "La obra más directa es la figura recostada. Se ve de espaldas, sobre sábanas claras, con el pelo recogido y un fondo ocre. El formato de la imagen es apaisado: acompaña la cama en lugar de competir con ella en altura. La ficha dice óleo sobre tela y no publica medida. Si el muro sobre el respaldar es bajo, esta proporción suele ser más amable que un vertical grande. Pide el número al consultar.",
      },
      {
        type: "p",
        text: "El cuadro de manos es otra tela íntima. Varias manos se superponen, con la piel en grises claros y un fondo de ocres y rojos. No hay rostros. Se mira despacio y queda mejor donde se la ve sentado, no al cruzar un pasillo. Tampoco trae medida en la ficha. El rostro en primer plano está muy cerca: una mano junto a la boca, ojos claros, el color en planos de verde, rojo, amarillo y violeta. Es una imagen intensa. En un dormitorio funciona si el muro no está sobrecargado, porque el cuadro ya trae el contraste.",
      },
      {
        type: "p",
        text: `El gato está acostado, con el pelaje en ocres y color, sobre un textil de motivos geométricos. Es una escena doméstica y quieta. La ficha solo dice óleo sobre tela. También puede ser un regalo, y por eso está en ${link("/cuadros/regalar-pintura-original", "regalar una pintura original")}. El retrato de mujer sí trae medida: 100x130, óleo sobre tela. Es vertical y es de los formatos grandes de la galería. Cabe en un dormitorio si el muro tiene altura de sobra, por ejemplo un paño junto al clóset, no una franja baja sobre la cama. La misma obra está en ${link("/cuadros/para-living", "living")} y en ${link("/cuadros/grandes-al-oleo", "cuadros grandes")}, con el número a la vista.`,
      },
      {
        type: "h2",
        text: "Lo que conviene mirar en otra página",
      },
      {
        type: "p",
        text: `El bosque de troncos es calmo y podría gustar junto a una cama, pero la ficha marca 158x122. Es mucho muro para la mayoría de los dormitorios. Si igual te interesa esa luz, míralo en ${link("/cuadros/paisajes-bosques-biobio", "paisajes y bosques")} y escribe con el ancho del paño. El elefante y la ciudad son de presencia alta: están en el living. Las fachadas de casas, de día y de noche, piden un muro más largo y están en ${link("/cuadros/fachadas-arquitectura", "fachadas")}.`,
      },
      {
        type: "p",
        text: "El óleo sobre tela de estas fichas es el mismo oficio del resto de la galería: pintura hecha a mano, una pieza única. En el dormitorio eso se nota de cerca. Las pinceladas del rostro, el dibujo de las manos y el pelaje del gato no se leen igual en una foto chica del teléfono. Si puedes, mira la imagen grande antes de decidir, y pregunta la medida de las que no la publican.",
      },
      {
        type: "h2",
        text: "Cómo pedirlo y en cuánto llega",
      },
      {
        type: "p",
        text: `Di que es para el dormitorio y nombra la obra: la figura recostada, las manos, el rostro cercano, el gato o el retrato de 100x130. Si tienes el ancho y el alto del paño libre, agrégalos. El enmarcado cambia el plazo. Sin marco, el sitio indica 48 horas en la Región del Biobío y de 3 a 5 días hábiles a otras regiones. Con marco, 5 a 7 días hábiles en el Biobío y 10 a otras regiones. El detalle y la nota de que pueden variar están en ${link("/tiempos-de-entrega", "tiempos de entrega")}.`,
      },
      {
        type: "p",
        text: `Marcela confirma disponibilidad por WhatsApp, al +56 9 5618 9912, o por contacto@marcelapedrosa.com. Si quieres una escena quieta y ninguna de estas sigue disponible, se puede encargar un óleo del mismo carácter en el ${link("/encargos-pintura", "taller de Concepción")}: ella confirma viabilidad, plazo y valor antes de empezar. La galería completa está en ${link("/pinturas", "pinturas")} y el mapa de este grupo, en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "para-comedor",
    path: "/cuadros/para-comedor",
    navLabel: "Para el comedor",
    title: "Cuadros para el comedor | Marcela Pedrosa",
    description:
      "Cuadros para el comedor: bodegón de zapallos, ciudad de colores y casas de día y de noche. Sin precio en la ficha. Consulta por WhatsApp.",
    h1: "Cuadros para el comedor",
    ogKey: "c5",
    ogAlt: "Bodegón al óleo de zapallos y calabazas, de Marcela Pedrosa",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro para el comedor. Te nombro la obra que vi en el sitio.",
    ctaTitle: "Consulta un cuadro para el comedor",
    ctaBody:
      "Di que es para el comedor y nombra el bodegón, la ciudad o el par de día y noche. Si la ficha no trae medida, pídela.",
    consultaIntro:
      "Di que es para el comedor y nombra la ficha. El valor no está en la página.",
    gridHeading: "Óleos para ver desde la mesa",
    workIds: ["c5", "c12", "c13"],
    blocks: [
      {
        type: "p",
        text: `El comedor se mira sentado, con la mesa de por medio. No es el ${link("/guias/elegir-cuadro-para-el-living", "muro del sofá")} ni ${link("/cuadros/para-dormitorio", "el de la cama")}. En la galería de Marcela Pedrosa hay tres óleos que aguantan esa distancia o esa cercanía: un bodegón, una ciudad de colores y un par de casas de día y de noche. Las tres fichas dicen óleo sobre tela y ninguna publica medida.`,
      },
      {
        type: "p",
        text: `Esta página lista las telas. Cómo medir el paño, la altura sentado y la lámpara de la mesa está en ${link("/guias/elegir-cuadro-para-el-comedor", "cómo elegir un cuadro para el comedor")}, y no se repite aquí. El living es otra lista, en ${link("/cuadros/para-living", "cuadros para el living")}.`,
      },
      {
        type: "h2",
        text: "El bodegón, de cerca",
      },
      {
        type: "p",
        text: `La ficha es ${link("/pinturas/bodegon-calabazas", "Bodegón de calabazas")}. Se ven calabazas y zapallos de distinto tamaño sobre una mesa de madera, con fondo ocre. El color se acerca al de los objetos. Sirve cuando el paño es corto, por ejemplo sobre un aparador, y se mira desde la silla de al lado. El motivo, sin el filtro del comedor, está en ${link("/bodegon-oleo", "bodegón al óleo")}. Otro bodegón, distinto de este, se habla como ${link("/encargos-pintura", "encargo")}.`,
      },
      {
        type: "h2",
        text: "La ciudad, desde el otro lado de la mesa",
      },
      {
        type: "p",
        text: `La segunda ficha es ${link("/pinturas/ciudad-casas-de-colores", "Ciudad de casas de colores")}. Casas, un tren amarillo y azul, árboles en flor y cerros nevados. Se entiende de lejos por el color, que es la distancia de una mesa. También está en el living y en ${link("/cuadros/fachadas-arquitectura", "fachadas")}, porque el motivo es urbano. Aquí entra solo si el muro que miras es el del comedor.`,
      },
      {
        type: "h2",
        text: "El par de día y de noche",
      },
      {
        type: "p",
        text: `La tercera ficha es ${link("/pinturas/casas-dia-y-noche", "Casas de día y de noche")}. La galería junta dos vistas en una sola entrada: de día, casas y escaleras; de noche, luna y ventanas encendidas. La foto es ancha. Pregunta si te interesa una tela o el par, y la medida de cada una. No es un servicio para pintar el muro de una casa. El relato de la serie sigue en ${link("/pintura-fachadas-concepcion", "óleos de fachadas y bosques")}.`,
      },
      {
        type: "h2",
        text: "Cómo pedirlo",
      },
      {
        type: "p",
        text: `Escribe por WhatsApp al +56 9 5618 9912 o a contacto@marcelapedrosa.com. En la primera línea di que es para el comedor. Nombra la ficha y, si lo tienes, el ancho libre del paño y si hay un mueble debajo. El valor se confirma en esa conversación. Sin enmarcado, el sitio indica 48 horas en la Región del Biobío y de 3 a 5 días hábiles a otras regiones. Con enmarcado, 5 a 7 días hábiles en el Biobío y 10 a otras regiones. El detalle está en ${link("/tiempos-de-entrega", "tiempos de entrega")} y puede variar.`,
      },
      {
        type: "p",
        text: `Si ninguna de las tres sigue disponible, o el muro pide otra medida, el camino es el encargo: motivo, ancho aproximado y fecha. Marcela confirma viabilidad, plazo y valor. La galería completa está en ${link("/pinturas", "pinturas")}. El índice de los grupos está en ${link("/cuadros", "cuadros")}. La compra por motivo, sin este filtro de muro, está en ${link("/comprar-arte-chile", "comprar arte en Chile")}.`,
      },
    ],
  },
  {
    slug: "para-oficina",
    path: "/cuadros/para-oficina",
    navLabel: "Para la oficina",
    title: "Cuadros para oficina al óleo | Marcela Pedrosa",
    description:
      "Cuadros para oficina: figuras, ciudad y fachadas al óleo de Marcela Pedrosa. Obras reales de la galería. Consulta por WhatsApp.",
    h1: "Cuadros para la oficina",
    ogKey: "gente",
    ogAlt: "Grupo de figuras al óleo de Marcela Pedrosa",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro para la oficina. Te cuento el muro y la obra que vi en el sitio.",
    ctaTitle: "Consulta un cuadro para la oficina",
    ctaBody:
      "Di si el espacio es compartido o personal, y qué obra viste: las figuras, la ciudad, las fachadas, los rostros, el retrato con lentes o los caballos.",
    consultaIntro:
      "Di si el espacio es compartido y qué ficha viste. El valor no está en la página.",
    gridHeading: "Óleos con carácter de lugar de trabajo",
    workIds: ["c2", "c12", "c13", "c8", "c10", "c9"],
    blocks: [
      {
        type: "p",
        text: "Una oficina pide un cuadro que se pueda compartir durante muchas horas, con clientes o con el equipo. En el taller de Marcela Pedrosa, en Concepción, los encargos ya contemplan formatos para un muro o un espacio corporativo, y también interiores residenciales. Esta página muestra obras de la galería cuyo motivo aguanta un lugar de trabajo.",
      },
      {
        type: "p",
        text: `Fichas: ${link("/pinturas/grupo-de-figuras", "Grupo de figuras")} (110x110), ${link("/pinturas/ciudad-casas-de-colores", "Ciudad de casas de colores")}, ${link("/pinturas/casas-dia-y-noche", "Casas de día y de noche")}, ${link("/pinturas/rostros-superpuestos", "Rostros superpuestos")}, ${link("/pinturas/retrato-con-lentes", "Retrato con lentes")} y ${link("/pinturas/dos-caballos", "Dos caballos")}. El living de una casa es otra selección, en ${link("/cuadros/para-living", "cuadros para el living")}.`,
      },
      {
        type: "h2",
        text: "Figuras, ciudad y fachadas",
      },
      {
        type: "p",
        text: `El grupo de figuras mide 110x110, óleo sobre tela. Son personas de pie, rostros simplificados, color en la ropa. No retrata a un equipo real. En una sala de reuniones o detrás de un escritorio se lee como presencia humana, sin volverse el retrato de alguien de la oficina. Es cuadrado, así que el muro no necesita ser muy alto. En una casa, la misma tela está pensada también para el ${link("/cuadros/para-living", "living")}.`,
      },
      {
        type: "p",
        text: `La ciudad es óleo sobre tela, sin medida publicada. Casas de colores, torres, un tren, árboles en flor y cerros nevados. Tiene algo de mapa y algo de recuerdo urbano. En una oficina en Concepción o en otra ciudad del Biobío conversa con quien trabaja mirando una ventana, sin exigir que el cuadro sea una foto del barrio. El detalle de esa arquitectura está en ${link("/cuadros/fachadas-arquitectura", "fachadas y arquitectura")}.`,
      },
      {
        type: "p",
        text: "El par de fachadas muestra dos telas en una sola ficha: una de casas de día y otra de noche, con escaleras, torres y bloques de color. Es ordenada, casi un plano. Sirve en un muro ancho, de recepción o de pasillo, donde un solo retrato se perdería. Tampoco trae medida: hay que pedirla. Los rostros con máscara son gráficos —rojo, ocre, violeta, un abanico azul— y no dependen de una historia local. En una oficina de varias personas evitan el problema de un retrato que se parece a alguien.",
      },
      {
        type: "p",
        text: "El retrato con lentes redondos es distinto: es una persona pintada, pelo al hombro, lentes circulares, color en planos. La galería no publica un nombre. Si te importa saber a quién representa, pregúntalo al escribir. Puede quedar en un estudio personal con más naturalidad que en una sala compartida. Los caballos —uno en primer plano y otro en movimiento, fondo azul— aportan dirección. También son óleo sobre tela, sin números en la ficha.",
      },
      {
        type: "h2",
        text: "Qué quedó en otras páginas",
      },
      {
        type: "p",
        text: `La figura recostada y el cuadro de manos son de ${link("/cuadros/para-dormitorio", "dormitorio")}. El gato es doméstico. El bodegón de zapallos es de interior de casa. Pueden existir oficinas donde igual funcionen; la primera lectura de esas telas es otra. Si el muro es grande, cruza esta selección con las medidas publicadas. De este grupo, solo las figuras traen número: 110x110. El bosque de 158x122 y el retrato de 100x130 están en ${link("/cuadros/grandes-al-oleo", "cuadros grandes al óleo")}.`,
      },
      {
        type: "p",
        text: `Un encargo a medida sigue siendo el camino cuando el muro, el color de la pared o el tema no coinciden con lo que hay. En ${link("/encargos-pintura", "encargos de pintura")} el orden es este: escribes la idea, las medidas aproximadas y las referencias; Marcela confirma viabilidad, plazos y valor. La obra se pinta en el taller de Concepción, al óleo. La técnica está explicada en ${link("/oleo-sobre-tela-chile", "óleo sobre tela")}.`,
      },
      {
        type: "p",
        text: `Para una pieza que ya está en la galería, el mensaje es más corto. Di que es para una oficina, si el espacio es compartido o personal, y qué obra viste. La disponibilidad se confirma en la respuesta, no en esta página. Si quieres ver el conjunto sin filtro de uso, entra a ${link("/pinturas", "pinturas")}. El resto de los grupos está en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "paisajes-bosques-biobio",
    path: "/cuadros/paisajes-bosques-biobio",
    navLabel: "Bosques del Biobío",
    title: "Cuadros de bosques del Biobío | Marcela Pedrosa",
    description:
      "Cuadros de bosques y paisaje al óleo de Marcela Pedrosa, desde Concepción, Biobío. Dos obras reales de la galería. Consulta disponibilidad.",
    h1: "Cuadros de paisajes y bosques",
    ogKey: "bosque",
    ogAlt: "Bosque de troncos al óleo de Marcela Pedrosa",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro de bosque. Te nombro la obra que vi en el sitio.",
    ctaTitle: "Consulta un cuadro de bosque",
    ctaBody:
      "Nombra el bosque de troncos o el bosque en color, y pide disponibilidad. En el segundo, pide también la medida: la ficha no la publica.",
    consultaIntro:
      "Nombra el bosque de troncos o el de colores. En el segundo, pide la medida: la ficha no la publica.",
    gridHeading: "Los dos bosques de la galería",
    workIds: ["c1", "c14"],
    blocks: [
      {
        type: "p",
        text: `En la galería hay dos pinturas que son bosque. El resto de las telas son figuras, retratos, animales, un bodegón o ciudad. Esta página es para comprar uno de esos dos óleos. La ficha del motivo, sin el filtro de muro, está en ${link("/pintura-de-bosques", "pintura de bosques")}.`,
      },
      {
        type: "p",
        text: `Las dos fichas son ${link("/pinturas/bosque-troncos-luz", "Bosque con luz entre troncos")} (158x122, óleo sobre tela) y ${link("/pinturas/bosque-troncos-de-colores", "Bosque de troncos de colores")} (óleo sobre tela, sin medida publicada).`,
      },
      {
        type: "h2",
        text: "El bosque de troncos",
      },
      {
        type: "p",
        text: `La ficha lo registra como 158x122, óleo sobre tela. Troncos oscuros, casi columnas, con luz blanca y azul entre medio y un suelo verde y amarillo de vegetación baja. Es la imagen de bosque que el sitio usa en la portada y es la medida más grande publicada en la galería. De lejos parece niebla y luz. De cerca se notan las pinceladas sueltas del óleo. Por el tamaño, también está en ${link("/cuadros/grandes-al-oleo", "cuadros grandes")} y, como presencia de muro, en ${link("/cuadros/para-living", "cuadros para el living")}.`,
      },
      {
        type: "p",
        text: "Un 158x122 necesita muro. En un departamento con un paño corto va a quedar apretado. Antes de enamorarte de la luz, mide el ancho libre y resta el marco si vas a pedirlo. Es la pregunta más útil que puedes hacer junto con la disponibilidad.",
      },
      {
        type: "h2",
        text: "El bosque en planos de color",
      },
      {
        type: "p",
        text: "La segunda tela no trae medida, solo óleo sobre tela. Hay troncos en verde, turquesa, rosa y ocre, ramas blancas finas y un tronco blanco al centro. Es más gráfica que la anterior y menos atmosférica. Las dos pueden convivir en una casa, pero no son la misma pintura ni el mismo formato. La foto no conserva el tamaño real: pedir la medida es parte de la consulta, no un trámite después.",
      },
      {
        type: "p",
        text: `Marcela pinta en Concepción, Región del Biobío. En los encargos, bosques y paisaje del sur aparecen junto con fachadas urbanas y figuración. Las dos telas de esta página no nombran un parque, un cerro ni un sendero. Si buscas un lugar preciso, escríbelo y pregunta si la obra se refiere a ese lugar o si conviene un encargo. La vista de ciudad con cerros nevados a veces se confunde con un paisaje: es urbana, y está en ${link("/cuadros/fachadas-arquitectura", "fachadas y arquitectura")}.`,
      },
      {
        type: "h2",
        text: "Cómo pedir un bosque",
      },
      {
        type: "p",
        text: `Escribe por WhatsApp al +56 9 5618 9912 o por contacto@marcelapedrosa.com. Di cuál de los dos bosques, para qué parte de la casa, y si sigue disponible. Si ninguna de las dos telas está, el ${link("/encargos-pintura", "encargo de un bosque")} es un camino real: idea, medida aproximada del muro y, si tienes, una referencia. Ella confirma viabilidad, plazo y valor. El oficio de la tela está en ${link("/oleo-sobre-tela-chile", "óleo sobre tela")}.`,
      },
      {
        type: "p",
        text: `La serie de fachadas y bosques, contada desde el taller, sigue en ${link("/pintura-fachadas-concepcion", "pintura de fachadas y bosques")}. La galería completa está en ${link("/pinturas", "pinturas")}. Los otros usos —dormitorio, oficina, regalo— están agrupados en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "fachadas-arquitectura",
    path: "/cuadros/fachadas-arquitectura",
    navLabel: "Fachadas",
    title: "Cuadros de fachadas al óleo | Marcela Pedrosa",
    description:
      "Cuadros de fachadas y arquitectura al óleo de Marcela Pedrosa. Casas, ciudad y color, desde Concepción. Consulta disponibilidad.",
    h1: "Cuadros de fachadas y arquitectura",
    ogKey: "c12",
    ogAlt: "Ciudad de casas de colores al óleo de Marcela Pedrosa",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro de fachadas. Te nombro la obra que vi en el sitio.",
    ctaTitle: "Consulta un cuadro de fachadas",
    ctaBody:
      "Di si te interesa el par de fachadas o la ciudad con cerros y tren, y cuenta el muro. Pide la medida: ninguna de las dos fichas la publica.",
    consultaIntro:
      "Di si te interesa el par de día y noche o la ciudad con cerros. Pide la medida: ninguna de las dos fichas la publica.",
    gridHeading: "Fachadas que están en la galería",
    workIds: ["c13", "c12"],
    blocks: [
      {
        type: "p",
        text: `Quien busca un cuadro de fachadas suele querer casas, color y una ciudad con clima de sur, no un plano técnico. En la galería de Marcela Pedrosa hay dos fichas que muestran eso. Las describo por lo que se ve, para consultarlas. No es un servicio para pintar el muro de una casa. El relato de la serie sigue en ${link("/pintura-fachadas-concepcion", "óleos de fachadas y bosques")}. Las vistas de ciudad, solas, están en ${link("/pintura-de-ciudad", "pintura de ciudad")}.`,
      },
      {
        type: "p",
        text: `Las fichas son ${link("/pinturas/casas-dia-y-noche", "Casas de día y de noche")} y ${link("/pinturas/ciudad-casas-de-colores", "Ciudad de casas de colores")}. Las dos dicen óleo sobre tela y no publican medida.`,
      },
      {
        type: "h2",
        text: "El par de día y de noche",
      },
      {
        type: "p",
        text: "La ficha es una sola entrada de la galería, óleo sobre tela, sin medida publicada. La foto muestra dos telas juntas. En una, las casas están de día: bloques de color, una torre con cúpula, una escalera y un arco. En la otra, una ciudad de noche, con luna, ventanas encendidas y otra escalera. El sitio las publica como una ficha. Si te interesa una tela o el par completo para un muro ancho, pregúntalo al escribir, y pide la medida de cada una.",
      },
      {
        type: "p",
        text: `Por lo ancho de la foto, el par se piensa para un living largo, un comedor o una recepción. La selección del comedor, con esta ficha y otras dos, está en ${link("/cuadros/para-comedor", "cuadros para el comedor")}. Una tela chica y una tela grande pueden verse parecidas en la pantalla. Sin el número de la ficha, la foto no alcanza para comprar.`,
      },
      {
        type: "h2",
        text: "La ciudad con cerros y tren",
      },
      {
        type: "p",
        text: `La otra ficha también es óleo sobre tela y tampoco trae números. Se ven casas de colores apretadas, torres y chapiteles, una cruz, un volumen de arcos, un tren amarillo y azul, árboles en flor y, al fondo, cerros nevados. Hay elementos de una ciudad del sur pintados con geometría simple. La imagen no nombra un edificio. Si reconoces un lugar y quieres saber si la obra lo nombra, la pregunta es para Marcela. Esta tela se lee de lejos, y por eso también está en ${link("/cuadros/para-living", "living")} y en ${link("/cuadros/para-oficina", "oficina")}.`,
      },
      {
        type: "p",
        text: `El grupo de figuras tiene color, pero no es arquitectura, y no entra aquí. El bosque de troncos es paisaje y está en ${link("/cuadros/paisajes-bosques-biobio", "bosques del Biobío")}. Esas dos líneas —fachada y bosque— son las que el taller nombra cuando alguien pide un tema de lugar.`,
      },
      {
        type: "h2",
        text: "Elegir una ficha o encargar una fachada",
      },
      {
        type: "p",
        text: `Si quieres la fachada de una casa precisa, de un barrio de Concepción o de otra ciudad, eso ya no es elegir entre estas dos fichas: es un ${link("/encargos-pintura", "encargo")}. El mensaje lleva la idea, una medida aproximada y una referencia. Marcela confirma si lo puede pintar, en qué plazo y a qué valor. El taller está en Concepción. El relato de la serie está en ${link("/pintura-fachadas-concepcion", "pintura de fachadas y bosques")}.`,
      },
      {
        type: "p",
        text: `Si una de estas obras sigue disponible, escribe por WhatsApp al +56 9 5618 9912 o a contacto@marcelapedrosa.com. Di «el par de fachadas» o «la ciudad con cerros y tren», y cuenta el muro. Los plazos del sitio —48 horas en el Biobío sin enmarcado, más días si hay marco o si sale de la región— están en ${link("/tiempos-de-entrega", "tiempos de entrega")} y pueden cambiar. Para ver todas las pinturas, entra a ${link("/pinturas", "pinturas")}. El índice del grupo está en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "grandes-al-oleo",
    path: "/cuadros/grandes-al-oleo",
    navLabel: "Grandes al óleo",
    title: "Cuadros grandes al óleo | Marcela Pedrosa",
    description:
      "Cuadros grandes al óleo de Marcela Pedrosa: las cuatro obras con medida publicada en la galería. Consulta disponibilidad en Concepción.",
    h1: "Cuadros grandes al óleo",
    ogKey: "bosque",
    ogAlt: "Óleo de gran formato de Marcela Pedrosa, bosque de troncos",
    whatsappText:
      "Hola Marcela, quiero consultar un cuadro grande al óleo. Te nombro la obra y la medida que figura en la ficha.",
    ctaTitle: "Consulta un cuadro con medida publicada",
    ctaBody:
      "Nombra la obra y repite la medida de la ficha: 158x122, 110x110, 90x120 o 100x130. Agrega el ancho del muro.",
    consultaIntro:
      "Repite la medida de la ficha: 158x122, 110x110, 90x120 o 100x130, y el ancho del muro.",
    gridHeading: "Las cuatro fichas con medida",
    workIds: ["c1", "c2", "c3", "c4"],
    blocks: [
      {
        type: "p",
        text: "Grande, aquí, tiene una definición comprobable. De todas las pinturas de la galería, solo cuatro fichas publican medida. Esas cuatro son las que están en esta página. El resto dice óleo sobre tela y nada más. Esas otras telas quedan fuera hasta que la galería publique su número.",
      },
      {
        type: "p",
        text: `Abre cada una: ${link("/pinturas/bosque-troncos-luz", "Bosque con luz entre troncos")}, ${link("/pinturas/grupo-de-figuras", "Grupo de figuras")}, ${link("/pinturas/elefante", "Elefante")} y ${link("/pinturas/retrato-de-mujer", "Retrato de mujer")}. Cómo mirar el muro antes de elegir está en ${link("/guias/elegir-cuadro-para-el-living", "la guía del living")}.`,
      },
      {
        type: "h2",
        text: "Las cuatro medidas, como figuran",
      },
      {
        type: "ul",
        items: [
          "Bosque de troncos: 158x122, óleo sobre tela. Troncos verticales, luz entre el follaje, suelo con vegetación. Es la ficha con los números más altos.",
          "Grupo de figuras: 110x110, óleo sobre tela. Cuadrado. Personas de pie, rostros simplificados, color en la ropa.",
          "Elefante: 90x120, óleo sobre tela. Vertical, de frente, naranjos y azules sobre gris. Entra por el 120.",
          "Retrato: 100x130, óleo sobre tela. Vertical, rostro en azules, naranjos y violetas, fondo cálido.",
        ],
      },
      {
        type: "p",
        text: "Esas son las medidas publicadas en la galería de pinturas. Los números se citan tal como están escritos en cada ficha. Si una obra nueva entra con medida, la galería es la que tiene que mostrarla primero.",
      },
      {
        type: "h2",
        text: "Qué muro pide cada una",
      },
      {
        type: "p",
        text: `Un 158x122 casi siempre es living, hall o un muro de oficina despejado, no una franja sobre un respaldar. El 110x110 es el más versátil de los cuatro: living u oficina. El 90x120 y el 100x130 son verticales y piden altura libre. El enmarcado agranda el conjunto. Si vas a pedir marco, dilo, porque el plazo cambia. Sin enmarcado: 48 horas en el Biobío y de 3 a 5 días hábiles a otras regiones. Con enmarcado: 5 a 7 días hábiles en el Biobío, 10 a otras regiones y 40 días a América Latina, Estados Unidos y Europa. El texto completo está en ${link("/tiempos-de-entrega", "tiempos de entrega")} y advierte que pueden variar.`,
      },
      {
        type: "p",
        text: `El bosque está además en ${link("/cuadros/paisajes-bosques-biobio", "paisajes y bosques")} y en ${link("/cuadros/para-living", "living")}. Las figuras están en living y en ${link("/cuadros/para-oficina", "oficina")}. El elefante está en el living y entre las ideas para ${link("/cuadros/regalar-pintura-original", "regalar")}, aunque un 90x120 ya es un regalo de muro, no de mesa. El retrato está en living y en ${link("/cuadros/para-dormitorio", "dormitorio")}, con la advertencia de la altura. Elegir por tema y volver aquí a mirar el número evita una tela que no cabe.`,
      },
      {
        type: "h2",
        text: "Si necesitas otra medida",
      },
      {
        type: "p",
        text: `Cuando el muro pide un número distinto, o cuando el bosque de 158x122 ya no está, el encargo cubre medios y grandes formatos. Escribes la medida aproximada, el tema —fachada, bosque, paisaje o figura— y el plazo que tienes en mente. Marcela confirma viabilidad, plazos y valor. Así está descrito en ${link("/encargos-pintura", "encargos")}. La técnica de estas cuatro fichas, y del resto de la galería, es ${link("/oleo-sobre-tela-chile", "óleo sobre tela")}.`,
      },
      {
        type: "p",
        text: `Para una de estas cuatro, el mensaje puede ser directo: el nombre de la obra, la medida tal como está en la ficha y el ancho del muro. WhatsApp +56 9 5618 9912 o contacto@marcelapedrosa.com. Ella confirma si sigue disponible. La galería entera, incluidas las telas sin medida, está en ${link("/pinturas", "pinturas")}. El índice de este grupo está en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
  {
    slug: "regalar-pintura-original",
    path: "/cuadros/regalar-pintura-original",
    navLabel: "Regalar una pintura",
    title: "Regalar una pintura original | Marcela Pedrosa",
    description:
      "Regala una pintura original al óleo de Marcela Pedrosa. Obras únicas en Concepción: escribes por WhatsApp o correo y ella confirma.",
    h1: "Regalar una pintura original",
    ogKey: "c15",
    ogAlt: "Gato al óleo de Marcela Pedrosa, una pintura original para regalar",
    whatsappText:
      "Hola Marcela, quiero regalar una pintura original. Te cuento la ocasión y la obra que vi en el sitio.",
    ctaTitle: "Escribe que es un regalo",
    ctaBody:
      "En la primera línea di que es un regalo, nombra la obra y, si hay fecha, dilo. Marcela confirma disponibilidad y valor.",
    consultaIntro:
      "En la primera línea di que es un regalo, nombra la ficha y, si hay fecha, dilo.",
    gridHeading: "Óleos fáciles de nombrar",
    workIds: ["c15", "c3", "c9", "c5", "c6", "c11", "c4", "c10"],
    blocks: [
      {
        type: "p",
        text: "Regalar una pintura original de Marcela Pedrosa es escribirle. Ella vende a pedido desde Concepción, por WhatsApp o por correo. La obra es un óleo único. Si sigue disponible, ella lo confirma. El valor también lo confirma ella: esta página no publica precios.",
      },
      {
        type: "p",
        text: `Fichas fáciles de nombrar: ${link("/pinturas/gato-recostado", "Gato recostado")}, ${link("/pinturas/elefante", "Elefante")} (90x120), ${link("/pinturas/dos-caballos", "Dos caballos")}, ${link("/pinturas/bodegon-calabazas", "Bodegón de calabazas")}, ${link("/pinturas/retrato-con-mano", "Retrato con mano al mentón")}, ${link("/pinturas/manos-superpuestas", "Manos superpuestas")}, ${link("/pinturas/retrato-de-mujer", "Retrato de mujer")} (100x130) y ${link("/pinturas/retrato-con-lentes", "Retrato con lentes")}.`,
      },
      {
        type: "h2",
        text: "Obras que se explican en una frase",
      },
      {
        type: "p",
        text: `Si el regalo tiene que entenderse sin una charla de estilo, mira primero estas telas. El gato acostado sobre un textil de motivos. El elefante de frente, en naranjos y azules, con ficha 90x120, óleo sobre tela. Los dos caballos, uno quieto en primer plano y otro en movimiento. El bodegón de zapallos y calabazas sobre una mesa: es la naturaleza muerta de la galería, y si el destino es un comedor está también en ${link("/cuadros/para-comedor", "cuadros para el comedor")}. El rostro cercano, con una mano junto a la boca. El cuadro de manos superpuestas. El retrato de mujer, 100x130, óleo sobre tela. Y el retrato con lentes redondos, sin un nombre publicado en la ficha.`,
      },
      {
        type: "p",
        text: `Esas obras están en la galería y el motivo se reconoce al verlas. No son un ranking. Son las que una persona puede describir por teléfono. El elefante y el retrato traen medida; el resto de esta lista, no. Un 90x120 o un 100x130 es un regalo para un muro, y conviene saber si quien recibe tiene ese paño. Esas dos medidas también están explicadas en ${link("/cuadros/grandes-al-oleo", "cuadros grandes al óleo")}. Un óleo sin medida publicada exige preguntar el número antes de prometerlo.`,
      },
      {
        type: "p",
        text: `Si la persona viene del Biobío o le importan los árboles, el bosque de troncos —158x122— es un regalo de presencia. Está en ${link("/cuadros/paisajes-bosques-biobio", "bosques")}. Si le importa la ciudad, el par de fachadas y la ciudad con cerros están en ${link("/cuadros/fachadas-arquitectura", "fachadas")}. También se pueden regalar; simplemente piden más muro y más explicación.`,
      },
      {
        type: "h2",
        text: "Fecha, enmarcado y envío",
      },
      {
        type: "p",
        text: `Escribes al +56 9 5618 9912 o a contacto@marcelapedrosa.com. En la primera línea dices que es un regalo. Nombras la obra. Si hay fecha —un cumpleaños, una casa nueva, fin de año— la dices. Sin enmarcado, el sitio indica 48 horas en la Región del Biobío y de 3 a 5 días hábiles a otras regiones. Con enmarcado, 5 a 7 días hábiles en el Biobío, 10 días hábiles a otras regiones, y 40 días a América Latina, Estados Unidos y Europa. ${link("/tiempos-de-entrega", "Tiempos de entrega")} advierte que pueden variar por el marco, la distancia y el transporte. Si la fecha es cerrada, pregunta antes de comprometerte con quien recibe.`,
      },
      {
        type: "p",
        text: `El enmarcado es la palabra que usa esa página de plazos. Si quieres marco, pídelo así. Si la obra tiene que viajar, di la ciudad. Marcela está en Concepción. El envío se coordina en la misma conversación en que se confirma la obra, igual que al ${link("/comprar-pintura-concepcion", "comprar una pintura")}.`,
      },
      {
        type: "h2",
        text: "Si la galería no tiene el regalo justo",
      },
      {
        type: "p",
        text: `El ${link("/encargos-pintura", "encargo")} sirve cuando quieres un tema —un bosque, una fachada, una figura— en una medida que quepa en la casa de la otra persona. Escribes la idea, la medida aproximada y la fecha. Ella confirma si puede hacerlo, en qué plazo y a qué valor. Hasta esa confirmación, no hay precio ni fecha prometida.`,
      },
      {
        type: "p",
        text: `La galería completa está en ${link("/pinturas", "pinturas")}. Si el regalo es para una casa y todavía dudas entre piezas, ${link("/cuadros/para-living", "living")}, ${link("/cuadros/para-dormitorio", "dormitorio")} y ${link("/cuadros/para-oficina", "oficina")} leen las obras por el muro. Partir por el muro de quien recibe evita un óleo que no cabe. El índice de todo el grupo está en ${link("/cuadros", "cuadros")}.`,
      },
    ],
  },
];

export function getCuadroPage(slug: string) {
  const page = CUADRO_PAGES.find((item) => item.slug === slug);
  if (!page) {
    throw new Error(`Página de cuadros no encontrada: ${slug}`);
  }
  return page;
}
