// MedCase — realistic mock data (PT-BR). Ready to be swapped for a real DB later.

export type Difficulty = "Básico" | "Faculdade" | "Residência";
export type Urgency = "Eletivo" | "Urgente" | "Emergência";

export interface Disease {
  id: string;
  name: string;
  specialty: string;
  difficulty: Difficulty;
  urgency: Urgency;
  incidence: string;
  avgTime: number; // minutes
  progress: number; // 0-100
  tags: string[];
  eponym?: string;
  summary: string;
  pathophysiology: string;
  symptoms: { sign: string; mechanism: string }[];
  diagnosis: string;
  exams: string[];
  differentials: string[];
  treatment: string;
  curiosity: string;
}

export const specialties = [
  { name: "Neurologia", icon: "Brain", progress: 64, color: "primary" },
  { name: "Endocrinologia", icon: "Activity", progress: 41, color: "accent" },
  { name: "Cardiologia", icon: "HeartPulse", progress: 78, color: "success" },
  { name: "Pneumologia", icon: "Wind", progress: 33, color: "warning" },
  { name: "Reumatologia", icon: "Bone", progress: 22, color: "primary" },
  { name: "Dermatologia", icon: "Layers", progress: 50, color: "accent" },
];

export const diseases: Disease[] = [
  {
    id: "esclerose-multipla",
    name: "Esclerose Múltipla",
    specialty: "Neurologia",
    difficulty: "Residência",
    urgency: "Urgente",
    incidence: "~15/100.000/ano",
    avgTime: 28,
    progress: 45,
    tags: ["Desmielinizante", "Autoimune", "SNC", "Surto-remissão"],
    summary:
      "Doença inflamatória desmielinizante crônica do SNC, mediada por linfócitos T autorreativos, com lesões disseminadas no tempo e no espaço.",
    pathophysiology:
      "Linfócitos T CD4+ autorreativos atravessam a barreira hematoencefálica e reconhecem antígenos da mielina (MBP, MOG, PLP). A cascata inflamatória (IFN-γ, TNF-α) recruta macrófagos que desmielinizam axônios, formando placas. A perda de mielina reduz a velocidade de condução saltatória — daí os sintomas. Remielinização parcial explica a fase surto-remissão.",
    symptoms: [
      {
        sign: "Neurite óptica",
        mechanism:
          "Desmielinização do nervo óptico → dor à movimentação ocular e escotoma central.",
      },
      {
        sign: "Sinal de Lhermitte",
        mechanism:
          "Lesão dos cordões posteriores cervicais → sensação de choque com flexão do pescoço.",
      },
      {
        sign: "Fadiga e fenômeno de Uhthoff",
        mechanism: "Bloqueio de condução em axônios desmielinizados, agravado pelo calor.",
      },
      {
        sign: "Oftalmoplegia internuclear",
        mechanism: "Lesão do fascículo longitudinal medial → déficit de adução no olhar conjugado.",
      },
    ],
    diagnosis:
      "Critérios de McDonald (2017): disseminação no tempo e no espaço, apoiada por RM e bandas oligoclonais no líquor.",
    exams: [
      "RM de crânio e medula com gadolínio",
      "Líquor: bandas oligoclonais (IgG)",
      "Potenciais evocados visuais",
      "OCT",
    ],
    differentials: [
      "Neuromielite óptica (anti-AQP4)",
      "ADEM",
      "Neurossarcoidose",
      "Doença de Behçet",
      "Deficiência de B12",
    ],
    treatment:
      "Surto: pulsoterapia com metilprednisolona. Modificadores de doença: interferon-β, fingolimode, natalizumabe, ocrelizumabe.",
    curiosity:
      "A 'tríade de Charcot' (nistagmo, tremor intencional e fala escandida) foi descrita por Jean-Martin Charcot, o pai da neurologia, em 1868.",
  },
  {
    id: "lambert-eaton",
    name: "Síndrome de Lambert-Eaton",
    specialty: "Neurologia",
    difficulty: "Residência",
    urgency: "Urgente",
    incidence: "~0,5/1.000.000/ano",
    avgTime: 24,
    progress: 20,
    eponym: "Lambert-Eaton",
    tags: ["Junção neuromuscular", "Paraneoplásica", "Anti-VGCC", "CPPC"],
    summary:
      "Síndrome miastênica autoimune pré-sináptica por anticorpos contra canais de cálcio dependentes de voltagem (VGCC), frequentemente paraneoplásica (carcinoma de pulmão de pequenas células).",
    pathophysiology:
      "Anticorpos anti-VGCC tipo P/Q na membrana pré-sináptica reduzem o influxo de cálcio e, consequentemente, a liberação de acetilcolina. Com a contração repetida, o cálcio se acumula e a transmissão melhora temporariamente — explicando a facilitação pós-exercício (oposto da miastenia gravis).",
    symptoms: [
      {
        sign: "Fraqueza proximal de membros inferiores",
        mechanism: "Liberação deficiente de ACh na placa motora pré-sináptica.",
      },
      {
        sign: "Facilitação pós-exercício",
        mechanism: "Acúmulo de cálcio pré-sináptico após esforço aumenta a liberação de ACh.",
      },
      {
        sign: "Disautonomia (boca seca)",
        mechanism: "VGCC também medeiam a transmissão colinérgica autonômica.",
      },
      {
        sign: "Hiporreflexia que reaparece pós-contração",
        mechanism: "Mesmo mecanismo de facilitação aplicado aos reflexos.",
      },
    ],
    diagnosis:
      "Eletroneuromiografia com incremento >60% após exercício/estimulação de alta frequência + anticorpos anti-VGCC. Sempre rastrear CPPC.",
    exams: [
      "ENMG com estimulação repetitiva",
      "Anti-VGCC P/Q",
      "TC de tórax / PET-CT (rastreio de CPPC)",
    ],
    differentials: [
      "Miastenia gravis",
      "Polimiosite",
      "Botulismo",
      "Polineuropatia paraneoplásica",
    ],
    treatment:
      "Amifampridina (3,4-diaminopiridina), tratamento do tumor subjacente, imunossupressão (prednisona/azatioprina) e IgIV em casos graves.",
    curiosity:
      "Até 60% dos casos estão associados ao carcinoma de pulmão de pequenas células — os sintomas neurológicos podem preceder o diagnóstico do câncer em até 2 anos.",
  },
  {
    id: "guillain-barre",
    name: "Síndrome de Guillain-Barré",
    specialty: "Neurologia",
    difficulty: "Faculdade",
    urgency: "Emergência",
    incidence: "~1-2/100.000/ano",
    avgTime: 22,
    progress: 60,
    eponym: "Guillain-Barré",
    tags: ["Polirradiculoneuropatia", "Autoimune", "Ascendente", "Pós-infecciosa"],
    summary:
      "Polirradiculoneuropatia desmielinizante aguda, geralmente pós-infecciosa (Campylobacter jejuni), com fraqueza ascendente e arreflexia.",
    pathophysiology:
      "Mimetismo molecular: anticorpos contra antígenos do agente infeccioso reagem com gangliosídeos da mielina periférica (GM1, GQ1b). A desmielinização das raízes nervosas causa bloqueio de condução ascendente. Pode evoluir para insuficiência respiratória.",
    symptoms: [
      {
        sign: "Fraqueza ascendente simétrica",
        mechanism: "Desmielinização de raízes nervosas, progredindo distal→proximal.",
      },
      { sign: "Arreflexia", mechanism: "Interrupção do arco reflexo por bloqueio de condução." },
      {
        sign: "Disautonomia",
        mechanism: "Acometimento de fibras autonômicas → arritmias, labilidade pressórica.",
      },
    ],
    diagnosis:
      "Clínico + dissociação albumino-citológica no líquor (proteína alta, células normais) + ENMG.",
    exams: [
      "Líquor (dissociação albumino-citológica)",
      "ENMG",
      "Espirometria seriada / capacidade vital",
    ],
    differentials: [
      "Lambert-Eaton",
      "Miastenia gravis",
      "Mielite transversa",
      "Botulismo",
      "Porfiria",
    ],
    treatment:
      "Imunoglobulina IV ou plasmaférese. Monitorização respiratória — NÃO usar corticoide isolado.",
    curiosity:
      "A variante Miller-Fisher cursa com a tríade oftalmoplegia, ataxia e arreflexia, associada ao anticorpo anti-GQ1b.",
  },
  {
    id: "hashimoto",
    name: "Tireoidite de Hashimoto",
    specialty: "Endocrinologia",
    difficulty: "Faculdade",
    urgency: "Eletivo",
    incidence: "Causa mais comum de hipotireoidismo",
    avgTime: 18,
    progress: 70,
    eponym: "Hashimoto",
    tags: ["Autoimune", "Hipotireoidismo", "Anti-TPO"],
    summary:
      "Tireoidite autoimune crônica, principal causa de hipotireoidismo em áreas suficientes em iodo. Destruição linfocítica da tireoide.",
    pathophysiology:
      "Infiltração linfocítica com formação de centros germinativos. Anticorpos anti-TPO e anti-tireoglobulina, além de citotoxicidade celular, destroem progressivamente os tireócitos, reduzindo a síntese de T3/T4 e elevando o TSH por feedback.",
    symptoms: [
      {
        sign: "Fadiga e ganho de peso",
        mechanism: "Queda do metabolismo basal por deficiência de hormônio tireoidiano.",
      },
      { sign: "Bócio firme", mechanism: "Infiltração linfocítica e fibrose do parênquima." },
      {
        sign: "Mixedema",
        mechanism: "Acúmulo de glicosaminoglicanos na derme por hipotireoidismo.",
      },
    ],
    diagnosis: "TSH elevado, T4 livre baixo, anti-TPO positivo. USG com padrão heterogêneo.",
    exams: ["TSH e T4 livre", "Anti-TPO e anti-tireoglobulina", "USG de tireoide"],
    differentials: [
      "Hipotireoidismo central",
      "Tireoidite subaguda de De Quervain",
      "Deficiência de iodo",
    ],
    treatment: "Levotiroxina com titulação por TSH.",
    curiosity:
      "Foi a primeira doença autoimune órgão-específica descrita — por Hakaru Hashimoto, em 1912, em apenas 4 pacientes.",
  },
  {
    id: "graves",
    name: "Doença de Graves",
    specialty: "Endocrinologia",
    difficulty: "Faculdade",
    urgency: "Urgente",
    incidence: "~20-50/100.000/ano",
    avgTime: 20,
    progress: 35,
    eponym: "Graves",
    tags: ["Autoimune", "Hipertireoidismo", "TRAb", "Oftalmopatia"],
    summary:
      "Causa mais comum de hipertireoidismo. Autoanticorpos estimuladores do receptor de TSH (TRAb) levam à hiperprodução hormonal.",
    pathophysiology:
      "O TRAb mimetiza o TSH, ativando cronicamente o receptor e estimulando hipertrofia, hiperplasia e hipersecreção tireoidiana. Na órbita, fibroblastos expressam o receptor de TSH → glicosaminoglicanos e edema retro-orbitário (oftalmopatia).",
    symptoms: [
      {
        sign: "Exoftalmia",
        mechanism: "Inflamação e depósito de GAG na musculatura/gordura retro-orbitária.",
      },
      {
        sign: "Taquicardia e tremor",
        mechanism: "Hiperatividade adrenérgica por excesso de hormônio tireoidiano.",
      },
      {
        sign: "Mixedema pré-tibial",
        mechanism: "Depósito dérmico de glicosaminoglicanos mediado por TRAb.",
      },
    ],
    diagnosis:
      "TSH suprimido, T4/T3 elevados, TRAb positivo. Captação difusa aumentada na cintilografia.",
    exams: ["TSH, T4 e T3 livres", "TRAb", "Cintilografia com captação de iodo"],
    differentials: [
      "Bócio multinodular tóxico",
      "Adenoma tóxico",
      "Tireoidite na fase tireotóxica",
    ],
    treatment: "Metimazol, betabloqueador sintomático, iodo radioativo ou tireoidectomia.",
    curiosity:
      "A 'tempestade tireoidiana' é uma emergência com mortalidade de até 30% — febre, taquiarritmia e alteração do nível de consciência.",
  },
  {
    id: "cushing",
    name: "Síndrome de Cushing",
    specialty: "Endocrinologia",
    difficulty: "Residência",
    urgency: "Urgente",
    incidence: "~2-3/1.000.000/ano",
    avgTime: 26,
    progress: 15,
    eponym: "Cushing",
    tags: ["Hipercortisolismo", "Eixo HHA", "ACTH"],
    summary:
      "Conjunto de manifestações do excesso crônico de glicocorticoides, endógeno (doença de Cushing/ACTH) ou exógeno.",
    pathophysiology:
      "O excesso de cortisol gera catabolismo proteico, gliconeogênese e redistribuição de gordura central. A doença de Cushing decorre de adenoma hipofisário secretor de ACTH; tumores ectópicos (ex.: CPPC) também produzem ACTH.",
    symptoms: [
      {
        sign: "Face em lua cheia e giba",
        mechanism: "Redistribuição central de gordura por lipogênese diferencial.",
      },
      {
        sign: "Estrias violáceas largas",
        mechanism: "Catabolismo de colágeno e fragilidade dérmica.",
      },
      {
        sign: "Miopatia proximal",
        mechanism: "Catabolismo proteico muscular induzido por cortisol.",
      },
    ],
    diagnosis:
      "Cortisol salivar noturno, cortisol livre urinário 24h, teste de supressão com dexametasona; depois dosar ACTH.",
    exams: [
      "Cortisol salivar à meia-noite",
      "Cortisol livre urinário",
      "Teste de supressão com dexametasona",
      "ACTH plasmático",
    ],
    differentials: ["Pseudo-Cushing (álcool, depressão)", "Obesidade metabólica", "SOP"],
    treatment:
      "Cirurgia transesfenoidal (doença de Cushing), adrenalectomia, cetoconazol/metirapona.",
    curiosity:
      "Harvey Cushing, neurocirurgião pioneiro, descreveu a síndrome em 1932 — também é o pai da neurocirurgia moderna.",
  },
  {
    id: "addison",
    name: "Doença de Addison",
    specialty: "Endocrinologia",
    difficulty: "Faculdade",
    urgency: "Emergência",
    incidence: "~5/100.000",
    avgTime: 19,
    progress: 25,
    eponym: "Addison",
    tags: ["Insuficiência adrenal", "Autoimune", "Cortisol baixo"],
    summary:
      "Insuficiência adrenal primária por destruição do córtex (autoimune na maioria), com deficiência de cortisol e aldosterona.",
    pathophysiology:
      "Destruição do córtex adrenal reduz cortisol e aldosterona. A queda de cortisol desinibe o ACTH/POMC → hiperpigmentação. A falta de aldosterona causa perda de sódio, retenção de potássio e hipovolemia.",
    symptoms: [
      { sign: "Hiperpigmentação", mechanism: "ACTH/MSH elevados (POMC) estimulam melanócitos." },
      {
        sign: "Hipotensão e avidez por sal",
        mechanism: "Deficiência de aldosterona → natriurese e hipovolemia.",
      },
      {
        sign: "Hiponatremia com hipercalemia",
        mechanism: "Perda renal de sódio e retenção de potássio.",
      },
    ],
    diagnosis: "Cortisol matinal baixo + ACTH elevado; teste de estímulo com cosintropina (ACTH).",
    exams: [
      "Cortisol e ACTH matinais",
      "Teste da cosintropina",
      "Eletrólitos",
      "Anti-21-hidroxilase",
    ],
    differentials: ["Insuficiência adrenal secundária", "Sepse", "Síndrome consumptiva"],
    treatment: "Reposição de hidrocortisona + fludrocortisona. Crise: hidrocortisona IV e volume.",
    curiosity:
      "John F. Kennedy tinha doença de Addison, mantida em segredo durante sua presidência.",
  },
  {
    id: "parkinson",
    name: "Doença de Parkinson",
    specialty: "Neurologia",
    difficulty: "Faculdade",
    urgency: "Eletivo",
    incidence: "~1% acima de 60 anos",
    avgTime: 21,
    progress: 55,
    eponym: "Parkinson",
    tags: ["Neurodegenerativa", "Dopamina", "Substância negra"],
    summary:
      "Doença neurodegenerativa por perda de neurônios dopaminérgicos da substância negra, com tremor de repouso, rigidez e bradicinesia.",
    pathophysiology:
      "Degeneração da substância negra pars compacta reduz a dopamina nigroestriatal, desequilibrando as vias direta/indireta dos núcleos da base em favor da inibição do movimento. Corpos de Lewy (α-sinucleína) são o marco patológico.",
    symptoms: [
      {
        sign: "Tremor de repouso (4-6 Hz)",
        mechanism: "Oscilação dos circuitos dos núcleos da base por déficit dopaminérgico.",
      },
      {
        sign: "Rigidez em roda denteada",
        mechanism: "Aumento do tônus por hiperatividade da via indireta.",
      },
      {
        sign: "Bradicinesia",
        mechanism: "Inibição excessiva do tálamo-cortical reduz iniciação do movimento.",
      },
    ],
    diagnosis: "Clínico (bradicinesia + tremor ou rigidez) com resposta à levodopa.",
    exams: [
      "Avaliação clínica/UPDRS",
      "RM (excluir parkinsonismo secundário)",
      "DAT-SPECT em casos dúbios",
    ],
    differentials: [
      "Parkinsonismo medicamentoso",
      "Atrofia de múltiplos sistemas",
      "Paralisia supranuclear progressiva",
      "Tremor essencial",
    ],
    treatment: "Levodopa/carbidopa, agonistas dopaminérgicos, iMAO-B; DBS em casos avançados.",
    curiosity:
      "James Parkinson descreveu a 'paralisia agitante' em 1817 — mas só observou seus pacientes na rua, sem nunca examiná-los formalmente.",
  },
  {
    id: "huntington",
    name: "Doença de Huntington",
    specialty: "Neurologia",
    difficulty: "Residência",
    urgency: "Eletivo",
    incidence: "~5-10/100.000",
    avgTime: 23,
    progress: 10,
    eponym: "Huntington",
    tags: ["Genética", "Autossômica dominante", "CAG", "Coreia"],
    summary:
      "Doença neurodegenerativa autossômica dominante por expansão de repetições CAG no gene HTT, com coreia, declínio cognitivo e alterações psiquiátricas.",
    pathophysiology:
      "Expansão CAG (>36) no gene HTT produz huntingtina anormal que se agrega e causa morte neuronal preferencial no núcleo caudado e putâmen, degenerando a via indireta → movimentos hipercinéticos (coreia). Antecipação genética com expansões maiores em gerações sucessivas.",
    symptoms: [
      {
        sign: "Coreia",
        mechanism:
          "Degeneração da via indireta estriatal libera o tálamo-cortical → movimentos involuntários.",
      },
      {
        sign: "Demência subcortical",
        mechanism: "Perda neuronal estriatal e frontal compromete funções executivas.",
      },
      { sign: "Sintomas psiquiátricos", mechanism: "Disfunção de circuitos fronto-estriatais." },
    ],
    diagnosis:
      "Teste genético (contagem de repetições CAG) + clínica. RM mostra atrofia do caudado.",
    exams: ["Teste genético HTT (CAG)", "RM de crânio", "Avaliação neuropsicológica"],
    differentials: ["Coreia de Sydenham", "Neuroacantocitose", "Coreia por LES/SAF", "Wilson"],
    treatment:
      "Sintomático: tetrabenazina/deutetrabenazina para coreia, suporte psiquiátrico. Sem cura.",
    curiosity:
      "George Huntington descreveu a doença aos 22 anos, observando famílias afetadas em Long Island, baseado nas anotações do pai e do avô médicos.",
  },
  {
    id: "horner",
    name: "Síndrome de Horner",
    specialty: "Neurologia",
    difficulty: "Faculdade",
    urgency: "Urgente",
    incidence: "Variável (sinal localizatório)",
    avgTime: 16,
    progress: 30,
    eponym: "Horner",
    tags: ["Simpático", "Ptose", "Miose", "Anidrose"],
    summary:
      "Interrupção da via simpática oculossimpática, causando a tríade ptose, miose e anidrose ipsilateral.",
    pathophysiology:
      "Lesão em qualquer ponto da via simpática de três neurônios (hipotálamo → centro cilioespinal de Budge → gânglio cervical superior → olho) reduz a inervação do músculo dilatador da pupila, de Müller e das glândulas sudoríparas faciais.",
    symptoms: [
      { sign: "Miose", mechanism: "Perda da inervação simpática do músculo dilatador da íris." },
      { sign: "Ptose parcial", mechanism: "Denervação do músculo tarsal superior (de Müller)." },
      { sign: "Anidrose facial", mechanism: "Perda da inervação simpática sudomotora." },
    ],
    diagnosis:
      "Clínico; teste de apraclonidina/cocaína. Investigar causa (Pancoast, dissecção carotídea).",
    exams: [
      "Teste farmacológico (apraclonidina)",
      "Angio-TC/RM de carótidas",
      "RX/TC de tórax (tumor de Pancoast)",
    ],
    differentials: ["Anisocoria fisiológica", "Paralisia do III par", "Pupila de Adie"],
    treatment: "Tratar a causa subjacente.",
    curiosity:
      "Um tumor do ápice pulmonar (Pancoast) pode invadir a cadeia simpática e ser a primeira pista de um câncer de pulmão.",
  },
  {
    id: "marfan",
    name: "Síndrome de Marfan",
    specialty: "Cardiologia",
    difficulty: "Faculdade",
    urgency: "Urgente",
    incidence: "~1/5.000",
    avgTime: 20,
    progress: 40,
    eponym: "Marfan",
    tags: ["Genética", "Fibrilina-1", "Tecido conjuntivo", "Aorta"],
    summary:
      "Doença autossômica dominante do tecido conjuntivo por mutação no gene FBN1 (fibrilina-1), com manifestações esqueléticas, oculares e cardiovasculares.",
    pathophysiology:
      "Mutações na fibrilina-1 desestruturam as microfibrilas e liberam TGF-β em excesso, enfraquecendo o tecido conjuntivo. Na aorta, isso causa necrose cística da média e dilatação da raiz aórtica, com risco de dissecção.",
    symptoms: [
      {
        sign: "Aracnodactilia e alta estatura",
        mechanism: "Crescimento ósseo excessivo por desregulação do TGF-β.",
      },
      {
        sign: "Ectopia do cristalino (superotemporal)",
        mechanism: "Fragilidade das fibras zonulares ricas em fibrilina.",
      },
      {
        sign: "Dilatação da raiz da aorta",
        mechanism: "Necrose cística da média por matriz extracelular anormal.",
      },
    ],
    diagnosis:
      "Critérios de Ghent (escore sistêmico, aorta, ectopia, FBN1). Ecocardiograma seriado.",
    exams: [
      "Ecocardiograma (raiz aórtica)",
      "Teste genético FBN1",
      "Avaliação oftalmológica",
      "Angio-RM de aorta",
    ],
    differentials: ["Síndrome de Loeys-Dietz", "Ehlers-Danlos vascular", "Homocistinúria"],
    treatment:
      "Betabloqueador/losartana, restrição de esportes de impacto, cirurgia profilática da aorta.",
    curiosity:
      "Especula-se que Abraham Lincoln tivesse Marfan — embora nunca confirmado. Hoje é tema clássico de prova por unir cardio, oftalmo e ortopedia.",
  },
  {
    id: "stevens-johnson",
    name: "Síndrome de Stevens-Johnson",
    specialty: "Dermatologia",
    difficulty: "Residência",
    urgency: "Emergência",
    incidence: "~1-6/1.000.000/ano",
    avgTime: 22,
    progress: 18,
    eponym: "Stevens-Johnson",
    tags: ["Reação adversa", "Mucocutânea", "Emergência", "Nikolsky+"],
    summary:
      "Reação mucocutânea grave, geralmente medicamentosa, com necrose e descolamento epidérmico < 10% da SC (SSJ) ou > 30% (NET).",
    pathophysiology:
      "Resposta citotóxica mediada por linfócitos T CD8+ e células NK; granulisina e o eixo Fas/FasL induzem apoptose maciça dos queratinócitos, causando descolamento dermoepidérmico. Gatilhos: sulfas, anticonvulsivantes, alopurinol, AINEs.",
    symptoms: [
      {
        sign: "Lesões em alvo atípicas e bolhas",
        mechanism: "Apoptose de queratinócitos com clivagem dermoepidérmica.",
      },
      {
        sign: "Sinal de Nikolsky positivo",
        mechanism: "Fragilidade epidérmica permite descolamento à pressão lateral.",
      },
      {
        sign: "Acometimento de mucosas",
        mechanism: "Necrose epitelial de mucosa oral, ocular e genital.",
      },
    ],
    diagnosis:
      "Clínico + biópsia (necrose de espessura total da epiderme). Escore SCORTEN para prognóstico.",
    exams: ["Biópsia de pele", "SCORTEN", "Eletrólitos e função renal", "Avaliação oftalmológica"],
    differentials: [
      "Síndrome da pele escaldada estafilocócica",
      "Pênfigo",
      "DRESS",
      "Eritema multiforme maior",
    ],
    treatment:
      "Suspender o fármaco, suporte tipo grande queimado (UTI), cuidado ocular; ciclosporina/IgIV conforme caso.",
    curiosity:
      "Foi descrita em 1922 por dois pediatras americanos, Albert Stevens e Frank Johnson, em duas crianças com febre e erupção bolhosa.",
  },
];

