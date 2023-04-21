import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() username: string = '';
  @Input() imageUrl: string = '';
}
