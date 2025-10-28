import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertParticipationSchema, type InsertParticipation } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

interface ParticipationFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ParticipationFormDialog({
  open,
  onOpenChange,
}: ParticipationFormDialogProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertParticipation>({
    resolver: zodResolver(insertParticipationSchema),
    defaultValues: {
      nombre: "",
      curso: "",
      idea: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertParticipation) => {
      return await apiRequest("POST", "/api/participations", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "¡Registro exitoso!",
        description: "Gracias por querer participar. Te contactaremos pronto.",
      });
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        form.reset();
      }, 2500);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu registro. Intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertParticipation) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Formulario de Participación
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Completa el formulario para unirte a nuestras iniciativas
            ambientales.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              ¡Registro Exitoso!
            </h3>
            <p className="text-muted-foreground">
              Gracias por tu interés. Nos pondremos en contacto pronto.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre completo"
                        {...field}
                        data-testid="input-nombre"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="curso"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Curso o Grado</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: 10-A, Docente, Administrativo"
                        {...field}
                        data-testid="input-curso"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="idea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Idea o Aporte</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos tu idea para contribuir al cuidado del medio ambiente..."
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-testid="input-idea"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gap-2"
                  disabled={mutation.isPending}
                  data-testid="button-submit"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