export const user = {
  name: "Dra. Helena",
  firstName: "Helena",
  university: "Universidade Federal de Medicina",
  period: "8º período",
  targetResidency: "Neurologia",
  crm: "—",
  avatarInitials: "H",
  streak: 27,
  xp: 14820,
  level: 12,
  levelLabel: "Residente R2",
  xpToNext: 1180,
  studiedToday: 42, // min
  studiedWeek: 312,
  favoriteSpecialties: ["Neurologia", "Endocrinologia", "Cardiologia"],
  rankPosition: 142,
  rankTotal: 8930,
};

export const badges = [
  { name: "Maratonista", desc: "30 dias seguidos estudando", icon: "Flame", earned: true },
  { name: "Diagnosticador", desc: "50 casos resolvidos", icon: "Stethoscope", earned: true },
  { name: "Memória de Elefante", desc: "1000 flashcards revisados", icon: "Brain", earned: true },
  { name: "Plantonista", desc: "10 plantões concluídos", icon: "Siren", earned: true },
  { name: "Acadêmico", desc: "Concluiu 5 especialidades", icon: "GraduationCap", earned: false },
  { name: "Imbatível", desc: "100 questões sem erro", icon: "Trophy", earned: false },
];

export const timeline = [
  { date: "Hoje", text: "Resolveu o plantão 'Fraqueza progressiva' com 92% de acerto", xp: 320 },
  { date: "Ontem", text: "Concluiu o módulo Fisiopatologia — Esclerose Múltipla", xp: 180 },
  { date: "2 dias", text: "Revisou 48 flashcards de Endocrinologia", xp: 96 },
  { date: "3 dias", text: "Conquistou a badge 'Maratonista'", xp: 250 },
];

