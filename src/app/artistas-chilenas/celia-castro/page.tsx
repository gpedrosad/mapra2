import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Celia Castro, pintora chilena | Pedrosa";
const DESCRIPTION =
  "Celia Castro (1860-1930), pintora de Quillota. Primera mujer pensionada del arte chileno para estudiar en París.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "celia-castro",
});

export default function CeliaCastroPage() {
  return (
    <ProfilePage
      slug="celia-castro"
      h1="Celia Castro"
      kicker="Pintora de Quillota, una de las primeras profesionales del país. Nació en 1860 y murió en Viña del Mar el 11 de junio de 1930."
      description={DESCRIPTION}
      person={{
        name: "Celia Castro",
        jobTitle: "Pintora",
        nationality: "Chilena",
        birthDate: "1860",
        deathDate: "1930-06-11",
        birthPlace: "Quillota, Chile",
        description:
          "Celia Castro, pintora chilena de Quillota, alumna de Pedro Lira y primera mujer pensionada por el Estado para estudiar arte en Europa.",
        knowsAbout: ["Pintura", "Retrato", "Naturaleza muerta", "Paisaje"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40364.html"],
      }}
    >
      <p>
        Celia Castro nació en 1860 en Quillota y murió el 11 de junio de 1930
        en Viña del Mar. El Museo Nacional de Bellas Artes la presenta como una
        de las primeras pintoras profesionales de Chile y como la primera mujer
        pensionada en la historia del arte nacional: a principios de 1901 el
        Estado le dio una beca para estudiar en Europa. Junto a las hermanas{" "}
        <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
          Magdalena Mira
        </Link>{" "}
        y{" "}
        <Link href="/artistas-chilenas/aurora-mira" className="text-brand underline">
          Aurora Mira
        </Link>
        , forma el grupo de pioneras que la prensa de los salones ya miraba con
        atención a fines del siglo XIX.
      </p>
      <p>
        Los primeros estudios los hizo en Quillota, con Juan Francisco González.
        En Santiago entró a la Academia de Pintura. Estudió con el pintor alemán
        Pedro Ohlsen y llegó a ser una de las alumnas más destacadas de Pedro
        Lira. Con Lira viajó a Francia en 1889 para la Exposición Universal de
        París, donde obtuvo tercera medalla. Ese premio está en la lista oficial
        de distinciones, al lado de otros más tempranos: en 1884, medalla de
        segunda clase en Santiago y medalla de primera clase en Valparaíso; en
        1887, primera medalla de dibujo y primera medalla de pintura; en 1888,
        tercera medalla en la Exposición General, diploma especial de honor
        acordado por los artistas y premio aplauso del jurado.
      </p>
      <p>
        La beca de 1901 la llevó de nuevo a Europa. Estudió en el taller de
        Jean-Paul Laurens, en la Académie Julian de París. Expuso en salas
        parisinas, entre ellas el Salón de la Société des Artistes Français en
        varios años de la primera década del siglo XX y de los años veinte, y
        participó en concursos de la Académie Julian. Volvió de manera
        definitiva a Chile en 1927 y se instaló en Valparaíso, donde abrió un
        taller. Entre sus alumnos el museo nombra a René Tornero, Jim Mendoza,
        Chela Lira y Roko Matjasic. La pensionada que se fue a aprender volvió
        como maestra.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Qué pintaba</h2>
      <p>
        El catálogo resume la obra en tres géneros: retrato, paisaje y
        naturaleza muerta, con un acento especial en este último. En 1896 recibió
        el premio de género del Certamen Edwards y el premio del Certamen
        Maturana, ambos en el Salón Oficial. Participó en salones oficiales de
        Santiago de forma casi continua entre 1884 y 1897. Una tela que el museo
        sigue mostrando es Vieja, de 1890, incluida en exposiciones de la
        colección como El bien común.
      </p>
      <p>
        Hay obra en el Museo Nacional de Bellas Artes, el Museo Municipal de
        Valparaíso, el Museo O’Higginiano y de Bellas Artes de Talca, la
        Pinacoteca de la Universidad de Concepción y la Pinacoteca del Banco
        Central. La presencia en Concepción permite verla desde el Biobío sin
        salir del circuito de pinacotecas universitarias. En 1994, tesoros de
        esa pinacoteca se mostraron en Santiago, y el nombre de Castro figura en
        el mapa de esas colecciones.
      </p>
      <p>
        Después de su muerte, la obra siguió circulando en panoramas de pintura
        chilena: maestros de la naturaleza muerta en 1978, pintores del mar en
        1974, la muestra Desacatos de prácticas artísticas femeninas entre 1835
        y 1938, organizada por el Museo Nacional de Bellas Artes en 2017, y más
        recientemente historias de la colección del mismo museo. El recorrido
        confirma lo que la beca ya decía en 1901: Castro fue tratada como
        profesional en un sistema que apenas empezaba a abrirles la puerta a
        las mujeres.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Cómo leerla hoy</h2>
      <p>
        Conviene separar dos hechos que a veces se juntan. Castro es pionera y
        es pensionada. Lo primero la pone al lado de las Mira en los salones de
        la década de 1880. Lo segundo es específico: el Estado financió su
        estudio en el extranjero, y el museo la registra como la primera mujer
        en recibir esa pensión. El viaje de 1889 con Lira es anterior y tiene
        otro carácter, el de alumna destacada en una exposición universal.
      </p>
      <p>
        Su lugar en la historia de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        es el del inicio profesional. Las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        que vinieron después, de{" "}
        <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
          Henriette Petit
        </Link>{" "}
        a{" "}
        <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
          Carmen Aldunate
        </Link>
        , trabajaron en un campo donde ya había precedentes de estudio, premio
        y viaje. La pintura que se hace ahora en Concepción sigue siendo óleo
        sobre tela, el mismo soporte de aquellas naturalezas muertas. Las obras
        de Marcela Pedrosa, impresionismo figurativo de fachadas y bosques del
        Biobío, están en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        .
      </p>
    </ProfilePage>
  );
}
