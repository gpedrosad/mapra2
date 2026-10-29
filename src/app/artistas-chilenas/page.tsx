import Link from "next/link";
import ConsultaSteps from "../components/seo/ConsultaSteps";
import { SITE_URL } from "@/lib/site";
import { PERFILES, ProfilePage, perfilMetadata } from "./ui";

const TITLE = "Artistas visuales chilenos | índice de perfiles";
const DESCRIPTION =
  "Índice de artistas visuales chilenos y de artistas chilenos pintores, con fuente: Mori, Zamudio y Garafulic. No es el listado de pintoras famosas.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
});

export default function ArtistasChilenasIndexPage() {
  return (
    <ProfilePage
      modified="2026-10-29"
      h1="Artistas visuales chilenos"
      kicker="Perfiles con fuente: pintoras, la escultora Garafulic y pintores como Mori y Zamudio. Las famosas y las actuales están en otra página."
      description={DESCRIPTION}
      person={{
        name: "Marcela Pedrosa",
        jobTitle: "Pintora y artista visual",
        nationality: "Chilena",
        homeLocation: "Concepción, Chile",
        description:
          "Pintora y artista visual de Concepción especializada en óleo sobre tela, impresionismo figurativo y cerámica artística.",
        knowsAbout: [
          "Pintura",
          "Óleo sobre tela",
          "Impresionismo figurativo",
          "Cerámica artística",
          "Arte en Concepción",
        ],
        sameAs: [`${SITE_URL}/marcela-pedrosa`],
      }}
    >
      <p>
        Este índice reúne{" "}
        <strong>artistas visuales chilenos</strong>. Entran pintoras, la
        escultora{" "}
        <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
          Lily Garafulic
        </Link>{" "}
        y <strong>artistas chilenos pintores</strong>:{" "}
        <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
          Camilo Mori
        </Link>{" "}
        y{" "}
        <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">
          Totoy Zamudio
        </Link>{" "}
        tienen ficha. No es el listado de pintoras famosas ni el de pintoras
        actuales: eso sigue en{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>
        . Quien busca la{" "}
        <Link href="/artista-visual-biobio" className="text-brand underline">
          artista visual del Biobío
        </Link>{" "}
        con óleos a la venta llega a Marcela Pedrosa, no a estos perfiles
        históricos. Cada texto se apoya en datos que el Museo Nacional de
        Bellas Artes, la Biblioteca Nacional o la propia trayectoria pública
        del artista permiten comprobar: nacimiento, formación, premios, obras
        en colecciones y el lugar que ocupó en la pintura o la escultura. Si un
        dato no está claro, aquí no aparece.
      </p>
      <p>
        El punto de partida son las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>
        . Esa página reúne a las famosas y a las actuales. Los perfiles de
        abajo no la reemplazan: cada uno documenta a una persona. En el siglo XIX,{" "}
        <Link href="/artistas-chilenas/celia-castro" className="text-brand underline">
          Celia Castro
        </Link>
        , de Quillota, estudió en la Academia de Pintura, viajó a París con
        Pedro Lira y fue la primera mujer pensionada por el Estado para
        formarse en Europa. Cerca de ella están las hermanas{" "}
        <Link href="/artistas-chilenas/magdalena-mira" className="text-brand underline">
          Magdalena Mira
        </Link>{" "}
        y{" "}
        <Link href="/artistas-chilenas/aurora-mira" className="text-brand underline">
          Aurora Mira
        </Link>
        , santiaguinas, alumnas de Juan Mochi, premiadas en los salones
        oficiales por retratos, flores, bodegones y, en el caso de Magdalena,
        también por escultura.
      </p>
      <p>
        En los años veinte, el Grupo Montparnasse cambió el tono de la pintura
        chilena.{" "}
        <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
          Henriette Petit
        </Link>{" "}
        y{" "}
        <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
          Camilo Mori
        </Link>{" "}
        se conocieron en la Escuela de Bellas Artes, vieron la pintura moderna
        en París y, de vuelta en Santiago en 1923, expusieron con Luis Vargas
        Rosas, José Perotti y Julio Ortiz de Zárate. Mori recibió el Premio
        Nacional de Arte, mención pintura, en 1950. Petit dejó un lenguaje de
        retrato y desnudo que el museo sigue mostrando, aunque su ficha
        registra pocas exposiciones individuales.
      </p>
      <p>
        La escultura tiene su propio capítulo.{" "}
        <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
          Lily Garafulic
        </Link>
        , nacida en Antofagasta en 1914, estudió con Lorenzo Domínguez, conoció
        la obra de Constantin Brancusi, trabajó el mosaico en Rávena y dirigió
        el Museo Nacional de Bellas Artes entre 1973 y 1977. En 1995 recibió el
        Premio Nacional de Artes Plásticas. El museo la nombra junto a Rebeca
        Matte y Marta Colvin entre las escultoras centrales del país. Su perfil
        está en este conjunto porque su nombre se busca al lado del de las
        pintoras, dentro del mapa más amplio de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        .
      </p>
      <p>
        La segunda mitad del siglo XX abre la pintura hacia la abstracción, el
        gesto y la memoria.{" "}
        <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
          Matilde Pérez
        </Link>{" "}
        pasó del óleo figurativo al arte cinético y fundó, con otros profesores,
        el Centro de Investigaciones Cinéticas de la Universidad de Chile.{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>{" "}
        integró el Grupo Signo junto a José Balmes y recibió el Premio Nacional
        de Artes Plásticas en 2011.{" "}
        <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
          Roser Bru
        </Link>
        , nacida en Barcelona, llegó a Chile en el Winnipeg en 1939, se formó
        en grabado en el Taller 99 y obtuvo el mismo premio en 2015.
      </p>
      <p>
        Entre las pintoras de figuración más reconocibles está{" "}
        <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
          Carmen Aldunate
        </Link>
        , nacida en Viña del Mar en 1940 y fallecida en 2026. Estudió en la
        Universidad Católica y en la Universidad de Chile, hizo un posgrado en
        la Universidad de California en Davis y dedicó décadas a la figura
        humana, sobre todo a la mujer, con una carga simbólica que el Museo
        Nacional de Bellas Artes destacó al informar su muerte. Hay obra suya
        en ese museo y en la Pinacoteca de la Universidad de Concepción.
      </p>
      <p>
        Las búsquedas recientes también traen a{" "}
        <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">
          Totoy Zamudio
        </Link>
        , el nombre con que se conoce al pintor José Manuel Zamudio, nacido en
        Santiago en 1972. Estudió artes plásticas en la Universidad Finis
        Terrae y un máster de animación en la Universitat Pompeu Fabra, en
        Barcelona.         Su pintura se reconoce por el color intenso y por unas figuras
        humanas que en su obra se conocen como monos. Ha mostrado trabajo en
        el Museo Nacional de Bellas Artes.
      </p>
      <p>
        Quien quiera el tramo más cercano al presente puede seguir en{" "}
        <Link
          href="/artistas-chilenas/pintoras-chilenas-contemporaneas"
          className="text-brand underline"
        >
          pintoras chilenas contemporáneas
        </Link>
        . Ahí se cuenta cómo Barrios, Bru, Pérez y Aldunate siguieron activas
        en el siglo XXI, y cómo en Concepción, Región del Biobío, Marcela
        Pedrosa pinta hoy óleo sobre tela e impresionismo figurativo: fachadas,
        bosques y paisaje del sur, además de cerámica artística en gres. Las
        obras disponibles están en la galería de{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        .
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-4">Obra de Marcela, con ficha</h2>
      <p>
        Los perfiles de esta página documentan a otras artistas, con la fuente de
        cada dato. La pintura que este sitio vende es la de Marcela Pedrosa, en
        Concepción. Tres fichas para entrar al catálogo:{" "}
        <Link href="/pinturas/elefante" className="text-brand underline">
          Elefante
        </Link>
        ,{" "}
        <Link href="/pinturas/bosque-troncos-luz" className="text-brand underline">
          Bosque con luz entre troncos
        </Link>{" "}
        y{" "}
        <Link href="/pinturas/casas-dia-y-noche" className="text-brand underline">
          Casas de día y de noche
        </Link>
        . El grupo por muro está en{" "}
        <Link href="/cuadros" className="text-brand underline">
          cuadros
        </Link>
        . La compra por motivo, en{" "}
        <Link href="/comprar-arte-chile" className="text-brand underline">
          comprar arte en Chile
        </Link>
        . Cómo medir un living, en las{" "}
        <Link href="/guias" className="text-brand underline">
          guías
        </Link>
        . El óleo con envío, en{" "}
        <Link href="/comprar-cuadros-al-oleo-chile" className="text-brand underline">
          comprar cuadros al óleo
        </Link>
        .
      </p>
      <p>
        Si el parecido que buscas es una tela de hoy, y no un perfil histórico,
        hay tres motivos con ficha propia. El{" "}
        <Link href="/pinturas/bodegon-calabazas" className="text-brand underline">
          Bodegón de calabazas
        </Link>{" "}
        es la naturaleza muerta publicada, sin medida. El{" "}
        <Link href="/pinturas/retrato-de-mujer" className="text-brand underline">
          Retrato de mujer
        </Link>{" "}
        mide 100x130. El{" "}
        <Link href="/pinturas/grupo-de-figuras" className="text-brand underline">
          Grupo de figuras
        </Link>{" "}
        mide 110x110. Esas obras son de Marcela Pedrosa, en Concepción. Los
        perfiles de arriba no están a la venta. El bodegón y las dos vistas de
        ciudad que se miran desde una mesa están en{" "}
        <Link href="/cuadros/para-comedor" className="text-brand underline">
          cuadros para el comedor
        </Link>
        . Cómo medir ese muro, en{" "}
        <Link href="/guias/elegir-cuadro-para-el-comedor" className="text-brand underline">
          la guía del comedor
        </Link>
        .
      </p>
      <ConsultaSteps intro="Los perfiles no están a la venta. Si la consulta es una tela de Marcela, nombra la ficha." />
      <h2 className="text-2xl font-semibold text-ink pt-4">Los perfiles</h2>
      <ul className="space-y-3">
        {PERFILES.map((item) => (
          <li key={item.slug}>
            <Link href={`/artistas-chilenas/${item.slug}`} className="text-brand underline">
              {item.name}
            </Link>
            <span className="text-ink-muted">. {item.note}</span>
          </li>
        ))}
      </ul>
    </ProfilePage>
  );
}
