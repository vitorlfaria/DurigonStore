import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DOCUMENT} from "@angular/common";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    @ViewChild('background', {static: true}) background: ElementRef<HTMLImageElement>;
    @ViewChild('foreground', {static: true}) foreground: ElementRef<HTMLImageElement>;
    @ViewChild('midground', {static: true}) midground: ElementRef<HTMLImageElement>;
    @ViewChild('textForeground', {static: true}) textForeground: ElementRef<HTMLImageElement>;

    constructor() {}

    ngOnInit() {
        this.initParallax();
    }

    initParallax() {
        gsap.from(this.background.nativeElement, {
            scrollTrigger: {
                trigger: this.background.nativeElement,
                scrub: true,
                start: "35% center",
                end: "70% center",
                // markers: true
            },
        });

        gsap.from(this.foreground.nativeElement, {
            scrollTrigger: {
                trigger: this.foreground.nativeElement,
                scrub: true,
                start: "30% center",
                end: "150% center",
                // markers: true
            },
            y: 0,
            scale: 1
        });

        gsap.from(this.midground.nativeElement, {
            scrollTrigger: {
                trigger: this.midground.nativeElement,
                scrub: true,
                start: "-100% 45%",
                end: "500% 45%",
                // markers: true
            },
            scale: 2
        });
    }
}
