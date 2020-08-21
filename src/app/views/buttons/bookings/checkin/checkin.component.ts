import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  selectedimgae1:any;
  Pic:any;
  constructor(
    private router: Router,   

    private http: HttpClient,
  ) { }

  ngOnInit() {
  }
  fileupload(event) {
    this.selectedimgae1 = event.target.files[0];
    this.addfiles();
  }

  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }
  delete(){
    this.Pic = undefined;
  }
}
