import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TaskInt } from '../models/task.interface';

export interface taskID extends TaskInt { id: string; }

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskCollection: AngularFirestoreCollection<TaskInt>;
  tasks: Observable<taskID[]>;
  public selected = {
    id: null,
    task: '',
    category: '',
    state: '',
    timestamp: ''
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
   }

  getAllTasks(){
    return this.tasks;
  }

  editTask(task: taskID){
    return this.taskCollection.doc(task.id).update(task);
  }

  deleteTask(id: string){
    return this.taskCollection.doc(id).delete();
  }
}
