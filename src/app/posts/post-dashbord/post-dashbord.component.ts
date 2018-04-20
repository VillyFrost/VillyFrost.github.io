import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/observable';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'app-post-dashbord',
  templateUrl: './post-dashbord.component.html',
  styleUrls: ['./post-dashbord.component.css']
})
export class PostDashbordComponent implements OnInit {
  
  title:string;
  image:string = null;
  content:string;

  textButtom:string = "Create Post";

  uploadePercent:Observable<number>;
  dowloadURL:Observable<string>;

  constructor(
    private auth: AuthService,
    private PostService: PostService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
  }

  createPost(){
    const data ={
      title: this.title,
      author: this.auth.authState.dislplayName || this.auth.authState.email,
      authorid: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date()
    }
    this.PostService.create(data);   
    this.title = null;
    this.content = null; 
    this.textButtom ='Done';
    setTimeout(() => (this.textButtom = "Create Post" ), 1000);
  }

  uploadImage(event){
    const file = event.target.files[0]
    const path = `posts/Frost-${file.name}`
    if(file.type.split('/')[0] !== "image"){
      return alert("not image file\nplease import image file");
    }else{
      const task = this.storage.upload(path,file);
      this.dowloadURL = task.downloadURL();
      this.uploadePercent = task.percentageChanges();
      console.log("dsfa");      
      this.dowloadURL.subscribe(url => this.image = url);
    }
  }
  

}
