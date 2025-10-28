import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const carouselSlides = [
  "¿Sabías que reciclando una botella de plástico ahorras energía suficiente para encender una bombilla durante 3 horas?",
  "¿Sabías que plantar un árbol puede absorber hasta 20 kg de CO₂ al año?",
  "¿Sabías que el 80% de la basura del océano proviene de la tierra?",
  "¿Sabías que puedes reducir tu huella ecológica usando transporte compartido?",
  "¿Sabías que apagar una luz innecesaria ayuda más de lo que imaginas?",
  "¿Sabías que reciclando papel ayudas a salvar miles de árboles al año?",
  "¿Sabías que usar bolsas reutilizables evita toneladas de plástico?",
  "¿Sabías que el agua es un recurso limitado, y cada gota cuenta?",
  "¿Sabías que la energía solar puede abastecer una escuela entera?",
  "¿Sabías que cada pequeño cambio cuenta?",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-card rounded-lg shadow-lg p-8 md:p-12 min-h-[400px] flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-relaxed">
                  {carouselSlides[currentSlide]}
                </h2>
                <p className="text-xl md:text-2xl font-bold text-primary">
                  ¡Únete al cambio!
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="pointer-events-auto bg-background/80 backdrop-blur"
                data-testid="button-carousel-prev"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="pointer-events-auto bg-background/80 backdrop-blur"
                data-testid="button-carousel-next"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  data-testid={`button-dot-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Institutional Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              En la Institución Educativa Camilo Torres, cuidamos el planeta con
              acción y compromiso. Eccommitted: aprendemos, compartimos y
              transformamos.
            </p>
            <Link href="/consejos">
              <Button size="lg" className="gap-2" data-testid="button-start">
                Empieza tu cambio
                <span className="text-lg">🌱</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
