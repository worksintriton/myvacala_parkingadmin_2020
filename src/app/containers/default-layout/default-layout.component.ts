import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default.css']
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  parking_detail: any = [];
  constructor(@Inject(DOCUMENT) _document?: any,
    private router?: Router,

    // private http: HttpClient,

    // private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage?: StorageService
  ) {

    this.parking_detail = this.getFromLocal("parking_detail")
    console.log(this.parking_detail);


    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  logout() {
    this.saveInLocal("parking_detail", undefined);
    this.saveInLocal("OTP", undefined);
    this.router.navigate(['/']);
  }
}
