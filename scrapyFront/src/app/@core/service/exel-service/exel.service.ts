import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Product} from '../../model/product/product';
import {ProduitExcel} from '../../model/product/excel/produit-excel';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})

export class ExelService {

  constructor() { }
  public exportAsExcelFile(data: Product[], excelFileName: string): void {
    const  dataFinal = data.filter(value => value.checked === true);

    const dataExcel: ProduitExcel[] = [];
    dataFinal.forEach(value => {


        dataExcel.push(
          {
            name: value.name,
            Brikos: '--',
            Brico_direct: '--',
            Jumia: '--',
            Comaf: '--'
          });
        let filter = value.site.filter(data1 =>
          data1.name == 'Jumia')[0]?.price;
        if (filter !== undefined){
          dataExcel[dataExcel.length - 1 ].Jumia = filter;
        }
      /*filter = value.site.filter(data1 =>
      data1.name == 'Brico_pro')[0]?.price;
      if (filter !== undefined){
      dataExcel[dataExcel.length - 1 ].Brico_pro = filter;
    }
    filter = value.site.filter(data1 =>
      data1.name == 'Bstore')[0]?.price;
    if (filter !== undefined){
      dataExcel[dataExcel.length - 1 ].Bstore = filter;
    }*/
      filter = value.site.filter(data1 =>
        data1.name == 'Comaf')[0]?.price;
      if (filter !== undefined){
        dataExcel[dataExcel.length - 1 ].Comaf = filter;
      }
      filter = value.site.filter(data1 =>
        data1.name == 'Brikos')[0]?.price;
      if (filter !== undefined){
        dataExcel[dataExcel.length - 1 ].Brikos = filter;
      }
        filter = value.site.filter(data1 =>
        data1.name == 'Brico-direct')[0]?.price;
        if (filter !== undefined){
        dataExcel[dataExcel.length - 1 ].Brico_direct = filter;
      }
      if (dataExcel[dataExcel.length - 1 ].Comaf == '0 TND'){
        dataExcel[dataExcel.length - 1 ].Comaf = 'Inconnu';
      }
      /*if (dataExcel[dataExcel.length - 1 ].Bstore == '0 TND'){
        dataExcel[dataExcel.length - 1 ].Bstore = 'Inconnu';
      }
      if (dataExcel[dataExcel.length - 1 ].Brico_pro == '0 TND'){
        dataExcel[dataExcel.length - 1 ].Brico_pro = 'Inconnu';
      }*/
        if (dataExcel[dataExcel.length - 1 ].Brikos == '0 TND'){
          dataExcel[dataExcel.length - 1 ].Brikos = 'Inconnu';
        }
        if (dataExcel[dataExcel.length - 1 ].Brico_direct == '0 TND'){
        dataExcel[dataExcel.length - 1 ].Brico_direct = 'Inconnu';
      }
        if (dataExcel[dataExcel.length - 1 ].Jumia == '0 TND'){
        dataExcel[dataExcel.length - 1 ].Jumia = 'Inconnu';
      }

    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataExcel);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }

}
