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
  body: string | undefined = "";

  constructor(private postServ: PostsService, private route: ActivatedRoute) { }

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
      this.querySub.push(
        this.postServ.getLab(this.id).subscribe({
          next: (post) => {
            this.blog = post;
          },
          error: (err) => {
            console.log('could not find file, manually pulling ...')
            this.blog = this.postServ.getPost(this.id)
          }
        })
      );

      this.querySub.push(
        this.postServ.getBody(this.id).subscribe({
          next: (post) => {
            this.body = post
          },
          error: (err) => {
            console.log('could not find file, manually pulling ...')
            this.body = this.blog?.body
          }
        })
      );
    }
  }
}
