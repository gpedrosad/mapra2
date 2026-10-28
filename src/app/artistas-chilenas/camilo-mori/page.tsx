import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Camilo Mori, pintor chileno (Premio Nacional 1950)";
const DESCRIPTION =
  "Camilo Mori (1896-1973), pintor de Valparaíso. Grupo Montparnasse y Premio Nacional de Arte en pintura, 1950. Perfil, no catálogo.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "camilo-mori",
});

export default function CamiloMoriPage() {
  return (
    <ProfilePage
      slug="camilo-mori"
      modified="2026-10-28"
      h1="Camilo Mori"
      kicker="Pintor, dibujante y cartelista. Nació en Valparaíso el 24 de septiembre de 1896, integró el Grupo Montparnasse y recibió el Premio Nacional de Arte en 1950."
      description={DESCRIPTION}
      person={{
        name: "Camilo Mori",
        jobTitle: "Pintor",
        nationality: "Chileno",
        birthDate: "1896-09-24",
        deathDate: "1973-12-07",
        birthPlace: "Valparaíso, Chile",
        description:
          "Camilo Mori Serrano, pintor chileno de Valparaíso, fundador del Grupo Montparnasse y Premio Nacional de Arte, mención pintura, en 1950.",
        knowsAbout: ["Pintura", "Cartel", "Grupo Montparnasse", "Retrato", "Paisaje"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-39906.html"],
      }}
    >
      <p>
        Camilo Mori Serrano nació en Valparaíso el 24 de septiembre de 1896 y
        murió el 7 de diciembre de 1973. Es uno de los pintores chilenos más
        nombrados del siglo XX, y su nombre aparece en búsquedas junto al de
        las pintoras porque compartió generación, escuela y viaje con{" "}
        <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
          Henriette Petit
        </Link>
        . El Museo Nacional de Bellas Artes resume su obra en una palabra útil:
        eclecticismo. En sesenta años pasó por el retrato, la naturaleza muerta,
        el paisaje, el cartel y, tarde, la abstracción.
      </p>
      <p>
        En 1914 entró a la Escuela de Bellas Artes de Santiago. Fue alumno de
        Juan Francisco González, Alberto Valenzuela Llanos y el pintor español
        Fernando Álvarez de Sotomayor. En 1916 obtuvo tercera medalla de pintura
        en el Salón Oficial y en 1918 la primera medalla del Salón de Primavera.
        Esos premios tempranos lo sitúan todavía dentro del sistema de salones,
        antes del quiebre moderno.
      </p>
      <p>
        En 1920 viajó por primera vez a Europa y se estableció en París, en
        talleres y academias libres. Allí conoció la pintura moderna y, en
        particular, la de Paul Cézanne, que el museo señala como una de sus
        mayores influencias. En esa estadía se vinculó con Luis Vargas Rosas,
        Henriette Petit, Julio Ortiz de Zárate y Juan Emar. Con ellos volvió a
        Chile en 1923 y participó en el Grupo Montparnasse, el colectivo que
        quiso renovar la enseñanza y la pintura del país frente al realismo
        académico. En 1921 había sido sociétaire del Salon d’Automne de París.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Museo, Generación del 28 y la feria de Nueva York</h2>
      <p>
        En 1928 Carlos Isamitt lo nombró subdirector del Museo Nacional de
        Bellas Artes. Ejerció el cargo menos de un año. En 1929 volvió a París,
        esta vez comisionado por el gobierno como inspector de un grupo de
        veintiséis profesores y alumnos enviados a Europa después del cierre de
        la Escuela de Bellas Artes. Ese contingente quedó en la historia local
        como la Generación del 28. En ese segundo viaje Mori trató con la
        Escuela de París y con cubistas como Pablo Picasso y Georges Braque, y
        se perfeccionó en afiches y carteles.
      </p>
      <p>
        En 1937 viajó a Estados Unidos y vivió allí dos años. Se hizo cargo de
        la decoración del Pabellón de Chile en la Feria Mundial de Nueva York
        de 1939. Memoria Chilena, de la Biblioteca Nacional, agrega que entre
        1934 y 1937 difundió el salitre en Europa con carteles, que en 1937
        recibió el premio del Concurso Internacional de Afiche en Nueva York y
        que en 1942 obtuvo una mención honrosa en el concurso Un hemisferio
        unido del Museo de Arte Moderno de esa ciudad. El cartel, para Mori, fue
        oficio y no un apéndice de la pintura.
      </p>
      <p>
        Desde la década de 1920 sus imágenes se vuelven más sintéticas y
        bidimensionales, con un contraste de color tomado con libertad del
        fauvismo, el expresionismo y el cubismo. Después del viaje a Estados
        Unidos, el museo acerca una parte de la obra al surrealismo. En los
        años cincuenta deja el figurativismo que lo había marcado y explora la
        abstracción. En paralelo sigue el trabajo gráfico, con pincel seco y
        aerógrafo. Entre las pinturas que la crítica repite están retratos como
        el de Maruja Vargas y La viajera, y escenas como El carrusel, de 1926,
        que forma parte de la colección del Museo Nacional de Bellas Artes.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Clase, gremio y Premio Nacional</h2>
      <p>
        Desde 1933 fue profesor de dibujo y colorido en la Escuela de
        Arquitectura de la Universidad de Chile, labor que mantuvo más de
        treinta años. En 1940 fue uno de los fundadores de la Asociación de
        Pintores y Escultores de Chile, y en 1942 de la Unión de Cartelistas de
        Chile. Presidió las dos. Entre 1942 y 1945 fue consejero del Museo
        Municipal de Bellas Artes de Valparaíso, según la Academia Chilena de
        Bellas Artes.
      </p>
      <p>
        El reconocimiento mayor llegó en 1950: el Premio Nacional de Arte,
        mención pintura. El mismo año la Municipalidad de Valparaíso le entregó
        medalla de oro y diploma. Antes había sumado, entre otros, la primera
        medalla de pintura del Salón Oficial de 1928, el premio de honor
        Certamen Edwards de ese año y de 1949, y el premio de honor del LIX
        Salón Oficial en 1942. Memoria Chilena recuerda que el premio de 1950
        se discutió en público, con candidatos ventilados en la revista Pro
        Arte. El fallo quedó a su nombre.
      </p>
      <p>
        Hay obra en el Museo Nacional de Bellas Artes, el Museo de Arte
        Contemporáneo, la Biblioteca Nacional, el Palacio Baburizza de
        Valparaíso, la Pinacoteca de la Universidad de Concepción y el Museo de
        la Solidaridad Salvador Allende, entre otras colecciones. Expuso en
        vida en Santiago, Valparaíso, Concepción y Antofagasta. En 1962 la
        Universidad de Chile le hizo una retrospectiva de 1912 a 1962. En 1974,
        al año siguiente de su muerte, el Museo Nacional de Bellas Artes mostró
        Camilo Mori: su vida y su obra.
      </p>
      <p>
        Murió el 7 de diciembre de 1973. Quien siga el hilo de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        puede pasar de Mori a Petit, su compañera de Montparnasse, y de ahí al
        conjunto de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        .         La pintura que se hace ahora en el Biobío, el óleo de Marcela Pedrosa,
        está en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        .
      </p>
      <p>
        Este perfil responde a la búsqueda por su nombre y no vende su pintura.
        El índice está en{" "}
        <Link href="/artistas-chilenas" className="text-brand underline">
          artistas chilenas
        </Link>
        . La{" "}
        <Link
          href="/pinturas/ciudad-casas-de-colores"
          className="text-brand underline"
        >
          Ciudad de casas de colores
        </Link>
        , en{" "}
        <Link href="/pintura-de-ciudad" className="text-brand underline">
          pintura de ciudad
        </Link>
        , y el{" "}
        <Link href="/pinturas/retrato-de-mujer" className="text-brand underline">
          Retrato de mujer
        </Link>{" "}
        (100x130, óleo sobre tela) son de Marcela Pedrosa, en Concepción, no de
        Mori. El retrato entra en los{" "}
        <Link href="/retratos-al-oleo" className="text-brand underline">
          retratos al óleo
        </Link>
        .
      </p>
    </ProfilePage>
  );
}
