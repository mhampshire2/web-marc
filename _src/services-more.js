// English versions of the self-esteem, relationships and Eixample pages, and the Catalan version of "therapy in English"
module.exports = C => {
  const { PRICE_EN, PROCESS_EN, WHERE_EN, CRISIS_EN } = C;
  const FAQ_COST = ['How much does a session cost?', '€70 per individual session, 45 to 50 minutes.'];
  const FAQ_ONLINE = ['Can I do sessions online?', 'Yes, by video call from anywhere in Spain.'];
  const PRICE_CA = ['Teràpia individual', '70 €', 'Les sessions duren de 45 a 50 minuts.'];
  return [
    {
      lang: 'en',
      file: 'self-esteem-therapy-barcelona.html',
      title: 'Self-Esteem Therapy in Barcelona (Eixample) | In English',
      desc: 'Therapy in English for self-esteem in the Eixample, Barcelona, and online: perfectionism, insecurity, need for approval and harsh self-criticism. €70.',
      crumb: 'Self-esteem therapy',
      h1: 'Self-esteem therapy in Barcelona',
      lead: "If you're harder on yourself than on anyone else, find it hard to set limits, or nothing you do ever feels like enough. With a licensed health psychologist, in the Eixample or by video call.",
      sections: [
        {
          h: 'When self-esteem needs attention',
          list: [
            ['Perfectionism and high self-demands', 'Nothing you do is quite good enough, resting makes you feel guilty and you barely enjoy what you achieve.'],
            ['Need for approval', "It's hard to say no, you adapt to what others expect and then you're not sure what you want."],
            ['Constant comparison', 'With friends, colleagues or what you see on social media, and you always come off worse.'],
            ['Insecurity in relationships', "Fear of bothering people, of not being good enough or of being left, and relationships that make you feel smaller."],
            ['A critical voice from long ago', 'Messages you learned early on that still shape how you speak to yourself today.']
          ]
        },
        {
          h: 'How we work',
          p: [
            "Self-esteem isn't fixed by repeating positive phrases. It's built in the way you relate to yourself and to others, and that takes time.",
            "In therapy we look at how that critical voice shows up here and now: what it says, how you say it to yourself and what you do when you hear it. I work from Gestalt psychotherapy and relational psychoanalysis, so we also pay attention to what happens between you and me in the session, which is often the first place where you can try treating yourself differently."
          ]
        },
        PROCESS_EN
      ],
      note: CRISIS_EN,
      price: PRICE_EN,
      faq: [
        ['How do I know if this is a self-esteem issue?', "If you often feel not good enough, depend a lot on what others think or find it hard to recognise what you do well, it's worth talking about. We can look at it together in the free call."],
        ['How long does therapy take?', 'It is usually a medium to long-term process, especially when the self-criticism goes back a long way. The first three sessions are exploratory; in the fourth the process begins, with goals and a plan.'],
        ['Is self-esteem linked to my relationships?', 'Often, yes. How you see yourself shapes how you relate to others, and the other way round. See also <a href="/relationship-therapy-barcelona.html">relationships</a>.'],
        FAQ_ONLINE,
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    },
    {
      lang: 'en',
      file: 'relationship-therapy-barcelona.html',
      title: 'Relationship Issues Therapy in Barcelona | Individual Therapy in English',
      desc: 'Individual therapy in English for relationship difficulties in the Eixample, Barcelona, and online: emotional dependency, jealousy, break-ups and repeating patterns. €70.',
      crumb: 'Relationship issues',
      h1: 'Therapy for relationship issues in Barcelona',
      lead: 'When your relationships bring you more anxiety than calm, or you keep ending up in the same place. Individual therapy with a licensed health psychologist, in the Eixample or by video call.',
      sections: [
        {
          h: 'What we can work on',
          list: [
            ['Repeating patterns', 'Different partners and the same ending, the same type of person or the same role.'],
            ['Emotional dependency', "Feeling you can't be okay without the other person, or putting up with more than you'd like for fear of losing them."],
            ['Jealousy and insecurity', 'Constant doubts, needing to check and fear of being left.'],
            ['Conflict and communication', "Arguments that always end the same way, things you don't say to each other, or feeling misunderstood."],
            ['Doubts and break-ups', "Not knowing whether to stay or leave, or a break-up you can't get over."],
            ['Beyond couples', "Family, friendships or work relationships where it's hard to set limits or show who you are."]
          ]
        },
        {
          h: 'How we work',
          p: [
            'The way we bond is learned early and tends to repeat. In therapy we try to understand yours: what you look for in others, what you fear and what you do, sometimes without realising, to protect yourself.',
            'I work from Gestalt psychotherapy and relational psychoanalysis. The therapeutic relationship itself is part of the process: a place where those patterns show up, where you can see them as they happen and try new ways of being with another person.',
            "I work in individual therapy: I don't offer couples therapy with both partners. If that's what you're looking for, I can point you in the right direction in the free call."
          ]
        },
        PROCESS_EN
      ],
      note: 'If you are experiencing violence in your relationship, in Spain you can call 016 (free, confidential, 24 hours). In an emergency, call 112.',
      price: PRICE_EN,
      faq: [
        ['Do you offer couples therapy?', "No. I work in individual therapy. Many relationship difficulties can be worked on from your side, and if you need couples therapy I can point you to someone."],
        ["Can it help if my partner doesn't want to come?", 'Yes. When the way you are in the relationship changes, the relationship moves too.'],
        ["What if I'm not in a relationship right now?", 'That works too. Many people come precisely because they find it hard to start or keep a relationship.'],
        ['Do you work with break-ups?', 'Yes. Losing a relationship is a loss; read more on the <a href="/grief-counselling-in-english.html">grief</a> page.'],
        FAQ_ONLINE,
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    },
    {
      lang: 'en',
      file: 'psychologist-eixample-barcelona.html',
      title: 'English-Speaking Psychologist in the Eixample, Barcelona | Marc Hampshire',
      desc: 'Psychologist in the Eixample: practice at Carrer de la Diputació 153 (Urgell metro) and at Clínica ART (Diputació 176). Individual therapy in English, Spanish or Catalan. €70.',
      crumb: 'Psychologist in the Eixample',
      h1: 'Psychologist in the Eixample, Barcelona',
      lead: 'I see clients at Carrer de la Diputació 153, in the Eixample, a few minutes on foot from Urgell metro. Individual therapy for teenagers, adults and over-65s, in English, Spanish or Catalan.',
      sections: [
        {
          h: 'What I can help with',
          list: [
            ['Anxiety and stress', 'Constant worry, panic attacks, sleep problems or physical tension.'],
            ['Low mood', "Sadness, apathy or the feeling that nothing motivates you."],
            ['Relationships', 'Difficulties in your relationships (with a partner, family or others), repeating patterns and emotional dependency. Individual therapy.'],
            ['Grief', 'Losses, break-ups and life changes that are hard to process.'],
            ['Self-esteem', 'Self-criticism, insecurity and the feeling of not being enough.'],
            ['Addictions', 'Problematic use of alcohol or other substances and compulsive behaviours.']
          ]
        },
        {
          h: 'How I work',
          p: [
            "I work from Gestalt and relational psychoanalysis. We don't cut out emotions and I don't hand you solutions from the outside: we widen your capacity to stay with what you feel and hold it, because emotions are wise and they guide you.",
            "The first three sessions are exploratory, and in the fourth the process begins: we talk about goals and set out a plan. If you're looking for advice or a quick fix, I'm probably not the right therapist. <a href=\"/gestalt-therapy-barcelona.html\">More about Gestalt therapy</a>."
          ]
        },
        {
          h: 'Getting here and opening hours',
          p: [
            '<strong>Address:</strong> Carrer de la Diputació 153, 08011 Barcelona. <a href="https://www.google.com/maps/search/?api=1&amp;query=Marc+Hampshire+Psic%C3%B3logo&amp;query_place_id=ChIJhSbvF2-jpBIR5Y-FHlcnc84" target="_blank" rel="noopener">See on Google Maps</a>.',
            '<strong>Metro:</strong> Urgell (L1), a few minutes on foot.',
            '<strong>Also at Clínica ART:</strong> Carrer de la Diputació 176, 08011 Barcelona, also in the Eixample.',
            '<strong>Hours:</strong> Tuesday to Thursday, 16:00 to 21:00, and Fridays, 15:00 to 19:30.',
            "If you can't come in person, sessions can also be by video call from anywhere in Spain."
          ]
        }
      ],
      price: PRICE_EN,
      faq: [
        ['How do I book a first appointment?', 'You can book a free 15-minute call, book an in-person session directly or message me on WhatsApp.'],
        ['Do you work in English?', 'Yes. I work in English, Spanish and Catalan.'],
        ['How do I pay?', 'By Bizum, bank transfer or cash, and you get an invoice for every session.'],
        ['How much is a session and how long is it?', '€70 per individual session, 45 to 50 minutes.'],
        ['Do you offer couples therapy?', 'No. I work in individual therapy.'],
        ['Do you work with teenagers?', 'Yes, with teenagers, adults and people over 65.']
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-en-angles-barcelona.html',
      title: "Psicòleg en anglès a Barcelona (Eixample) | Marc Hampshire",
      desc: "Psicòleg que parla anglès a Barcelona (Eixample) i en línia: teràpia en anglès amb un psicòleg col·legiat, també en català o castellà. 70 €.",
      crumb: 'Psicòleg en anglès',
      h1: 'Psicòleg en anglès a Barcelona',
      lead: "Parlar del que sents en el teu propi idioma, sense haver de traduir-te. Teràpia en anglès amb un psicòleg general sanitari col·legiat per a qui viu a Barcelona o a la resta d'Espanya.",
      sections: [
        {
          h: 'Per a qui pot ser útil',
          list: [
            ['Expatriats i professionals desplaçats', "Persones que s'han mudat a Barcelona i volen suport en el seu idioma."],
            ['Estudiants internacionals', 'Erasmus, màsters i graus lluny de casa.'],
            ['Persones que fa anys que viuen aquí', "Que dominen el català o el castellà però senten que el que és important ho diuen millor en anglès."],
            ['Famílies i parelles bilingües', 'Amb cultures i idiomes barrejats.']
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "Parlo anglès, català i castellà. La teràpia pot ser íntegrament en anglès o combinar idiomes, segons el que et resulti més còmode.",
            "Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional, amb un procés d'exploració i no de solucions ràpides."
          ]
        }
      ],
      price: PRICE_CA,
      faq: [
        ['La teràpia pot ser només en anglès?', "Sí. Des de la trucada inicial fins a les factures, tot el procés pot ser en anglès."],
        ['Es pot fer en línia?', "Sí, per videotrucada des de qualsevol lloc d'Espanya."],
        ['Quant costa una sessió?', '70 € per sessió individual, de 45 a 50 minuts.']
      ]
    }
  ];
};
