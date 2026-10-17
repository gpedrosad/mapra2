import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Lily Garafulic, escultora chilena | Pedrosa";
const DESCRIPTION =
  "Lily Garafulic (1914-2012), escultora de Antofagasta. Premio Nacional de Artes Plásticas 1995 y directora del Museo de Bellas Artes.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "lily-garafulic",
});

export default function LilyGarafulicPage() {
  return (
    <ProfilePage
      slug="lily-garafulic"
      h1="Lily Garafulic"
      kicker="Escultora, docente y directora del Museo Nacional de Bellas Artes. Nació en Antofagasta el 14 de mayo de 1914 y murió en Santiago el 15 de marzo de 2012."
      description={DESCRIPTION}
      person={{
        name: "Lily Garafulic",
        jobTitle: "Escultora",
        nationality: "Chilena",
        birthDate: "1914-05-14",
        deathDate: "2012-03-15",
        birthPlace: "Antofagasta, Chile",
        description:
          "Lily Garafulic Yancovic, escultora chilena, Premio Nacional de Artes Plásticas 1995 y directora del Museo Nacional de Bellas Artes entre 1973 y 1977.",
        knowsAbout: ["Escultura", "Mosaico", "Grabado", "Docencia artística"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40043.html"],
      }}
    >
      <p>
        Lily Garafulic Yancovic es una de las escultoras centrales del arte
        chileno del siglo XX. El Museo Nacional de Bellas Artes la sitúa, junto
        a Rebeca Matte y Marta Colvin, entre las tres escultoras más importantes
        del país. Nació en Antofagasta el 14 de mayo de 1914, hija de padres
        croatas, y creció cerca del trabajo de su hermano, el arquitecto Andrés
        Garafulic. Murió en Santiago el 15 de marzo de 2012.
      </p>
      <p>
        En 1934 ingresó a la Escuela de Bellas Artes de la Universidad de Chile.
        Estudió dibujo en el taller libre de Hernán Gazmuri y escultura con
        Lorenzo Domínguez, de quien fue ayudante en 1937. Poco después viajó a
        Europa y conoció al escultor rumano Constantin Brancusi, un encuentro
        que la Facultad de Artes de la Universidad de Chile describe como un
        quiebre: Garafulic se acercó a la abstracción y tomó distancia del
        modelo de su maestro chileno. Las fuentes no cierran el año exacto de
        ese viaje en una sola fecha, así que basta con situarlo a fines de la
        década de 1930.
      </p>
      <p>
        Recibió la beca Guggenheim y entre 1944 y 1945 vivió en Nueva York.
        Entró a la New School for Social Research, fue alumna del escultor José
        de Creeft y estudió grabado en el Atelier 17 de William Hayter. En 1947
        la Universidad de Chile la becó para viajar a Europa y Medio Oriente y
        aprender la técnica del mosaico en la escuela de Rávena, Italia. A esos
        viajes se sumaron estadías en Perú, Bolivia e Isla de Pascua. La
        Facultad de Artes fecha el viaje a Rapa Nui en 1959 y lo recuerda como
        un antes y un después en la obra.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Docencia, museo y premio</h2>
      <p>
        Desde 1947 enseñó en la Facultad de Artes de la Universidad de Chile,
        primero como profesora suplente de la cátedra de escultura y, desde
        1951, como profesora titular. Formó a escultores como Sergio Castillo,
        Matías Vial, Raúl Valdivieso, Wilma Hannig, Alfredo Portales y Francisco
        Gazitúa. En 1997 la universidad la nombró profesora emérita. Esa labor
        de taller, sostenida por décadas, pesa tanto como las piezas: buena
        parte de la escultura chilena de la segunda mitad del siglo pasó por su
        clase.
      </p>
      <p>
        En 1973 fue nombrada directora del Museo Nacional de Bellas Artes. La
        Facultad de Artes la señala como la primera mujer en ese cargo. Su
        gestión duró hasta 1977. De esos años queda la creación del Laboratorio
        de Restauración y Conservación de Obras de Arte del museo, que funcionó
        hasta octubre de 1982, cuando se creó el Centro Nacional de Conservación
        y Restauración de la DIBAM. El dato importa porque muestra una artista
        ocupada del cuidado material de las colecciones, no solo de su propia
        obra.
      </p>
      <p>
        Los premios empiezan temprano. En 1936 obtuvo el tercer premio de
        escultura del Salón Oficial. En 1941, el primer premio de escultura del
        Salón Oficial del IV Centenario de Santiago. En 1945, primer premio de
        escultura del Salón de Verano de Viña del Mar y primer premio de dibujo
        y grabado del Salón Oficial. En 1952, primer premio de escultura del
        Salón Oficial, y en 1953 el primer premio de honor del LXIV Salón
        Oficial y un premio en la Bienal de São Paulo. En 1961 recibió el premio
        Rebeca Matte de escultura en Viña del Mar. En 1963, mención honrosa en
        la IX Bienal de São Paulo. En 1985, el premio del Círculo de Críticos de
        Arte. En 1992, el premio Rebeca Matte del Ministerio de Educación. En
        1995, el Premio Nacional de Artes Plásticas, también consignado como
        Premio Nacional de Arte.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Dónde está la obra</h2>
      <p>
        Hay escultura suya en el Museo Nacional de Bellas Artes, el Museo de
        Arte Contemporáneo, el Museo de Artes Visuales, el Museo de San
        Francisco, el Museo Histórico Nacional, la Asociación Chilena de
        Seguridad, el Palacio de La Moneda, el paseo de esculturas de La Serena
        y la Universidad de Talca, entre otros lugares. Fuera de Chile, el
        catálogo menciona el edificio de la Organización Mundial de la Propiedad
        Intelectual en Ginebra y el Instituto de Arte Contemporáneo de Lima.
      </p>
      <p>
        Después de su muerte, la familia donó parte de su biblioteca a la
        Biblioteca del Museo Nacional de Bellas Artes. En 2013 la Universidad de
        Talca recibió 65 esculturas de la colección particular, que pasaron a la
        colección patrimonial de esa casa de estudios. En 2014, al cumplirse
        cien años de su nacimiento, el Museo de Arte Contemporáneo presentó Lily
        Garafulic 100 años y el Museo Nacional de Bellas Artes mostró obra
        gráfica bajo el título Cuerpos vitales.
      </p>
      <p>
        Garafulic no es pintora de caballete, y por eso su perfil vive al lado
        de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        sin confundirse con ellas. En el mapa de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>{" "}
        ocupa el lugar de la escultura moderna: piedra, volumen, mosaico y una
        docencia larga en la Universidad de Chile. Quien llegue desde una
        búsqueda por su nombre encuentra aquí esa trayectoria, y puede seguir
        hacia{" "}
        <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
          Matilde Pérez
        </Link>
        , que también cruzó pintura y volumen, o hacia la pintura disponible
        hoy en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        , el óleo sobre tela de Marcela Pedrosa desde Concepción.
      </p>
    </ProfilePage>
  );
}
