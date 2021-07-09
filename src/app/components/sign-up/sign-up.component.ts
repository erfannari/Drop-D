import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChangePageService} from './ChangePageSignUp.service';
import {HttpClient} from '@angular/common/http';
import {Subscription, Observable} from 'rxjs';
import {PostModal} from './post.modal';
import {PostsService} from './posts.service';
import {TogglePasswordService} from './togglePassword.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  loadedPosts: PostModal[] = [];
  error = null;
  private errorSub: Subscription;

  constructor(
    private pageChangerService: ChangePageService,
    private postsService: PostsService,
    private toggle: TogglePasswordService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        console.log(posts);
      }, error => {
        this.error = 'Server Kos Mizane';
      });
  }


  OnChangeSignUpLogin(): void {
    this.pageChangerService.OnChangeSignUpLogin();
  }

  togglePasswordSignUp(): any {
    this.toggle.togglePasswordSignUp();
  }

  togglePasswordLogin(): any {
    this.toggle.togglePasswordLogin();
  }

  // ******** POST DATA HTTP *********

  onSendPost(postData: PostModal): void {
    this.postsService
      .createAndStorePost(postData.email, postData.password);
    console.log(postData);

  }

  // ******** FETCH DATA HTTP *********

  onFetchPosts(): void {
    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        console.log(posts);
      }, error => {
        this.error = 'Naga Dige';
      });
  }

  onClearPosts(): any {
    this.postsService.deletePosts()
      .subscribe(() => {
        this.loadedPosts = [];
      });
  }

  handleError(): any {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}

