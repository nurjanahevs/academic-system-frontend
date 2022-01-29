import { ClassData } from "./IClass";

export interface StudentData {
  id?: string,
  nis?: string,
  emailSend: string;
  password?: string,
  fullName: string,
  birthDate: string,
  classes: string,
  status?: string,
}

export interface StudentClass {
  id?: string,
  nis?: string,
  email: string;
  password?: string,
  fullName: string,
  birthDate: string,
  classes: ClassData,
  status?: string,
}