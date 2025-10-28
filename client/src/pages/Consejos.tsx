import { motion } from "framer-motion";
import {
  Lightbulb,
  Droplet,
  TreePine,
  Recycle,
  FileText,
  Bike,
  MessageCircle,
  Sparkles,
  Leaf,
  Heart,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const tips = [
  {
    icon: Lightbulb,
    title: "Apaga las luces",
    description: "Apaga las luces cuando no las necesites.",
  },
  {
    icon: Droplet,
    title: "Ahorra agua",
    description: "No desperdicies agua. Cada gota cuenta.",
  },
  {
    icon: Recycle,
    title: "Separa residuos",
    description: "Separa los residuos correctamente para facilitar el reciclaje.",
  },
  {
    icon: FileText,
    title: "Reduce el papel",
    description: "Reduce el consumo de papel y usa ambas caras.",
  },
  {
    icon: TreePine,
    title: "Siembra un árbol",
    description: "Siembra un árbol y contribuye al oxígeno del planeta.",
  },
  {
    icon: Droplet,
    title: "Botellas reutilizables",
    description: "Usa botellas reutilizables en lugar de plástico desechable.",
  },
  {
    icon: Bike,
    title: "Usa bicicleta",
    description: "Prefiere caminar o usar bicicleta en trayectos cortos.",
  },
  {
    icon: Sparkles,
    title: "Reutiliza materiales",
    description: "Reutiliza materiales para crear cosas nuevas y útiles.",
  },
  {
    icon: MessageCircle,
    title: "Comparte el mensaje",
    description: "Habla con tus amigos sobre cómo cuidar el ambiente.",
  },
  {
    icon: Heart,
    title: "Cada acción cuenta",
    description: "Recuerda que cada pequeña acción hace la diferencia.",
  },
];

export default function Consejos() {
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
            <Leaf className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Consejos y Tips Ambientales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pequeñas acciones que pueden generar un gran impacto en nuestro
            planeta. ¡Comienza hoy!
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group h-full"
                data-testid={`card-tip-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <tip.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
