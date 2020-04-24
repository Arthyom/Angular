export interface IntHeroe {
    id: string;
    name: string;
    powerstats: Powerstats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Image;
  }
  
interface Image {
    url: string;
  }
  
interface Connections {
    groupaffiliation: string;
    relatives: string;
  }
  
interface Work {
    occupation: string;
    base: string;
  }
  
interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyecolor: string;
    haircolor: string;
  }
  
interface Biography {
    fullname: string;
    alteregos: string;
    aliases: string[];
    placeofbirth: string;
    firstappearance: string;
    publisher: string;
    alignment: string;
  }
  
interface Powerstats {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  }