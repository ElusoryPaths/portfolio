import { Injectable } from '@angular/core';
import Post from './Post';
//import lab1 from '../assets/posts/lab1.json'
//import lab2 from '../assets/posts/lab2.json'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Array<Post> = [];

  constructor() { 
    //this.posts.push(lab1)
    //this.posts.push(lab2)
  }

  getRecentPosts(): Array<any> {
    let recent: Array<any> = []
    for(let i=0;i<3;i++) {
      let post = this.posts[i] ? this.posts[i] : undefined
      recent.push(post)
    }
    return recent;
  }

}
