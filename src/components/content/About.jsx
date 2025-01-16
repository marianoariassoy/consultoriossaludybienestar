import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      x-intersect="activeStep = 'spy-4'"
      className="text-muted-500 dark:text-muted-400 -mt-8 mb-8 text-center flex flex-col gap-y-4 max-w-4xl mx-auto"
    >
      <p>
        Nuestro consultorio de Salud y Bienestar nació del sueño de crear un
        espacio donde las personas pudieran encontrar{" "}
        <strong>
          apoyo integral para su bienestar emocional, mental y físico.
        </strong>{" "}
        La <strong> Lic. Rocío E. Fernández</strong>, psicóloga apasionada por
        acompañar a las personas en su camino hacia una vida plena, inició este
        proyecto tras años de experiencia en hospitales, clínicas y centros
        especializados. Estas vivencias le brindaron una visión amplia sobre la
        importancia de abordar la salud de manera interdisciplinaria.
      </p>

      {showMore && (
        <div classNameName="flex flex-col gap-y-4">
          <p>
            Hoy, nuestro equipo incluye{" "}
            <strong>
              psicólogos, psicopedagogas, un médico psiquiatra, una
              nutricionista y una masajista especializada en RPG,
            </strong>{" "}
            todos trabajando juntos para ofrecer una atención personalizada y de
            calidad. Este es un lugar pensado para quienes buscan un
            acompañamiento completo, donde la empatía y el profesionalismo van
            de la mano. Nuestro compromiso es cuidar de cada aspecto de tu
            bienestar, brindando{" "}
            <strong>
              un espacio cálido y accesible para todas las personas.
            </strong>
          </p>
          <p>
            A principios de 2021, el consultorio comenzó a sumar los primeros
            profesionales de otras áreas. Esta nueva etapa marcó el inicio de un{" "}
            <strong>enfoque interdisciplinario</strong> que ampliaba las
            posibilidades de acompañamiento. En diciembre de 2022, el proyecto
            evolucionó nuevamente, pasando de ser Consultorios Salud Mental a
            convertirse en Consultorios Salud y Bienestar, un espacio más amplio
            y diversificado.
          </p>
        </div>
      )}
      {!showMore && (
        <div>
          <button
            className="relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline space-x-1 text-white bg-primary-600 h-12 px-5 py-3 text-sm rounded-xl hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/20 tw-accessibility transition-all duration-300"
            onClick={() => setShowMore(!showMore)}
          >
            Leer más
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
