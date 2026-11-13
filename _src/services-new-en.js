// New English service pages. Receives the shared constants from services.js
module.exports = C => {
  const { PRICE_EN, PROCESS_EN, WHERE_EN, CRISIS_EN } = C;
  const FAQ_COST = ['How much does a session cost?', '€70 per individual session. The first three sessions last an hour; after that, 45 to 50 minutes.'];
  return [
    {
      lang: 'en',
      file: 'gestalt-therapy-barcelona.html',
      title: 'Gestalt Therapy in Barcelona | Gestalt Psychotherapist in English',
      desc: 'Gestalt therapy in Barcelona (Eixample) and online, in English, Spanish or Catalan, with a licensed psychologist trained at the Institut Gestalt. Free 15-minute call.',
      crumb: 'Gestalt therapy in Barcelona',
      h1: 'Gestalt therapy in Barcelona',
      lead: "A humanist psychotherapy that starts from what is happening to you now: what you feel, how you relate to others and what you do with it. With a licensed health psychologist trained at the Institut Gestalt de Barcelona, in English, Spanish or Catalan.",
      sections: [
        {
          h: 'What Gestalt therapy is',
          list: [
            ['The present', "We don't ignore your history, but we look at it through what is still alive today, in your life and in the session."],
            ['Awareness', 'Noticing what you feel, what you do and how you do it is the first step to being able to choose differently.'],
            ['Responsibility', 'Not blame: taking charge of how you live what happens to you, and of what you can decide from there.'],
            ['Contact', 'How you meet other people, your own needs and the things you avoid. This is often where distress shows up.'],
            ['The therapeutic relationship', 'The relationship between you and me is part of the work. It is where your patterns appear, and where we can see them while they happen.']
          ]
        },
        {
          h: 'What a session is like',
          p: [
            'There is no fixed script or list of exercises. We talk about what you bring and I pay attention to what happens as we talk: how you describe things, what your body does, what is hard to say. I am in the room as a person, not behind a technique.',
            'I combine Gestalt with relational psychoanalysis, which also looks closely at what goes on between the two of us. Together they give a way of working that is slow, honest and focused on understanding, not on quick fixes.',
            "It is not the right approach for everyone. If what you need is a very structured treatment for one specific problem, I'll say so and can point you to someone suitable."
          ]
        },
        PROCESS_EN
      ],
      price: PRICE_EN,
      faq: [
        ['What is Gestalt therapy?', 'A humanist psychotherapy that focuses on what you feel, how you relate to others and what you do about it, here and now. It relies on awareness and responsibility, and gives a lot of weight to the relationship between patient and therapist.'],
        ['How is it different from cognitive behavioural therapy (CBT)?', 'CBT uses techniques and exercises to change specific thoughts and behaviours. In Gestalt we work with what appears in the session, so that you notice how you live what is happening and can choose from there. If you want a more structured treatment, I can point you to another professional.'],
        ['Do I need previous therapy experience?', 'No. You only need to feel that something is not going well and want to look at it.'],
        ['Is Gestalt only for serious problems?', "No. People come for anxiety, low mood, relationships, grief or burnout, and also simply to understand themselves better."],
        ['What training do you have?', "I trained for three years as a Gestalt psychotherapist at the Institut Gestalt de Barcelona and spent three more years observing therapy groups there. I'm a licensed health psychologist (Psicólogo General Sanitario), registered with the Official College of Psychologists of Catalonia, no. 30868."],
        ['Can we work in English?', 'Yes. English is one of my native languages, and I also work in Spanish and Catalan.'],
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    },
    {
      lang: 'en',
      file: 'trauma-therapy-in-english-barcelona.html',
      title: 'Trauma Therapy in English in Barcelona & Online | Marc Hampshire',
      desc: 'Therapy for the lasting effects of difficult past experiences, in English, with a licensed psychologist in Barcelona (Eixample) or online across Spain. Free 15-minute call.',
      crumb: 'Trauma therapy in English',
      h1: 'Trauma therapy in English in Barcelona',
      lead: "Difficult experiences from the past can keep weighing on the present: in your body, in your relationships or in how you see yourself. Individual therapy at your own pace, with a licensed psychologist who is a native English speaker.",
      sections: [
        {
          h: 'How past experiences can show up',
          list: [
            ['Reliving what happened', 'Memories, images or nightmares that come back without warning.'],
            ['Being on alert', 'Startling easily, finding it hard to relax or to sleep.'],
            ['Avoiding', 'Places, people or conversations that remind you of what happened, or switching off so as not to feel.'],
            ['How you see yourself', 'Guilt, shame or a sense that something is wrong with you.'],
            ['Relationships', 'Difficulty trusting, getting close or setting limits.'],
            ['Childhood experiences', 'Things lived when you were small that, even without one single event, shaped how you relate to people.']
          ]
        },
        {
          h: 'How we work',
          p: [
            "You don't have to tell everything from the first day. You set the pace. The first priority is to build safety and trust in the relationship, and to understand what you need.",
            'I work from Gestalt psychotherapy and relational psychoanalysis. We look at what the past leaves in the present: how it shows up in your body, in your relationships and in the session itself. I do not push you to relive what happened before there is a base to hold it.',
            'If you need a specific treatment protocol for post-traumatic stress, I will tell you honestly and can point you to a suitable professional.'
          ]
        },
        PROCESS_EN
      ],
      note: CRISIS_EN + ' If you are experiencing violence, in Spain you can call 016 (free, confidential, 24 hours).',
      price: PRICE_EN,
      faq: [
        ['Do I have to tell you everything that happened?', 'No. You decide what to share and when. We start from where you are.'],
        ["What if I'm not sure what I went through counts as trauma?", "You don't need a label to come. If something from the past still weighs on you, it deserves attention."],
        ['Can you help with something that happened recently?', "Yes, if you're in distress after a recent event I can see you for an acute crisis, and we'll work out together what you need next."],
        ['Can I do this online?', 'Yes, by video call from anywhere in Spain, from a space where you feel safe and private.'],
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    },
    {
      lang: 'en',
      file: 'loneliness-therapy-for-expats-barcelona.html',
      title: 'Loneliness & Homesickness Therapy for Expats in Barcelona',
      desc: 'Feeling lonely or homesick in Barcelona? Therapy in English for expats and newcomers, with a native-speaking psychologist. In the Eixample or online across Spain.',
      crumb: 'Loneliness and homesickness',
      h1: 'Loneliness and homesickness: therapy for expats in Barcelona',
      lead: "You can have a full calendar and still feel alone in a new city. Therapy in English for expats and newcomers who miss home, struggle to belong or feel they are living between two places.",
      sections: [
        {
          h: 'What it can feel like',
          list: [
            ['Lonely among people', 'Plenty of acquaintances and few people who really know you.'],
            ['Missing home', "Longing for people, places, food or a version of yourself that doesn't exist here."],
            ['Neither here nor there', 'Feeling like a visitor in Spain and a stranger when you go back home.'],
            ['Starting over, again', 'Making friends is exhausting when friendships keep ending because people move on.'],
            ['Winter lows', 'Fewer plans, shorter days and the weight of being far from your support network.'],
            ['Living in a second language', 'Never quite saying what you mean, or feeling like a lesser version of yourself.']
          ]
        },
        {
          h: 'How we work',
          p: [
            "Loneliness is not simply a lack of contacts. It is also about how you make contact, what you let others see and what you hold back. In therapy we look at that as it happens, including between us.",
            "I'm half English and have lived between two cultures myself. Sessions can be entirely in English, or move between English and Spanish if you want to practise.",
            'The work is not about forcing yourself to go out more. It is about understanding what is happening, what you miss and what you want here.'
          ]
        },
        PROCESS_EN
      ],
      note: CRISIS_EN,
      price: PRICE_EN,
      faq: [
        ['Is it normal to feel this way after moving abroad?', "Very. It doesn't mean you made the wrong choice. But if it lasts or gets in the way of daily life, it's worth talking to someone."],
        ["I don't speak Spanish yet. Can I start therapy?", 'Yes. The whole process can be in English: the first call, sessions, messages and invoices.'],
        ['Can I do sessions online?', 'Yes, by video call from anywhere in Spain.'],
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    },
    {
      lang: 'en',
      file: 'therapy-for-international-students-barcelona.html',
      title: 'Therapy for International Students in Barcelona | In English',
      desc: 'Therapy in English for international and Erasmus students in Barcelona: stress, loneliness, homesickness and big decisions. Eixample or online. Free 15-minute call.',
      crumb: 'Therapy for international students',
      h1: 'Therapy for international students in Barcelona',
      lead: "Studying abroad is exciting and, at times, overwhelming. Therapy in English with a licensed psychologist who understands life between countries, in person in the Eixample or online from anywhere in Spain.",
      sections: [
        {
          h: 'What students often bring',
          list: [
            ['Stress and pressure', 'Exams, deadlines and the feeling that everyone else is coping better than you.'],
            ['Homesickness and loneliness', 'Missing home while trying to build a new social life in a new language.'],
            ['Anxiety and low mood', 'Worry that will not switch off, low energy or losing interest in what you came here to do.'],
            ['Big decisions', 'Whether to stay, change course, go home or build a life in Spain.'],
            ['Family expectations', 'The pressure of what your family has invested in you, or of what they expect you to become.'],
            ['Relationships', 'Friendships and romantic relationships that start and end quickly in a student city.']
          ]
        },
        {
          h: 'How we work',
          p: [
            "We start by understanding where you are and what has been hard. Then we agree on goals and work on them together, at a pace that suits you.",
            "I work from Gestalt psychotherapy and relational psychoanalysis: we pay attention to what's happening now, in your life and in the session. It's not a quick fix or a list of tips, but a space to understand yourself better.",
            'Sessions are in English, or a mix of English and Spanish if you want to practise.'
          ]
        },
        PROCESS_EN
      ],
      note: CRISIS_EN,
      price: PRICE_EN,
      faq: [
        ['Do you work with Erasmus and exchange students?', 'Yes. Whether you are here for a semester or for a full degree, you can start with a free 15-minute call.'],
        ['Can I have sessions online from my student flat?', 'Yes, by video call from anywhere in Spain, as long as you have a private space.'],
        ['Will you tell my university?', 'No. Therapy is confidential and protected by professional secrecy, with the exceptions set out by law.'],
        ['Can you provide invoices?', 'I provide an invoice for every session. Whether it is reimbursed depends on your insurer, so check your policy first.'],
        ['Where are sessions held?', WHERE_EN],
        FAQ_COST
      ]
    }
  ];
};
