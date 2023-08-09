export interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  POSTGRES_USER: string | undefined;
  POSTGRES_PASSWORD: string | undefined;
  POSTGRES_DB: string | undefined;
  POSTGRES_HOST: string | undefined;
  POSTGRES_PORT: string | undefined;
  JWT_SECRET: string | undefined;
}

export interface Config {
  NODE_ENV: string;
  PORT: number;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  POSTGRES_HOST: string;
  POSTGRES_PORT: string;
  JWT_SECRET: string;
}
