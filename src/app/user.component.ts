import { Component } from '@angular/core'
@Component({
    selector:'user',
    template:`<h1>{{name}}</h1>
             <p><strong>Email :</strong>{{email}}</p>
             <p><strong>Address :</strong>{{address.street}},{{address.city}},{{address.country}}</p>
             <button (click)="showHobby()" class="btn btn-info">{{showHobbies ? "Hide Hobbies":"Show Hobbies"}}</button>
            <div *ngIf="showHobbies">
             <h3><strong>Hobbies</strong></h3>
             <ul>
             <li *ngFor="let hobby of hobbies; let i=index">
             {{hobby}}<button (click)="deletePost(i)" class="btn btn-xs btn-danger">x</button>
             </li>
             </ul>
             <input type="text" #hobby >
             <button (click)="addPosts(hobby.value)" class="btn btn-primary">Add Posts</button>

             </div>
             
    
    `
})

export class UserComponent{
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  constructor(){
      this.name='Santhosh Kumar',
      this.email='nameissanthu@gmail.com',
      this.address={
          street:'Banjara Hills',
          city:'Hyderabad',
          country:'India'
      }
      this.hobbies=['music','singing','eating']
      this.showHobbies=false;
  }
  showHobby(){
      if(this.showHobbies==true){
       this.showHobbies=false;
      }else{
      this.showHobbies=true;
      }
  }
  addPosts(hobby){
      this.hobbies.push(hobby)
  }
  deletePost(i){
    this.hobbies.splice(i,1);
  }
}
interface address{
    street:string,
    city:string,
    country:string
}