import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {PostModal} from './post.modal';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {
  error = new Subject<string>();


  constructor(private http: HttpClient) {
  }

  // ******** POST DATA HTTP *********

  createAndStorePost(email: string, password: string): any {
    const postData: PostModal = {email: email, password: password};
    this.http
      .post<{ name: string }>(
        'https://drop-d-32dd4-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
          this.error.next(error.message);
        }
      );
  }

  // ******** FETCH DATA HTTP *********

  fetchPosts(): any {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: PostModal }>('https://drop-d-32dd4-default-rtdb.firebaseio.com/posts.json',
        {
          headers:
            new HttpHeaders
            ({'custom-Header': 'custom'}),
          params: searchParams,
          responseType: 'json' // <-- Default
        }
      )
      .pipe(
        map(responseData => {
          const postArray: PostModal[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], encryptedKey: key});
            }
          }
          return postArray;
        }),
        catchError(errorResponse => {
          return throwError(errorResponse);
        })
      );
  }

  deletePosts(): any {
    return this.http.delete('https://drop-d-32dd4-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    )
      .pipe
      (tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      }));
  }
}
