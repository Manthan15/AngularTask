import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask';

  constructor ( private httpservice : HttpClient) {}
  allPosts: any;
  p:any;
  searchText:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.httpservice.get('./assets/posts.json').subscribe(
      data =>{
        this.allPosts = data as string[]
        //console.log(this.allPosts)
        for(let i in this.allPosts)
        {
          let user = this.allPosts[i].userId;

          if(user == 1) this.allPosts[i].userId = 'Ajay';
          if(user == 2) this.allPosts[i].userId = 'Bunty';
          if(user == 3) this.allPosts[i].userId = 'Chintan';
          if(user == 4) this.allPosts[i].userId = 'Darshan';
          if(user == 5) this.allPosts[i].userId = 'Rakesh';
          if(user == 6) this.allPosts[i].userId = 'Mayank';
          if(user == 7) this.allPosts[i].userId = 'Ramesh';
          if(user == 8) this.allPosts[i].userId = 'Suresh';
          if(user == 9) this.allPosts[i].userId = 'Jay';
          if(user == 10) this.allPosts[i].userId = 'Prem';
        }
        
      })
  }
}
