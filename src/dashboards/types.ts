export type Dashboard = {
  id: number;
  slug: string;
  name: string;
  deletedAt: Date|null,
  createdAt: Date;
  updatedAt: Date;
}

export type InitDashboardDto = Omit<Dashboard,'createdAt'|'updatedAt'|'deletedAt'>
