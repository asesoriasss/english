
import { motion } from "framer-motion";
import { Sprout, Recycle, TreePine, ShoppingBag, Heart, Users, Calendar, Table } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PRAE() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sprout className="h-16 w-16 text-primary" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🌎 Eco Camilo
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
            ¡La Camilo Torres se pinta de verde!
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Desde octubre de 2024, la Institución Educativa Camilo Torres ha venido 
            fortaleciendo su compromiso ambiental a través del proyecto Eco Camilo, 
            una iniciativa que busca promover la sostenibilidad, el reciclaje y el 
            amor por el entorno natural.
          </p>
          <p className="text-base text-muted-foreground italic">
            El Comité Ambiental Escolar, integrado por docentes y estudiantes, continúa 
            fortaleciendo una cultura de responsabilidad ecológica dentro y fuera de la escuela.
          </p>
        </motion.div>

        {/* Convocatoria V Jornada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/20 rounded-lg">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  🌿 Convocatoria a la V Jornada de Reciclaje y Limpieza Institucional
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Con el entusiasmo que caracteriza a nuestra comunidad educativa, 
                    el Comité Ambiental invita a toda la institución a participar en 
                    dos importantes eventos:
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                    <p className="font-semibold text-primary mb-2">
                      🗓️ Del 27 al 31 de octubre - V Jornada de Reciclaje
                    </p>
                    <p>
                      Estudiantes, docentes y familias podrán entregar materiales reciclables 
                      (papel, cartón, plástico, vidrio y metal) durante las clases de Ciencias Naturales.
                    </p>
                    <p className="italic text-sm mt-2">
                      "Cada vez que reciclamos, estamos ayudando a reducir la contaminación 
                      y a cuidar los recursos que nos rodean."
                    </p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                    <p className="font-semibold text-primary mb-2">
                      🌱 Miércoles 29 de octubre - Jornada de Limpieza y Mantenimiento de Jardines
                    </p>
                    <p>
                      Una actividad que busca renovar los espacios naturales del colegio. 
                      Será un momento para sembrar, cuidar y embellecer las áreas verdes.
                    </p>
                    <p className="italic text-sm mt-2">
                      "Ser parte del cambio comienza con una acción sencilla: cuidar lo que es de todos."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Resultados de Reciclaje */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  ♻️ Jornadas de Reciclaje: ¡Kilos que salvan al planeta!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Desde octubre de 2024, el colegio ha desarrollado cuatro exitosas jornadas 
                  de reciclaje, recolectando{" "}
                  <span className="font-bold text-primary">más de 260 kilos</span>{" "}
                  de material aprovechable. El dinero obtenido ha sido destinado al 
                  fortalecimiento del PRAE.
                </p>
              </div>
            </div>
            
            {/* Tabla de resultados */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold text-foreground">Fecha</th>
                    <th className="text-left p-3 font-semibold text-foreground">Kilos recolectados</th>
                    <th className="text-left p-3 font-semibold text-foreground">Recaudo económico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted">
                    <td className="p-3 text-muted-foreground">Octubre 2024</td>
                    <td className="p-3 text-muted-foreground font-medium">75,1 kg</td>
                    <td className="p-3 text-primary font-semibold">$97.100</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="p-3 text-muted-foreground">Febrero 2025</td>
                    <td className="p-3 text-muted-foreground font-medium">49,3 kg</td>
                    <td className="p-3 text-primary font-semibold">$72.000</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="p-3 text-muted-foreground">Marzo 2025</td>
                    <td className="p-3 text-muted-foreground font-medium">66,2 kg</td>
                    <td className="p-3 text-primary font-semibold">$93.200</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="p-3 text-muted-foreground">Mayo 2025</td>
                    <td className="p-3 text-muted-foreground font-medium">70,5 kg</td>
                    <td className="p-3 text-primary font-semibold">$92.700</td>
                  </tr>
                  <tr className="bg-primary/5 font-bold">
                    <td className="p-3 text-foreground">TOTAL</td>
                    <td className="p-3 text-foreground">261,1 kg</td>
                    <td className="p-3 text-primary text-lg">$355.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-muted-foreground italic mt-4 text-center">
              "Recolectar es darle otra oportunidad al planeta y a nosotros mismos."
            </p>
          </Card>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Jornadas de Siembra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    🌼 Jornadas de Siembra y Embellecimiento
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    En octubre de 2024, la comunidad educativa se unió en una gran jornada 
                    de siembra y embellecimiento de jardines institucionales.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Estudiantes, docentes, padres de familia y directivos adoptaron diferentes 
                    zonas verdes, sembrando árboles y plantas ornamentales que hoy embellecen 
                    el entorno escolar.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Nuestro colegio florece con la participación y el cuidado de todos."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Botellas de Amor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    💚 Botellas de Amor
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Desde 2024, nos sumamos a la campaña Botellas de Amor, recolectando 
                    plásticos flexibles dentro de botellas PET para transformarlos en 
                    materiales de construcción sostenibles.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Esta actividad busca disminuir la contaminación plástica y apoyar 
                    procesos de reciclaje que benefician a comunidades y proyectos sostenibles.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Llena tu botella de amor y vacía el mundo de plástico."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bazar de Ropa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    👕 Bazar de Ropa Usada
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El 11 de julio de 2025 se realizó el primer bazar de ropa usada, 
                    una iniciativa que promueve la reutilización de prendas en buen estado.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    El evento fue un espacio de intercambio solidario donde participaron 
                    estudiantes, familias y docentes, evitando el desperdicio textil y 
                    contribuyendo a financiar futuras campañas ecológicas.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "El consumo responsable también es una forma de cuidar el medio ambiente."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Alianza CORPOURABÁ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    🤝 Alianza con CORPOURABÁ
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El trabajo ambiental de la institución se ha visto fortalecido gracias 
                    a la alianza con CORPOURABÁ, entidad que ha acompañado las estrategias 
                    educativas mediante talleres, charlas y jornadas conjuntas.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Esta articulación ha permitido consolidar procesos formativos en torno 
                    a la conservación de recursos naturales, el manejo adecuado de residuos 
                    y la educación ambiental escolar.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Juntos construimos una escuela más verde, consciente y solidaria."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🌍 Un compromiso que crece
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              La Institución Educativa Camilo Torres reafirma su compromiso con la 
              formación de una comunidad educativa que actúe de manera responsable 
              frente a los desafíos ambientales actuales.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-4">
              El proyecto Eco Camilo sigue consolidándose como una experiencia 
              ejemplar de educación ambiental. Más allá de las cifras, cada jornada, 
              siembra o campaña representa un paso hacia una escuela más consciente, 
              solidaria y responsable con su entorno.
            </p>
            <p className="text-xl font-semibold text-primary mb-2">
              🌱 "Educar para cuidar la Tierra es educar para la vida."
            </p>
            <p className="text-lg font-medium text-foreground">
              ¡Únete al cambio y sé parte de Eco Camilo! 🌎
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
