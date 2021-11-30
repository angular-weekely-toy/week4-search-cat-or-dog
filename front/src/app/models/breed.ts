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

// {
//     "weight": {
//         "imperial": "8 - 15",
//         "metric": "4 - 7"
//     },
//     "id": "chee",
//     "name": "Cheetoh",
//     "temperament": "Affectionate, Gentle, Intelligent, Social",
//     "origin": "United States",
//     "country_codes": "US",
//     "country_code": "US",
//     "description": "The Cheetoh has a super affectionate nature and real love for their human companions; they are intelligent with the ability to learn quickly. You can expect that a Cheetoh will be a fun-loving kitty who enjoys playing, running, and jumping through every room in your house.",
//     "life_span": "12 - 14",
//     "indoor": 0,
//     "alt_names": " ",
//     "adaptability": 5,
//     "affection_level": 5,
//     "child_friendly": 4,
//     "dog_friendly": 5,
//     "energy_level": 4,
//     "grooming": 1,
//     "health_issues": 1,
//     "intelligence": 5,
//     "shedding_level": 1,
//     "social_needs": 3,
//     "stranger_friendly": 4,
//     "vocalisation": 5,
//     "experimental": 0,
//     "hairless": 0,
//     "natural": 0,
//     "rare": 0,
//     "rex": 0,
//     "suppressed_tail": 0,
//     "short_legs": 0,
//     "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_cat#Cheetoh",
//     "hypoallergenic": 0,
//     "reference_image_id": "IFXsxmXLm",
//     "image": {
//         "id": "IFXsxmXLm",
//         "width": 973,
//         "height": 973,
//         "url": "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg"
//     }
// }
