export type Topic = { id: number; title: string; body: string; };
export type AppMode = 'READ' | 'WELCOME' | 'CREATE' | 'UPDATE';
export type UpdateMode = Extract<AppMode, 'CREATE' | 'UPDATE'>;
