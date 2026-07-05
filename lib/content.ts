import {
  CalendarDays,
  Coffee,
  Flower2,
  Gift,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MapPin,
  Newspaper,
  Palette,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound
} from "lucide-react";

export const site = {
  name: "Vrouwengilde Goes",
  description:
    "Vrouwenvereniging in Goes voor ontmoeting, activiteiten, creativiteit en gezelligheid.",
  contact: {
    email: "vrouwengilde@zeelandnet.nl",
    phone: "06 49 400 700",
    secretariat: "Secretariaat",
    address: "Sluisplaat 12",
    postalCity: "4465BA Goes",
    location: "Goes",
    person: "Secretariaat"
  }
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Bestuur", href: "/bestuur" },
  { label: "Activiteiten", href: "/activiteiten" },
  { label: "Nieuws", href: "/nieuws" },
  { label: "Foto's", href: "/fotos" },
  { label: "Lid worden", href: "/lid-worden" },
  { label: "Goed doel", href: "/goed-doel" },
  { label: "Contact", href: "/contact" }
];

export const highlights = [
  {
    title: "Ontmoeten",
    description:
      "Een vertrouwde plek om andere vrouwen te spreken, ervaringen te delen en samen een fijne middag te hebben.",
    icon: UsersRound
  },
  {
    title: "Ontspannen",
    description:
      "Rustige koffie- en theemomenten, gezellige samenkomsten en ruimte voor aandacht voor elkaar.",
    icon: Coffee
  },
  {
    title: "Ontwikkelen",
    description:
      "Lezingen, presentaties en activiteiten die inspireren tot bewustwording en persoonlijke groei.",
    icon: Lightbulb
  }
];

export const activities = [
  {
    title: "Inloopmiddag",
    date: "Iedere 1e en 3e woensdag - datum volgt",
    description:
      "Een laagdrempelige middag voor ontmoeting, een kop koffie of thee en een creatieve activiteit.",
    category: "Samenkomst",
    icon: Coffee
  },
  {
    title: "Creatieve activiteit",
    date: "Datum volgt",
    description:
      "Samen werken aan een creatieve opdracht, met ruimte voor plezier, gesprek en nieuwe ideeën.",
    category: "Creatief",
    icon: Palette
  },
  {
    title: "Lezing of presentatie",
    date: "Datum volgt",
    description:
      "Een inspirerende bijeenkomst over een onderwerp dat past bij ontspanning, bewustwording of persoonlijke ontwikkeling.",
    category: "Vorming",
    icon: Sparkles
  },
  {
    title: "Jaarlijkse ledendag",
    date: "Datum volgt",
    description:
      "Een dag waarop leden samen terugkijken, vooruitkijken en op een gezellige manier tijd met elkaar doorbrengen.",
    category: "Leden",
    icon: CalendarDays
  },
  {
    title: "Uitstapje",
    date: "Datum volgt",
    description:
      "Een gezamenlijke activiteit buiten de vaste ontmoetingsplek, met aandacht voor gezelligheid en verbinding.",
    category: "Op pad",
    icon: MapPin
  },
  {
    title: "Kerstactiviteit",
    date: "Datum volgt",
    description:
      "Een warme bijeenkomst aan het einde van het jaar, met aandacht voor samenzijn en sfeer.",
    category: "Jaarmoment",
    icon: Gift
  }
];

export const newsItems = [
  {
    title: "Nieuwe website in voorbereiding",
    date: "5 juli 2026",
    description:
      "Vrouwengilde Goes werkt aan een moderne website waarop activiteiten, nieuws en praktische informatie overzichtelijk bij elkaar staan.",
    icon: Newspaper
  },
  {
    title: "Programma wordt aangevuld",
    date: "Datum volgt",
    description:
      "De activiteitenpagina wordt later aangevuld met actuele datums, locaties en extra informatie over bijeenkomsten.",
    icon: CalendarDays
  },
  {
    title: "Kom kennismaken",
    date: "Doorlopend",
    description:
      "Geïnteresseerden kunnen contact opnemen met het secretariaat om rustig kennis te maken met de vereniging.",
    icon: Megaphone
  }
];

export const boardMembers = [
  {
    role: "Voorzitter",
    name: "Naam volgt",
    description:
      "Leidt vergaderingen en bewaakt samen met het bestuur de koers van de vereniging.",
    icon: UserRound
  },
  {
    role: "Secretaris",
    name: "Secretariaat",
    description:
      "Verzorgt correspondentie, ledeninformatie en het algemene contact met de vereniging.",
    icon: ShieldCheck
  },
  {
    role: "Penningmeester",
    name: "Naam volgt",
    description:
      "Houdt overzicht op de financiën. Bankgegevens worden niet op de website gepubliceerd.",
    icon: HandHeart
  },
  {
    role: "Bestuurslid activiteiten",
    name: "Naam volgt",
    description:
      "Denkt mee over bijeenkomsten, creatieve middagen, uitstapjes en jaarmomenten.",
    icon: CalendarDays
  }
];

export const photoCategories = [
  {
    title: "Activiteiten",
    image: "/images/photo-activiteiten.svg",
    alt: "Placeholder voor foto's van activiteiten"
  },
  {
    title: "Uitstapjes",
    image: "/images/photo-uitstapjes.svg",
    alt: "Placeholder voor foto's van uitstapjes"
  },
  {
    title: "Creatief",
    image: "/images/photo-creatief.svg",
    alt: "Placeholder voor creatieve foto's"
  },
  {
    title: "Jaarmomenten",
    image: "/images/photo-jaarmomenten.svg",
    alt: "Placeholder voor foto's van jaarmomenten"
  }
];

export const values = [
  {
    title: "Toegankelijk",
    description:
      "Geïnteresseerden zijn welkom om op een rustige manier kennis te maken.",
    icon: HeartHandshake
  },
  {
    title: "Betrokken",
    description:
      "De vereniging heeft aandacht voor leden, voor elkaar en voor een goed doel.",
    icon: HandHeart
  },
  {
    title: "Creatief",
    description:
      "Er is ruimte om samen bezig te zijn, iets nieuws te proberen en plezier te hebben.",
    icon: Flower2
  }
];
