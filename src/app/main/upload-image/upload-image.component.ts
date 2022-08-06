import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { upload } from '../+state/wizard.actions';
import { UploadService } from '../../services/upload.service';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  image$: Observable<object>;
  shortLink: string = ''; // Variable to store shortLink from api response
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file to Upload
  private ngDestroy$ = new Subject();
  // Inject service
  constructor(
    private fileUploadService: UploadService,
    private _router: Router,
    private store: Store<{ wizard: object }>
  ) {
    store.select('wizard').pipe(takeUntil(this.ngDestroy$))
      .subscribe((state: any) => {
        console.log(state.image)
      });
  }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  onFileDropped(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    if (this.file) {
      this.loading = !this.loading;
      console.log(this.file);
      this.fileUploadService.upload(this.file).subscribe((event: any) => {
        if (typeof event === 'object') {
          // Short link via api response
          this.shortLink = event.link;
          this.loading = false; // Flag variable
        }
      });
    }
  }

  updateState() {
    if (this.shortLink) {
      this.store.dispatch(upload({ image: { name: this.file.name } }));
      this._router.navigate(['details'])
    }
  }
}
