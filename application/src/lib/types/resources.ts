export const resourceNames = ["data", "fuel", "ink", "gold"] as const;
export type ResourceName = (typeof resourceNames)[number];

export type Resource = {
  name: ResourceName;
  amount: number;
  perMinute: number;
  updatedAt: Date;
};
