import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import Post from '../Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: Post | undefined 
  querySub: Subscription[] = [];
  id: string | null = ""

  constructor(private postServ: PostsService, private route: ActivatedRoute) {

  }

  ngOnDestroy(): void {
    this.querySub.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.querySub.push(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id')
      })
    )
      if (this.id) {
        this.blog = this.postServ.getPost(this.id);
        if (this.blog) this.blog.body = this.getBody();
      }
  }

  getBody(): Array<string> {
    if (!this.blog) return [];
    let lines = []
    let text = ""
    for (let line of this.blog?.body) {
      text += line;
      if (line == "") {
        lines.push(text);
        text = ""
      }
    }
    return lines
  }
  
}
