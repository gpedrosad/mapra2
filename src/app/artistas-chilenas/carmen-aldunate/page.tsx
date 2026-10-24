import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Carmen Aldunate, pintora chilena (1940-2026)";
const DESCRIPTION =
  "Carmen Aldunate (1940-2026), pintora y dibujante de Viña del Mar. Perfil con fuente del museo. Su obra no se vende en este sitio.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "carmen-aldunate",
});

export default function CarmenAldunatePage() {
  return (
    <ProfilePage
      slug="carmen-aldunate"
      modified="2026-10-24"
      h1="Carmen Aldunate"
      kicker="Pintora y dibujante nacida en Viña del Mar el 10 de febrero de 1940. El Museo Nacional de Bellas Artes confirmó su fallecimiento el 25 de septiembre de 2026."
      description={DESCRIPTION}
      person={{
        name: "Carmen Aldunate",
        jobTitle: "Pintora y dibujante",
        nationality: "Chilena",
        birthDate: "1940-02-10",
        deathDate: "2026-09-25",
        birthPlace: "Viña del Mar, Chile",
        description:
          "Carmen Zita Aldunate Salas, pintora y dibujante chilena de figuración simbólica, formada en Chile y en la Universidad de California en Davis.",
        knowsAbout: ["Pintura", "Dibujo", "Figuración", "Ilustración"],
        sameAs: ["https://www.artistasvisualeschilenos.cl/658/w3-article-40315.html"],
      }}
    >
      <p>
        Carmen Zita Aldunate Salas es una de las pintoras chilenas cuya figura
        se reconoce de inmediato. Nació en Viña del Mar el 10 de febrero de
        1940 y desarrolló, durante más de seis décadas, un lenguaje propio
        centrado en la figura humana y, en especial, en mujeres que habitan la
        tela con una carga simbólica y psicológica. La Academia Chilena de
        Bellas Artes describe ese lenguaje como una combinación de lo
        figurativo, lo onírico y lo simbólico. El 25 de septiembre de 2026 el
        Museo Nacional de Bellas Artes informó su fallecimiento, a los 86 años.
      </p>
      <p>
        Entró a la Escuela de Bellas Artes de la Universidad Católica a los
        diecisiete años y después siguió en la Facultad de Bellas Artes de la
        Universidad de Chile. En esas aulas tuvo como profesores a Mario
        Carreño, Roser Bru, Nemesio Antúnez, Delia del Carril, Mario Toral y
        José Balmes. El cruce con{" "}
        <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
          Roser Bru
        </Link>{" "}
        importa: Aldunate se formó con una pintora que, décadas más tarde,
        recibiría el Premio Nacional de Artes Plásticas, y las dos trabajaron
        la figura desde lugares distintos.
      </p>
      <p>
        Hizo estudios de posgrado en el Departamento de Arte de la Universidad
        de California en Davis. Allí tomó contacto con pintores estadounidenses
        como William Wiley y Willem de Kooning. Vivió siete años en Estados
        Unidos. De regreso en Chile enseñó dibujo y pintura en la Universidad
        Católica y en otras instituciones. Desde 2004 fue miembro de número de
        la Academia Chilena de Bellas Artes del Instituto de Chile.
      </p>
      <p>
        El catálogo del museo también destaca su trabajo como ilustradora de
        publicaciones literarias y su participación en proyectos que juntan
        arte y decoración. Esa doble práctica, de taller y de página, ayuda a
        entender por qué el dibujo ocupa en su trayectoria un lugar tan firme
        como el óleo. Varios de sus premios, de hecho, son de dibujo y no solo
        de pintura.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Premios y exposiciones</h2>
      <p>
        En 1962 obtuvo el primer premio de pintura en la Feria de Artes
        Plásticas de Santiago y el primer premio de pintura del Concurso
        Inter-Universidades. En 1967 recibió el tercer premio de pintura CAP
        en el Museo de Arte Contemporáneo de la Universidad de Chile y el
        premio de pintura del sesquicentenario de la bandera chilena. En 1974
        ganó el primer premio de dibujo del Salón Oficial. Al año siguiente
        obtuvo el primer premio de dibujo de la Bienal de Valparaíso y un
        premio de pintura del concurso de la Editorial Lord Cochrane. En 1978
        recibió el primer premio de la Bienal de Punta del Este, en Uruguay. En
        1981 tuvo una mención de dibujo en la IV Bienal Americana de Artes
        Gráficas de Cali.
      </p>
      <p>
        Su primera individual registrada en el catálogo del museo es de 1963,
        en la Galería Central de Santiago. Siguieron muestras en Sacramento,
        Viña del Mar, Buenos Aires, Lima, Maldonado, Cali y Bogotá. En 1981 el
        Museo Nacional de Bellas Artes le dedicó Diez años de pintura de Carmen
        Aldunate. En 1973 participó en la XII Bienal de São Paulo. Más adelante
        expuso en la galería Tomás Andreu, en Artespacio y en Artium, con
        títulos de muestra como Los siete pecados capitales y las siete
        virtudes cardinales, La maldita primavera y Benditas sean.
      </p>
      <p>
        Concepción aparece varias veces en ese recorrido. En 1986 y en 2008
        mostró obra en la galería El Caballo Verde. En 2006 expuso en la
        Pinacoteca de la Universidad de Concepción, que conserva Mujer raíz,
        óleo sobre tela y madera. En 2010 volvió a la misma galería penquista
        en una colectiva con Gonzalo Cienfuegos y Benjamín Lira. Para quien
        mira el arte desde el Biobío, ese vínculo con la pinacoteca y con una
        sala de la ciudad es un dato concreto, no una nota al pie.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Obra en colecciones públicas</h2>
      <p>
        El Museo Nacional de Bellas Artes guarda, entre otras piezas, Fin de
        fiesta II (1991-1992), óleo sobre tela; Tan callando (1979), técnica
        mixta; y La mesa del comedor (1972), témpera. El Museo de Artes
        Visuales de Santiago tiene pasteles de 1978 y 1989, entre ellos
        Represión. Hay un tríptico mural, Mujeres en pórtico (1989), en el
        Hospital del Trabajador de Antofagasta, de la Asociación Chilena de
        Seguridad. También figura en la colección de la Compañía Cervecerías
        Unidas y en la University of Essex Collection of Latin American Art.
      </p>
      <p>
        Esa lista permite leer la obra sin adjetivos de catálogo comercial.
        Hay óleo, témpera, pastel y mural. Hay formato de caballete y formato
        de muro. Y hay una constancia: la mujer como motivo, tratada con una
        figuración que la Academia de Bellas Artes llama simbólica y que el
        museo, al despedirla, describió como cargada de sentido psicológico.
        Quien busque{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        famosas del último medio siglo la encuentra en ese grupo, al lado de{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>{" "}
        y de Bru, y dentro del panorama de las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        .
      </p>
      <p>
        Aldunate siguió exponiendo en la década de 2010, incluida la muestra
        del centenario de la colección del Museo Nacional de Bellas Artes. Su
        muerte en 2026 cierra una carrera que atravesó el Salón Oficial, las
        bienales y las galerías de Santiago, regiones y el extranjero. La
        pintura que se hace hoy en Chile, incluido el óleo sobre tela que
        Marcela Pedrosa trabaja en Concepción y que se puede ver en{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        , ocurre después de esa historia, con otras luz y otro territorio, y
        con la figura y el paisaje como asuntos todavía abiertos.
      </p>
      <p>
        Este perfil responde a la búsqueda por su nombre y no vende su obra. El
        índice de estos textos está en{" "}
        <Link href="/artistas-chilenas" className="text-brand underline">
          artistas chilenas
        </Link>
        . La mesa del comedor nombrada más arriba es obra de Aldunate y no es
        una tela de este taller. Los óleos de Marcela Pedrosa para ese muro
        están en{" "}
        <Link href="/cuadros/para-comedor" className="text-brand underline">
          cuadros para el comedor
        </Link>
        , y cómo medir el paño, en{" "}
        <Link
          href="/guias/elegir-cuadro-para-el-comedor"
          className="text-brand underline"
        >
          la guía del comedor
        </Link>
        . El{" "}
        <Link href="/pinturas/retrato-de-mujer" className="text-brand underline">
          Retrato de mujer
        </Link>{" "}
        (100x130, óleo sobre tela) es de Marcela Pedrosa, en Concepción, y entra
        en los{" "}
        <Link href="/retratos-al-oleo" className="text-brand underline">
          retratos al óleo
        </Link>
        . No es obra de Aldunate.
      </p>
    </ProfilePage>
  );
}
