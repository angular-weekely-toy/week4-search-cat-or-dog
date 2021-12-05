export class Breed {
  weight: Weight;
  id: string;
  name: string;
  temperament: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  image: Image;

  constructor(
    weight: Weight,
    id: string,
    name: string,
    temperament: string,
    description: string,
    life_span: string,
    indoor: number,
    alt_names: string,
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    image: Image
  ) {
    this.weight = weight;
    this.id = id;
    this.name = name;
    this.temperament = temperament;
    this.description = description;
    this.life_span = life_span;
    this.indoor = indoor;
    this.alt_names = alt_names;
    this.adaptability = adaptability;
    this.affection_level = affection_level;
    this.child_friendly = child_friendly;
    this.dog_friendly = dog_friendly;
    this.energy_level = energy_level;
    this.grooming = grooming;
    this.health_issues = health_issues;
    this.intelligence = intelligence;
    this.shedding_level = shedding_level;
    this.social_needs = social_needs;
    this.stranger_friendly = stranger_friendly;
    this.vocalisation = vocalisation;
    this.experimental = experimental;
    this.hairless = hairless;
    this.natural = natural;
    this.rare = rare;
    this.rex = rex;
    this.suppressed_tail = suppressed_tail;
    this.short_legs = short_legs;
    this.wikipedia_url = wikipedia_url;
    this.hypoallergenic = hypoallergenic;
    this.image = image;
  }
}

type Weight = {
  imperial: string;
  metric: string;
};

type Image = {
  id: string;
  width: number;
  height: number;
  url: string;
};
