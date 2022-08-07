import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  validity = false;
  validTypes = ['image/jpeg', 'image/png', 'image/bmp'];
  error = '';
  constructor(
    private fileUploadService: UploadService,
    private _router: Router,
    private store: Store<{ wizard: object }>
  ) {
  }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
    this.validateFile();
  }

  onFileDropped(event) {
    this.file = event.target.files[0];
    this.validateFile();
  }

  validateFile() {
    const size = parseFloat((this.file.size / 1024 / 1024).toFixed(2));
    if (!this.validTypes.includes(this.file.type)) {
      this.error="this file doesn't support"
    }
    if (size > 1 || size < 0.20) {
      this.error="File must be between the size of 200 kB and 4 MB"
    }
    this.validity = true;
  }

  // OnClick of button Upload
  onUpload() {
    if (this.file && this.validity) {
      this.loading = !this.loading;
      this.fileUploadService.upload(this.file).subscribe((event: any) => {
        if (typeof event === 'object') {
          this.shortLink = event.link;
          this.loading = false; // Flag variable
        }
      });
    }
  }

  updateState() {
    if (this.shortLink) {
      this.store.dispatch(upload({ image: { name: this.file.name, type: this.file.type, size: this.file.size } }));
      this._router.navigate(['details'])
    }
  }
}
