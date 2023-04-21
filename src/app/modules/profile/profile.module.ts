import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { UploadAvatarComponent } from '../../components/upload-avatar/upload-avatar.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [AvatarComponent, UploadAvatarComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
