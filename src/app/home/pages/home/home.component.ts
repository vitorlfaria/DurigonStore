import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('bagsImage', {static: true}) bagsImage: ElementRef<HTMLImageElement>;
    @ViewChild('jacketsImage', {static: true}) jacketsImage: ElementRef<HTMLImageElement>;
    @ViewChild('winterImage', {static: true}) winterImage: ElementRef<HTMLImageElement>;
    @ViewChild('toysImage', {static: true}) toysImage: ElementRef<HTMLImageElement>;
    @ViewChild('backpack', {static: true}) backpack: ElementRef<HTMLImageElement>;
    @ViewChild('makeup', {static: true}) makeup: ElementRef<HTMLImageElement>;

    ngOnInit() {
        this.initParallax();
    }

    initParallax() {
        gsap.from(this.bagsImage.nativeElement, {
            scrollTrigger: {
                trigger: this.bagsImage.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });

        gsap.from(this.jacketsImage.nativeElement, {
            scrollTrigger: {
                trigger: this.jacketsImage.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });

        gsap.from(this.winterImage.nativeElement, {
            scrollTrigger: {
                trigger: this.winterImage.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });

        gsap.from(this.toysImage.nativeElement, {
            scrollTrigger: {
                trigger: this.toysImage.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });

        gsap.from(this.backpack.nativeElement, {
            scrollTrigger: {
                trigger: this.backpack.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });

        gsap.from(this.makeup.nativeElement, {
            scrollTrigger: {
                trigger: this.makeup.nativeElement,
                scrub: true,
                start: "top center",
                end: "170% center",
            },
            y: -400,
        });
    }

    jackets: Record<string, unknown>[] = [
        {
            name: 'Puffer Três Cores Vemelha',
            description: 'Puffer três cores, azul-marinho, branco e vermelho. Vários tamanhos.',
            price: '100.23',
            image: 'puffer_vermelha.jpg',
            ref: 100
        },
        {
            name: 'Puffer Masculina Preta',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_masculina_2.jpg',
            ref: 120
        },
        {
            name: 'Puffer Três Cores Azul',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_azul.jpg',
            ref: 130
        },
    ];

    winter: Record<string, unknown>[] = [
        {
            name: 'Meia de lã',
            description: 'Meia de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'meia_longa.jpg',
            ref: 150
        },
        {
            name: 'Touca de lã',
            description: 'Touca de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'touca_forro.jpg',
            ref: 150
        },
        {
            name: 'Meia de lã',
            description: 'Meia de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'cachecol.jpg',
            ref: 150
        },
    ];

    toys: Record<string, unknown>[] = [
        {
            name: 'Brinquedo',
            description: 'Camisetas super confortáveis e estilosas.',
            price: 123.45,
            image: 'dinossauro.jpeg',
            ref: 150
        },
        {
            name: 'Brinquedo',
            description: 'Camisetas super confortáveis e estilosas.',
            price: 123.45,
            image: 'brinquedo_bolhas.jpeg',
            ref: 150
        },
        {
            name: 'Brinquedo',
            description: 'Camisetas super confortáveis e estilosas.',
            price: 123.45,
            image: 'brinquedo_piano.jpeg',
            ref: 150
        },
    ];
    
    bags: Record<string, unknown>[] = [
        {
            name: 'Bolsa Feminina',
            description: 'Bolsa Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'bolsa_preta.jpeg',
            ref: 150
        },
        {
            name: 'Bolsa Feminina',
            description: 'Bolsa Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'bolsa_marrom.jpeg',
            ref: 150
        },
        {
            name: 'Bolsa Feminina',
            description: 'Bolsa Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'carteira_feminina.jpeg',
            ref: 150
        },
    ];

    backpacks: Record<string, unknown>[] = [
        {
            name: 'Mochila Feminina',
            description: 'Mochila Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'mochila1.jpeg',
            ref: 150
        },
        {
            name: 'Mochila Feminina',
            description: 'Mochila Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'mochila2.jpeg',
            ref: 150
        }
    ];

    makeups: Record<string, unknown>[] = [
        {
            name: 'Mochila Feminina',
            description: 'Mochila Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'rimel.jpeg',
            ref: 150
        },
        {
            name: 'Mochila Feminina',
            description: 'Mochila Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'po_compacto.jpeg',
            ref: 150
        },
        {
            name: 'Mochila Feminina',
            description: 'Mochila Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'sombras.jpeg',
            ref: 150
        },
    ];
}
