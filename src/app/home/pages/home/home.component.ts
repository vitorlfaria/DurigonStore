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
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_masculina_1.jpg',
            ref: 110
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_masculina_2.jpg',
            ref: 120
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_azul.jpg',
            ref: 130
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'jaqueta_feminina_rosa.jpg',
            ref: 140
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'jaqueta_feminina_rosa_1.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_bege.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_1.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_2.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_cinza.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_verde.jpg',
            ref: 150
        },
        {
            name: 'Jaqueta Puffer Masculina',
            description: 'Jaqueta super estilosa e confortável, ótimo para quele dia frio.',
            price: 123.45,
            image: 'puffer_feminina_rosa.jpg',
            ref: 150
        }
    ];

    socks: Record<string, unknown>[] = [
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
            name: 'Touca preta',
            description: 'Touca de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'touca_preta3.jpg',
            ref: 150
        },
        {
            name: 'Touca pompom',
            description: 'Touca de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'touca_pompom.jpg',
            ref: 150
        },
        {
            name: 'Meia socket',
            description: 'Meia de lã, super confortável e quentinha.',
            price: 123.45,
            image: 'meia_socket.jpg',
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

    pantsAndShirts: Record<string, unknown>[] = [
        {
            name: 'Camisetas',
            description: 'Camisetas super confortáveis e estilosas.',
            price: 123.45,
            image: 'tshirt.jpeg',
            ref: 150
        },
        {
            name: 'Calça Jeans Feminina',
            description: 'Calça Jeans Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'jeans_feminino_frente.jpg',
            ref: 150
        },
        {
            name: 'Calça Jeans Feminina Boca de Sino',
            description: 'Calça Jeans Feminina, super confortável e estilosa.',
            price: 123.45,
            image: 'jeans_feminino_largo_frente.jpg',
            ref: 150
        },
        {
            name: 'Calça Jeans Masculina',
            description: 'Calça Jeans Masculina, super confortável e estilosa.',
            price: 123.45,
            image: 'jeans_masculino_frente.jpg',
            ref: 150
        },
    ];
}
