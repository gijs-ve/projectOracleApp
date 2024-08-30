import { Tier } from "./generic";

export const resourceTypes = ["data", "fuel", "ink", "gold"] as const;
export type ResourceType = (typeof resourceTypes)[number];

export type Resource = {
  type: ResourceType;
  amount: number;
  perMinute: number;
  updatedAt: Date;
};

export const machineActionTypes = [
  "makeWord",
  "makeLetter",
  "demolishWord",
  "demolishLetter",
] as const;
export const machineTypes = [...machineActionTypes, "makeResource"] as const;
export type MachineType = (typeof machineTypes)[number];

type RawMachine = {
  count: number;
  perMinute: number;
  type: MachineType;
};
export type Machine<T extends MachineType = MachineType> =
  T extends "makeResource"
    ? RawMachine & {
        resource?: ResourceType;
      }
    : RawMachine & {
        tier?: Tier;
      };
