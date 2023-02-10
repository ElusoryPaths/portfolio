import { Component, OnInit } from '@angular/core';
import Post from '../Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recent!: Array<Post>

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.recent = this.postService.getRecentPosts();
  }
}
