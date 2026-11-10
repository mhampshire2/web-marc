// Legal pages (Spanish only): aviso legal and política de privacidad
const TITULAR = 'Marc Hampshire Viñamata';
const NIF = '23816344M';
const DIR = 'Carrer de la Diputació 153, 08011 Barcelona';
const EMAIL = 'terapiaham@gmail.com';
const TEL = '+34 624 08 03 67';
const UPDATED = '10 de noviembre de 2026';

module.exports = [
  {
    file: 'aviso-legal.html',
    title: 'Aviso legal | Marc Hampshire, Psicólogo',
    desc: 'Aviso legal de marchampshire.com: datos del titular, colegiación y condiciones de uso de la web.',
    h1: 'Aviso legal',
    body: `
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI), se facilitan los datos del titular de esta web.</p>

<h2>Titular</h2>
<ul>
  <li><strong>Nombre:</strong> ${TITULAR}</li>
  <li><strong>NIF:</strong> ${NIF}</li>
  <li><strong>Dirección profesional:</strong> ${DIR}</li>
  <li><strong>Correo electrónico:</strong> <a href="mailto:${EMAIL}">${EMAIL}</a></li>
  <li><strong>Teléfono:</strong> ${TEL}</li>
  <li><strong>Actividad:</strong> psicología sanitaria (psicólogo general sanitario)</li>
</ul>

<h2>Profesión regulada</h2>
<ul>
  <li><strong>Titulación:</strong> Máster en Psicología General Sanitaria, título oficial expedido en España.</li>
  <li><strong>Colegio profesional:</strong> Col·legi Oficial de Psicologia de Catalunya (COPC), número de colegiado 30868.</li>
  <li><strong>Normas profesionales:</strong> el ejercicio se rige por el Código Deontológico de la Psicología y por la normativa sanitaria aplicable, que puedes consultar en <a href="https://www.copc.cat" target="_blank" rel="noopener">copc.cat</a>.</li>
</ul>

<h2>Uso de la web</h2>
<p>La información de esta web es orientativa y no sustituye una valoración profesional. Ni el contenido ni el intercambio de mensajes crean por sí mismos una relación terapéutica: esta empieza cuando acordamos iniciar las sesiones.</p>
<p>Si estás en crisis o te preocupa tu seguridad, llama al 112 (emergencias) o al 024 (línea de atención a la conducta suicida, gratuita y disponible las 24 horas).</p>

<h2>Propiedad intelectual</h2>
<p>Los textos, el diseño y las fotografías de esta web pertenecen a su titular o se usan con permiso. No está permitida su reproducción con fines comerciales sin autorización.</p>

<h2>Enlaces externos</h2>
<p>La web enlaza a servicios de terceros (Google Calendar para reservar, WhatsApp, Google Maps y Doctoralia). No me hago responsable de su contenido ni de sus políticas, que conviene revisar en cada caso.</p>

<h2>Legislación aplicable</h2>
<p>Este aviso se rige por la legislación española.</p>

<p class="muted">Última actualización: ${UPDATED}. Consulta también la <a href="/privacidad.html">política de privacidad</a>.</p>
`
  },
  {
    file: 'privacidad.html',
    title: 'Política de privacidad | Marc Hampshire, Psicólogo',
    desc: 'Cómo trato tus datos personales y de salud: finalidad, base legal, conservación, destinatarios y tus derechos.',
    h1: 'Política de privacidad',
    body: `
<p>Como psicólogo trato datos especialmente protegidos, entre ellos datos de salud. Te explico qué hago con ellos de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>

<h2>Responsable del tratamiento</h2>
<p>${TITULAR}, NIF ${NIF}. Dirección profesional: ${DIR}. Contacto: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

<h2>Qué datos trato</h2>
<ul>
  <li><strong>Datos de contacto</strong> que me das al escribirme, llamarme o reservar una cita: nombre, teléfono, correo electrónico y el motivo de tu mensaje.</li>
  <li><strong>Datos clínicos</strong> si iniciamos terapia: la información que compartes en las sesiones y las notas que forman tu historia clínica.</li>
  <li><strong>Datos de facturación:</strong> nombre, NIF o documento de identidad y dirección, cuando son necesarios para emitir la factura.</li>
</ul>

<h2>Para qué y con qué base legal</h2>
<ul>
  <li><strong>Responder a tus consultas y gestionar citas:</strong> tu consentimiento y las medidas previas a iniciar la terapia.</li>
  <li><strong>Prestarte la atención psicológica y llevar tu historia clínica:</strong> la relación profesional que acordamos y la prestación de asistencia sanitaria por un profesional sujeto a secreto profesional (art. 9.2.h RGPD).</li>
  <li><strong>Facturación y obligaciones fiscales:</strong> el cumplimiento de obligaciones legales.</li>
</ul>
<p>No uso tus datos para publicidad ni tomo decisiones automatizadas sobre ti.</p>

<h2>Cuánto tiempo los conservo</h2>
<ul>
  <li><strong>Consultas que no llegan a iniciar terapia:</strong> el tiempo necesario para atenderlas, y como máximo un año.</li>
  <li><strong>Historia clínica:</strong> el plazo que exige la normativa sanitaria catalana (Ley 21/2000), que es de un mínimo de 15 años desde el alta de cada proceso asistencial.</li>
  <li><strong>Facturas:</strong> el plazo que exige la normativa fiscal y mercantil.</li>
</ul>

<h2>Quién más puede acceder a ellos</h2>
<p>Tus datos clínicos están protegidos por el secreto profesional y no se comunican a terceros salvo obligación legal o consentimiento expreso. Para gestionar la consulta uso proveedores que actúan como encargados del tratamiento:</p>
<ul>
  <li>Google (correo y calendario de citas) y WhatsApp (mensajería), si eliges esas vías de contacto.</li>
  <li>Vercel (alojamiento de esta web).</li>
  <li>Mi gestoría, solo con los datos de facturación.</li>
</ul>
<p>Los datos de facturación también se comunican a la Agencia Tributaria cuando la ley lo exige.</p>
<p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos lo hacen con las garantías que exige el RGPD, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.</p>

<h2>Cookies y estadísticas</h2>
<p>Esta web no instala cookies propias. Para saber cuántas personas la visitan uso Vercel Web Analytics, que funciona sin cookies y no te identifica personalmente.</p>
<p>La sección de opiniones muestra un widget de Doctoralia (Docplanner), que se carga desde sus servidores y puede usar sus propias cookies. Puedes consultar su política en <a href="https://www.doctoralia.es/privacidad" target="_blank" rel="noopener">doctoralia.es/privacidad</a>.</p>

<h2>Menores de edad</h2>
<p>Si tienes menos de 16 años, para iniciar terapia necesito el consentimiento de tus padres o tutores legales, salvo en los casos en que la ley te permite decidir por tu cuenta.</p>

<h2>Tus derechos</h2>
<p>Puedes pedirme el acceso a tus datos, su rectificación o supresión, la limitación u oposición a su tratamiento y su portabilidad, así como retirar tu consentimiento en cualquier momento. Escríbeme a <a href="mailto:${EMAIL}">${EMAIL}</a>. Ten en cuenta que la historia clínica debe conservarse durante el plazo legal aunque pidas su supresión.</p>
<p>Si consideras que no he tratado bien tus datos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>).</p>

<p class="muted">Última actualización: ${UPDATED}. Consulta también el <a href="/aviso-legal.html">aviso legal</a>.</p>
`
  }
];
