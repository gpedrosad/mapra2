import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";
import { SITE_URL } from "@/lib/site";

const TITLE = "Pintoras chilenas contemporáneas | Pedrosa";
const DESCRIPTION =
  "Pintoras chilenas contemporáneas: Barrios, Bru, Pérez y Aldunate, y Marcela Pedrosa desde su taller en Concepción.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "pintoras-chilenas-contemporaneas",
});

export default function PintorasContemporaneasPage() {
  return (
    <ProfilePage
      slug="pintoras-chilenas-contemporaneas"
      h1="Pintoras chilenas contemporáneas"
      kicker="Un recorrido por pintoras con obra activa en la segunda mitad del siglo XX y en el XXI, hasta el taller de Marcela Pedrosa en Concepción."
      description={DESCRIPTION}
      person={{
        name: "Marcela Pedrosa",
        jobTitle: "Pintora y artista visual",
        nationality: "Chilena",
        homeLocation: "Concepción, Chile",
        description:
          "Marcela Pedrosa, pintora contemporánea de Concepción, especializada en óleo sobre tela e impresionismo figurativo.",
        knowsAbout: [
          "Pintura",
          "Óleo sobre tela",
          "Impresionismo figurativo",
          "Cerámica artística",
        ],
        sameAs: [`${SITE_URL}/marcela-pedrosa`],
      }}
    >
      <p>
        Pintoras chilenas contemporáneas es un nombre que la gente usa para
        preguntar quién pinta ahora, y también quién siguió pintando cuando el
        siglo XX ya iba de salida. Esta página responde con artistas cuya
        actividad está documentada en museos y con una pintora que trabaja hoy
        en Concepción: Marcela Pedrosa. El texto no arma un ranking. Ordena
        hechos.
      </p>
      <p>
        En el tramo que llega hasta los años diez y veinte de este siglo están
        cuatro carreras con ficha clara.{" "}
        <Link href="/artistas-chilenas/gracia-barrios" className="text-brand underline">
          Gracia Barrios
        </Link>{" "}
        pintó hasta cerca de su muerte, el 28 de mayo de 2020, y en 2011 recibió
        el Premio Nacional de Artes Plásticas. Volvió a la figura después del
        informalismo del Grupo Signo, y su medio de preferencia siguió siendo
        el óleo y el acrílico.{" "}
        <Link href="/artistas-chilenas/roser-bru" className="text-brand underline">
          Roser Bru
        </Link>{" "}
        murió en Santiago el 26 de mayo de 2021. El Premio Nacional le llegó en
        2015. Pintura, dibujo y grabado le sirvieron para trabajar memoria e
        historia, desde su llegada a Chile en el Winnipeg en 1939.
      </p>
      <p>
        <Link href="/artistas-chilenas/matilde-perez" className="text-brand underline">
          Matilde Pérez
        </Link>{" "}
        murió el 2 de octubre de 2014, después de una retrospectiva, El ojo
        móvil, en 1999, y de mostrar obra cinética en el Reina Sofía en 2007.
        Su contemporaneidad está en el problema: sacó la pintura del cuadro fijo
        y la puso a depender del movimiento de quien mira.{" "}
        <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
          Carmen Aldunate
        </Link>
        , nacida en Viña del Mar en 1940, expuso hasta la década de 2010 y
        falleció el 25 de septiembre de 2026. El Museo Nacional de Bellas Artes,
        al informarlo, destacó un lenguaje propio de figura humana y de mujeres
        con carga simbólica. Hay obra suya en la Pinacoteca de la Universidad
        de Concepción.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Qué comparten y qué no</h2>
      <p>
        Las cuatro pasaron por la Universidad de Chile o por su entorno de
        talleres, y tres de ellas enseñaron durante años. Barrios y Bru
        compartieron el Grupo de Estudiantes Plásticos en 1948. Aldunate tuvo a
        Bru entre sus profesoras. Pérez armó, en 1975, el Centro de
        Investigaciones Cinéticas en la Escuela de Diseño. El parecido termina
        ahí. Una trabajó el gesto y la multitud, otra la memoria y el grabado,
        otra el movimiento, otra la figuración simbólica de la mujer. Llamarlas
        contemporáneas dice algo sobre el tiempo en que expusieron, no sobre un
        estilo único.
      </p>
      <p>
        El mapa tampoco cabe solo en Santiago. Barrios tiene obra en el Museo a
        Cielo Abierto de Valparaíso y en el Museo de Arte Moderno de Chiloé.
        Pérez recibió una mención en el Salón de Concepción en 1958. Aldunate
        expuso en la galería El Caballo Verde y en la pinacoteca de la
        Universidad de Concepción. Las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        de este tramo circularon por regiones, y las colecciones regionales
        guardan piezas que permiten verlas fuera de la capital. El panorama más
        amplio, que incluye escultura y otras prácticas, está en las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        .
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Marcela Pedrosa en Concepción</h2>
      <p>
        En la Región del Biobío, Marcela Pedrosa es una pintora y artista visual
        contemporánea radicada en Concepción. Su trabajo se centra en el óleo
        sobre tela y en un impresionismo figurativo atento a la conexión
        emocional, la atmósfera y la luz. Lleva más de veinte años de
        experiencia en pintura al óleo. Las series recorren fachadas urbanas,
        bosques y paisajes del sur de Chile. Como pintora penquista, ese
        lenguaje está ligado a la arquitectura local, a los bosques nativos y a
        la luz del sur.
      </p>
      <p>
        Además de la pintura, trabaja cerámica artística en gres. Las piezas
        forman parte de colecciones privadas en Chile y en el extranjero, y ha
        participado en exposiciones y espacios culturales de la región. Desde
        su taller en Concepción produce obras originales y encargos
        personalizados, y vende sus óleos con envío a todo Chile. Quien quiera
        ver lo que hay disponible puede entrar a{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>
        , escribir por el formulario de contacto o consultar por WhatsApp.
      </p>
      <p>
        Poner a Pedrosa en esta página es situar un taller activo al lado de
        carreras ya cerradas o recién cerradas. Barrios, Bru, Pérez y Aldunate
        dejan obra en museos, premios con fecha y una pedagogía de décadas.
        Pedrosa deja una práctica en curso: óleo, impresionismo figurativo y
        cerámica, hecha en Concepción, con el Biobío como motivo. Las dos
        escalas se leen juntas. Una explica de dónde viene la pintura chilena
        hecha por mujeres en el último medio siglo. La otra muestra que esa
        pintura sigue en un taller de región, con obras que se pueden encargar
        y colgar.
      </p>
      <p>
        Si el interés es un nombre concreto del canon, los perfiles de este
        grupo sirven de ficha: Castro y las hermanas Mira para el siglo XIX,{" "}
        <Link href="/artistas-chilenas/henriette-petit" className="text-brand underline">
          Henriette Petit
        </Link>{" "}
        y{" "}
        <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
          Camilo Mori
        </Link>{" "}
        para el Montparnasse,{" "}
        <Link href="/artistas-chilenas/lily-garafulic" className="text-brand underline">
          Lily Garafulic
        </Link>{" "}
        para la escultura,{" "}
        <Link href="/artistas-chilenas/totoy-zamudio" className="text-brand underline">
          Totoy Zamudio
        </Link>{" "}
        para un pintor de Santiago nacido en 1972. Para la pregunta por las
        pintoras de ahora, el taller de Concepción es la respuesta que este
        sitio puede dar con datos propios.
      </p>
    </ProfilePage>
  );
}
