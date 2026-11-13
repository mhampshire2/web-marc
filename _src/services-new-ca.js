// Catalan service pages
module.exports = () => {
  const PRICE_CA = ['Teràpia individual', '70 €', 'Les tres primeres sessions duren una hora; després, de 45 a 50 minuts.'];
  const PROCESS_CA = {
    h: 'Com és el procés',
    p: [
      "Treballo amb un procés d'exploració, no amb pedaços ni solucions ràpides: primer entenem què et passa i per què es repeteix; després fixem objectius junts.",
      "<strong>Sessions 1 a 3:</strong> són d'exploració i duren una hora. Parlem del motiu de consulta, de la teva història i de com vius el que et passa. No hi ha pressa per resoldre res.",
      "<strong>Sessió 4:</strong> establim objectius i manera de treballar. Els objectius orienten el procés, però no l'esgoten: continuem explorant.",
      'Sol ser un treball de durada mitjana o llarga, tot i que també atenc crisis puntuals.'
    ]
  };
  const WHERE_CA = "A la meva consulta del carrer de la Diputació 153 i a Clínica ART (carrer de la Diputació 176), totes dues a l'Eixample, o per videotrucada des de qualsevol lloc d'Espanya.";
  const CRISIS_CA = "Si estàs en crisi o et preocupa la teva seguretat, truca al 112 (emergències) o al 024 (línia d'atenció a la conducta suïcida, gratuïta i disponible les 24 hores).";
  const FAQ_COST = ['Quant costa una sessió?', '70 € per sessió individual. Les tres primeres duren una hora; després, de 45 a 50 minuts.'];
  const FAQ_WHERE = ['On són les sessions?', WHERE_CA];
  const FAQ_ONLINE = ['Es pot fer en línia?', "Sí, per videotrucada des de qualsevol lloc d'Espanya."];
  return [
    {
      lang: 'ca',
      file: 'psicoleg-ansietat-barcelona.html',
      title: "Psicòleg d'ansietat a Barcelona (Eixample) | Marc Hampshire",
      desc: "Psicòleg d'ansietat a l'Eixample, Barcelona: teràpia per a l'estrès, la preocupació constant i els atacs de pànic. En línia a tot Espanya. 70 €. Trucada gratuïta.",
      crumb: "Psicòleg per a l'ansietat",
      h1: "Psicòleg per a l'ansietat a Barcelona",
      lead: "Teràpia per a l'ansietat, l'estrès i els atacs de pànic amb un psicòleg general sanitari col·legiat. A la consulta de l'Eixample o per videotrucada des de qualsevol lloc d'Espanya.",
      sections: [
        {
          h: "Com es pot manifestar l'ansietat",
          list: [
            ['Preocupació constant', "Pensaments que donen voltes i costa d'apagar, sobretot de nit."],
            ['Atacs de pànic', "Episodis sobtats de taquicàrdia, manca d'aire o por de perdre el control."],
            ['Tensió física', 'Opressió al pit, contractures, problemes digestius, mal de cap o esgotament.'],
            ['Evitació', "Dir que no a plans, ajornar trucades o evitar situacions que et desborden."],
            ['Estrès laboral', 'La sensació de no arribar mai a tot i de no poder descansar de debò.'],
            ['Problemes de son', "Dificultat per adormir-te o despertar-te de matinada amb el cap a mil."]
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "A les primeres sessions veiem quan va començar l'ansietat, què la dispara i què la manté.",
            "Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional. En lloc d'intentar apagar l'ansietat, la mirem mentre apareix: què sents al cos, què estàs evitant, què no et permets voler o dir. L'ansietat sovint porta alguna cosa que encara no ha trobat el seu lloc, i adonar-te'n sol ser el principi de què s'afluixi.",
            "Com a psicòleg no receto medicació. Si és útil, et puc suggerir que ho consultis amb el teu metge de capçalera o amb un psiquiatre alhora que fas teràpia."
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA,
      price: PRICE_CA,
      faq: [
        ['Necessito un diagnòstic per començar?', 'No. N\'hi ha prou amb sentir que alguna cosa no va bé i que vols ajuda.'],
        ["Quant dura la teràpia per a l'ansietat?", "És un procés de durada mitjana o llarga, normalment de diversos mesos o més: entendre què manté l'ansietat requereix temps i no ofereixo solucions ràpides. En revisem l'avenç junts i també puc atendre una crisi puntual."],
        FAQ_ONLINE,
        ['Ja prenc medicació. Puc fer teràpia?', 'Sí. És habitual combinar teràpia i medicació. Només digue-m\'ho per tenir-ho en compte.'],
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-dol-barcelona.html',
      title: 'Psicòleg de dol a Barcelona (Eixample) | Teràpia de dol',
      desc: "Psicòleg de dol a l'Eixample, Barcelona, i en línia: mort d'un ésser estimat, dol a distància, ruptures. Català, castellà o anglès. 70 €. Trucada gratuïta.",
      crumb: 'Psicòleg per al dol',
      h1: 'Psicòleg per al dol a Barcelona',
      lead: "Acompanyament després de la mort d'algú proper, una ruptura o un gran canvi vital. Amb un psicòleg general sanitari col·legiat, a l'Eixample o per videotrucada.",
      sections: [
        {
          h: 'Pèrdues que es treballen en teràpia',
          list: [
            ["Mort d'un ésser estimat", "Un pare o una mare, la parella, un amic o una mascota, recent o de fa anys."],
            ['Dol a distància', "Perdre algú en un altre país o en una altra ciutat, sense poder acomiadar-te com t'hauria agradat."],
            ['Ruptures i divorcis', "La fi d'una relació i, amb ella, d'una vida i uns plans compartits."],
            ['Canvis vitals', "Deixar enrere un país, una feina o una etapa de la teva vida."],
            ["Dol que no avança", "Quan mesos o anys després el dolor continua igual d'intens, o sents que no t'has permès plorar la pèrdua."]
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "El dol no és una cosa que calgui arreglar ni accelerar. En teràpia fem espai a allò que sents, també a allò que costa de dir en altres llocs: ràbia, culpa, alleujament o insensibilitat.",
            "La teràpia Gestalt té maneres específiques de treballar el que va quedar per dir i l'acomiadament. Amb el temps, l'objectiu no és oblidar, sinó poder portar la pèrdua d'una manera que et deixi continuar vivint."
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA,
      price: PRICE_CA,
      faq: [
        ['Com sé si necessito ajuda amb el dol?', "No hi ha un temps correcte. Et pot ajudar parlar amb algú si el dolor interfereix en el dia a dia, si sents que t'has quedat encallat o si no tens un altre espai on viure'l."],
        ["És massa aviat, o massa tard, per començar?", "Cap de les dues coses. Hi ha qui ve les primeres setmanes i qui ve anys després."],
        FAQ_ONLINE,
        ['També treballes el dol després d\'una ruptura?', 'Sí. Perdre una relació també és una pèrdua i mereix la mateixa cura.'],
        ['Quant dura la teràpia de dol?', "Sol ser un procés de durada mitjana o llarga. Les tres primeres sessions són d'exploració i a la quarta fixem objectius; a partir d'aquí revisem junts com avança."],
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-autoestima-barcelona.html',
      title: "Psicòleg per a l'autoestima a Barcelona (Eixample) | Marc Hampshire",
      desc: "Teràpia per a l'autoestima a l'Eixample, Barcelona, i en línia: autoexigència, inseguretat, necessitat d'aprovació i autocrítica. Català, castellà o anglès. 70 €.",
      crumb: "Psicòleg per a l'autoestima",
      h1: "Psicòleg per a l'autoestima a Barcelona",
      lead: "Si et tractes amb més duresa que ningú, et costa posar límits o res del que fas et sembla suficient. Amb un psicòleg general sanitari col·legiat, a l'Eixample o per videotrucada.",
      sections: [
        {
          h: "Quan l'autoestima demana atenció",
          list: [
            ['Autoexigència i perfeccionisme', 'Res del que fas està del tot bé, descansar et genera culpa i els assoliments gairebé no es gaudeixen.'],
            ["Necessitat d'aprovació", "Et costa dir que no, t'adaptes a allò que esperen els altres i després no saps ben bé què vols tu."],
            ['Comparar-te tot el temps', "Amb amics, amb companys o amb el que veus a les xarxes, i sempre hi surts perdent."],
            ['Inseguretat en les relacions', "Por de molestar, de no estar a l'altura o que et deixin, i relacions que et fan sentir menys."],
            ['Una veu crítica que ve de lluny', "Missatges que vas aprendre aviat i que encara avui marquen com et parles."]
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "L'autoestima no s'arregla repetint frases positives. Es construeix en la manera com et relaciones amb tu i amb els altres, i això porta temps.",
            "En teràpia mirem com apareix aquesta veu crítica aquí i ara: què et diu, com te la dius i què fas quan l'escoltes. Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional, així que també parem atenció a allò que passa entre tu i jo a la sessió, que moltes vegades és el primer lloc on pots provar de tractar-te d'una altra manera."
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA,
      price: PRICE_CA,
      faq: [
        ['Com sé si el meu és un problema d\'autoestima?', "Si sovint et sents insuficient, depens molt del que pensin els altres o et costa reconèixer el que fas bé, val la pena parlar-ne. A la trucada gratuïta ho veiem junts."],
        ['Quant dura la teràpia?', "Sol ser un procés de durada mitjana o llarga, sobretot quan l'autocrítica ve de lluny. Les tres primeres sessions són d'exploració i a la quarta fixem objectius; a partir d'aquí revisem junts com avança."],
        ["L'autoestima té a veure amb les meves relacions?", 'Moltes vegades sí. Com et veus influeix en com et vincules, i al revés. Si és el que més et preocupa, mira també la pàgina de <a href="/psicoleg-relacions-barcelona.html">relacions</a>.'],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-estres-burnout-barcelona.html',
      title: "Psicòleg per a l'estrès i el burnout a Barcelona | Marc Hampshire",
      desc: "Teràpia per a l'estrès crònic i el burnout a l'Eixample, Barcelona, i en línia: esgotament, desconnexió, insomni i dificultat per parar. Horari de tarda. 70 €.",
      crumb: "Psicòleg per a l'estrès i el burnout",
      h1: "Psicòleg per a l'estrès i el burnout a Barcelona",
      lead: "Estàs sempre cansat, la feina et desborda i ja no recordes què era descansar de debò. Amb un psicòleg general sanitari col·legiat, a l'Eixample o per videotrucada, en horari de tarda.",
      sections: [
        {
          h: "Senyals que l'estrès s'ha tornat massa gran",
          list: [
            ['Esgotament que no marxa', 'Descanses el cap de setmana o de vacances i el cansament continua allà.'],
            ['Desconnexió i cinisme', 'Allò que abans t\'importava ara t\'és igual o t\'irrita, i vas en pilot automàtic.'],
            ['No poder parar', 'Mires el correu fora d\'horari, et costa dir que no i et sents culpable si no produeixes.'],
            ['Irritabilitat', 'Menys paciència amb la teva parella, els teus amics o amb tu mateix.'],
            ['El cos avisa', 'Insomni, tensió al coll i les espatlles, mals de cap, problemes digestius o emmalaltir més sovint.'],
            ['Després d\'una baixa', 'Tornar a la feina amb por que es repeteixi, o no tenir clar si hi vols tornar.']
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "El burnout no apareix per ser feble ni per organitzar-te malament. Sol aparèixer quan allò que t'exigeix l'entorn i allò que t'exigeixes tu s'ajunten durant massa temps.",
            "En teràpia mirem les dues parts: què t'està sobrecarregant i què et porta a no parar, com l'autoexigència, la dificultat per posar límits o la por de decebre. Des de la psicoteràpia Gestalt treballem perquè notis els teus límits quan apareixen, reconeguis el que continues fent encara que et surti car i et facis càrrec de les teves decisions sobre la feina des d'un lloc més clar.",
            'Atenc de dimarts a divendres a la tarda, perquè les sessions encaixin amb una jornada laboral.'
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA,
      price: PRICE_CA,
      faq: [
        ['Quina diferència hi ha entre estrès i burnout?', "L'estrès sol anar a pics, amb moments d'alleujament. Al burnout l'esgotament es torna crònic, apareixen la desconnexió i la sensació de no rendir, i descansar ja no n'hi ha prou. L'OMS el reconeix com un fenomen laboral, no com un diagnòstic mèdic."],
        ['Cal estar de baixa per començar?', 'No. Moltes persones comencen teràpia precisament per no arribar a la baixa.'],
        ['Quins horaris tens?', 'De dimarts a dijous, de 16:00 a 21:00, i els divendres, de 15:00 a 19:30.'],
        ["S'assabentarà la meva empresa?", 'No. La teràpia és confidencial i les factures s\'emeten al teu nom.'],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-relacions-barcelona.html',
      title: 'Psicòleg per a relacions i parella a Barcelona | Teràpia individual',
      desc: "Teràpia individual per a dificultats de parella i relacions a l'Eixample, Barcelona, i en línia: dependència emocional, gelosia, ruptures i patrons que es repeteixen. 70 €.",
      crumb: 'Psicòleg per a relacions i parella',
      h1: 'Psicòleg per a relacions i parella a Barcelona',
      lead: "Quan les teves relacions et donen més angoixa que calma, o acabes sempre al mateix lloc. Teràpia individual amb un psicòleg general sanitari col·legiat, a l'Eixample o per videotrucada.",
      sections: [
        {
          h: 'Què es pot treballar',
          list: [
            ['Patrons que es repeteixen', 'Parelles diferents i el mateix final, el mateix tipus de persona o el mateix paper.'],
            ['Dependència emocional', 'Sentir que no pots estar bé sense l\'altra persona, o aguantar més del que voldries per por de perdre-la.'],
            ['Gelosia i inseguretat', 'Dubtes constants, necessitat de comprovar i por que et deixin.'],
            ['Conflictes i comunicació', 'Discussions que acaben sempre igual, coses que no us dieu o la sensació que no t\'entén.'],
            ['Dubtes i ruptures', 'No saber si continuar o deixar-ho, o una ruptura que no aconsegueixes digerir.'],
            ['Més enllà de la parella', 'Relacions familiars, d\'amistat o de feina en què et costa posar límits o mostrar-te com ets.']
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "La manera com ens vinculem s'aprèn aviat i tendeix a repetir-se. En teràpia intentem entendre la teva: què busques en els altres, què temes i què fas, de vegades sense adonar-te'n, per protegir-te.",
            "Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional. La mateixa relació terapèutica és part del procés: un lloc on aquests patrons apareixen, on pots veure'ls mentre passen i provar maneres noves d'estar amb una altra persona.",
            "Treballo en teràpia individual: no faig teràpia de parella amb els dos membres. Si és el que busqueu, a la trucada gratuïta et puc orientar."
          ]
        },
        PROCESS_CA
      ],
      note: "Si pateixes violència en la teva relació, pots trucar al 016 (gratuït i confidencial, les 24 hores). En una emergència, truca al 112.",
      price: PRICE_CA,
      faq: [
        ['Fas teràpia de parella?', "No. La meva feina és la teràpia individual. Moltes dificultats de parella es poden treballar des d'un mateix, i si necessiteu teràpia de parella et puc orientar."],
        ['Em pot ajudar si la meva parella no vol venir?', "Sí. Quan canvia la teva manera d'estar en la relació, la relació també es mou."],
        ['I si ara no tinc parella?', 'També. Moltes persones vénen precisament perquè els costa començar o mantenir una relació.'],
        ['També treballes les ruptures?', 'Sí. Perdre una relació és una pèrdua; pots llegir-ne més a la pàgina de <a href="/psicoleg-dol-barcelona.html">dol</a>.'],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-eixample.html',
      title: "Psicòleg a l'Eixample, Barcelona | Marc Hampshire",
      desc: "Psicòleg a l'Eixample: consulta al carrer de la Diputació 153 (metro Urgell) i a Clínica ART (Diputació 176). Teràpia individual en català, castellà o anglès. 70 €.",
      crumb: "Psicòleg a l'Eixample",
      h1: "Psicòleg a l'Eixample, Barcelona",
      lead: "Atenc al carrer de la Diputació 153, a l'Eixample, a pocs minuts a peu del metro Urgell. Teràpia individual per a adolescents, adults i gent gran, en català, castellà o anglès.",
      sections: [
        {
          h: "Amb què et puc ajudar",
          list: [
            ['Ansietat i estrès', 'Preocupació constant, atacs de pànic, problemes de son o tensió física.'],
            ["Estat d'ànim baix", "Tristesa, apatia o la sensació que res et motiva."],
            ['Relacions', 'Dificultats en les teves relacions (de parella, familiars o d\'un altre tipus), patrons que es repeteixen i dependència emocional. Treballo en teràpia individual.'],
            ['Dol', 'Pèrdues, ruptures i canvis vitals difícils de processar.'],
            ['Autoestima', 'Autocrítica, inseguretat i la sensació de no ser suficient.'],
            ['Addiccions', 'Consum problemàtic d\'alcohol o d\'altres substàncies i conductes compulsives.']
          ]
        },
        {
          h: 'Com arribar-hi i horaris',
          p: [
            '<strong>Adreça:</strong> carrer de la Diputació 153, 08011 Barcelona. <a href="https://www.google.com/maps/search/?api=1&amp;query=Marc+Hampshire+Psic%C3%B3logo&amp;query_place_id=ChIJhSbvF2-jpBIR5Y-FHlcnc84" target="_blank" rel="noopener">Veure a Google Maps</a>.',
            '<strong>Metro:</strong> Urgell (L1), a pocs minuts a peu.',
            '<strong>També a Clínica ART:</strong> carrer de la Diputació 176, 08011 Barcelona, també a l\'Eixample.',
            '<strong>Horari:</strong> de dimarts a dijous, de 16:00 a 21:00, i els divendres, de 15:00 a 19:30.',
            "Si no pots venir, les sessions també poden ser per videotrucada des de qualsevol lloc d'Espanya."
          ]
        }
      ],
      price: PRICE_CA,
      faq: [
        ['Com demano la primera cita?', 'Pots reservar una trucada gratuïta de 15 minuts, reservar directament una sessió presencial o escriure\'m per WhatsApp.'],
        ['Atens en català o en anglès?', 'Sí. Parlo castellà i anglès com a llengües natives, i també català.'],
        ['Com es paga?', 'Per Bizum, transferència o en efectiu (l\'efectiu, sempre benvingut 😉), i reps factura de cada sessió.'],
        ['Treballes amb adolescents?', 'Sí, amb adolescents, adults i persones més grans de 65 anys.'],
        ['Quant dura una teràpia?', "És un procés de durada mitjana o llarga: les tres primeres sessions són d'exploració i a la quarta fixem objectius. No treballo amb solucions ràpides, tot i que també atenc crisis puntuals."]
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-depressio-barcelona.html',
      title: 'Psicòleg per a la depressió a Barcelona (Eixample) | Marc Hampshire',
      desc: "Teràpia per a la depressió i l'estat d'ànim baix a l'Eixample, Barcelona, i en línia: tristesa, apatia, manca de motivació i cansament. Català, castellà o anglès. 70 €.",
      crumb: 'Psicòleg per a la depressió',
      h1: 'Psicòleg per a la depressió a Barcelona',
      lead: "Ajuda quan l'ànim és baix, has perdut la motivació o sents que res importa. Amb un psicòleg general sanitari col·legiat, a l'Eixample o per videotrucada.",
      sections: [
        {
          h: 'Com es pot sentir la depressió',
          list: [
            ['Ànim baix quasi cada dia', 'Tristesa, buit o insensibilitat que duren setmanes i no només uns dies.'],
            ['Pèrdua d\'interès', 'Allò que abans gaudies ara et resulta pla i començar qualsevol cosa costa un esforç enorme.'],
            ['Cansament i son', 'Dormir massa o molt poc i despertar-te ja esgotat.'],
            ['Autocrítica dura', 'Pensaments de ser un fracàs, una càrrega o no estar a l\'altura.'],
            ['Aïllament', 'Cancel·lar plans, no contestar missatges i passar cada cop més temps a soles.']
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "A les primeres sessions veiem com estàs ara, des de quan i què pot estar alimentant-ho. Acordem objectius realistes, encara que ara tot costi.",
            "Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional: fer espai a allò que sents en lloc de barallar-te-hi, i notar aquí i ara com et relaciones amb tu i amb els altres. Sovint la planura de la depressió tapa una altra cosa, com ràbia, dol o un desig al qual vas renunciar, i val la pena trobar-la.",
            "Com a psicòleg no receto medicació. Quan la depressió és intensa, la teràpia sol funcionar millor juntament amb el teu metge de capçalera o un psiquiatre, i et puc ajudar a fer aquest pas."
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA,
      price: PRICE_CA,
      faq: [
        ['Com sé si és depressió o una mala ratxa?', "Si l'ànim baix, el cansament o la pèrdua d'interès duren més d'un parell de setmanes i afecten la feina, les relacions o la son, val la pena parlar-ne. A la trucada gratuïta ho veiem junts."],
        ['Pot ajudar la teràpia sense medicació?', "Per a molta gent sí, sobretot en depressions lleus o moderades. En casos més intensos sol funcionar millor combinar teràpia i medicació."],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-trauma-barcelona.html',
      title: 'Psicòleg per al trauma a Barcelona (Eixample) | Marc Hampshire',
      desc: "Teràpia per a les seqüeles d'experiències difícils del passat a l'Eixample, Barcelona, i en línia: al teu ritme, en català, castellà o anglès. 70 €. Trucada gratuïta.",
      crumb: 'Psicòleg per al trauma',
      h1: 'Psicòleg per al trauma a Barcelona',
      lead: "Hi ha experiències difícils del passat que continuen pesant avui: al cos, en les relacions o en com et veus. Teràpia individual, al teu ritme, amb un psicòleg general sanitari col·legiat.",
      sections: [
        {
          h: 'Com es pot notar el que s\'ha viscut',
          list: [
            ['Reviure el que va passar', 'Records, imatges o malsons que tornen sense avisar.'],
            ['Estar en alerta', 'Espantar-te amb facilitat i tenir dificultat per relaxar-te o dormir.'],
            ['Evitar', 'Llocs, persones o converses que et recorden el que has viscut, o desconnectar-te per no sentir.'],
            ['Com et veus', 'Culpa, vergonya o la sensació que alguna cosa està malament en tu.'],
            ['Les relacions', 'Dificultat per confiar, acostar-te o posar límits.'],
            ["Experiències de la infantesa", "Situacions viscudes de petit que, encara que no siguin un sol fet, van marcar la teva manera de relacionar-te."]
          ]
        },
        {
          h: 'Com treballem',
          p: [
            "No cal explicar-ho tot des del primer dia. El ritme el marques tu. El primer és construir seguretat i confiança en la relació i entendre què necessites.",
            "Treballo des de la psicoteràpia Gestalt i la psicoanàlisi relacional. Mirem què deixa el passat en el present: com es nota al cos, en les teves relacions i a la mateixa sessió. No t'empenyo a reviure el que va passar abans que hi hagi una base que ho sostingui.",
            "Si necessites un tractament específic per a l'estrès posttraumàtic, t'ho diré amb honestedat i et puc orientar cap a un professional adequat."
          ]
        },
        PROCESS_CA
      ],
      note: CRISIS_CA + ' Si pateixes violència, pots trucar al 016 (gratuït i confidencial, les 24 hores).',
      price: PRICE_CA,
      faq: [
        ["He d'explicar-te tot el que em va passar?", 'No. Decideixes tu què compartir i quan. Comencem des d\'on ets.'],
        ['I si no sé si el meu és un trauma?', "No cal una etiqueta per venir. Si alguna cosa del passat continua pesant-te, mereix atenció."],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoterapia-gestalt-barcelona.html',
      title: 'Teràpia Gestalt a Barcelona (Eixample) | Psicoterapeuta Gestalt',
      desc: "Teràpia Gestalt individual a l'Eixample, Barcelona, i en línia, amb un psicòleg col·legiat format a l'Institut Gestalt. Present, adonar-se i responsabilitat. 70 €.",
      crumb: 'Teràpia Gestalt a Barcelona',
      h1: 'Teràpia Gestalt a Barcelona',
      lead: "Una psicoteràpia humanista que parteix d'allò que et passa ara: el que sents, com et relaciones i què fas amb això. Amb un psicòleg general sanitari col·legiat, format a l'Institut Gestalt de Barcelona.",
      sections: [
        {
          h: 'Què és la teràpia Gestalt',
          list: [
            ['El present', "No ignorem la teva història, però la mirem des d'allò que continua viu avui, a la teva vida i a la sessió."],
            ["L'adonar-se (awareness)", "Notar què sents, què fas i com ho fas és el primer pas per poder triar d'una altra manera."],
            ['La responsabilitat', "No és culpa: és fer-te càrrec de com vius el que et passa i d'allò que pots decidir des d'aquí."],
            ['El contacte', "Com et trobes amb els altres, amb el que necessites i amb el que evites. Moltes vegades és aquí on apareix el malestar."],
            ['La relació terapèutica', 'La relació entre tu i jo és part de la feina. És el lloc on els teus patrons apareixen i on els podem veure mentre passen.']
          ]
        },
        {
          h: 'Com és una sessió',
          p: [
            "No hi ha un guió tancat ni una llista d'exercicis. Parlem del que portes i paro atenció a allò que passa mentre parlem: com expliques les coses, què fa el teu cos, què et costa dir. Sóc a la sessió com a persona, no darrere d'una tècnica.",
            "Combino la Gestalt amb la psicoanàlisi relacional, que també presta molta atenció a allò que passa entre els dos. Junts donen una manera de treballar pausada, honesta i centrada a entendre, no a arreglar ràpid.",
            "No és l'enfocament adequat per a tothom. Si el que necessites és un tractament molt estructurat per a un problema molt concret, t'ho diré i et puc orientar cap a un altre professional."
          ]
        },
        PROCESS_CA
      ],
      price: PRICE_CA,
      faq: [
        ['Què és la teràpia Gestalt?', "És una psicoteràpia humanista que posa l'atenció en el que et passa ara: el que sents, com et relaciones i què fas amb això. Es recolza en l'adonar-se (awareness) i en la responsabilitat, i dona molt de pes a la relació entre pacient i terapeuta."],
        ['En què es diferencia de la teràpia cognitivoconductual?', "La teràpia cognitivoconductual fa servir tècniques i exercicis per modificar pensaments i conductes concretes. En Gestalt treballem amb allò que apareix a la sessió, perquè t'adonis de com vius el que et passa i puguis triar des d'aquí. Si busques un tractament més estructurat, et puc orientar cap a un altre professional."],
        ['Necessito haver fet teràpia abans?', 'No. Només cal sentir que alguna cosa no va bé i voler mirar-ho.'],
        ['Quina formació tens?', "Em vaig formar tres anys com a psicoterapeuta Gestalt a l'Institut Gestalt de Barcelona i vaig passar altres tres anys com a observador en grups terapèutics. Sóc psicòleg general sanitari, col·legiat al Col·legi Oficial de Psicologia de Catalunya (núm. 30868)."],
        FAQ_ONLINE,
        FAQ_WHERE,
        FAQ_COST
      ]
    },
    {
      lang: 'ca',
      file: 'psicoleg-en-linia-espanya.html',
      title: 'Psicòleg en línia a Espanya | Teràpia per videotrucada | Marc Hampshire',
      desc: "Teràpia psicològica en línia a tot Espanya amb un psicòleg general sanitari col·legiat (COPC 30868): català, castellà o anglès. Sessions per videotrucada, 70 €.",
      crumb: 'Psicòleg en línia',
      h1: 'Psicòleg en línia a Espanya',
      lead: "Teràpia per videotrucada amb un psicòleg general sanitari col·legiat, en català, castellà o anglès. Visquis on visquis a Espanya, i amb el mateix treball que a la consulta.",
      sections: [
        {
          h: 'A qui li va bé la teràpia en línia',
          list: [
            ['Qui viu fora de Barcelona', 'En una altra ciutat o en un poble, sense haver de desplaçar-te.'],
            ['Agendes ajustades', 'Sense temps de viatge: la sessió cap en una pausa o en sortir de la feina.'],
            ['Qui viatja o es muda', 'Per mantenir la continuïtat mentre et mous per Espanya.'],
            ["Persones amb poca energia o ansietat", "Quan arribar a una cita ja és una barrera."],
            ['Qui vol teràpia en anglès', 'Sigui on sigui a Espanya.']
          ]
        },
        {
          h: 'Com funciona',
          p: [
            "Comencem amb una trucada gratuïta de 15 minuts per veure què necessites i si encaixem. Després, les sessions són per videotrucada: només necessites una bona connexió i un espai on puguis parlar amb llibertat.",
            "El treball és el mateix que a la consulta: psicoteràpia Gestalt i psicoanàlisi relacional, atenent a allò que passa en el present, també entre nosaltres a través de la pantalla.",
            "Si algun cop ets a Barcelona, també ens podem veure a la consulta, a l'Eixample."
          ]
        }
      ],
      price: PRICE_CA,
      faq: [
        ['La teràpia en línia funciona igual que la presencial?', "Per a la majoria de motius de consulta, sí: els estudis mostren resultats comparables. Podem revisar junts si t'està funcionant."],
        ['Què necessito per a les sessions?', 'Un dispositiu amb càmera i micròfon, una connexió estable i un espai tranquil i privat.'],
        ['Estàs col·legiat?', 'Sí. Sóc psicòleg general sanitari, col·legiat al Col·legi Oficial de Psicologia de Catalunya (núm. 30868).'],
        ['Com es paga?', 'Per Bizum o transferència, i reps factura de cada sessió.'],
        FAQ_COST
      ]
    }
  ];
};
