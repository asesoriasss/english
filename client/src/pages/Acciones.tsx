import { motion } from "framer-motion";
import { TreePine, Recycle, Users, MapPin, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ParticipationFormDialog } from "@/components/ParticipationFormDialog";

const actions = [
  {
    icon: TreePine,
    title: "Jornadas de Reforestación",
    description:
      "Estudiantes y docentes plantando árboles para recuperar espacios verdes en nuestra comunidad.",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Recycle,
    title: "Campañas de Reciclaje",
    description:
      "Recolección y clasificación de materiales reciclables para reducir el impacto ambiental.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Users,
    title: "Ferias Ambientales",
    description:
      "Eventos educativos donde compartimos conocimientos y proyectos ecológicos con la comunidad.",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    icon: MapPin,
    title: "Puntos Ecológicos",
    description:
      "Instalación de estaciones de reciclaje en toda la institución para facilitar la separación de residuos.",
    color: "from-purple-500/20 to-purple-600/10",
  },
];

export default function Acciones() {
  const [formOpen, setFormOpen] = useState(false);

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
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Acciones y Campañas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las iniciativas ecológicas que estamos realizando en nuestra
            institución. ¡Tú también puedes ser parte del cambio!
          </p>
        </motion.div>

        {/* Actions Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group h-full"
                data-testid={`card-action-${index}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-background/80 backdrop-blur">
                    <action.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-background">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Quieres formar parte de estas iniciativas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comparte tu nombre, curso e ideas para contribuir al cuidado del
              medio ambiente en nuestra institución.
            </p>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => setFormOpen(true)}
              data-testid="button-participate"
            >
              <Plus className="h-5 w-5" />
              Quiero participar
            </Button>
          </Card>
        </motion.div>

        {/* Participation Form Dialog */}
        <ParticipationFormDialog open={formOpen} onOpenChange={setFormOpen} />
      </div>
    </div>
  );
}