export const dailyMission = {
  title: "Missão do dia",
  desc: "Resolva 1 caso de Neurologia e revise 20 flashcards",
  progress: 60,
  reward: 250,
};

export const flashcards = [
  {
    id: "fc1",
    specialty: "Neurologia",
    difficulty: "Difícil",
    front: "Qual o mecanismo da facilitação pós-exercício na síndrome de Lambert-Eaton?",
    back: "O esforço repetido acumula cálcio na terminação pré-sináptica, aumentando a liberação de acetilcolina e melhorando temporariamente a força e os reflexos.",
  },
  {
    id: "fc2",
    specialty: "Neurologia",
    difficulty: "Médio",
    front: "O que é o fenômeno de Uhthoff na esclerose múltipla?",
    back: "Piora transitória dos sintomas com o aumento da temperatura corporal (calor, exercício, febre), por bloqueio de condução em axônios desmielinizados.",
  },
  {
    id: "fc3",
    specialty: "Endocrinologia",
    difficulty: "Fácil",
    front: "Qual o principal anticorpo da tireoidite de Hashimoto?",
    back: "Anti-tireoperoxidase (anti-TPO), além do anti-tireoglobulina.",
  },
  {
    id: "fc4",
    specialty: "Endocrinologia",
    difficulty: "Médio",
    front: "Como diferenciar Cushing ACTH-dependente de independente?",
    back: "Dosar ACTH: elevado/normal sugere dependente (hipófise ou ectópico); suprimido indica fonte adrenal independente.",
  },
  {
    id: "fc5",
    specialty: "Cardiologia",
    difficulty: "Médio",
    front: "Onde tipicamente luxa o cristalino na síndrome de Marfan?",
    back: "Superotemporal (na homocistinúria é inferonasal).",
  },
];

