import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-text-bar',
  templateUrl: './text-bar.component.html',
  styleUrls: ['./text-bar.component.scss']
})
export class TextBarComponent implements OnInit {
    @ViewChild('background', {static: true}) background: ElementRef<HTMLImageElement>;
    @Input() title: string;
    @Input() text: string;

    constructor() {}
    ngOnInit() {
        this.initParallax();
    }

    initParallax() {
        gsap.from(this.background.nativeElement, {
            scrollTrigger: {
                trigger: this.background.nativeElement,
                scrub: true,
                start: "-150% center",
                end: "200% center",
                // markers: true
            },
            objectPosition: "0% 70%"
        });
    }
}
