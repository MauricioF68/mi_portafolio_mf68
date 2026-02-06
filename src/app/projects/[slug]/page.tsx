// src/app/projects/[slug]/page.tsx (SERVER COMPONENT)
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient"; // Importamos el componente cliente que acabamos de crear

// 1. Generación Estática (Server Side) - ESTO ES LO QUE NETLIFY NECESITA
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. Componente Principal (Server Side)
// Recupera los datos y se los pasa al hijo
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Renderizamos el componente CLIENTE y le pasamos el proyecto como PROP
  return <ProjectDetailClient project={project} />;
}