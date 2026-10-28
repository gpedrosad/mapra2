import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Magdalena Mira, pintora chilena (1859-1930)";
const DESCRIPTION =
  "Magdalena Mira (1859-1930), pintora y escultora. Medalla de oro en 1884. Su obra no se vende en este sitio.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "magdalena-mira",
});

export default function MagdalenaMiraPage() {
  return (
    <ProfilePage
      slug="magdalena-mira"
      modified="2026-10-28"
      h1="Magdalena Mira"
      kicker="Pintora y escultora de Santiago. Nació el 30 de mayo de 1859 y murió en la misma ciudad el 14 de octubre de 1930."
      description={DESCRIPTION}
      person={{
        name: "Magdalena Mira",
        jobTitle: "Pintora y escultora",
        nationality: "Chilena",
        birthDate: "1859-05-30",
        deathDate: "1930-10-14",
        birthPlace: "Santiago, Chile",
        description:
          "Magdalena Mira Mena, pintora y escultora chilena, hermana de Aurora Mira, premiada en los salones oficiales del siglo XIX.",
        knowsAbout: ["Pintura", "Retrato", "Escultura", "Marina"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40422.html"],
      }}
    >
      <p>
        Magdalena Mira Mena nació en Santiago el 30 de mayo de 1859 y murió en
        la misma ciudad el 14 de octubre de 1930. Con su hermana menor,{" "}
        <Link href="/artistas-chilenas/aurora-mira" className="text-brand underline">
          Aurora Mira
        </Link>
        , pertenece al primer grupo de mujeres de la sociedad chilena que
        expuso y recibió premios en los salones oficiales. El Museo Nacional de
        Bellas Artes las trata como pioneras, al lado de{" "}
        <Link href="/artistas-chilenas/celia-castro" className="text-brand underline">
          Celia Castro
        </Link>
        , a quien el mismo catálogo llama la primera pintora profesional del
        país.
      </p>
      <p>
        Pintó porque en su casa había un padre que tomaba el arte en serio.
        Gregorio Mira, nacido en 1825 y muerto en 1905, era pintor aficionado y
        había tomado clases en cursos de Raymond Monvoisin. Magdalena estudió
        dibujo desde la infancia. Más adelante fue alumna de Juan Francisco
        González. Las dos hermanas estudiaron con Juan Mochi, director de la
        Academia de Pintura. Magdalena, además, hizo escultura y estudió con
        José Miguel Blanco. Esa doble práctica, tela y volumen, la distingue de
        Aurora, más asociada a flores, frutas y bodegones.
      </p>
      <p>
        La primera vez que mostró pinturas en público fue en 1883, en el Salón
        Oficial de Bellas Artes que organizaron Pedro Lira y Ramón Subercaseaux
        en el Congreso Nacional. Al año siguiente recibió medalla de oro por el
        óleo La hermana de la caridad. En 1886 su pintura Agripina Metello
        apareció en la portada del número 59 de El Taller Ilustrado, el
        semanario de arte y literatura que circuló entre 1885 y 1888. El mismo
        1886 presentó dos retratos escultóricos que la prensa destacó. En 1891
        obtuvo medalla de honor en la Exposición Nacional Artística del Salón
        Oficial.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Retrato, marina y la generación del medio siglo</h2>
      <p>
        De su pintura, los retratos son lo más difundido. También hizo marinas,
        algunos paisajes y, temprano, pintura floral. El crítico Antonio Romera
        la incluyó, con su hermana, en la generación del medio siglo: artistas
        nacidos alrededor de 1850, atentos al naturalismo y a la exaltación del
        sentimiento, con la pintura francesa de la época como referencia. El
        nombre es de Romera, y el museo lo usa para situarlas. Sirve para no
        leer a las Mira como un caso aislado de salón, sino como parte de una
        camada.
      </p>
      <p>
        Hay obra en el Museo Nacional de Bellas Artes, en la Pinacoteca de la
        Universidad de Concepción y en la pinacoteca del Banco BBVA. La
        pinacoteca penquista vuelve a aparecer, como en el caso de Castro y de
        Aurora: Concepción guardó pintura del siglo XIX que Santiago después
        mostró en panoramas. En 1990, la exposición La mujer en la pintura
        chilena pasó por la Pinacoteca de Concepción. En 2007, Casas de Lo Matta
        reunió una retrospectiva de Magdalena y Aurora. En 2017 el Museo
        Nacional de Bellas Artes las incluyó en Desacatos, la muestra de
        prácticas artísticas femeninas entre 1835 y 1938.
      </p>
      <p>
        Los salones en los que participó, según el catálogo, van de 1883 a 1886,
        con otra presencia en 1895, además de la medalla de 1891. Más tarde su
        nombre vuelve en colectivas de 1910, en la Exposición Internacional de
        Bellas Artes, y en el cincuentenario del museo en 1930, el año de su
        muerte. En 1940 hubo pintura chilena en Buenos Aires que la incluyó. La
        obra, corta en el tiempo de los salones si se la compara con una carrera
        del siglo XX, quedó fijada en colecciones y en la bibliografía: desde
        el catálogo del museo de Luis Cousiño Talavera en 1922 hasta el libro de
        Ana Francisca Allamand, Magdalena y Aurora Mira: pioneras del arte
        femenino, de 2008.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Por qué sigue en el mapa</h2>
      <p>
        Magdalena Mira permite contar el siglo XIX con obras que tienen nombre.
        La hermana de la caridad no es una etiqueta genérica de retrato: es el
        óleo con el que ganó el oro en 1884. Agripina Metello es la tela que un
        semanario puso en su portada. Los dos retratos escultóricos de 1886
        muestran que el volumen también le fue reconocido en vida. Con esos
        tres datos se puede hablar de ella sin rellenar.
      </p>
      <p>
        En el recorrido de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        abre la puerta del salón. Las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        de después heredan ese precedente de premio público. Quien quiera ver
        pintura hecha hoy, en{" "}
        <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
          óleo sobre tela
        </Link>{" "}
        y desde un taller de Concepción, puede pasar a las{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>{" "}
        de Marcela Pedrosa, impresionismo figurativo del Biobío, después de
        haber leído de dónde viene la tradición de colgar un óleo chileno en un
        muro. El{" "}
        <Link href="/pinturas/retrato-de-mujer" className="text-brand underline">
          Retrato de mujer
        </Link>{" "}
        (100x130) es de Marcela, no de Mira, y entra en los{" "}
        <Link href="/retratos-al-oleo" className="text-brand underline">
          retratos al óleo
        </Link>
        .
      </p>
    </ProfilePage>
  );
}
