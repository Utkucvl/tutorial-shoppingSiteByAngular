import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductAddForm2Component {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService:AlertifyService
  ) {}
  product: Product = new Product();
  categories: Category[] = [];
  productAddForm!: FormGroup;

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm?.valid)
      this.product = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(this.product).subscribe(data=>{this.alertifyService.success(this.product.name + " added to products successfully")})
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
