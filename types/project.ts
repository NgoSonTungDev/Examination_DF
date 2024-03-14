export interface IProjectResponse {
  count: number;
  results: IProject[];
}

export interface IProject {
  id: number;
  project_name: string;
  project_domain: string;
  last_accessed: string | null;
  license_use: {
    license_type: string;
    libraries: string[];
  }[];
}
