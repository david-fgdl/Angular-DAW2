import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
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
    this.tasks = this.taskCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as TaskInt;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    this.categoryCollection = afs.collection<categoryID>('categories');
    this.categories = this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as categoryID;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
   }

  /* Tarea */
  getAllTasks(){
    return this.tasks;
  }

  editTask(task: taskID){
    return this.taskCollection.doc(task.id).update(task);
  }

  deleteTask(id: string){
    return this.taskCollection.doc(id).delete();
  }

  createTask(task: TaskInt){
    return this.taskCollection.add(task);
  }

  /* Categorias */
  getAllCategories(){
    return this.categories;
  }

  editCategory(category: categoryID){
    return this.categoryCollection.doc(category.id).update(category);
  }

  deleteCategory(id: string){
    return this.categoryCollection.doc(id).delete();
  }

  createCategory(category: CategoryInt){
    return this.categoryCollection.add(category);
  }
}
