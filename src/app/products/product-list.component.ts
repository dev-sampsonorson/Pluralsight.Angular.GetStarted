import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';
// import { }

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // styles: ['thead {color: #337AB7}'],
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  private _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    // this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}

// Lifecycle Hooks
// Create
// Render
// Create and render children
// Process changes
// Destroy

// OnInit -> Used to perform component initialization, retrieve data
// After Angular has initialized the data - bound properties

// OnChanges -> Used to peform action after Angular set data-bound input properties

// OnDestroy -> Used to peform cleanup before Angular destroys the component
