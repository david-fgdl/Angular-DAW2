import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TaskInt } from '../models/task.interface';
import { CategoryInt } from '../models/category.interface';

export interface taskID extends TaskInt { id: string; }
export interface categoryID extends CategoryInt { id: string; }

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskCollection: AngularFirestoreCollection<TaskInt>;
  tasks: Observable<taskID[]>;

  private categoryCollection: AngularFirestoreCollection<CategoryInt>;
  categories: Observable<categoryID[]>;

  public selected = {
    id: null,
    task: '',
    category: '',
    state: '',
    timestamp: ''
  }

  public selectedCat = {
    id: null,
    name: '',
  }
  
  constructor(private readonly afs: AngularFirestore) {
    this.taskCollection = afs.collection<TaskInt>('tasks');
    this.tasks = this.getData();

    this.categoryCollection = afs.collection<CategoryInt>('categories');
    this.categories = this.getAllCategories();
  }

  getData() {
    return this.taskCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as taskID;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  /* Tareas */
  getAllTasks() {
    return this.tasks;
  }

  getTasksPendientes() {
    this.taskCollection = this.afs.collection<taskID>('tasks', ref => {
      return ref.where('state', '==', 'Pendiente');
    });
    return this.getData();
  }

  getTasksProceso() {
    this.taskCollection = this.afs.collection<taskID>('tasks', ref => {
      return ref.where('state', '==', 'Proceso');
    });
    return this.getData();
  }

  getTasksTerminadas() {
    this.taskCollection = this.afs.collection<taskID>('tasks', ref => {
      return ref.where('state', '==', 'Terminado');
    });
    return this.getData();
  }

  getTasksNoTerminadas() {
    this.taskCollection = this.afs.collection<taskID>('tasks', ref => {
      return ref.where('state', '!=', 'Terminado');
    });
    return this.getData();
  }

  editTask(task: taskID) {
    return this.taskCollection.doc(task.id).update(task);
  }

  deleteTask(id: string) {
    return this.taskCollection.doc(id).delete();
  }

  createTask(task: TaskInt) {
    return this.taskCollection.add(task);
  }

  /* Categorias */
  getAllCategories() {
    return this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CategoryInt;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  editCategory(category: categoryID) {
    return this.categoryCollection.doc(category.id).update(category);
  }

  deleteCategory(id: string) {
    return this.categoryCollection.doc(id).delete();
  }

  createCategory(category: CategoryInt) {
    return this.categoryCollection.add(category);
  }
}