export const questions = [
  {
    id: "q1",
    specialty: "Neurologia",
    style: "Residência",
    stem: "Mulher de 58 anos, tabagista, com fraqueza proximal de membros inferiores que melhora após exercício, boca seca e hiporreflexia. ENMG mostra incremento de resposta após estimulação de alta frequência. Qual a conduta inicial mais adequada?",
    options: [
      {
        letter: "A",
        text: "Iniciar piridostigmina e observar",
        correct: false,
        why: "A piridostigmina é mais útil na miastenia gravis; aqui o defeito é pré-sináptico e a resposta é limitada.",
      },
      {
        letter: "B",
        text: "Rastrear carcinoma de pulmão de pequenas células com TC de tórax",
        correct: true,
        why: "O quadro é clássico de Lambert-Eaton, paraneoplásico em até 60% dos casos — o rastreio de CPPC é prioritário.",
      },
      {
        letter: "C",
        text: "Solicitar anti-AChR e iniciar corticoide",
        correct: false,
        why: "Anti-AChR é da miastenia gravis. O anticorpo aqui é anti-VGCC.",
      },
      {
        letter: "D",
        text: "Realizar timectomia",
        correct: false,
        why: "Timectomia é conduta da miastenia gravis associada a timoma, não do Lambert-Eaton.",
      },
    ],
  },
  {
    id: "q2",
    specialty: "Neurologia",
    style: "Residência",
    stem: "Homem de 30 anos com fraqueza ascendente simétrica há 5 dias, arreflexia e dispneia leve, 2 semanas após diarreia. Qual achado liquórico é esperado?",
    options: [
      {
        letter: "A",
        text: "Pleocitose linfocítica",
        correct: false,
        why: "Pleocitose sugere infecção/inflamação meníngea, não Guillain-Barré.",
      },
      {
        letter: "B",
        text: "Dissociação albumino-citológica",
        correct: true,
        why: "Proteína elevada com celularidade normal é o achado clássico da Síndrome de Guillain-Barré.",
      },
      {
        letter: "C",
        text: "Glicose muito reduzida",
        correct: false,
        why: "Hipoglicorraquia sugere meningite bacteriana/TB.",
      },
      {
        letter: "D",
        text: "Líquor totalmente normal",
        correct: false,
        why: "Embora possa ser normal nos primeiros dias, o esperado é a dissociação albumino-citológica.",
      },
    ],
  },
  {
    id: "q3",
    specialty: "Endocrinologia",
    style: "Prova",
    stem: "Paciente com hiperpigmentação, hipotensão postural, hiponatremia e hipercalemia. Qual o diagnóstico mais provável?",
    options: [
      {
        letter: "A",
        text: "Síndrome de Cushing",
        correct: false,
        why: "Cushing cursa com hipertensão e fácies em lua cheia, não hiperpigmentação por ACTH alto com hipotensão.",
      },
      {
        letter: "B",
        text: "Doença de Addison",
        correct: true,
        why: "A insuficiência adrenal primária reúne hiperpigmentação (ACTH alto), hipotensão e distúrbio eletrolítico (Na baixo, K alto).",
      },
      {
        letter: "C",
        text: "Hiperaldosteronismo primário",
        correct: false,
        why: "Cursaria com hipertensão e hipocalemia, o oposto do quadro.",
      },
      {
        letter: "D",
        text: "Feocromocitoma",
        correct: false,
        why: "Predomina hipertensão paroxística com palpitações e sudorese.",
      },
    ],
  },
];

