import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  showUpload: boolean = false;
  avatarUrl: string = '/assets/img1.jpeg';

  async setNewImage(file?: File) {
    this.showUpload = false;

    if (file) {
      this.avatarUrl =  await this.fileToBase64(file);
    }
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}
