import { motion } from "framer-motion";
import { Construction, Sprout } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PRAE() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/5 to-background">
            {/* Animated Icon */}
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
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <Sprout className="h-20 w-20 text-primary" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Construction className="h-10 w-10 text-primary/60" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Proyecto Ambiental Escolar – PRAE
            </h1>

            {/* Message */}
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Esta sección está en construcción. Muy pronto podrás unirte a la{" "}
                <span className="font-semibold text-primary">
                  5.ª Jornada de Reciclaje Camilo Torres
                </span>
                .
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                ¡Sigue atento y únete al cambio!
              </p>
            </div>

            {/* Growing Plant Animation */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="mt-12 h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full origin-bottom"
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
