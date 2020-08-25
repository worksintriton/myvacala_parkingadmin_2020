import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-qrcodegeneration',
  templateUrl: './qrcodegeneration.component.html',
  styleUrls: ['./qrcodegeneration.component.scss']
})
export class QrcodegenerationComponent implements OnInit {
  parking:any;
  Qrlist:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {

    this.parking = this.getFromLocal("parking_detail");
    let id = {
      "Vendor_id": this.parking._id
    }
    console.log(id)
    this._api.vendor_qrcode_list(id).subscribe((res: any) => {
      console.log(res);
      this.Qrlist = res.Data;
    });
  }
  open(item) {
    let url= item.QRcode_Image_URL
    Swal.fire({
      imageUrl: url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  downloadimg(url) {
    saveAs(url, "QR_code");
  }
}
