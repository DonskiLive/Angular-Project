import { Injectable } from '@angular/core';
import { Course } from '../models/course_model'

@Injectable({ providedIn: 'root' })
export class CoursesService {
	public defaultCourses: Course[] = [
		{
			id: 1,
			title: 'Course 1 - Lorem ipsum dolor sit',
			creationDate: (new Date(Date.UTC(new Date().getFullYear(), 0, 1))).toISOString().substring(0, 10),
			duration: 135,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, hic ullam ab maxime atque fuga, dolorem dignissimos dicta praesentium iure, quia odit. Accusamus, doloremque.'
		},
		{
			id: 2,
			title: 'Course 2 - A veniam ut vel velit',
			creationDate: (new Date(Date.UTC(new Date().getFullYear(), 2, 5))).toISOString().substring(0, 10),
			duration: 213,
			description: 'A veniam ut vel velit sint iure quo nihil sit amet consectetur adipisicing. Dignissimos odio mollitia nam tempore.'
		},
		{
			id: 3,
			title: 'Course 3 - Lorem ipsum dolor sit amet',
			creationDate: (new Date(Date.UTC(new Date().getFullYear(), 1, 21))).toISOString().substring(0, 10),
			duration: 97,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat quo soluta iure vero aliquam libero tenetur, consequatur deleniti consectetur, quam voluptate deserunt perferendis, magni sit quisquam fuga ipsum ex mollitia unde exercitationem. Voluptate earum reprehenderit aliquid quisquam eum dicta.'
		},
		{
			id: 4,
			title: 'Course 4 - Facilis quaerat quo soluta',
			creationDate: (new Date(Date.UTC(new Date().getFullYear(), 3, 17))).toISOString().substring(0, 10),
			duration: 88,
			description: 'Facilis quaerat quo soluta iure vero aliquam libero tenetur, consequatur deleniti consectetur, quam voluptate deserunt perferendis, magni sit quisquam fuga ipsum ex mollitia unde exercitationem.'
		}
	];

	getCourses(): Course[] {
		return this.defaultCourses
	}
}
