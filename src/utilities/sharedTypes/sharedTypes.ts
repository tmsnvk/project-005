export type TComponent = {
  data: string;
}

export type TDescription = {
  id: number;
  paragraph: string;
}

export type TTechList = {
  id: number;
  name: string;
}

export type TList = {
  demoLink: string;
  description: {
    id: number;
    paragraph: string;
  }[];
  githubLink: string;
  id: number;
  title: string;
  subtitle: string;
  tags: {
    id: number;
    name: string;
  }[];
  image: string;
}