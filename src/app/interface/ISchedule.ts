import { ClassData } from "./IClass";

export interface Schedule {
  _id?: string;
  title: string;
  start: Date;
  end: Date;
  classes: string;
  daysOfWeek: string;
  allDay: boolean;
}

export interface scheduleSpesific {
  _id: string;
  title: any;
  start: Date;
  end: Date;
  classes: ClassData;
  daysOfWeek: string;
  allDay: boolean;
}