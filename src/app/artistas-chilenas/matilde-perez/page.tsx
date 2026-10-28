import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Matilde Pérez, arte cinético (1916-2014)";
const DESCRIPTION =
  "Matilde Pérez (1916-2014), del óleo figurativo al arte cinético. Su obra no se vende en este sitio.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "matilde-perez",
});

export default function MatildePerezPage() {
  return (
    <ProfilePage
      slug="matilde-perez"
      modified="2026-10-28"
      h1="Matilde Pérez"
      kicker="Pintora, escultora y artista visual de Santiago. Nació el 7 de diciembre de 1916 y murió en la misma ciudad el 2 de octubre de 2014."
      description={DESCRIPTION}
      person={{
        name: "Matilde Pérez",
        jobTitle: "Pintora y artista cinética",
        nationality: "Chilena",
        birthDate: "1916-12-07",
        deathDate: "2014-10-02",
        birthPlace: "Santiago, Chile",
        description:
          "Matilde Pérez Cerda, pintora y artista cinética chilena, investigadora del movimiento y docente de la Universidad de Chile.",
        knowsAbout: ["Pintura", "Arte cinético", "Mural", "Escultura"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40007.html"],
      }}
    >
      <p>
        Matilde Pérez Cerda nació en Santiago el 7 de diciembre de 1916 y murió
        en la misma ciudad el 2 de octubre de 2014. Fue pintora, escultora y
        artista visual, y una de las personas que llevaron el arte cinético a
        la escena chilena. Estuvo casada con el artista y profesor de la
        Universidad de Chile Gustavo Carrasco. Memoria Chilena, de la Biblioteca
        Nacional, recuerda que partió como pintora figurativa, en la órbita de
        la generación del cuarenta, y que después depuró la forma hasta la
        abstracción geométrica y el movimiento.
      </p>
      <p>
        La formación está fechada en el catálogo del Museo Nacional de Bellas
        Artes. En 1938 tomó clases particulares con Pedro Reszka. En 1939
        ingresó a la Escuela de Bellas Artes, alumna de Pablo Burchard y Jorge
        Caballero. En 1944 estudió pintura mural con Laureano Guevara y fue su
        ayudante en murales de la Ciudad del Niño, en La Cisterna. Memoria
        Chilena nombra también, entre sus maestros de academia, a Gustavo
        Carrasco y Augusto Eguiluz, y sitúa el paso por el Grupo de los Cinco y
        luego por el Grupo Rectángulo, donde el dibujo se redujo a forma y
        color.
      </p>
      <p>
        Enseñó casi en paralelo a pintar. En 1948 fue profesora de dibujo en el
        colegio Dunalastair. En 1950 organizó, con otros profesores, una
        academia de artes plásticas en Providencia. En 1951 fue nombrada
        ayudante de la cátedra de dibujo y pintura en la Escuela de Bellas
        Artes. En 1955 dictó un curso de acuarela en las Escuelas de Temporada
        de la Universidad de Chile y fue profesora auxiliar de dibujo y
        pintura. En 1957 pasó a profesora interina de jornada completa. Esa
        escalera docente explica el lugar institucional que tuvo antes de los
        viajes.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">París y el Centro de Investigaciones Cinéticas</h2>
      <p>
        En 1960, ya con premios y con cátedra, el gobierno francés la becó para
        estudiar en París. Entre 1970 y 1972 la Universidad de Chile la comisionó
        para seguir allí la investigación sobre arte cinético. En 1972 se
        trasladó como profesora desde Bellas Artes a la Escuela de Diseño, en la
        Facultad de Arquitectura. En 1974 fue nombrada profesora investigadora
        de jornada completa en la Escuela de Arquitectura. En 1975, con otros
        profesores, formó el Centro de Investigaciones Cinéticas en la Escuela
        de Diseño. En 1984 dio un curso de pintura en el Instituto Cultural de
        Providencia.
      </p>
      <p>
        La obra que sale de ese estudio ya no cabe solo en el cuadro. Memoria
        Chilena describe ambientes perceptivos en los que el espectador tiene
        que moverse para leer la pieza, y un paso por el mural, la escultura y
        la instalación cuando el problema lo pedía. En 1999 la retrospectiva El
        ojo móvil y su labor de difusión le valieron el premio Los mejores
        entre los mejores, del Círculo de Críticos de Arte. En 2004 recibió el
        Premio Altazor. En 2006, el Premio Marco Bontá de la Academia Chilena de
        Bellas Artes y un premio de artes visuales del Ministerio de Cultura. En
        2007 fue seleccionada para Lo(s) cinético(s) en el Museo Nacional Centro
        de Arte Reina Sofía, en Madrid.
      </p>
      <p>
        Hay más distinciones en la lista larga del museo: medallas en Lyon en
        1979, un gran premio internacional de diseño en Montreux en 1981, la
        condecoración Amanda Labarca en 1997, premios municipales de arte en
        1997 y 1999. En 1958 tuvo mención honrosa en el Salón de Concepción, un
        dato local que la vincula temprano con la ciudad. En 2003 ganó el
        concurso de arte mural Universidad y sociedad, para un mural del
        edificio San Agustín de la Escuela de Ingeniería de la Universidad
        Católica.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Una pintora que salió del cuadro</h2>
      <p>
        Pérez importa en la historia de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        porque muestra hasta dónde podía llegar alguien formado en el óleo de
        academia. El retrato y la naturaleza muerta fueron el comienzo. El
        movimiento y el color, el desarrollo. El{" "}
        <Link href="/pinturas/retrato-de-mujer" className="text-brand underline">
          Retrato de mujer
        </Link>{" "}
        y el{" "}
        <Link href="/pinturas/bodegon-calabazas" className="text-brand underline">
          Bodegón de calabazas
        </Link>{" "}
        son de Marcela Pedrosa, no de Pérez. Están en{" "}
        <Link href="/retratos-al-oleo" className="text-brand underline">
          retratos al óleo
        </Link>{" "}
        y en{" "}
        <Link href="/bodegon-oleo" className="text-brand underline">
          bodegón al óleo
        </Link>
        . En el mapa de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        queda al lado de{" "}
        <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
          Lily Garafulic
        </Link>
        , que trabajó el volumen desde la escultura, y de{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>
        , que se quedó en el gesto y la figura. Las tres pasaron por la
        Universidad de Chile. Las tres enseñaron.
      </p>
      <p>
        La pintura de caballete sigue teniendo lugar propio. En Concepción,
        Marcela Pedrosa pinta óleo sobre tela e impresionismo figurativo, con
        fachadas y bosques del Biobío, y complementa esa obra con cerámica
        artística en gres. Las piezas disponibles están en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        . El perfil de Matilde Pérez cuenta el otro camino: el de quien, después
        de aprender a representar, decidió que la obra tenía que moverse.
      </p>
    </ProfilePage>
  );
}
