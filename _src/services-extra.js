// Extra depth for the pages that already get Google impressions: Marc's own view + more FAQs.
// Inserted before the "how we work" section of each page.
const VIEW = {
  'psicologo-duelo-barcelona.html': {
    h: 'Cómo veo el duelo',
    p: [
      'El dolor de una pérdida no es algo que haya que quitar. Es la forma que tiene el amor de seguir presente cuando la persona, la relación o la etapa ya no está. Lo que suele hacer daño no es sentirlo, sino tener que esconderlo, aguantarlo solo o pensar que ya deberías estar mejor.',
      'En terapia no intento que dejes de sentir. Trabajamos para que puedas estar con la tristeza, la rabia o la culpa sin que te desborden, y para darle lugar a lo que quedó por decir. Sentir no es malo: es lo que permite que el duelo avance.'
    ],
    faq: [
      ['¿Es normal sentir rabia o alivio después de una muerte?', 'Sí. En el duelo aparecen emociones que a veces sorprenden o avergüenzan: rabia, alivio, culpa, o no sentir nada. Todas tienen sentido y en terapia hay espacio para ellas.'],
      ['¿La terapia me hará olvidar?', 'No. El objetivo no es olvidar ni “pasar página”, sino poder llevar la pérdida de una forma que te permita seguir viviendo.']
    ]
  },
  'grief-counselling-in-english.html': {
    h: 'How I see grief',
    p: [
      "The pain of a loss isn't something to get rid of. It's the way love stays present when the person, the relationship or a stage of life is gone. What usually hurts most isn't feeling it, but having to hide it, carry it alone or believe you should be over it by now.",
      "In therapy I don't try to make you stop feeling. We work so you can stay with sadness, anger or guilt without being overwhelmed, and make room for what was left unsaid. Feeling is not bad: it's what lets grief move."
    ],
    faq: [
      ['Is it normal to feel anger or relief after a death?', 'Yes. Grief brings emotions that can surprise or embarrass us: anger, relief, guilt, or feeling nothing at all. They all make sense, and there is room for them in therapy.'],
      ['Will therapy help me forget?', "No. The aim isn't to forget or “move on”, but to carry the loss in a way that lets you keep living."]
    ]
  },
  'psicologo-ansiedad-barcelona.html': {
    h: 'Cómo veo la ansiedad',
    p: [
      'La ansiedad no es un fallo que haya que extirpar. Muchas veces es una señal: algo que sientes y no te permites sentir, algo que necesitas y no te atreves a pedir, o un ritmo de vida que ya no puedes sostener.',
      'Por eso no trabajo con técnicas para apagarla. En sesión la miramos cuando aparece y vamos ampliando tu capacidad de sostener lo que hay debajo. Cuando lo que sientes tiene sitio, la ansiedad suele perder fuerza.'
    ],
    faq: [
      ['¿Me vas a dar técnicas de relajación o ejercicios?', 'No es mi forma de trabajar. No busco que controles la ansiedad, sino que entiendas qué te está diciendo y puedas sostener lo que hay detrás. Si buscas técnicas concretas, te puedo orientar hacia otro profesional.'],
      ['¿Qué hago si tengo un ataque de pánico en la sesión?', 'Lo atendemos juntos, con calma y en el momento. Muchas veces es una oportunidad para ver qué está pasando mientras ocurre.']
    ]
  },
  'anxiety-therapy-in-english.html': {
    h: 'How I see anxiety',
    p: [
      "Anxiety isn't a fault to be cut out. It's often a signal: something you feel but don't allow yourself to feel, something you need but don't dare to ask for, or a pace of life you can no longer sustain.",
      "So I don't work with techniques to switch it off. In session we look at it when it shows up, and gradually widen your capacity to hold what lies underneath. When what you feel has room, anxiety tends to lose its grip."
    ],
    faq: [
      ['Will you give me relaxation techniques or exercises?', "That isn't how I work. I don't aim for you to control anxiety, but to understand what it's telling you and hold what's behind it. If you want specific techniques, I can point you to another professional."],
      ['Where are sessions held?', 'At my practice on Carrer de la Diputació 153 and at Clínica ART (Carrer de la Diputació 176), both in the Eixample, or by video call from anywhere in Spain.']
    ]
  },
  'therapy-for-expats.html': {
    h: 'How I see life between countries',
    p: [
      "Moving abroad isn't only practical. You leave behind people, places and a version of yourself, and much of that loss goes unnoticed while you're busy building a new life. I'm the son of an English father and a Barcelona mother, and I know from the inside what it's like to belong to two places at once.",
      "In therapy we make room for what moving has stirred up: loneliness, homesickness, doubt about staying, or feeling you have to be fine all the time. Feeling it isn't a sign that something went wrong. It's part of arriving."
    ],
    faq: [
      ['Is it normal to feel low even though I chose to move?', "Yes. Choosing something doesn't mean it costs nothing. Missing home and wanting to be here can exist at the same time."]
    ]
  },
  'psicologo-eixample.html': {
    h: 'Cómo trabajo',
    p: [
      'Trabajo desde la Gestalt y el psicoanálisis relacional. No extirpamos emociones ni te doy soluciones desde fuera: ampliamos tu capacidad de estar con lo que sientes y sostenerlo, porque las emociones son sabias y te orientan.',
      'Las tres primeras sesiones son de exploración y en la cuarta empieza el tratamiento: hablamos de los objetivos y establecemos un plan. Si buscas consejos o una solución rápida, probablemente no soy tu terapeuta. <a href="/terapia-gestalt-barcelona.html">Más sobre la terapia Gestalt</a>.'
    ],
    faq: [
      ['¿Cuánto cuesta y cuánto dura una sesión?', '70 € por sesión individual, de 45 a 50 minutos.'],
      ['¿Haces terapia de pareja?', 'No. Trabajo en terapia individual. Muchas dificultades de pareja se pueden trabajar desde uno mismo.']
    ]
  }
};
module.exports = ALL => {
  for (const [file, v] of Object.entries(VIEW)) {
    const s = ALL.find(x => x.file === file);
    if (!s) throw new Error('services-extra: missing ' + file);
    const at = s.sections.findIndex(x => /trabaj|work|Cómo llegar/i.test(x.h));
    s.sections.splice(at < 0 ? 0 : at, 0, { h: v.h, p: v.p });
    // add FAQs before the location/price questions, skipping duplicates
    for (const q of v.faq) if (!s.faq.some(f => f[0] === q[0])) s.faq.splice(Math.max(0, s.faq.length - 2), 0, q);
  }
};
