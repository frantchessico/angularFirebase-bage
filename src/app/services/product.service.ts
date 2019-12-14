import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
     this.productsCollection = afs.collection('users');
   }

  getAll() {
    return this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  save(product) {
    return this.productsCollection.add(product);
  }

  destroy(id) {
    return this.productsCollection.doc(id).delete();
  }

  shopping(product) {
    return this.productsCollection
               .doc(product.id)
               .update({ stock: product.stock - 1 })
  }

  getOne(id) {
    return this.productsCollection.doc(id).valueChanges();
  }

  update(id, product) {
    return this.productsCollection.doc(id).update(product);
  }
}
