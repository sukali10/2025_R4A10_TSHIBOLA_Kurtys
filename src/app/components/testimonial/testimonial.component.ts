import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  standalone: true,
  imports: [CommonModule], 
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      image: 'lego_1.jpg', 
      name: 'Edward Newgate',
      role: 'Founder Circle',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      image: 'lego_2.jpg',
      name: 'John Doe',
      role: 'CEO',
      text: 'Innovative solutions that make a difference. Easy to use, effective and secure.'
    },
    {
      image: 'lego_3.jpg', 
      name: 'Sarah Smith',
      role: 'Marketing Manager',
      text: 'A wonderful experience! I highly recommend this service to everyone.'
    }
  ];


  currentIndex: number = 0;

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}