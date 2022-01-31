import { TeacherData } from "./ITeacher";

export interface CourseData {
  _id?: string;
  course: string;
  teacher?: TeacherData;
}
