import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Roser Bru, pintora y grabadora (1923-2021)";
const DESCRIPTION =
  "Roser Bru (1923-2021), llegada en el Winnipeg. Premio Nacional 2015. Su obra no se vende en este sitio.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "roser-bru",
});

export default function RoserBruPage() {
  return (
    <ProfilePage
      slug="roser-bru"
      modified="2026-10-28"
      h1="Roser Bru"
      kicker="Pintora y grabadora nacida en Barcelona el 15 de febrero de 1923. Llegó a Chile en el Winnipeg, se nacionalizó chilena y murió en Santiago el 26 de mayo de 2021."
      description={DESCRIPTION}
      person={{
        name: "Roser Bru",
        jobTitle: "Pintora y grabadora",
        nationality: "Chilena",
        birthDate: "1923-02-15",
        deathDate: "2021-05-26",
        birthPlace: "Barcelona, España",
        description:
          "Roser Bru Llop, pintora y grabadora nacida en Barcelona, llegada a Chile en el Winnipeg y Premio Nacional de Artes Plásticas 2015.",
        knowsAbout: ["Pintura", "Grabado", "Dibujo", "Memoria"],
        sameAs: [
          "https://www.artistasvisualeschilenos.cl/658/w3-article-40136.html",
          "https://roserbru.cl/web/biografia/",
        ],
      }}
    >
      <p>
        Roser Bru Llop nació en Barcelona el 15 de febrero de 1923 y murió en
        Santiago el 26 de mayo de 2021. Es pintora y grabadora. Llegó a Chile
        siendo adolescente, a bordo del Winnipeg, y el sitio de su propia
        biografía la registra como nacionalizada chilena en 1959. En 2015
        recibió el Premio Nacional de Artes Plásticas. Desde el 8 de marzo de
        2024, una sala del ala sur del primer piso del Museo Nacional de Bellas
        Artes lleva su nombre, en el marco del centenario y del Día
        Internacional de la Mujer.
      </p>
      <p>
        El primer traslado fue temprano. Al año siguiente de nacer, la familia
        se fue a París, en un exilio ligado a la prohibición de la lengua
        catalana bajo Alfonso XIII. Cuatro años después volvieron a Barcelona,
        donde vivieron hasta el fin de la Guerra Civil y el comienzo de la
        dictadura de Franco, en 1939. Salieron de nuevo: primero a Francia y
        luego a Chile, en el Winnipeg. El mismo año de la llegada, Bru entró a
        la Escuela de Bellas Artes de Santiago. Hizo estudios libres de
        acuarela, dibujo y pintura, y fue discípula de Pablo Burchard e Israel
        Roa.
      </p>
      <p>
        En 1948 integró el Grupo de Estudiantes Plásticos, con José Balmes,{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>
        , Guillermo Núñez y Gustavo Poblete, entre otros. En 1957 entró al
        Taller 99, creado por Nemesio Antúnez, y ahí se especializó en grabado.
        Entre 1964 y 1968 enseñó dibujo y pintura en la Escuela de Arte de la
        Pontificia Universidad Católica. A fines de los años ochenta volvió a
        esa escuela como profesora invitada del taller de pintura.{" "}
        <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
          Carmen Aldunate
        </Link>{" "}
        la tuvo entre sus profesoras en la Universidad de Chile: el cruce está
        en la ficha de Aldunate.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Memoria, materia y historia</h2>
      <p>
        Pintura, dibujo y grabado recorren toda la obra. El museo describe una
        constante: imágenes que cruzan la biografía personal con la historia
        social y con la historia del arte. Los temas que repite son la muerte,
        la pérdida, la memoria y el vínculo entre pasado y presente. Al inicio
        exploró lo matérico, con el informalismo de Antoni Tàpies, a quien
        conoció en 1958 en Barcelona. Después del golpe de Estado del 11 de
        septiembre de 1973, la obra tomó un corte más crítico y volvió una y
        otra vez sobre conflictos sociales y hechos históricos duros.
      </p>
      <p>
        El reconocimiento fue largo y tardío en el premio mayor. En 1995 el rey
        Juan Carlos I de España la condecoró con la Encomienda de la Orden de
        Isabel la Católica. En 1999 recibió un Premio Altazor de artes
        visuales, y en 2000 el Altazor de pintura por Homenaje a Goya. En 2004,
        la medalla al Mérito Artístico y Cultural Pablo Neruda. En 2015, el
        Premio Nacional de Artes Plásticas y un reconocimiento entre 100
        mujeres líderes. En 2018, la Medalla de Oro al Mérito en las Bellas
        Artes, en España. Su sitio biográfico destaca además exposiciones en
        Barcelona, entre ellas una en el Palau de la Virreina en 1986 y otra en
        el Palau Moja en 2006.
      </p>
      <p>
        La ficha del museo insiste en que la trayectoria se jugó tanto en Chile
        como fuera. Esa doble pertenencia, catalana de nacimiento y chilena de
        nacionalidad y de premio, es el dato que ordena la lectura. Tratarla
        solo como visitante deja afuera el Taller 99, la cátedra en la Católica
        y el Premio Nacional. Tratarla solo como artista local deja afuera el
        Winnipeg y el diálogo con Tàpies.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Dónde situarla</h2>
      <p>
        Entre las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        del siglo XX, Bru ocupa el lugar de quien hizo de la memoria un método.
        En el conjunto de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        está al lado de{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>
        , con quien compartió el Grupo de Estudiantes
        Plásticos, y de{" "}
        <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
          Matilde Pérez
        </Link>
        , que en los mismos años llevó la pintura hacia el movimiento. Las tres
        enseñaron. Las tres tienen obra en museos. Las tres llegaron a ser
        nombres de referencia para quien estudia la segunda mitad del siglo.
      </p>
      <p>
        La pintura que sigue en regiones tiene otro pulso. En Concepción,
        Marcela Pedrosa trabaja{" "}
        <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
          óleo sobre tela
        </Link>{" "}
        e{" "}
        <Link href="/impresionismo-figurativo-chile" className="text-brand underline">
          impresionismo figurativo
        </Link>
        . Las{" "}
        <Link href="/figuras-al-oleo" className="text-brand underline">
          figuras al óleo
        </Link>{" "}
        de ese taller no son obra de Bru. Esa producción está
        en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        . El perfil de Bru queda en el siglo que va del Winnipeg al premio de
        2015, y en la sala del museo que desde 2024 lleva su nombre.
      </p>
    </ProfilePage>
  );
}
