import { Course } from "../_models/Course";
import { ClassData } from "./IClass";
import { CourseData } from "./ICourse";

export interface TeacherData {
  id?: string,
  email?: string,
  emailSend: any;
  password?: string,
  fullName: string,
  birthDate: string,
  course: string,
  teachClass: string,
  schedule?: string,
}

export interface teacherSpesific {
  _id?: string,
  email?: string,
  emailSend: any;
  fullName: string,
  birthDate: string,
  course: Array<CourseData>,
  teachClass: Array<ClassData>,
}

export interface editTeacher {
  _id?: string,
  email?: string,
  fullName: string,
  birthDate: string,
  course: string,
  teachClass: string,
}

export interface CourseTeacher {
  _id?: string,
  email?: string;
  fullName?: string,
  birthDate?: string,
  course?: Array<Course>,
  teachClass?: Array<ClassData>,
}