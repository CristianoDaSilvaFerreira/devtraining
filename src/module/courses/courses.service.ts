import { Course } from './../entities/course.entity';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Frameworks NestJs',
      description: 'Fundamentos do Frameworks Nest',
      tags: ['NodeJS', 'NestJs', 'JavaScript', 'Typescript', 'TypeORM'],
    },
    {
      id: 2,
      name: 'Fundamentos do NodeJs',
      description: 'Fundamentos do Frameworks Nest',
      tags: ['NodeJS', 'JavaScript', 'Typescript', 'TypeORM'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(courses => courses.id === Number(id));

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      course => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      course => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
