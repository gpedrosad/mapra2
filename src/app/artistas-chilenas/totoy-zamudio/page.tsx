import Link from "next/link";
import { ProfilePage, perfilMetadata } from "../ui";

const TITLE = "Totoy Zamudio, pintor chileno | Pedrosa";
const DESCRIPTION =
  "Totoy Zamudio, pintor chileno nacido en Santiago en 1972. Color, figura y estudios de arte en la Finis Terrae y en Barcelona.";

export const metadata = perfilMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: "totoy-zamudio",
});

export default function TotoyZamudioPage() {
  return (
    <ProfilePage
      slug="totoy-zamudio"
      h1="Totoy Zamudio"
      kicker="José Manuel Zamudio, pintor y artista visual de Santiago. Nació en 1972 y trabaja un imaginario de color intenso y figuras humanas."
      description={DESCRIPTION}
      person={{
        name: "Totoy Zamudio",
        jobTitle: "Pintor y artista visual",
        nationality: "Chileno",
        birthDate: "1972",
        birthPlace: "Santiago, Chile",
        description:
          "José Manuel Zamudio, conocido como Totoy Zamudio, pintor chileno nacido en Santiago en 1972, formado en la Universidad Finis Terrae y en la Universitat Pompeu Fabra.",
        knowsAbout: ["Pintura", "Artes plásticas", "Animación", "Figura humana"],
        sameAs: ["https://totoyzamudio.com/historia/"],
      }}
    >
      <p>
        Totoy Zamudio es el nombre con que se conoce a José Manuel Zamudio,
        pintor y artista visual chileno nacido en Santiago en 1972. Su galería
        lo presenta así: creció en una familia que empujó la creatividad, la
        música de vanguardia y las ideas, y llegó a la pintura después de pasar
        por ingeniería. La prensa nacional ha contado el mismo arco. En una
        entrevista de CNN Chile de 2024 se precisa que estudió Ingeniería en
        Acuicultura, la dejó en quinto año y entró a artes. No hace falta
        repetir el tono de esa conversación. El dato biográfico alcanza: la
        pintura fue una segunda formación, elegida ya de adulto.
      </p>
      <p>
        Estudió artes plásticas en la Universidad Finis Terrae. La ficha que
        circula en fuentes biográficas indica la licenciatura con mención en
        pintura y grabado, iniciada a mediados de los años noventa. Después
        obtuvo un máster en animación digital en la Universitat Pompeu Fabra,
        en Barcelona. Esa doble escuela, de taller y de imagen en movimiento,
        se nota en una obra que vive igual en la tela, en el grabado y en
        piezas que pasan al espacio público, a libros o a objetos.
      </p>
      <p>
        La pintura se reconoce por el color intenso, la línea irregular y unas
        figuras humanas que en su trabajo se conocen como monos. Aparecen en
        multitudes, sobre fondos cargados, con un humor visual cercano al juego
        y al ritmo. La Revista Médica Clínica Las Condes, al publicar un grabado
        suyo en 2023, resume esa manera: figuras humanas mezcladas en fondos de
        color, tanto en pintura como en formato digital, con una estética que
        recuerda el grabado y un contraste fuerte con el blanco. Medios como
        Paula, de La Tercera, han asociado esa pintura al art brut y al
        expresionismo, y han nombrado entre sus referencias a Roberto Matta,
        Pablo Picasso y Joan Miró, los mismos nombres que su galería usa para
        contar el inicio.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Dónde se ha visto la obra</h2>
      <p>
        La Tercera consigna que en 2000 obtuvo el primer lugar de Arte en vivo
        del Museo de Bellas Artes, y que desde 1998 ha participado en
        exposiciones individuales y colectivas. La misma nota recuerda una
        muestra en la galería La Sala, en Vitacura. La revista de Clínica Las
        Condes agrega exhibiciones en el Museo de Bellas Artes, la Galería Ana
        María Matthei, el Centro Cultural Montecarmelo y la Galería StuArt, y
        una presencia en el Predio Ferial de Palermo, en Buenos Aires. Su
        galería suma muros, museos, colecciones privadas y espacios públicos.
      </p>
      <p>
        También ha hecho murales e intervenciones para encargos de gran escala.
        Fuentes biográficas mencionan trabajos para el centro comercial
        Apumanque, en Las Condes, y para el hotel Vik Chile, en San Vicente de
        Tagua Tagua, Región de O’Higgins. El taller desde el que pinta está en
        El Arrayán, en Santiago, la ciudad donde nació y donde sigue viviendo.
        Ha enseñado arte en la Universidad Finis Terrae, en la Universidad
        Adolfo Ibáñez y en la Universidad del Desarrollo.
      </p>
      <p>
        Conviene decirlo con claridad, porque su nombre aparece en búsquedas
        junto a pintoras: Totoy Zamudio es un pintor. En este sitio su perfil
        está al lado de las{" "}
        <Link href="/pintoras-chilenas" className="text-brand underline">
          pintoras chilenas
        </Link>{" "}
        porque la gente lo busca en el mismo gesto con que pregunta por Carmen
        Aldunate, Lily Garafulic o Camilo Mori. Leer la ficha evita mezclar
        nombres. La pintura hecha por mujeres tiene su propia historia en las{" "}
        <Link href="/mujeres-artistas-chilenas" className="text-brand underline">
          mujeres artistas chilenas
        </Link>
        , y Zamudio entra en el mapa como un pintor de la generación que se
        formó en los años noventa y que sigue activo.
      </p>
      <h2 className="text-2xl font-semibold text-ink pt-2">Cómo se lee junto al resto</h2>
      <p>
        Al lado de{" "}
        <Link href="/artistas-chilenas/carmen-aldunate" className="text-brand underline">
          Carmen Aldunate
        </Link>
        , la diferencia de generación y de motivo es nítida. Aldunate trabajó
        la figura femenina con una figuración simbólica de oficio académico.
        Zamudio trabaja multitudes de trazo suelto y color alto, con una
        formación que mezcla la escuela de artes y la animación. Al lado de{" "}
        <Link href="/artistas-chilenas/camilo-mori" className="text-brand underline">
          Camilo Mori
        </Link>
        , el parecido está en otra parte: los dos son pintores chilenos de
        figura y de color, separados por casi un siglo, y los dos circularon
        entre Santiago y una estadía formativa fuera del país, París en un
        caso y Barcelona en el otro.
      </p>
      <p>
        La página de{" "}
        <Link
          href="/artistas-chilenas/pintoras-chilenas-contemporaneas"
          className="text-brand underline"
        >
          pintoras chilenas contemporáneas
        </Link>{" "}
        sigue el hilo de las mujeres que pintan en este tiempo, incluida
        Marcela Pedrosa en Concepción. Zamudio pertenece a la misma época, con
        otro nombre y otro taller, en Santiago. Quien busque óleo disponible
        de una pintora del Biobío puede ver las{" "}
        <Link href="/pinturas" className="text-brand underline">
          pinturas
        </Link>{" "}
        de Marcela Pedrosa: impresionismo figurativo, fachadas y bosques, desde
        su taller en Concepción. El perfil de Totoy Zamudio queda como lo que
        es: la ficha de un pintor chileno vivo, con fecha de nacimiento, escuela
        y un imaginario que ya se reconoce en museos, galerías y muros.
      </p>
    </ProfilePage>
  );
}
