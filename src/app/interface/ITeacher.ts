import { Course } from "../_models/Course";

export interface TeacherData {
  _id?: string,
  email: string;
  password?: string,
  fullName: string,
  birthDate: string,
  course: string,
  teachClass: string,
}

export interface CourseTeacher {
  _id?: string,
  email: string;
  fullName: string,
  birthDate: string,
  course?: Array<Course>,
  teachClass: string,
}