export const communityFeed = [
  {
    id: "p1",
    author: "Dr. Lucas Andrade",
    role: "R3 Neurologia",
    time: "há 2h",
    initials: "L",
    text: "Caso interessante de oftalmoplegia internuclear bilateral em paciente jovem. RM confirmou EM. Alguém já viu apresentação parecida sem neurite óptica prévia?",
    tags: ["Neurologia", "Caso"],
    likes: 48,
    comments: 12,
  },
  {
    id: "p2",
    author: "Ana Beatriz",
    role: "Acadêmica 9º período",
    time: "há 5h",
    initials: "A",
    text: "Dica de prova: na síndrome de Marfan o cristalino luxa para CIMA; na homocistinúria, para BAIXO. Esse detalhe já caiu em 3 residências esse ano!",
    tags: ["Dica", "Cardiologia"],
    likes: 132,
    comments: 27,
  },
  {
    id: "p3",
    author: "Dra. Marina Costa",
    role: "Endocrinologista",
    time: "há 1d",
    initials: "M",
    text: "Discussão de caso (anonimizado): paciente com tempestade tireoidiana pós-cirurgia. Reforço: anonimização obrigatória ao compartilhar dados clínicos. 🔒",
    tags: ["Endocrinologia", "Emergência"],
    likes: 89,
    comments: 19,
  },
];

