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
      titulo:
        '¿Para qué sirve el pequeño bolsillo delantero de tus pantalones vaqueros?',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYBhgMakZHPwEdmQtpbGAkd9WG2LX98apAg&usqp=CAU',
      noticia:
        'Pues teoricamente sirven para guardar el reloj de cadena que iba atado a una cadena a la cintura desde finales del sigo XIX',
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
