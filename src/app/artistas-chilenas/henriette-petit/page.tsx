import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Henriette Petit, pintora chilena | Pedrosa";
const DESCRIPTION =
  "Henriette Petit (1894-1983), pintora de Santiago y cofundadora del Grupo Montparnasse, formada entre Chile y París.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "henriette-petit",
});

export default function HenriettePetitPage() {
  return (
    <ProfilePage
      slug="henriette-petit"
      h1="Henriette Petit"
      kicker="Enriqueta Petit, pintora del Grupo Montparnasse. Nació en Santiago el 3 de marzo de 1894 y murió en la misma ciudad el 9 de diciembre de 1983."
      description={DESCRIPTION}
      person={{
        name: "Henriette Petit",
        jobTitle: "Pintora",
        nationality: "Chilena",
        birthDate: "1894-03-03",
        deathDate: "1983-12-09",
        birthPlace: "Santiago, Chile",
        description:
          "Ana Enriqueta Petit Marfán, conocida como Henriette Petit, pintora chilena cofundadora del Grupo Montparnasse.",
        knowsAbout: ["Pintura", "Retrato", "Desnudo", "Grupo Montparnasse"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-39944.html"],
      }}
    >
      <p>
        Henriette Petit es el nombre con que se conoce a Ana Enriqueta Petit
        Marfán, pintora nacida en Santiago el 3 de marzo de 1894 y muerta en la
        misma ciudad el 9 de diciembre de 1983. El Museo Nacional de Bellas
        Artes la sitúa entre quienes renovaron el arte chileno en la década de
        1920. Su época de producción más fértil, según esa ficha, va de 1920 a
        1926. Tuvo pocas exposiciones individuales. El mismo registro consigna
        una carrera sin distinciones oficiales, y aun así la trata como
        referente por la originalidad del lenguaje.
      </p>
      <p>
        Llegó a la pintura por el taller de Juan Francisco González. El
        encuentro lo propició Marta Villanueva, amiga de Petit y también
        artista. En 1914 entró a la Escuela de Bellas Artes, donde enseguida se
        notó su trabajo. Fue condiscípula de{" "}
        <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
          Camilo Mori
        </Link>{" "}
        y de Sara Malvar. En 1920 viajó a Europa durante un año, con sus
        hermanas. En París vio una muestra póstuma de Paul Cézanne y el arte de
        vanguardia del momento. El museo dice que ese encuentro la impresionó y
        marcó su pintura. En la capital francesa hizo amistad con el escultor
        Émile Antoine Bourdelle, discípulo de Auguste Rodin. Bourdelle hizo un
        retrato en bronce, La petite chilienne (1921). Una copia está en la
        colección del Museo Nacional de Bellas Artes.
      </p>
      <p>
        De vuelta en Chile participó en la formación del Grupo Montparnasse, en
        1923, con Luis Vargas Rosas, José Perotti y Julio Ortiz de Zárate,
        compañeros de la Escuela de Bellas Artes con quienes había seguido en
        contacto en Europa. El grupo expuso en Santiago ese mismo año. El nombre
        recuerda el barrio parisino donde vivieron y trabajaron. Petit fue una
        de las voces de esa propuesta, que desafiaba las convenciones todavía
        vigentes en la pintura chilena.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">París, el taller y el regreso</h2>
      <p>
        En 1926 volvió a Europa. Asistió a talleres de croquis, dibujo y
        pintura en la Académie de la Grande Chaumière, en París. Reencontró a
        Bourdelle y tomó clases con Fernand Léger y Amédée Ozenfant, entre
        otros. Compartió el ambiente de la ciudad con Juan Gris, Pablo Picasso
        y Alexander Calder. La mayor parte de su obra la hizo en Francia. En
        1927 se casó con el pintor Luis Vargas Rosas. Vicente Huidobro fue
        padrino de matrimonio y, según el museo, propició muchos de los
        encuentros de la pareja con artistas de la vanguardia.
      </p>
      <p>
        Mientras vivió en París, durante varios años combinó la pintura con un
        trabajo de asistente de dirección en el hospital psiquiátrico Henri
        Rouselle. En 1939, al estallar la Segunda Guerra Mundial, Petit y
        Vargas Rosas volvieron a Chile. El museo describe el regreso como un
        desarraigo: Francia había sido su segunda patria, y la carrera pintora
        quedó interrumpida. Solo volvió a pintar de manera esporádica. El taller
        de París permaneció cerrado hasta una última visita breve en 1963.
      </p>
      <p>
        La obra que sí quedó se caracteriza por un cromatismo sombrío de ocres
        y tierras, con contornos oscuros, fuertes y expresivos. Los géneros
        principales son el retrato y el desnudo femenino. El museo subraya que
        se alejó de la ejecución académica pulida y de la imagen de mujeres
        frágiles: le interesaba la condición humana, la tosquedad de los cuerpos
        y los rostros imperfectos. Hay piezas en el Museo Nacional de Bellas
        Artes, en la colección Philips y en la Casona Santa Rosa de Apoquindo.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Cómo se la ha vuelto a mostrar</h2>
      <p>
        En vida, las individuales son escasas en el catálogo: una sala de la
        Universidad de Chile en 1967, la Casa de la Cultura del Ministerio de
        Educación en 1974, Sala 4 Centro en 1977. Después de su muerte, en 1980,
        la Sala BHC hizo una retrospectiva. Entre 1996 y 1997 el Museo Nacional
        de Bellas Artes presentó Reactivando la memoria: Henriette Petit
        (1894-1983). En 1990, la Liga Chileno-Alemana la mostró junto a Camilo
        Mori como dos destacados del Montparnasse. En 2010 hubo una versión del
        grupo en la Corporación Cultural de Las Condes. En 2017 volvió a la sala
        del museo en Desacatos, sobre prácticas artísticas femeninas entre 1835
        y 1938.
      </p>
      <p>
        Petit cabe en las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        del primer modernismo, y en las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        que viajaron y volvieron con otro oficio. La pintura disponible hoy en
        el taller de Marcela Pedrosa, en Concepción, es otra generación y otro
        motivo: óleo sobre tela, impresionismo figurativo, fachadas y bosques
        del Biobío. Se puede ver en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        . El perfil de Petit queda en el tramo de 1920, cuando el Grupo
        Montparnasse le cambió el paso a la escuela.
      </p>
    </ProfilePage>
  );
}
