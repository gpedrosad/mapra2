import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Gracia Barrios, pintora chilena | Pedrosa";
const DESCRIPTION =
  "Gracia Barrios (1927-2020), pintora chilena del Grupo Signo. Premio Nacional de Artes Plásticas en 2011.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "gracia-barrios",
});

export default function GraciaBarriosPage() {
  return (
    <ProfilePage
      slug="gracia-barrios"
      h1="Gracia Barrios"
      kicker="Pintora de Santiago. Nació el 27 de junio de 1927, integró el Grupo Signo y recibió el Premio Nacional de Artes Plásticas en 2011. Murió el 28 de mayo de 2020."
      description={DESCRIPTION}
      person={{
        name: "Gracia Barrios",
        jobTitle: "Pintora",
        nationality: "Chilena",
        birthDate: "1927-06-27",
        deathDate: "2020-05-28",
        birthPlace: "Santiago, Chile",
        description:
          "Gracia Barrios Rivadeneira, pintora chilena, integrante del Grupo Signo y Premio Nacional de Artes Plásticas 2011.",
        knowsAbout: ["Pintura", "Óleo", "Acrílico", "Grupo Signo"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40247.html"],
      }}
    >
      <p>
        Gracia Barrios Rivadeneira nació en Santiago el 27 de junio de 1927 y
        murió en la misma ciudad el 28 de mayo de 2020. Es hija del escritor
        Eduardo Barrios, Premio Nacional de Literatura. Desde muy temprano
        mostró interés por el arte: tomó clases con Carlos Isamitt y, mientras
        hacía la enseñanza secundaria, siguió cursos vespertinos en la Escuela
        de Bellas Artes de la Universidad de Chile. Entre 1944 y 1949 continuó
        allí, alumna de Augusto Eguiluz, Carlos Pedraza y Pablo Burchard. El
        museo anota que ella misma reconoció la influencia de Burchard en su
        pintura.
      </p>
      <p>
        En los años cuarenta formó parte del Grupo de Estudiantes Plásticos de
        la Universidad de Chile, con{" "}
        <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
          Roser Bru
        </Link>
        , José Balmes, Guillermo Núñez y Gustavo Poblete, entre otros. El grupo
        pedía actualizar la enseñanza y armó instancias propias para mostrar
        obra. A comienzos de la década de 1960, con su marido, el pintor José
        Balmes, y con Alberto Pérez y Eduardo Martínez Bonati, formó el Grupo
        Signo. Signo propuso en Chile una pintura abstracta, expresiva y
        gestual, cercana al informalismo europeo, y sostuvo que el arte tenía
        un rol político en la sociedad de su tiempo.
      </p>
      <p>
        Barrios participó en los cambios culturales de fines de los sesenta, en
        la reforma universitaria y en el marco de la Unidad Popular. Después
        del golpe de Estado de 1973 partió al exilio con Balmes y con la hija
        de ambos, la pintora Concepción Balmes, y se radicó en Francia. Volvió
        a Chile a mediados de los años ochenta. Esa secuencia, de la escuela al
        exilio y al regreso, ordena también los cambios de la tela.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">De la figura al gesto, y de vuelta a la figura</h2>
      <p>
        El tema que el museo le atribuye de manera constante es la condición
        humana: los sueños y el sufrimiento de hombres y mujeres, y los
        problemas políticos y sociales de su entorno. Las primeras obras fueron
        dibujos y pinturas figurativas. En los sesenta, alineada con Signo, la
        pintura se acercó al informalismo y a la abstracción. Predominaron el
        gesto y la experimentación con la materia, en tonalidades oscuras de
        tierras.
      </p>
      <p>
        A inicios de los setenta retomó un camino más figurativo, atado a la
        contingencia. De ese periodo son obras de gran formato con multitudes
        anónimas, el pueblo chileno y el latinoamericano, pintados de manera
        sintética. En el exilio las imágenes denunciaron la represión. De
        regreso, los lienzos siguieron con la figura humana e incorporaron
        signos gráficos hechos con carboncillo y pastel. Aunque experimentó con
        distintas técnicas, su medio predilecto fue la pintura, en general óleo
        y acrílico.
      </p>
      <p>
        La obra se mostró en ciudades de Chile y en España, Francia, México,
        Argentina, Colombia, Japón y Estados Unidos. Los premios empiezan en
        los salones: mención honrosa en el LX Salón Oficial de 1948; primeros
        premios de dibujo y de dibujo y grabado en los salones de 1957 y 1958;
        primer premio de pintura del LXXVI Salón Oficial en 1966; primer premio
        CRAV de pintura en 1965. Fuera del país, segundo premio en la Bienal
        Americana de Quito en 1968 y segundo premio de pintura del Salón Esso de
        Artistas Jóvenes, en Washington, el mismo 1965. En 1996 recibió el
        Premio Municipal de Arte de Santiago. En 2000, el Premio Altazor en la
        categoría pintura. En 2011, el Premio Nacional de Artes Plásticas.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">La clase y las colecciones</h2>
      <p>
        Enseñó en paralelo a pintar. Empezó como ayudante del taller de dibujo
        de Carlos Pedraza en la Universidad de Chile, luego integró el cuerpo
        docente y ocupó cargos institucionales hasta 1973. En 1986 entró como
        profesora visitante a la Escuela de Arte de la Pontificia Universidad
        Católica, cargo que tuvo hasta 1993. En los años noventa fue profesora
        de dibujo en la Universidad Finis Terrae. La docencia larga explica
        parte de su peso en la escena: no solo expuso, también formó.
      </p>
      <p>
        Hay obra en el Museo de Arte Contemporáneo, el Museo de Arte Moderno de
        Chiloé, la Cámara del Senado, la Asociación Chilena de Seguridad, la
        colección IBM y el Museo a Cielo Abierto de Valparaíso, entre otros
        lugares. Hizo murales para el Hospital del Trabajador, con premios de
        realización en 1988 y 1994. El formato mural y el formato de lienzo
        grande conviven en la misma preocupación por la figura colectiva.
      </p>
      <p>
        Barrios es una de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        que el siglo XX dejó con premio nacional y con una obra legible en
        etapas. En el mapa de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        está al lado de Bru y de{" "}
        <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
          Matilde Pérez
        </Link>
        , cada una con un problema distinto: la memoria, el movimiento, el
        gesto. La pintura de Marcela Pedrosa, en Concepción, usa el óleo sobre
        tela para fachadas y bosques, con impresionismo figurativo. Esas{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>{" "}
        se pueden ver aparte, como trabajo de taller del Biobío, después de
        esta historia.
      </p>
    </ProfilePage>
  );
}
