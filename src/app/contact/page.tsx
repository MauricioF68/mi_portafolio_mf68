"use client";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar

// ... (El componente WhatsAppIcon déjalo igual, no necesita traducción) ...
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xdalnqyd"); // <--- TU CÓDIGO DE FORMSPREE
  const { language } = useLanguage(); // <--- IDIOMA

  const content = {
    es: {
      title: "Hablemos de tu próximo proyecto.",
      description: "Estoy disponible para roles de Gestión de Proyectos, Análisis de Requisitos o desarrollo.",
      socialsTitle: "Mis Redes",
      labels: { name: "Nombre", email: "Correo Electrónico", message: "Mensaje", btnSend: "Enviar Mensaje", sending: "Enviando..." },
      success: { title: "¡Mensaje Enviado!", desc: "Gracias por contactarme. Revisaré tu mensaje pronto.", btnBack: "Volver al formulario" }
    },
    en: {
      title: "Let's talk about your next project.",
      description: "I am available for Project Management, Requirements Analysis, or development roles.",
      socialsTitle: "My Socials",
      labels: { name: "Name", email: "Email", message: "Message", btnSend: "Send Message", sending: "Sending..." },
      success: { title: "Message Sent!", desc: "Thanks for contacting me. I'll review your message soon.", btnBack: "Back to form" }
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0e14]">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <Send size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">{content[language].success.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            {content[language].success.desc}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-8 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium"
          >
            {content[language].success.btnBack}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e14]">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLUMNA IZQUIERDA: Info y Redes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                {content[language].title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {content[language].description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{content[language].socialsTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* Email Directo */}
                 <a href="mailto:mauricioterrones98@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">Gmail</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/51933747950" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800 hover:border-green-500/50 transition-colors group">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg group-hover:scale-110 transition-transform">
                    <WhatsAppIcon />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">WhatsApp</span>
                </a>

                {/* LinkedIn */}
                <a href="https://pe.linkedin.com/in/mauricio-terrones-alayo-155538271" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800 hover:border-blue-700/50 transition-colors group">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/MauricioF68" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800 hover:border-purple-500/50 transition-colors group">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 dark:bg-[#151921] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{content[language].labels.name}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">{content[language].labels.email}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">{content[language].labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {content[language].labels.sending}
                  </>
                ) : (
                  <>
                    {content[language].labels.btnSend}
                    <Send size={18} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </main>
    </div>
  );
}