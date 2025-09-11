import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ranking',
  imports: [MatIconModule],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss',
})
export class Ranking {
  readonly value = input.required<number>();
  readonly filled = computed(() =>
    [1, 2, 3, 4, 5].map((i) => i <= this.value()),
  );
}
