// Content for the service landing pages (English and Spanish)
const PRICE_EN = ['Individual therapy', '€70', 'The first three sessions last an hour; after that, 45 to 50 minutes.'];
const PRICE_ES = ['Terapia individual', '70 €', 'Las tres primeras sesiones duran una hora; después, de 45 a 50 minutos.'];
const CRISIS_EN = "If you're in crisis or worried about your safety, call 112 (emergencies) or 024 (Spain's suicide prevention line, free and available 24 hours).";
const CRISIS_ES = 'Si estás en crisis o te preocupa tu seguridad, llama al 112 (emergencias) o al 024 (línea de atención a la conducta suicida, gratuita y disponible las 24 horas).';

module.exports = [
  {
    lang: 'en',
    file: 'anxiety-therapy-in-english.html',
    alt: { es: 'psicologo-ansiedad-barcelona.html' },
    title: 'Anxiety Therapy in English in Barcelona & Online | Marc Hampshire',
    desc: 'Therapy for anxiety, stress and panic attacks in English with a native-speaking psychologist in Barcelona or online across Spain. Free 15-minute call.',
    crumb: 'Anxiety therapy in English',
    h1: 'Anxiety therapy in English in Barcelona',
    lead: 'Therapy for anxiety, stress and panic attacks with a licensed psychologist who is a native English speaker. In person in the Eixample or online from anywhere in Spain.',
    sections: [
      {
        h: 'What anxiety can look like',
        list: [
          ['Constant worry', 'Thoughts that keep circling and are hard to switch off, especially at night.'],
          ['Panic attacks', 'Sudden episodes of a racing heart, shortness of breath or the fear of losing control.'],
          ['Physical tension', 'Tight chest or shoulders, stomach problems, headaches or exhaustion.'],
          ['Avoidance', 'Turning down plans, putting off calls or avoiding situations that feel overwhelming.'],
          ['Work stress and burnout', 'Feeling you never get on top of things and can no longer rest properly.'],
          ['Anxiety abroad', 'Living far from your usual support network, dealing with bureaucracy or working in a second language can make everything feel heavier.']
        ]
      },
      {
        h: 'How we work',
        p: [
          'In the first sessions we look at when the anxiety started, what triggers it and what keeps it going. From there we set clear goals.',
          'I combine Gestalt therapy, which helps you notice what is happening in your body and mind in the moment, with tools from cognitive behavioural therapy and mindfulness: understanding anxious thinking, gradually facing what you avoid and learning to calm your nervous system. Panic attacks and generalised worry are among the problems that respond well to psychological therapy.',
          "As a psychologist I don't prescribe medication. If it seems useful, I can suggest you speak to your GP or a psychiatrist alongside therapy."
        ]
      }
    ],
    note: CRISIS_EN,
    price: PRICE_EN,
    faq: [
      ['Do I need a diagnosis to start?', "No. You only need to feel that something isn't going well and that you'd like help with it."],
      ['How long does anxiety therapy take?', 'It is a medium to long process, usually several months or more: understanding what keeps anxiety going takes time, and I do not offer quick fixes. We review progress together throughout, and I can also see you for an acute crisis.'],
      ['Can I do sessions online?', 'Yes, by video call from anywhere in Spain. You just need a quiet, private space.'],
      ['I already take medication. Can I still do therapy?', 'Yes. Therapy and medication are often combined. Just let me know so we can take it into account.']
    ]
  },
  {
    lang: 'en',
    file: 'therapy-for-expats.html',
    title: 'Expat Therapist in Barcelona | Therapy & Counselling in English',
    desc: 'Expat therapist in Barcelona: therapy and counselling in English for expats and international students. Native-speaking psychologist, Eixample or online.',
    crumb: 'Therapy for expats',
    h1: 'Therapy and counselling for expats in Barcelona',
    lead: "Moving to Barcelona can be exciting and, at the same time, lonely and disorienting. I'm half English and have lived between two cultures myself, and I offer therapy and counselling in English to expats, international students and relocated professionals, in person or online.",
    sections: [
      {
        h: 'What expats often bring to therapy',
        list: [
          ['Adjusting to a new country', 'Culture shock, bureaucracy and the gap between what you expected and what daily life is really like.'],
          ['Loneliness', 'Building a social life from scratch, or feeling alone even when you are surrounded by people.'],
          ['Identity', 'Not feeling fully at home here or there, and questions about who you are in a new context.'],
          ['Relationships and family', 'Long-distance relationships, a partner who moved for you or you for them, and family back home.'],
          ['Grief from a distance', 'Losses, illness or important events at home that you live through from far away.'],
          ['Staying or going', 'Deciding whether to settle in Spain, move on or return home.']
        ]
      },
      {
        h: 'How we work',
        p: [
          'We start by understanding your situation: why you came, what has been hard and what you would like to change. Then we set goals and work on them together, at a pace that suits you.',
          "My approach is integrative and based on Gestalt therapy, with tools from cognitive behavioural therapy and attachment theory. Sessions can be entirely in English, or move between English and Spanish if you're learning the language and want to.",
          'I also work with international students, including online sessions from anywhere in Spain.'
        ]
      }
    ],
    price: PRICE_EN,
    faq: [
      ["Can I start therapy if I don't speak Spanish?", 'Yes. The whole process can be in English: the first call, sessions, messages and invoices.'],
      ['Do you work with international students?', 'Yes. Many students come to therapy for stress, loneliness, homesickness or decisions about the future.'],
      ['I live outside Barcelona. Can we work online?', 'Yes, by video call from anywhere in Spain.'],
      ['Can you provide invoices for my insurance?', 'I provide an invoice for every session. Whether it is reimbursed depends on your insurer, so check your policy first.']
    ]
  },
  {
    lang: 'en',
    file: 'depression-therapy-in-english.html',
    title: 'Depression Therapy in English in Barcelona | Marc Hampshire',
    desc: 'Therapy for depression and low mood in English with a native-speaking psychologist in Barcelona (Eixample) or online across Spain. Free 15-minute call.',
    crumb: 'Depression therapy in English',
    h1: 'Depression therapy in English in Barcelona',
    lead: "Help with low mood, loss of motivation and the sense that nothing quite matters any more, from a licensed psychologist who is a native English speaker. In person in the Eixample or online from anywhere in Spain.",
    sections: [
      {
        h: 'What depression can feel like',
        list: [
          ['Low mood most days', 'Sadness, emptiness or numbness that lasts for weeks rather than days.'],
          ['Loss of interest', 'Things you used to enjoy feel flat, and it takes a huge effort to start anything.'],
          ['Tiredness and sleep', 'Sleeping too much or too little, and waking up already exhausted.'],
          ['Harsh self-criticism', 'Thoughts of being a failure, a burden or not good enough.'],
          ['Withdrawing', 'Cancelling plans, not answering messages and spending more time alone.'],
          ['Far from home', 'Living abroad can deepen low mood: fewer people around you, less sunlight in winter, and no one who has known you for years.']
        ]
      },
      {
        h: 'How we work',
        p: [
          'In the first sessions we look at how you are now, how long it has been like this and what may be feeding it. We agree on goals that feel realistic, even if right now everything feels difficult.',
          'My approach is integrative and based on Gestalt therapy: making room for what you feel instead of fighting it, and noticing how you relate to yourself and others. I combine it with tools from cognitive behavioural therapy, such as gradually returning to activities that give you energy and questioning the harshest thoughts.',
          "As a psychologist I don't prescribe medication. When depression is severe, therapy often works best alongside a GP or psychiatrist, and I can help you take that step."
        ]
      }
    ],
    note: CRISIS_EN,
    price: PRICE_EN,
    faq: [
      ['How do I know if it is depression or just a bad patch?', "If low mood, tiredness or loss of interest last more than a couple of weeks and affect your work, relationships or sleep, it's worth talking to someone. We can look at it together in the free call."],
      ['Can therapy help without medication?', 'For many people, yes, especially with mild to moderate depression. In more severe cases a combination of therapy and medication usually works best.'],
      ['Can we do sessions online?', 'Yes, by video call from anywhere in Spain. For some people with depression, not having to leave the house makes it easier to start.'],
      ['How often are sessions?', 'We agree on the frequency together, depending on how you are and what you need.']
    ]
  },
  {
    lang: 'en',
    file: 'burnout-therapy-in-english.html',
    title: 'Burnout & Work Stress Therapy in English | Barcelona & Online',
    desc: 'Therapy in English for burnout and work stress with a native-speaking psychologist in Barcelona or online across Spain. Evening sessions, free 15-min call.',
    crumb: 'Burnout therapy in English',
    h1: 'Burnout and work stress therapy in English',
    lead: "For professionals who can no longer switch off: exhaustion, irritability and the feeling of never getting on top of things. Therapy in English with a native-speaking psychologist, in the Eixample or online, with evening appointments.",
    sections: [
      {
        h: 'Signs of burnout',
        list: [
          ['Exhaustion', 'Tired all the time, even after a weekend or holiday.'],
          ['Cynicism and distance', 'Caring less about work you used to value, or feeling detached from colleagues and clients.'],
          ['Not switching off', 'Checking email late at night, thinking about work in bed and struggling to rest.'],
          ['Irritability', 'A shorter fuse with your partner, friends or yourself.'],
          ['Physical signs', 'Headaches, stomach problems, getting ill more often or tension in your neck and shoulders.'],
          ['Working in a second language', 'Relocated professionals often carry extra load: a new culture at work, a new language and less support outside it.']
        ]
      },
      {
        h: 'How we work',
        p: [
          'We look at what is driving the overload: the demands of the job, how you respond to them, and patterns such as perfectionism or difficulty saying no.',
          'From a Gestalt and integrative approach, we work on noticing your limits earlier, recovering rest that actually restores you and making decisions about work from a clearer place. I also use practical tools from cognitive behavioural therapy and mindfulness.',
          'Sessions run on Tuesday to Thursday evenings and Friday afternoons, so they can fit around a working day.'
        ]
      }
    ],
    price: PRICE_EN,
    faq: [
      ['Is burnout a diagnosis?', "Burnout is recognised by the World Health Organization as an occupational phenomenon, not a medical diagnosis. You don't need a diagnosis to start therapy."],
      ['Do you offer evening sessions?', 'Yes. Tuesday to Thursday from 4 to 9 pm, and Friday from 3 to 7:30 pm.'],
      ['Can I do sessions online from the office or home?', 'Yes, by video call from anywhere in Spain, as long as you have a private space.'],
      ['Will my employer find out?', 'No. Therapy is confidential, and invoices are issued to you.']
    ]
  },
  {
    lang: 'en',
    file: 'grief-counselling-in-english.html',
    alt: { es: 'psicologo-duelo-barcelona.html' },
    title: 'Grief Counselling in English in Barcelona | Marc Hampshire',
    desc: 'Grief counselling in English with a native-speaking psychologist in Barcelona or online: bereavement, loss from abroad, break-ups. Free 15-min call.',
    crumb: 'Grief counselling in English',
    h1: 'Grief counselling in English in Barcelona',
    lead: 'Support after the death of someone close, a loss lived from abroad, a break-up or a major life change. In English with a licensed psychologist who is a native speaker, in person or online.',
    sections: [
      {
        h: 'Losses people bring to therapy',
        list: [
          ['Bereavement', 'The death of a parent, partner, friend or pet, whether recent or years ago.'],
          ['Grieving from abroad', 'Losing someone back home while living in Spain: missing the funeral, guilt about the distance, grieving without the people who knew them.'],
          ['Break-ups and divorce', 'The end of a relationship, and with it a shared life and plans for the future.'],
          ['Life changes', 'Leaving a country, a career or a version of yourself behind.'],
          ['Grief that gets stuck', "When months or years later the pain still feels as raw as at the start, or you feel you can't let yourself grieve at all."]
        ]
      },
      {
        h: 'How we work',
        p: [
          "Grief isn't something to fix or rush. In therapy we make space for what you feel, including what is hard to say elsewhere: anger, guilt, relief or numbness.",
          'Gestalt therapy offers specific ways to work with what was left unsaid and with saying goodbye. Over time the aim is to carry the loss in a way that lets you keep living, not to forget.'
        ]
      }
    ],
    note: CRISIS_EN,
    price: PRICE_EN,
    faq: [
      ['How do I know if I need help with grief?', "There is no right timeline. It can help to talk to someone if the pain is getting in the way of daily life, if you feel stuck, or if you simply don't have space to grieve elsewhere."],
      ['Is it too soon, or too late, to start?', 'Neither. Some people come in the first weeks; others years later.'],
      ['Can we do sessions online?', 'Yes, by video call from anywhere in Spain.'],
      ['Do you work with grief after a break-up?', 'Yes. Losing a relationship is also a loss, and it often deserves the same care.']
    ]
  },
  {
    lang: 'en',
    file: 'online-therapy-in-english-spain.html',
    title: 'Online Therapy in English Across Spain | Licensed Psychologist',
    desc: 'Online therapy in English anywhere in Spain with a licensed, native-speaking psychologist (COPC 30868). Video sessions at €70. Free 15-minute call.',
    crumb: 'Online therapy in English in Spain',
    h1: 'Online therapy in English, anywhere in Spain',
    lead: "Video sessions in English with a licensed psychologist registered in Spain (COPC 30868) who is a native English speaker. Wherever you live, from Madrid or Valencia to a small village, you don't have to translate yourself to get help.",
    sections: [
      {
        h: 'Who online therapy suits',
        list: [
          ['Expats outside the big cities', 'Where it is hard to find a psychologist who works in English.'],
          ['Busy professionals', 'No travel time: a session fits into a lunch break or after work.'],
          ['International students', 'Support from your own room, in your own language.'],
          ['People who travel', 'Continuity of care while you move around Spain.'],
          ['Low energy or anxiety', 'When getting to an appointment is itself a barrier.']
        ]
      },
      {
        h: 'How it works',
        p: [
          'We start with a free 15-minute call to see what you need and whether I am the right person. Sessions then take place by video call: you only need a stable connection and a private space where you can talk freely.',
          'The work is the same as in person: an integrative approach based on Gestalt therapy, with tools from cognitive behavioural therapy and mindfulness. Research on online therapy shows it is effective for many common problems, such as anxiety and depression.',
          'If you are ever in Barcelona, sessions can also be in person at my practice in the Eixample.'
        ]
      }
    ],
    price: PRICE_EN,
    faq: [
      ['Is online therapy as effective as in person?', 'For most common difficulties, such as anxiety, depression and stress, research shows similar results. We can also review together whether it is working for you.'],
      ['Are you licensed to practise in Spain?', "Yes. I'm a licensed health psychologist (Psicólogo General Sanitario), registered with the Official College of Psychologists of Catalonia under no. 30868."],
      ['How much does it cost and how do I pay?', 'Each session is €70, the same as in person. You can pay by bank transfer or Bizum, and you receive an invoice for every session.']
    ]
  },
  {
    lang: 'es',
    file: 'psicologo-ansiedad-barcelona.html',
    alt: { en: 'anxiety-therapy-in-english.html' },
    title: 'Psicólogo para la ansiedad en Barcelona (Eixample) | Marc Hampshire',
    desc: 'Psicólogo para ansiedad, estrés y ataques de pánico en el Eixample, Barcelona, y online en toda España. En castellano, catalán o inglés. Llamada gratuita.',
    crumb: 'Psicólogo para la ansiedad',
    h1: 'Psicólogo para la ansiedad en Barcelona',
    lead: 'Terapia para la ansiedad, el estrés y los ataques de pánico con un psicólogo general sanitario colegiado. En consulta en el Eixample o por videollamada desde cualquier lugar de España.',
    sections: [
      {
        h: 'Cómo puede manifestarse la ansiedad',
        list: [
          ['Preocupación constante', 'Pensamientos que dan vueltas y cuesta apagar, sobre todo por la noche.'],
          ['Ataques de pánico', 'Episodios repentinos de taquicardia, falta de aire o miedo a perder el control.'],
          ['Tensión física', 'Opresión en el pecho, contracturas, problemas digestivos, dolor de cabeza o agotamiento.'],
          ['Evitación', 'Decir que no a planes, aplazar llamadas o evitar situaciones que te desbordan.'],
          ['Estrés laboral', 'La sensación de no llegar nunca a todo y de no poder descansar de verdad.'],
          ['Problemas de sueño', 'Dificultad para dormirte o despertarte de madrugada con la cabeza a mil.']
        ]
      },
      {
        h: 'Cómo trabajamos',
        p: [
          'En las primeras sesiones vemos cuándo empezó la ansiedad, qué la dispara y qué la mantiene. A partir de ahí fijamos objetivos claros.',
          'Combino la terapia Gestalt, que ayuda a darte cuenta de lo que ocurre en tu cuerpo y tu mente en el momento, con herramientas de la terapia cognitivo-conductual y del mindfulness: entender el pensamiento ansioso, afrontar poco a poco lo que evitas y aprender a calmar el sistema nervioso. Los ataques de pánico y la ansiedad generalizada responden bien a la terapia psicológica.',
          'Como psicólogo no receto medicación. Si es útil, puedo sugerirte que lo consultes con tu médico de cabecera o con un psiquiatra a la vez que haces terapia.'
        ]
      }
    ],
    note: CRISIS_ES,
    price: PRICE_ES,
    faq: [
      ['¿Necesito un diagnóstico para empezar?', 'No. Basta con sentir que algo no va bien y que quieres ayuda.'],
      ['¿Cuánto dura la terapia para la ansiedad?', 'Es un proceso de duración media o larga, normalmente de varios meses o más: entender qué mantiene la ansiedad requiere tiempo y no ofrezco soluciones rápidas. Revisamos el avance juntos y también puedo atender una crisis puntual.'],
      ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España. Solo necesitas un espacio tranquilo y privado.'],
      ['Ya tomo medicación. ¿Puedo hacer terapia?', 'Sí. Es habitual combinar terapia y medicación. Solo dímelo para tenerlo en cuenta.']
    ]
  },
  {
    lang: 'es',
    file: 'psicologo-duelo-barcelona.html',
    alt: { en: 'grief-counselling-in-english.html' },
    title: 'Psicólogo para el duelo en Barcelona (Eixample) | Marc Hampshire',
    desc: 'Terapia de duelo en el Eixample, Barcelona, y online: muerte de un ser querido, rupturas y cambios vitales. En castellano, catalán o inglés.',
    crumb: 'Psicólogo para el duelo',
    h1: 'Psicólogo para el duelo en Barcelona',
    lead: 'Acompañamiento tras la muerte de alguien cercano, una ruptura o un gran cambio vital. Con un psicólogo general sanitario colegiado, en el Eixample o por videollamada.',
    sections: [
      {
        h: 'Pérdidas que se trabajan en terapia',
        list: [
          ['Muerte de un ser querido', 'Un padre o una madre, la pareja, un amigo o una mascota, reciente o de hace años.'],
          ['Duelo a distancia', 'Perder a alguien en otro país o en otra ciudad, sin poder despedirte como te habría gustado.'],
          ['Rupturas y divorcios', 'El final de una relación y, con ella, de una vida y unos planes compartidos.'],
          ['Cambios vitales', 'Dejar atrás un país, un trabajo o una etapa de tu vida.'],
          ['Duelo que no avanza', 'Cuando meses o años después el dolor sigue igual de intenso, o sientes que no te has permitido llorar la pérdida.']
        ]
      },
      {
        h: 'Cómo trabajamos',
        p: [
          'El duelo no es algo que haya que arreglar ni acelerar. En terapia hacemos espacio a lo que sientes, también a lo que cuesta decir en otros sitios: rabia, culpa, alivio o insensibilidad.',
          'La terapia Gestalt tiene formas específicas de trabajar lo que quedó sin decir y la despedida. Con el tiempo, el objetivo no es olvidar, sino poder llevar la pérdida de una forma que te deje seguir viviendo.'
        ]
      }
    ],
    note: CRISIS_ES,
    price: PRICE_ES,
    faq: [
      ['¿Cómo sé si necesito ayuda con el duelo?', 'No hay un tiempo correcto. Puede ayudarte hablar con alguien si el dolor interfiere en tu día a día, si sientes que te has quedado atascado o si no tienes otro espacio donde vivirlo.'],
      ['¿Es demasiado pronto, o demasiado tarde, para empezar?', 'Ninguna de las dos cosas. Hay quien viene las primeras semanas y quien viene años después.'],
      ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España.'],
      ['¿También trabajas el duelo tras una ruptura?', 'Sí. Perder una relación también es una pérdida y merece el mismo cuidado.']
    ]
  },
  {
    lang: 'es',
    file: 'psicologo-eixample.html',
    title: 'Psicólogo en el Eixample, Barcelona | Marc Hampshire',
    desc: 'Consulta de psicología en Carrer de la Diputació 153, Eixample (metro Urgell). Terapia individual en castellano, catalán o inglés. 70 €. Llamada gratuita.',
    crumb: 'Psicólogo en el Eixample',
    h1: 'Psicólogo en el Eixample, Barcelona',
    lead: 'Atiendo en Carrer de la Diputació 153, en el Eixample, a pocos minutos a pie del metro Urgell. Terapia individual para adolescentes, adultos y mayores de 65, en castellano, catalán o inglés.',
    sections: [
      {
        h: 'Con qué te puedo ayudar',
        list: [
          ['Ansiedad y estrés', 'Preocupación constante, ataques de pánico, problemas de sueño o tensión física.'],
          ['Estado de ánimo bajo', 'Tristeza, apatía o la sensación de que nada te motiva.'],
          ['Relaciones', 'Dificultades en tus relaciones (de pareja, familiares o de otro tipo), patrones que se repiten y dependencia emocional. Trabajo en terapia individual.'],
          ['Duelo', 'Pérdidas, rupturas y cambios vitales difíciles de procesar.'],
          ['Autoestima', 'Autocrítica, inseguridad y la sensación de no ser suficiente.'],
          ['Adicciones', 'Consumo problemático de alcohol u otras sustancias y conductas compulsivas.']
        ]
      },
      {
        h: 'Cómo llegar y horarios',
        p: [
          '<strong>Dirección:</strong> Carrer de la Diputació 153, 08011 Barcelona. <a href="https://www.google.com/maps/search/?api=1&amp;query=Marc+Hampshire+Psic%C3%B3logo&amp;query_place_id=ChIJhSbvF2-jpBIR5Y-FHlcnc84" target="_blank" rel="noopener">Ver en Google Maps</a>.',
          '<strong>Metro:</strong> Urgell (L1), a pocos minutos a pie.',
          '<strong>Horario:</strong> de martes a jueves, de 16:00 a 21:00, y los viernes, de 15:00 a 19:30.',
          'Si no puedes venir, las sesiones también pueden ser por videollamada desde cualquier lugar de España.'
        ]
      }
    ],
    price: PRICE_ES,
    faq: [
      ['¿Cómo pido la primera cita?', 'Puedes reservar una llamada gratuita de 15 minutos, reservar directamente una sesión presencial o escribirme por WhatsApp.'],
      ['¿Atiendes en catalán o en inglés?', 'Sí. Hablo castellano e inglés como lenguas nativas, y también catalán.'],
      ['¿Cómo se paga?', 'Por transferencia o Bizum, y recibes factura de cada sesión.'],
      ['¿Trabajas con adolescentes?', 'Sí, con adolescentes, adultos y personas mayores de 65 años.']
    ]
  }
];
