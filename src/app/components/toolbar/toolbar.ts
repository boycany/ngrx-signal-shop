import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatButtonModule, FormsModule, MatBadgeModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  // host: {
  //   '(keydown.enter)': 'onEnter()'
  // }
})
export class Toolbar {
  readonly searchValue = signal('');
  readonly cartCount = signal(2);
  readonly cartActive = computed(() => this.cartCount() > 0);
}
