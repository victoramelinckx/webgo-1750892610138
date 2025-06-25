
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Digitales en 24 horas." subheadline="Transformamos tu negocio físico a online rápido y sin complicaciones con soporte continuo." cta1="Comienza Ahora" />
<How step1Title="Contáctanos" step1Desc="Dinos sobre tu negocio actual." step2Title="Creamos tu web" step2Desc="Sitio de ventas listo en 24 horas." step3Title="Soporte constante" step3Desc="Asistencia 24/7 para vender más." />
<Aboutus headline="WebGo: Transforma Ventas en Santiago" subheadline="Digitalizamos tu negocio, sin complicaciones. Aumenta ventas online sin esfuerzo personal." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo por ti." beneficiotitulo2="Ventas Aseguradas" beneficio2="Transformamos recomendaciones en ventas online." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="WebGo transforma tu presencia online con cscad en un día." services={[{"name":"Creación Instantánea","icon":"flash","description":"Lanza tu web en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu tranquilidad."},{"name":"SEO Optimización","icon":"search","description":"Aparece más rápido en búsquedas."},{"name":"Marketing Digital","icon":"bullhorn","description":"Crece tu audiencia online eficazmente."},{"name":"E-commerce","icon":"shopping-cart","description":"Vende productos directamente desde tu web."},{"name":"Análisis de Rendimiento","icon":"chart-line","description":"Mejora continua con datos precisos."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en resultados visuales impresionantes y efectivos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online efectiva para que tus productos lleguen a más personas. Con nuestro servicio, puedes tener una tienda online que incrementa tu visibilidad y te ayuda a generar ventas más allá del boca a boca."},{"pregunta":"¿Qué beneficios obtendré al contratar los servicios de WebGo?","respuesta":"Con WebGo, no solo tendrás un sitio web profesional, sino también más tiempo para dedicarte a tu negocio. Nosotros nos encargamos de la gestión online, para que puedas enfocarte en lo que mejor haces: atender a tus clientes."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me facilita esto WebGo?","respuesta":"WebGo se encarga de todo el proceso, desde la creación hasta la gestión diaria de tu sitio web. Así, no necesitas preocuparte por nada técnico y puedes seguir concentrándote en tu negocio."},{"pregunta":"¿Es costoso contratar los servicios de WebGo para digitalizar mis ventas?","respuesta":"WebGo ofrece precios competitivos que se adaptan a tu presupuesto, asegurándote un retorno de inversión a través de un aumento en tus ventas online. Es una inversión en el crecimiento de tu negocio."},{"pregunta":"¿Cómo genera WebGo ventas online si nunca lo he hecho antes?","respuesta":"En WebGo, implementamos estrategias de marketing digital que atraen a nuevos clientes a tu tienda online. Optimizamos tu sitio para SEO, lo que aumenta tu visibilidad en buscadores y hace que los clientes te encuentren fácilmente."}]} />
<BookAppointment 
                      heading="Impulsa Tu Negocio en Santiago" 
                      description="Transforma tus referencias en ventas digitales con WebGo y olvídate de gestionar la web por ti mismo. Precio: fdafadf."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
