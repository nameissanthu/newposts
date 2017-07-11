import { Injectable } from '@angular/core';
@Injectable()

export class PostService{
posts:any;
constructor(){
    this.posts=[
        {
         title:'First Title',
         body:'Body of the First Title'
        },
          {
         title:'Second Title',
         body:'Body of the Second Title'
        },
          {
         title:'Third Title',
         body:'Body of the Third Title'
        },
    ];
}
getPosts(){
    return this.posts;
}
serviceAdd(newPost){
   this.posts.push(newPost)
}
}