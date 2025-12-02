import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
}

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheel.html',
  styleUrl: './wheel.css',
})
export class Wheel implements OnInit, OnDestroy {
  particles: Particle[] = [];
  private particleIdCounter = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.addParticle();
    }, 50); // Frequent particles
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  addParticle() {
    const id = this.particleIdCounter++;
    const particle: Particle = {
      id,
      x: (Math.random() - 0.5) * 10, // Slight random horizontal start
      y: (Math.random() - 0.5) * 10, // Slight random vertical start
      duration: 800 + Math.random() * 500 // Random duration
    };

    this.particles.push(particle);

    // Remove particle after animation to prevent memory leak
    setTimeout(() => {
      this.particles = this.particles.filter(p => p.id !== id);
    }, particle.duration + 100);
  }
}
