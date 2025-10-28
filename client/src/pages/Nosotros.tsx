import { motion } from "framer-motion";
import { GraduationCap, Heart, Leaf, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Leaf,
    title: "Conciencia Ecológica",
    description:
      "Fomentamos el respeto y cuidado del medio ambiente en cada acción.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajamos juntos: estudiantes, docentes y comunidad por un objetivo común.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje",
    description:
      "Educamos sobre prácticas sostenibles y su impacto en el planeta.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos comprometemos a ser protagonistas del cambio ambiental.",
  },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nosotros
          </h1>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Eccommitted</span>{" "}
                es un proyecto de la{" "}
                <span className="font-semibold text-foreground">
                  Institución Educativa Camilo Torres
                </span>{" "}
                que busca inspirar acciones concretas para proteger el medio
                ambiente.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A través del aprendizaje, la colaboración y la conciencia
                ecológica, los estudiantes son protagonistas del cambio.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 hover-elevate active-elevate-2 transition-all h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Formar estudiantes conscientes y comprometidos con el cuidado del
              medio ambiente, capaces de generar un impacto positivo en su
              comunidad y el planeta a través de acciones concretas y educación
              ambiental.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
