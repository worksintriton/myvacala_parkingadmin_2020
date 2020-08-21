import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-qrcodegeneration',
  templateUrl: './qrcodegeneration.component.html',
  styleUrls: ['./qrcodegeneration.component.scss']
})
export class QrcodegenerationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  open() {
    let url="../../../../../assets/img/brand/qrcode.png"
    Swal.fire({
      imageUrl: url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
  }
}
