import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    { 
      imageUrl: 'assets/images/svg/mail-svgrepo-com.svg',
      text: 'jacky.lifere@gmail.com',
      imgText: 'Mail'
    },

    { 
      imageUrl: 'assets/images/svg/phone-svgrepo-com.svg',
      text: 'Not Available',
      imgText: 'Phone'
    },
    { 
      imageUrl: 'assets/images/svg/github-repo-git-octocat-svgrepo-com.svg',
      text: 'ElusoryPaths',
      imgText: 'GitHub'
    },
    { 
      imageUrl: 'assets/images/svg/linkedin-svgrepo-com.svg',
      text: 'Not Available',
      imgText: 'LinkedIn'
    },
  ]
  constructor() {}

  ngOnInit(): void {
      
  }

}
