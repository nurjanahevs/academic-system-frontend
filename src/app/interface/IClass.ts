export interface ClassData {
  _id?: string;
  className: string;
  yearAcademic: number;
  homeTeacher?: ClassHome;
  semester: string;
  student?: string;
}

export interface ClassHome {
  homeroomName: HomeroomClass
}

export interface HomeroomClass {
  fullName: string;
}

export interface editClass {
  _id?: string;
  className: string;
  yearAcademic: string;
  homeTeacher?: string;
  semester: string;
  student?: string;
}

