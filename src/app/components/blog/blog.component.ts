import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  nuevaNoticia: INoticia = {
    titulo: '',
    imagen: '',
    noticia: '',
    fecha: '',
  };
  arrNoticias: INoticia[] = [
    {
      titulo: 'IA para adaptarse al entorno y al cambio',
      imagen:
        'https://imagenes.elpais.com/resizer/fDhMIwMFBrXhI4bs1U582lVa14w=/1200x0/filters:focal(2705x1555:2715x1565)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3R2G6DJL7ZC7TPMUKQDP3FA7Y4.jpg',
      noticia:
        'Modelar datos. Integrar y gestionar sistemas. Obtener información en tiempo real y facilitar la toma de decisiones. Es el horizonte al que tienden los proyectos de infraestructuras más ambiciosos de nuestro país. La implantación de un gemelo digital (modelos virtuales de un objeto, proceso o sistema) en el aeropuerto Adolfo Suárez- Madrid Barajas ha permitido a Aena resolver desafíos, simplificar sus flujos de trabajo y mejorar la experiencia del viajero. Puertos del Estado trabaja para contar en 2030 con siete dársenas inteligentes, conectadas, eficientes y sostenibles. Adif ha impulsado recientemente la primera prueba de concepto en Europa de navegación basada en la red 5G+ y la inteligencia artificial (IA), para lanzar una herramienta que permite planificar rutas, medir la ocupación de una estación en tiempo real y optimizar las actividades de mantenimiento. La Generalitat Valenciana promoverá el uso de tecnologías de la información para la gestión del agua de las depuradoras de la región. Son algunos ejemplos del profundo efecto transformador de la digitalización en este negocio que rodean nuestro día a día.',

      fecha: '2024-02-10',
    },
    {
      titulo: 'Microsoft agrega opción de "Copilot" a su sistema operativo',
      imagen:
        'https://www.eltiempo.com/files/image_1200_680/uploads/2023/12/28/658da1ead2cd3.png',

      noticia:
        'Microsoft agrega la tecla de "Copilot" a sus computadoras para activar el asistente impulsado por inteligencia artificial',

      fecha: '2024-01-08',
    },
  ];

  @Output() noticiaNueva: EventEmitter<INoticia> = new EventEmitter();

  guardar(): void {
    if (
      this.nuevaNoticia.titulo !== '' &&
      this.nuevaNoticia.imagen !== '' &&
      this.nuevaNoticia.noticia !== '' &&
      this.nuevaNoticia.fecha !== ''
    ) {
      this.insertData(this.nuevaNoticia);
      this.nuevaNoticia = {
        titulo: '',
        imagen: '',
        noticia: '',
        fecha: '',
      };
    } else {
      alert('Los campos no pueden estar vacios');
    }
  }

  insertData(noticia: INoticia): void {
    this.arrNoticias.unshift(noticia);
  }
}
