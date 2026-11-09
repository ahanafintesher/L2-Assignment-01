function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLocaleLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }

  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

export async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return "Access Granted";
}
