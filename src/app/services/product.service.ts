import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../product/product';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';
  getProducts(categoryId:number): Observable<Product[]> {
    if(categoryId){
      return this.http.get<Product[]>(this.path + "?categoryId="+categoryId).pipe(
      tap(data=>console.log(JSON.stringify(data))), 
      catchError(this.handleError)
    );
    }
    else{
      return this.http.get<Product[]>(this.path).pipe(
        tap(data=>console.log(JSON.stringify(data))), 
        catchError(this.handleError)
      );
    }
    
  }
  addProduct(product:Product):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse) {
    let errorMessage="";
    if(err.error instanceof ErrorEvent){
      errorMessage= "There is an error =>>" + err.error.message;
    }
    else{
      errorMessage = "There is a sistematic error"
    }
    return throwError(errorMessage);
  }
}