export const studyClubs = [
  { name: "Neuro Hard Mode", members: 1240, specialty: "Neurologia" },
  { name: "Endócrino sem Dó", members: 980, specialty: "Endocrinologia" },
  { name: "Cardio na Veia", members: 2310, specialty: "Cardiologia" },
  { name: "UFMed — Turma 2026", members: 312, specialty: "Faculdade" },
];

export const curiosities = [
  {
    title: "Você sabia?",
    text: "O 'sinal de Lhermitte' da esclerose múltipla foi nomeado por um neurologista francês, mas já havia sido descrito antes por Pierre Marie — um clássico epônimo 'roubado'.",
    tag: "Epônimo",
  },
  {
    title: "Caso famoso",
    text: "John F. Kennedy conviveu com a doença de Addison, mantida em sigilo durante toda a sua presidência.",
    tag: "História",
  },
  {
    title: "Pegadinha de prova",
    text: "Lambert-Eaton MELHORA com o exercício; miastenia gravis PIORA. Inverter isso é o erro mais comum em provas de residência.",
    tag: "Pegadinha",
  },
  {
    title: "Mito vs. fato",
    text: "Nem todo paciente com Parkinson tem tremor — até 20% abrem o quadro apenas com rigidez e bradicinesia.",
    tag: "Mito",
  },
];

