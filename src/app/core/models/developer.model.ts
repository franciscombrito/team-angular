import { Project } from './project.model';

export type Developer = {
  name: string;
  projects: Project[];
  image?: string;
};
