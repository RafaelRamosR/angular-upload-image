import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.sass'],
})
export class UploadAvatarComponent implements OnDestroy {
  @Output() changeImage = new EventEmitter<File | undefined>();
  private currentFile!: File;
  imageUrl = '';

  ngOnDestroy(): void {
    if (this.imageUrl) URL.revokeObjectURL(this.imageUrl);
  }

  getFile(e: any) {
    if (!e.target || !e.target.files || !e.target.files.length) return;

    this.imageUrl = URL.createObjectURL(e.target.files[0]);
    this.currentFile = e.target.files[0];
  }

  imageConfirm(event: any, isConfirm: boolean) {
    event.stopPropagation();
    const sendEmit = isConfirm ? this.currentFile : undefined;
    this.changeImage.emit(sendEmit);
    URL.revokeObjectURL(this.imageUrl);
    this.imageUrl = '';
  }
}
