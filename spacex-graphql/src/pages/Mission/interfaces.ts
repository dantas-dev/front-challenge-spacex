export interface IMission {
  name: string;
  description: string;
  id: string;
  website: string;
  wikipedia: string;
  twitter: string;
}

export interface IMissionData {
  mission: IMission;
}

export interface IMissionVar {
  id: string;
}
