import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Aurora Mira, pintora chilena (1863-1939)";
const DESCRIPTION =
  "Aurora Mira (1863-1939), retratos, flores y bodegones. Su obra no se vende aquí. El bodegón de Marcela es otra tela.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "aurora-mira",
});

export default function AuroraMiraPage() {
  return (
    <ProfilePage
      slug="aurora-mira"
      modified="2026-10-28"
      h1="Aurora Mira"
      kicker="Pintora de Santiago, hermana de Magdalena Mira. Nació en 1863 y murió en Santiago en diciembre de 1939."
      description={DESCRIPTION}
      person={{
        name: "Aurora Mira",
        jobTitle: "Pintora",
        nationality: "Chilena",
        birthDate: "1863",
        deathDate: "1939-12",
        birthPlace: "Santiago, Chile",
        description:
          "Aurora Mira Mena, pintora chilena de retrato, flores, bodegones y paisaje, premiada en los salones oficiales del siglo XIX.",
        knowsAbout: ["Pintura", "Retrato", "Bodegón", "Paisaje"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40421.html"],
      }}
    >
      <p>
        Aurora Mira Mena nació en Santiago en 1863 y murió en la misma ciudad en
        diciembre de 1939. Es la hermana menor de{" "}
        <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
          Magdalena Mira
        </Link>
        . Las dos se formaron en dibujo y pintura en una casa donde el padre,
        Gregorio Mira Iñiguez (1825-1905), pintaba como aficionado y había
        tomado clases con Raymond Monvoisin. Fueron alumnas de Juan Mochi, el
        tercer director de la Academia de Pintura. El museo las considera, con{" "}
        <Link href="/artistas-chilenas/celia-castro" className="text-brand underline">
          Celia Castro
        </Link>
        , parte de las mujeres que la prensa de la época ya destacaba en los
        certámenes oficiales.
      </p>
      <p>
        Aurora hizo retratos al óleo que el catálogo llama destacados, y aun
        así la recuerda sobre todo por flores, frutas, bodegones y paisajes. En
        esas telas predomina una representación naturalista y una paleta amplia
        e intensa. Antonio Romera la puso, junto a su hermana, en la generación
        del medio siglo: artistas nacidos alrededor de 1850, trabajados por el
        naturalismo y por el arte francés de su tiempo. El rótulo ayuda a leer
        el bodegón como género de escuela, no como asunto menor.
      </p>
      <p>
        Los premios están fechados. En 1884 recibió medalla de plata en el
        Salón Oficial. En 1886, medalla de primera clase. En 1889, premio de
        costumbres ex aequo en el Certamen Arturo M. Edwards. En 1895, premio de
        honor del mismo certamen. En 1897, primera medalla del Salón Oficial.
        El catálogo anota participaciones en 1884, 1885, 1886, 1889, 1895 y
        1897. Es una carrera de salón concentrada en poco más de una década, con
        un regreso puntual a fines de siglo.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Una trayectoria que se retiró del salón</h2>
      <p>
        El museo es directo sobre lo que vino después: al casarse, Aurora se
        dedicó a la vida familiar y siguió pintando solo para su círculo
        íntimo. La frase importa porque explica el silencio público sin
        convertirlo en olvido de la obra. Las telas de flores y frutas
        circularon igual en colecciones. Hay piezas en el Museo Nacional de
        Bellas Artes, en la Pinacoteca de la Universidad de Concepción y en la
        pinacoteca del Banco de Chile.
      </p>
      <p>
        Las colectivas posteriores la devolvieron a la sala. En 1953 hubo una
        retrospectiva de las hermanas Mira en la casa familiar del Llano
        Subercaseaux. En 1972, el Instituto Cultural de Las Condes mostró Las
        flores y las frutas en la pintura chilena. En 1976 dedicó una exposición
        a Magdalena y Aurora Mira. En 1990, La mujer en la pintura chilena pasó
        por la Pinacoteca de la Universidad de Concepción. En 1993, La fruta en
        el arte volvió sobre el género que la identifica. En 2007, Casas de Lo
        Matta reunió otra retrospectiva de las dos hermanas. En 2011, el Museo
        Nacional de Bellas Artes la incluyó en una mirada de su colección de
        centenario.
      </p>
      <p>
        Aurora y Magdalena son, en palabras del catálogo, de las primeras
        mujeres de la alta sociedad chilena en dedicarse a las bellas artes y en
        ser premiadas por la calidad de las obras. El matiz social es del
        propio museo: no todas las pioneras venían del mismo lugar. Castro hizo
        una carrera profesional larga, con pensión estatal y taller en
        Valparaíso. Aurora tuvo una presencia pública más breve y un regreso al
        círculo íntimo. Leerlas juntas, sin fundirlas, es más fiel al registro.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Del bodegón al óleo de ahora</h2>
      <p>
        El bodegón y la flor enseñan algo que la pintura chilena no ha soltado:
        el{" "}
        <Link href="/oleo-sobre-tela-chile" className="text-brand underline">
          óleo sobre tela
        </Link>{" "}
        como lugar donde se mira de cerca un motivo reconocible. Aurora lo hizo
        con frutas y paisajes de paleta intensa. El{" "}
        <Link href="/pinturas/bodegon-calabazas" className="text-brand underline">
          Bodegón de calabazas
        </Link>{" "}
        es de Marcela Pedrosa, no de Aurora, y está en{" "}
        <Link href="/bodegon-oleo" className="text-brand underline">
          bodegón al óleo
        </Link>
        .
        Un siglo y medio después, en Concepción, Marcela Pedrosa trabaja el
        mismo soporte con impresionismo figurativo: fachadas, bosques y la luz
        del sur, desde un taller del Biobío, con más de veinte años de
        práctica. Las obras están en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        .
      </p>
      <p>
        Para situar a Aurora en la línea completa conviene pasar por las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        y por las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        . De su hermana Magdalena se conserva, además, el dato de la escultura.
        De Aurora queda el género floral y el premio de honor de 1895, suficiente
        para nombrarla entre las pintoras del siglo XIX que sí tienen ficha,
        fecha y medalla.
      </p>
    </ProfilePage>
  );
}
