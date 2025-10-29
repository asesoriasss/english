
import { motion } from "framer-motion";
import { Sprout, Recycle, TreePine, ShoppingBag, Heart, Users } from "lucide-react";
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
            🌱 Eco Camilo
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
            ¡La Camilo Torres se pinta de verde!
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde octubre de 2024, la Institución Educativa Camilo Torres ha venido 
            fortaleciendo su compromiso ambiental a través del proyecto Eco Camilo, 
            una iniciativa que busca promover la sostenibilidad, el reciclaje y el 
            amor por el entorno natural.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Jornadas de Reciclaje */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    ♻️ Jornadas de Reciclaje
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Hasta la fecha, se han realizado cuatro jornadas institucionales 
                    de reciclaje, logrando recolectar{" "}
                    <span className="font-bold text-primary">más de 204 kilos</span>{" "}
                    de material aprovechable entre octubre de 2024 y marzo de 2025.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cada campaña representa una oportunidad para que la comunidad 
                    educativa adopte hábitos sostenibles y aprenda sobre la correcta 
                    disposición de residuos.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Jornadas de Siembra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    🌳 Jornadas de Siembra y Embellecimiento
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    En octubre de 2024 y mayo de 2025, organizamos jornadas de siembra 
                    que involucraron a estudiantes, docentes, directivos y padres de familia.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cada grupo apadrinó un árbol o una zona verde del colegio, 
                    convirtiendo el entorno en un espacio más saludable y lleno de vida.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bazar de Ropa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
                    El 11 de julio de 2025 se realizó el Primer Bazar de Ropa Usada, 
                    combinando el reciclaje con la solidaridad.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Las prendas donadas fueron restauradas y ofrecidas a precios simbólicos, 
                    fomentando la reutilización y la economía circular desde la escuela.
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
                    envases plásticos limpios y secos para transformarlos en materiales 
                    de construcción sostenibles.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cada botella depositada representa una muestra tangible del compromiso 
                    de la institución con la cultura del reciclaje.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Alianza CORPOURABÁ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  🤝 Alianza con CORPOURABÁ
                </h3>
                <p className="text-muted-foreground mb-3">
                  La institución ha fortalecido su trabajo ambiental mediante la alianza 
                  con CORPOURABÁ, entidad que ha brindado acompañamiento técnico y 
                  pedagógico en diversas actividades.
                </p>
                <p className="text-muted-foreground">
                  En conjunto, se han desarrollado talleres, campañas de sensibilización 
                  y actividades educativas que promueven la conservación de los recursos 
                  naturales y el liderazgo ambiental estudiantil.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🌍 Un compromiso que crece
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              El proyecto Eco Camilo sigue consolidándose como una experiencia 
              ejemplar de educación ambiental. Más allá de las cifras, cada jornada, 
              siembra o campaña representa un paso hacia una escuela más consciente, 
              solidaria y responsable con su entorno.
            </p>
            <p className="text-xl font-semibold text-primary">
              ¡Únete al cambio y sé parte de Eco Camilo! 🌱
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
