import { Component } from '@angular/core';
import { Book } from '../books/books';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'Война и мир',
      author: 'Лев Толстой',
      year: 1869,
      cost: 500,
      rating: 4.8,
      cover: 'assets/images/1.jpg'
    },
    {
      id: 2,
      title: 'Преступление и наказание',
      author: 'Фёдор Достоевский',
      year: 1866,
      cost: 400,
      rating: 4.9,
      cover: 'assets/images/2.jpg'
    },
    {
      id: 3,
      title: 'Анна Каренина',
      author: 'Лев Толстой',
      year: 1877,
      cost: 450,
      rating: 4.7,
      cover: 'assets/images/3.jpg'
    },
    {
      id: 4,
      title: 'Сад Гетсиманський',
      author: 'Иван Багряный',
      year: 1908,
      cost: 280,
      rating: 4.6,
      cover: 'assets/images/4.jpg'
    },
    {
      id: 5,
      title: 'Земля гуде',
      author: 'Олесь Гончар',
      year: 1960,
      cost: 400,
      rating: 4.8,
      cover: 'assets/images/5.jpg'
    },
    {
      id: 6,
      title: 'Місто',
      author: 'Валерьян Пидмогильный',
      year: 1928,
      cost: 510,
      rating: 4.7,
      cover: 'assets/images/6.jpg'
    },
  ];

  selectedBook: Book | null = null;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
