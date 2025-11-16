import { Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export const metadata = {
  title: "Calendario y Disponibilidad - DUX TOLEDO",
  description:
    "Consulta la disponibilidad de DUX TOLEDO: días ocupados y libres actualizados en tiempo real.",
};

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative">
      <WatermarkLogo />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <CalendarIcon className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Cabecera */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Calendario y Disponibilidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Consulta a continuación los días en los que{" "}
              <strong>DUX TOLEDO</strong> está disponible. El calendario se
              actualiza automáticamente con nuestras reservas internas.
            </p>
          </div>

          {/* Leyenda profesional */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <span>Días <strong>ocupados</strong> (reservados)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
              <span>
                Días <strong>disponibles</strong> (sin reserva)
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Los días disponibles son aquellos que aparecen sin eventos en el
              calendario.
            </p>
          </div>

          {/* Calendario embebido de Google */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-background">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=70206a6afbc1c86dc51e9ceb9ab923c713da59596a852d1243e5bb0029505a85%40group.calendar.google.com&ctz=Europe%2FMadrid"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          {/* Contacto para reservar */}
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Para confirmar una reserva o resolver dudas, contacta con nosotros en{" "}
            <a
              href="mailto:casarural@duxtoledo.com"
              className="text-primary hover:underline"
            >
              casarural@duxtoledo.com
            </a>{" "}
            o por teléfono/WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
