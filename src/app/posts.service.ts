import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Post from './Post';
import lab1 from '../assets/posts/lab1.json'
import lab2 from '../assets/posts/lab2.json'
import lab3 from '../assets/posts/lab3.json'
import lab4 from '../assets/posts/lab4.json'
import lab5 from '../assets/posts/lab5.json'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Array<Post> = [];
  postURL = `assets/posts`

  constructor(private http: HttpClient) {
    this.posts = [lab1,lab2,lab3,lab4,lab5]
  }

  getLab(labNum: string): Observable<any> {
    return this.http.get(`${this.postURL}/lab${labNum}.json`)
  }

  getRecentPosts(): Array<any> {
    let recent: Array<any> = []
    for (let i = 0; i < 3; i++) {
      let post = this.posts[i] ? this.posts[i] : undefined
      recent.push(post)
    }
    return recent;
  }

  getAllPosts(): Array<any> {
    return this.posts
  }

  getPost(postId: any): Post | undefined {
    for (let i of this.posts) {
      if (i.id == postId) return i
    }
    return undefined
  }

  getBody(labNum: any): Observable<any> {
    return this.http.get(`${this.postURL}/lab${labNum}.html`, {responseType: 'text'})
  }
}
