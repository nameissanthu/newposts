import { Component } from '@angular/core';
import { PostService } from './post.service';
@Component({
    selector:'post',
    template:`<h1>posts</h1>
<label> Title </label>
<input type="text" [(ngModel)]="title"><br>
<label> Body </label>
<input type="text" [(ngModel)]="body"><br>

<button (click)="addPost()" class="btn btn-success">Submit</button>

    <ul>
    <li *ngFor="let post of posts">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
    </li>
    </ul>
    
    
    
    `,
    providers:[PostService]
})


export class PostComponent{
    posts:any;
    title:any;
    body:any;
    newPost:any;
    constructor(private _postService:PostService){
    this.posts=this._postService.getPosts();
}
addPost(newPost){
    this.newPost={
        title:this.title,
        body:this.body
    }
    this._postService.serviceAdd(this.newPost);
}

}