// Plantão — caso clínico interativo
export const plantaoCase = {
  patient: "Sr. Antônio",
  age: 61,
  sex: "Masculino",
  chiefComplaint: "Fraqueza progressiva nas pernas há 3 meses",
  vitals: { pa: "138/86 mmHg", fc: "78 bpm", fr: "16 irpm", temp: "36,5 °C", sat: "97%" },
  history:
    "Tabagista (40 maços-ano). Relata dificuldade crescente para subir escadas e levantar de cadeiras. Nota que a força 'melhora um pouco' após começar a andar. Refere boca seca e leve constipação.",
  budget: 1000,
  anamnesis: [
    {
      q: "A fraqueza melhora ou piora ao longo do dia/atividade?",
      a: "Curiosamente, sinto que melhora um pouco depois que começo a me mexer.",
      key: true,
    },
    {
      q: "Há sintomas oculares (ptose, visão dupla)?",
      a: "Não, meus olhos estão normais.",
      key: false,
    },
    {
      q: "Há sintomas autonômicos (boca seca, constipação, impotência)?",
      a: "Sim, boca bem seca e intestino preso ultimamente.",
      key: true,
    },
    {
      q: "Histórico de tabagismo e perda de peso?",
      a: "Fumo há 40 anos e perdi uns 6 kg sem querer.",
      key: true,
    },
  ],
  exam: [
    {
      item: "Força muscular proximal",
      result: "Grau 4 em cintura pélvica, melhora após contração repetida.",
      key: true,
    },
    {
      item: "Reflexos profundos",
      result: "Hipoativos, reaparecem após exercício isométrico.",
      key: true,
    },
    { item: "Avaliação ocular / ptose", result: "Sem ptose ou oftalmoparesia.", key: false },
    { item: "Sensibilidade", result: "Preservada globalmente.", key: false },
  ],
  exams: [
    {
      name: "ENMG com estimulação repetitiva",
      cost: 250,
      result: "Incremento >60% após estímulo de alta frequência — defeito pré-sináptico.",
      key: true,
    },
    { name: "Anti-VGCC (canais de cálcio P/Q)", cost: 180, result: "Positivo.", key: true },
    {
      name: "TC de tórax",
      cost: 220,
      result: "Massa hilar à direita, sugestiva de neoplasia.",
      key: true,
    },
    { name: "Anti-AChR", cost: 160, result: "Negativo.", key: false },
    { name: "Hemograma completo", cost: 40, result: "Sem alterações relevantes.", key: false },
  ],
  hypotheses: [
    { dx: "Síndrome de Lambert-Eaton + CPPC", correct: true },
    { dx: "Miastenia gravis", correct: false },
    { dx: "Polimiosite", correct: false },
    { dx: "Síndrome de Guillain-Barré", correct: false },
  ],
  preceptorFeedback:
    "Excelente raciocínio. A tríade fraqueza proximal com facilitação pós-exercício + disautonomia + tabagismo aponta para síndrome de Lambert-Eaton. A massa hilar confirma a associação paraneoplásica com carcinoma de pulmão de pequenas células. Próximo passo: amifampridina e tratamento oncológico.",
};

export function getDisease(id: string) {
  return diseases.find((d) => d.id === id);
}
