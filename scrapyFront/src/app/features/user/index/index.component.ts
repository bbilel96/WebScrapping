import {Component, OnInit} from '@angular/core';
import {Product} from '../../../@core/model/product/product';
import {ExelService} from '../../../@core/service/exel-service/exel.service';
import {DatePipe} from '@angular/common';
import {PdfService} from '../../../@core/service/pdf-service/pdf.service';
import {Site} from '../../../@core/model/site/site';
import {ProductService} from '../../../@core/service/product-service/product.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzNotificationService} from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private displayDataCopy: any[];
  page = 1;
  pageSize = 10;
  filterSite = [
    {text: 'Jumia', value: 'Jumia'},
    {text: 'Wiki', value: 'Wiki'}
  ];
  searchValue: string;
  visible = false;
  allChecked = false;
  indeterminate = false;
  listOfSite: string[] = ['Brikos', 'Jumia', 'Brico-direct', 'Comaf'];

  listOfArticle: Product[] =  []
  ;
  // sites: Site[]= [{name: "test", products:[]}];

  listOfSearchSite = [];
  displayData = [];

  display = [];

  load = false;
  error = false;
  constructor(private excelService: ExelService,
              private datePipe: DatePipe,
              private PDFService: PdfService,
              private productService: ProductService,
              private message: NzMessageService,
              private notification: NzNotificationService) {

  }

  filter(listOfProduct: string[], searchValue: string): void {
    this.listOfSearchSite = listOfProduct;
    this.searchValue = searchValue;
    this.search();
    this.displayDataCopy = this.displayData;

  }
  ngOnInit(): void {
    this.displayData = [...this.listOfArticle.sort()];
    this.displayDataCopy = this.displayData;
    this.listOfSite = this.listOfSite.sort();
    this.load = true;
    this.productService.getProducts().subscribe(
        value => {
          if (value === []){
          this.warning();
          }
          this.listOfArticle = value;
          this.displayData = [...this.listOfArticle];
          this.displayDataCopy = this.displayData;

        },
        error => {
          this.error = true;

        }, () => this.load = false
      );
    }
  search(): void {
    // const filterFunc = (item: Product) => (this.searchValue ? item.site.indexOf(this.searchValue) !== -1 : true) && (this.listOfSearchSite.length ? this.listOfSearchSite.some(site => item.site.indexOf(site) !== -1) : true);
    // this.displayData = this.litOfData.filter(item => filterFunc(item));
  }
  /*orderProduct(): void{
    for (const data of this.litOfData) {

      const p: Product = new Product(data.name, data.price, false);

      if (this.sites === []) {
        const a = new Site(data.site, []);
        a.products.push(p);
        this.sites.push(a);
        console.log("s")
      } else {
        for(let i = 0;  i <= this.sites.length; i++) {
          const index = this.sites.indexOf(data.site);
          console.log(data.site);
          if (index === -1) {
            console.log('s');
            const a = new Site(data.site, undefined);
            this.sites.push(a);
          } else {
            console.log("s");
            this.sites[index].products.push(p[0]);
          }
        }
      }
    }
  }*/

  warning(): void {
    this.notification.create(
      'warning',
      'Attention',
      'Les données sont en cours d\'importation analysées et seront effectuées dans quelques secondes soyez patient.',
    );
  }
  filter_search($event): void {
  const value =   $event.target.value;
  if (!value){
      this.displayData = this.displayDataCopy;
    }
    else {
      this.displayData = this.displayDataCopy.filter(data =>
        data.name.toLowerCase().includes(value.trim().toLowerCase())
      );
    }
  }

  DownloadExcel(): void {
     this.excelService.exportAsExcelFile(this.displayData, this.datePipe.transform(Date.now(), 'yyyy-MM-dd'));

  }
  generatePdf(): void{
  this.PDFService.generatePdf();
  }

  refreshStatus(): void {
   const allChecked = this.displayData.every(value => value.checked === true);
   const allUnChecked = this.displayData.every(value => !value.checked);
   this.allChecked = allChecked;
   this.indeterminate = (!allChecked) && (!allUnChecked);
  }
  currentPageDataChange($event: Array<Product>): void {
    this.display = $event;
    this.refreshStatus();
  }

  checkAll(value: boolean): void {
      this.displayData.forEach(data => {
        data.checked = value;

      });
      this.refreshStatus();
  }

  /*findArticle(site: any, name: string): Product {
   //return this.litOfData.find(value => value.site === site && value.name === name);
  }*/
  verif(prod: Site[], site: string): Site {
    return prod.find(value => value.name == site);
  }
}




