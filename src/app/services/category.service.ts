import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import  { Observable } from 'rxjs';
import  { map } from 'rxjs/operators';
import { CategoryInt } from 'src/models/category.interface';

export interface CategoryID extends CategoryInt { id: string; }

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryCollection: AngularFirestoreCollection<CategoryInt>;
  categories: Observable<CategoryInt[]>;

  constructor(private readonly afs: AngularFirestore) { 
    this.categoryCollection = afs.collection<CategoryInt>('categories');
    this.categories = this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as CategoryInt;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    )
  }

  getAllCategories() {
    return this.categories;
  }

  /* createCategory(category: Category) {
    return this.firestore.collection('categories').add(category);
  }

  updateCategory(category: Category) {
    delete category.name;
    this.firestore.doc('categories/' + category.name).update(category);
  }

  deleteCategory(category: Category) {
    this.firestore.doc('categories/' +category.name).delete();
  } */
}

