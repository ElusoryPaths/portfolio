import { Component, Input, OnInit } from '@angular/core';
import Post from '../Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-recent-card',
  templateUrl: './recent-card.component.html',
  styleUrls: ['./recent-card.component.css']
})
export class RecentCardComponent implements OnInit {

  @Input() post!: Post; 

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    
  }
}
