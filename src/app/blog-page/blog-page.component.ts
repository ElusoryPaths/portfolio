import { Component, OnInit } from '@angular/core';
import Post from '../Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  posts!: Array<Post>;

  constructor(private postServ: PostsService) { }

  ngOnInit(): void {
      this.posts = this.postServ.getAllPosts()
  }
}
