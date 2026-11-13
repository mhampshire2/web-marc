// New Spanish service pages
module.exports = C => {
  const { PRICE_ES, PROCESS_ES, WHERE_ES, CRISIS_ES } = C;
  const FAQ_COST = ['¿Cuánto cuesta una sesión?', '70 € por sesión individual. Las tres primeras duran una hora; después, de 45 a 50 minutos.'];
  return [
    {
      lang: 'es',
      file: 'terapia-gestalt-barcelona.html',
      title: 'Terapia Gestalt en Barcelona (Eixample) | Psicoterapeuta Gestalt',
      desc: 'Terapia Gestalt individual en el Eixample, Barcelona, y online, con un psicólogo colegiado formado en el Institut Gestalt. Presente, darse cuenta y responsabilidad. 70 €.',
      crumb: 'Terapia Gestalt en Barcelona',
      h1: 'Terapia Gestalt en Barcelona',
      lead: 'Una psicoterapia humanista que parte de lo que te pasa ahora: lo que sientes, cómo te relacionas y qué haces con ello. Con un psicólogo general sanitario colegiado, formado en el Institut Gestalt de Barcelona.',
      sections: [
        {
          h: 'Qué es la terapia Gestalt',
          list: [
            ['El presente', 'No ignoramos tu historia, pero la miramos desde lo que sigue vivo hoy, en tu vida y en la sesión.'],
            ['El darse cuenta (awareness)', 'Notar qué sientes, qué haces y cómo lo haces es el primer paso para poder elegir de otra manera.'],
            ['La responsabilidad', 'No es culpa: es hacerte cargo de cómo vives lo que te pasa y de lo que puedes decidir desde ahí.'],
            ['El contacto', 'Cómo te encuentras con los demás, con lo que necesitas y con lo que evitas. Muchas veces es ahí donde aparece el malestar.'],
            ['La relación terapéutica', 'La relación entre tú y yo es parte del trabajo. Es el lugar donde tus patrones aparecen y donde podemos verlos mientras ocurren.']
          ]
        },
        {
          h: 'Cómo es una sesión',
          p: [
            'No hay un guion cerrado ni una lista de ejercicios. Hablamos de lo que traes y atiendo a lo que ocurre mientras hablamos: cómo cuentas las cosas, qué hace tu cuerpo, qué te cuesta decir. Estoy en la sesión como persona, no detrás de una técnica.',
            'Combino la Gestalt con el psicoanálisis relacional, que también presta mucha atención a lo que pasa entre los dos. Juntos dan una manera de trabajar pausada, honesta y centrada en entender, no en arreglar rápido.',
            'No es el enfoque adecuado para todo el mundo. Si lo que necesitas es un tratamiento muy estructurado para un problema muy concreto, te lo diré y te puedo orientar hacia otro profesional.'
          ]
        },
        PROCESS_ES
      ],
      price: PRICE_ES,
      faq: [
        ['¿Qué es la terapia Gestalt?', 'Es una psicoterapia humanista que pone la atención en lo que te pasa ahora: lo que sientes, cómo te relacionas y qué haces con ello. Se apoya en el darse cuenta (awareness) y en la responsabilidad, y da mucho peso a la relación entre paciente y terapeuta.'],
        ['¿En qué se diferencia de la terapia cognitivo-conductual?', 'La terapia cognitivo-conductual usa técnicas y ejercicios para modificar pensamientos y conductas concretas. En Gestalt trabajamos con lo que aparece en la sesión, para que te des cuenta de cómo vives lo que te pasa y puedas elegir desde ahí. Si buscas un tratamiento más estructurado, te puedo orientar hacia otro profesional.'],
        ['¿Necesito haber hecho terapia antes?', 'No. Solo hace falta sentir que algo no va bien y querer mirarlo.'],
        ['¿La Gestalt es solo para problemas graves?', 'No. Vienen personas con ansiedad, ánimo bajo, dificultades en las relaciones, duelo o agotamiento, y también simplemente para conocerse mejor.'],
        ['¿Qué formación tienes?', 'Me formé tres años como psicoterapeuta Gestalt en el Institut Gestalt de Barcelona y pasé otros tres años como observador en grupos terapéuticos. Soy psicólogo general sanitario, colegiado en el Col·legi Oficial de Psicologia de Catalunya (nº 30868).'],
        ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España.'],
        ['¿Dónde son las sesiones?', WHERE_ES],
        FAQ_COST
      ]
    },
    {
      lang: 'es',
      file: 'psicologo-depresion-barcelona.html',
      title: 'Psicólogo para la depresión en Barcelona (Eixample) | Marc Hampshire',
      desc: 'Terapia para la depresión y el ánimo bajo en el Eixample, Barcelona, y online: tristeza, apatía, falta de motivación y cansancio. Castellano, catalán o inglés. 70 €.',
      crumb: 'Psicólogo para la depresión',
      h1: 'Psicólogo para la depresión en Barcelona',
      lead: 'Ayuda cuando el ánimo está bajo, has perdido la motivación o sientes que nada importa. Con un psicólogo general sanitario colegiado, en el Eixample o por videollamada.',
      sections: [
        {
          h: 'Cómo puede sentirse la depresión',
          list: [
            ['Ánimo bajo casi todos los días', 'Tristeza, vacío o insensibilidad que duran semanas y no solo unos días.'],
            ['Pérdida de interés', 'Lo que antes disfrutabas ahora te resulta plano y empezar cualquier cosa cuesta un esfuerzo enorme.'],
            ['Cansancio y sueño', 'Dormir demasiado o muy poco y despertarte ya agotado.'],
            ['Autocrítica dura', 'Pensamientos de ser un fracaso, una carga o no estar a la altura.'],
            ['Aislamiento', 'Cancelar planes, no contestar mensajes y pasar cada vez más tiempo a solas.']
          ]
        },
        {
          h: 'Cómo trabajamos',
          p: [
            'En las primeras sesiones vemos cómo estás ahora, desde cuándo y qué puede estar alimentándolo. Acordamos objetivos realistas, aunque ahora todo cueste.',
            'Trabajo desde la psicoterapia Gestalt y el psicoanálisis relacional: hacer espacio a lo que sientes en lugar de pelearte con ello, y notar aquí y ahora cómo te relacionas contigo y con los demás. A menudo la planitud de la depresión tapa otra cosa, como rabia, duelo o un deseo al que renunciaste, y vale la pena encontrarla.',
            'Como psicólogo no receto medicación. Cuando la depresión es intensa, la terapia suele funcionar mejor junto con tu médico de cabecera o un psiquiatra, y puedo ayudarte a dar ese paso.'
          ]
        },
        PROCESS_ES
      ],
      note: CRISIS_ES,
      price: PRICE_ES,
      faq: [
        ['¿Cómo sé si es depresión o una mala racha?', 'Si el ánimo bajo, el cansancio o la pérdida de interés duran más de un par de semanas y afectan a tu trabajo, tus relaciones o tu sueño, vale la pena hablarlo. En la llamada gratuita lo vemos juntos.'],
        ['¿Puede ayudar la terapia sin medicación?', 'Para mucha gente sí, sobre todo en depresiones leves o moderadas. En casos más intensos suele funcionar mejor combinar terapia y medicación.'],
        ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España. Para algunas personas, no tener que salir de casa facilita empezar.'],
        ['¿Con qué frecuencia son las sesiones?', 'Lo acordamos juntos según cómo estés y lo que necesites. Normalmente, semanales al principio.'],
        ['¿Dónde son las sesiones?', WHERE_ES],
        FAQ_COST
      ]
    },
    {
      lang: 'es',
      file: 'psicologo-trauma-barcelona.html',
      title: 'Psicólogo para el trauma en Barcelona (Eixample) | Marc Hampshire',
      desc: 'Terapia para las secuelas de experiencias difíciles del pasado en el Eixample, Barcelona, y online: a tu ritmo, en castellano, catalán o inglés. 70 €. Llamada gratuita.',
      crumb: 'Psicólogo para el trauma',
      h1: 'Psicólogo para el trauma en Barcelona',
      lead: 'Hay experiencias difíciles del pasado que siguen pesando hoy: en el cuerpo, en las relaciones o en cómo te ves. Terapia individual, a tu ritmo, con un psicólogo general sanitario colegiado.',
      sections: [
        {
          h: 'Cómo puede notarse lo vivido',
          list: [
            ['Revivir lo ocurrido', 'Recuerdos, imágenes o pesadillas que vuelven sin avisar.'],
            ['Estar en alerta', 'Sobresaltarte con facilidad y tener dificultad para relajarte o dormir.'],
            ['Evitar', 'Lugares, personas o conversaciones que te recuerdan lo vivido, o desconectarte para no sentir.'],
            ['Cómo te ves', 'Culpa, vergüenza o la sensación de que algo está mal en ti.'],
            ['Las relaciones', 'Dificultad para confiar, acercarte o poner límites.'],
            ['Experiencias de la infancia', 'Situaciones vividas de pequeño que, aunque no sean un único hecho, marcaron tu manera de relacionarte.']
          ]
        },
        {
          h: 'Cómo trabajamos',
          p: [
            'No hace falta contarlo todo desde el primer día. El ritmo lo marcas tú. Lo primero es construir seguridad y confianza en la relación y entender qué necesitas.',
            'Trabajo desde la psicoterapia Gestalt y el psicoanálisis relacional. Miramos lo que el pasado deja en el presente: cómo se nota en el cuerpo, en tus relaciones y en la propia sesión. No te empujo a revivir lo ocurrido antes de que haya una base que lo sostenga.',
            'Si necesitas un tratamiento específico para el estrés postraumático, te lo diré con honestidad y te puedo orientar hacia un profesional adecuado.'
          ]
        },
        PROCESS_ES
      ],
      note: CRISIS_ES + ' Si sufres violencia, puedes llamar al 016 (gratuito y confidencial, las 24 horas).',
      price: PRICE_ES,
      faq: [
        ['¿Tengo que contarte todo lo que me pasó?', 'No. Decides tú qué compartir y cuándo. Empezamos desde donde estás.'],
        ['¿Y si no sé si lo mío es un trauma?', 'No hace falta una etiqueta para venir. Si algo del pasado sigue pesándote, merece atención.'],
        ['¿Puedes ayudarme con algo que ha pasado hace poco?', 'Sí. Si estás mal tras un hecho reciente puedo atenderte en una crisis puntual y vemos juntos qué necesitas después.'],
        ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España, desde un lugar donde te sientas seguro y con privacidad.'],
        ['¿Dónde son las sesiones?', WHERE_ES],
        FAQ_COST
      ]
    },
    {
      lang: 'es',
      file: 'psicologo-en-ingles-barcelona.html',
      title: 'Psicólogo en inglés en Barcelona | Terapia en inglés nativo',
      desc: 'Psicólogo que habla inglés en Barcelona (Eixample) y online: terapia en inglés con un psicólogo colegiado de lengua materna inglesa, también en castellano o catalán. 70 €.',
      crumb: 'Psicólogo en inglés',
      h1: 'Psicólogo en inglés en Barcelona',
      lead: 'Hablar de lo que sientes en tu propio idioma, sin tener que traducirte. Terapia en inglés con un psicólogo general sanitario colegiado para quien vive en Barcelona o en el resto de España.',
      sections: [
        {
          h: 'Para quién puede ser útil',
          list: [
            ['Expatriados y profesionales desplazados', 'Personas que se han mudado a Barcelona y quieren apoyo en su idioma.'],
            ['Estudiantes internacionales', 'Erasmus, másteres y grados lejos de casa.'],
            ['Personas que llevan años en España', 'Que dominan el castellano pero sienten que lo importante lo dicen mejor en inglés.'],
            ['Familias y parejas bilingües', 'Con culturas e idiomas mezclados.'],
            ['Quien prefiere el inglés para hablar de emociones', 'Porque en su idioma de estudio o de trabajo le resulta más natural.']
          ]
        },
        {
          h: 'Cómo trabajamos',
          p: [
            'Soy medio inglés y el inglés es una de mis lenguas maternas; también hablo castellano como lengua nativa y catalán. La terapia puede ser íntegramente en inglés o combinar idiomas, según lo que te resulte más cómodo.',
            'Trabajo desde la psicoterapia Gestalt y el psicoanálisis relacional, con un proceso de exploración y no de soluciones rápidas.',
            'Puedes ver más en las páginas en inglés: <a href="/therapy-for-expats.html" hreflang="en">therapy for expats</a>, <a href="/anxiety-therapy-in-english.html" hreflang="en">anxiety therapy in English</a> y <a href="/online-therapy-in-english-spain.html" hreflang="en">online therapy in English</a>.'
          ]
        },
        PROCESS_ES
      ],
      price: PRICE_ES,
      faq: [
        ['¿La terapia puede ser solo en inglés?', 'Sí. Desde la llamada inicial hasta las facturas, todo el proceso puede ser en inglés.'],
        ['¿Puedo mezclar inglés y castellano?', 'Sí. Hay quien empieza en inglés y va incorporando el castellano, o al revés.'],
        ['¿Se puede hacer online?', 'Sí, por videollamada desde cualquier lugar de España.'],
        ['¿Estás colegiado?', 'Sí. Soy psicólogo general sanitario, colegiado en el Col·legi Oficial de Psicologia de Catalunya (nº 30868).'],
        ['¿Dónde son las sesiones?', WHERE_ES],
        FAQ_COST
      ]
    },
    {
      lang: 'es',
      file: 'psicologo-online-espana.html',
      title: 'Psicólogo online en España | Terapia por videollamada | Marc Hampshire',
      desc: 'Terapia psicológica online en toda España con un psicólogo general sanitario colegiado (COPC 30868): castellano, catalán o inglés. Sesiones por videollamada, 70 €.',
      crumb: 'Psicólogo online',
      h1: 'Psicólogo online en España',
      lead: 'Terapia por videollamada con un psicólogo general sanitario colegiado, en castellano, catalán o inglés. Vivas donde vivas en España, y con el mismo trabajo que en consulta.',
      sections: [
        {
          h: 'A quién le va bien la terapia online',
          list: [
            ['Quien vive fuera de Barcelona', 'En otra ciudad o en un pueblo, sin tener que desplazarte.'],
            ['Agendas apretadas', 'Sin tiempo de viaje: la sesión cabe en una pausa o al salir del trabajo.'],
            ['Quien viaja o se muda', 'Para mantener la continuidad mientras te mueves por España.'],
            ['Personas con poca energía o ansiedad', 'Cuando llegar a una cita ya es una barrera.'],
            ['Quien quiere terapia en inglés', 'Esté donde esté en España.']
          ]
        },
        {
          h: 'Cómo funciona',
          p: [
            'Empezamos con una llamada gratuita de 15 minutos para ver qué necesitas y si encajamos. Después, las sesiones son por videollamada: solo necesitas una buena conexión y un espacio donde puedas hablar con libertad.',
            'El trabajo es el mismo que en consulta: psicoterapia Gestalt y psicoanálisis relacional, atendiendo a lo que ocurre en el presente, también entre nosotros a través de la pantalla.',
            'Si alguna vez estás en Barcelona, también podemos vernos en consulta, en el Eixample.'
          ]
        }
      ],
      price: PRICE_ES,
      faq: [
        ['¿La terapia online funciona igual que la presencial?', 'Para la mayoría de motivos de consulta, sí: los estudios muestran resultados comparables. Podemos revisar juntos si te está funcionando.'],
        ['¿Qué necesito para las sesiones?', 'Un dispositivo con cámara y micrófono, una conexión estable y un espacio tranquilo y privado.'],
        ['¿Estás colegiado?', 'Sí. Soy psicólogo general sanitario, colegiado en el Col·legi Oficial de Psicologia de Catalunya (nº 30868).'],
        ['¿Cómo se paga?', 'Por Bizum o transferencia, y recibes factura de cada sesión.'],
        ['¿Puedo hacerla en inglés?', 'Sí. El inglés es una de mis lenguas maternas.'],
        FAQ_COST
      ]
    }
  ];
};
