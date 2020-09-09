import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  CreateDoctor(data) {
    return this.http.post(this.apiUrl + 'user/register', data);
  }

  CreateDoctor1(data) {
    return this.http.post(this.apiUrl + 'doctor/edit', data);
  }


  DoctorList() {
    return this.http.get(this.apiUrl + 'doctor/getlist');
  }


  DeleteDoctor(data) {
    return this.http.delete(this.apiUrl + 'doctor/delete/' + data);
  }


  UserList() {
    return this.http.get(this.apiUrl + 'user/getlist');
  }

  DeleteUser(data) {
    return this.http.delete(this.apiUrl + 'user/delete/' + data);
  }



  PatientList() {
    return this.http.get(this.apiUrl + 'getlist');
  }

  DeletePatient(data) {
    return this.http.delete(this.apiUrl + 'delete/' + data);
  }



  GetFamilyList(data) {
    return this.http.post(this.apiUrl + 'family/getlist', data);
  }



  DeleteMembers(data) {
    return this.http.post(this.apiUrl + 'family/delete', data);
  }






  specializationList(){
    return this.http.get(this.apiUrl + 'specialization/getlist');
  }

  Createspecialization(data) {
    return this.http.post(this.apiUrl + 'specialization/create', data);
  }

  DeleteSpecialisation(data) {
    return this.http.post(this.apiUrl + 'specialization/delete', data);
  }




  Banner_List(){
    return this.http.get(this.apiUrl + 'homebanner/getlist');
  }


  CreateBanner(data) {
    return this.http.post(this.apiUrl + 'homebanner/create', data);
  }


  DeleteBanner(data) {
    return this.http.delete(this.apiUrl + 'homebanner/delete/' + data);
  }


  Symptoms_list(){
    return this.http.get(this.apiUrl + 'symptoms/getlist');
  }


  CreateSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/create', data);
  }

  deleteSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/delete', data);
  }



  editSymptoms(data){
    return this.http.post(this.apiUrl + 'symptoms/edit', data);
  }
  loginprocess(data){
    return this.http.post(this.apiUrl + 'mechanicweb/login', data);
  }
  otpvalidationapi(data){
    return this.http.post(this.apiUrl + 'mechanicweb/otpverify', data);
  }
  // BookingList(data){
  //   return this.http.post(this.apiUrl + 'mechanicweb/bookinglist', data);
  // }
  BookingList(data){
    
    return this.http.post(this.apiUrl + 'mechanicweb/bookinglist',data);
  }
  getpickupboylist(data){
    
    return this.http.post(this.apiUrl + 'pickupboy/mobilelist',data);
  }
  deletepickupboy_list(i){
    
    return this.http.delete('http://3.101.31.129:3000/pickupboy/delete',i);
  }
  editpickupboycreate(data){
    
    return this.http.put('http://3.101.31.129:3000/pickupboy/editdetails',data);
  }
  getpickupboycreate(data){
    
    return this.http.post(this.apiUrl + 'pickupboy/create',data);
  }
  editpickupboy(data){
    
    return this.http.post(this.apiUrl + 'pickupboy/editdetails',data);
  }
  DoctorListlets(){
    return this.http.post('http://3.101.31.129:3000/mechanicweb/bookinglist', {"Primary_Contact": 9884239966});
  }

  Login(data){
    
    return this.http.post(this.apiUrl + 'parking/owner/parking_vendor_login',data);
  }
  Parking_owner_edit(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/edit', data);
  }
  Parking_Detail_by_id(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/getlist', data);
  }
  vendor_qrcode_list(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/qrgetlist_vendor_id', data);
  }
  parking_bookinglist(data){
    return this.http.post(this.apiUrl + 'parking/parkingbooking/getlist_vendor_id', data);
  }
  parking_statusedit(data){
    return this.http.post(this.apiUrl + 'parking/parkingbooking/edit', data);
  }
}