import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ActorsModel, MoviesModel } from './movies.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  listMovies: MoviesModel[] = [
    new MoviesModel(
      "Sad Love Story",
      "From the moment they meet, Jon-young (Kwon Sang-woo) and the blind Hye-in (Kim Hee-sun) share an instant connection. Young and naïve, they believe that nothing can change their love. Life, however, pulls them in opposite directions. Jon-young is sent to Seoul, while Hye-in immigrates to America. Misleadingly informed that Jon-young is dead, Hye-in struggles to begin a new life alone. Years later, Hye-in returns to Seoul. With her eyesight restored, she is now a singer happily engaged to her producer Gun-woo (Yeon Jung-hoon). Everything changes though when Gun-woo's composer friend turns out to be none other than Jon-young. He instantly recognizes her, but Hye-in has never seen Jun-young before. When love is no longer simple and blind, can Hye-in and Jun-young still find their way back to each other? This series is a series of love, death and suspense.",
      4,
      "Sad Love Story (hangeul : 슬픈 연가 ; RR: Seulpeun Yeon-ga, connu aussi sous le nom de Sad Love Song ou de Sad Sonata), est une série télévisée sud-coréenne en 20 épisodes. La série est diffusée à partir du 5 janvier 2005 sur MBC en Corée du Sud. ", 
      2009, 
      "Love",
      "https://pictures.betaseries.com/fonds/poster/6ec7973b2eb8574df2cb2a13a8ac689c.jpg",
      "https://www.youtube.com/embed/7T2QYpKCr7Y",
      [
        new ActorsModel(
          "Jon-young",
          'http://image.space.rakuten.co.jp/lg01/18/0000060318/03/img8b6c8d3f338kse.jpeg',
          `Le lorem ipsum est, 
          en imprimerie, 
          une suite de mots sans signification 
          utilisée à titre provisoire pour calibrer
          une mise en page, le texte définitif venant
          remplacer le faux-texte dès qu'il est prêt 
          ou que la mise en page est achevée. Généralement,
          on utilise un texte en faux latin, le Lorem ipsum 
          ou Lipsum.`),
        new ActorsModel(
          "Hye-in",
          "https://koreajoongangdaily.joins.com/data/photo/2022/08/01/e6ae4222-d926-41ed-b959-7244af749e47.jpg",
          `
          Le lorem ipsum est, 
                    en imprimerie, 
                    une suite de mots sans signification 
                    utilisée à titre provisoire pour calibrer
                    une mise en page, le texte définitif venant
                    remplacer le faux-texte dès qu'il est prêt 
                    ou que la mise en page est achevée. Généralement,
                    on utilise un texte en faux latin, le Lorem ipsum 
                    ou Lipsum.
          `
        ),
        new ActorsModel(
          "Lee Gun-woo",
          "https://2img.net/h/4.bp.blogspot.com/_QM2-6hVKZbQ/SwqCLAtBvbI/AAAAAAAAIjo/f6NObbGxWhY/s1600/YeonJungHoon.jpg",
          `Le lorem ipsum est, 
          en imprimerie, 
          une suite de mots sans signification 
          utilisée à titre provisoire pour calibrer
          une mise en page, le texte définitif venant
          remplacer le faux-texte dès qu'il est prêt 
          ou que la mise en page est achevée. Généralement,
          on utilise un texte en faux latin, le Lorem ipsum 
          ou Lipsum.`,
        )
      ]
      ),
    new MoviesModel(
      "Bridal Mask",
      "",
      4.7,
      "",
      2012,
      "Action Adventue Drama",
      "https://foryouinfullblossom.files.wordpress.com/2014/05/bridal-mask.jpg?w=640&h=555",
      "",
      []
    ),
    new MoviesModel(
      "Iris I",
      "",
      4.9,
      "",
      2009,
      "Action Drama",
      "https://i.pinimg.com/originals/b6/7c/0a/b67c0ab651163bbd750555c38d68e888.jpg",
      "",
      []
    ),
    new MoviesModel(
      "Healer",
      "",
      3.7,
      "",
      2014,
      "action drama",
      "https://www.filmmusicsite.com/images/covers/large/84439.jpg",
      "",
      []
    ),
    new MoviesModel(
      "Sad Love Story",
      "",
      4,
      "Sad Love Story (hangeul : 슬픈 연가 ; RR: Seulpeun Yeon-ga, connu aussi sous le nom de Sad Love Song ou de Sad Sonata), est une série télévisée sud-coréenne en 20 épisodes. La série est diffusée à partir du 5 janvier 2005 sur MBC en Corée du Sud. ", 
      2009, 
      "Love",
      "https://pictures.betaseries.com/fonds/poster/6ec7973b2eb8574df2cb2a13a8ac689c.jpg",
      "",
      []
      ),
    new MoviesModel(
      "Bridal Mask",
      "",
      4.7,
      "",
      2012,
      "Action Adventue Drama",
      "https://foryouinfullblossom.files.wordpress.com/2014/05/bridal-mask.jpg?w=640&h=555",
      "",
      []
    ),
    new MoviesModel(
      "Iris I",
      "",
      4.9,
      "",
      2009,
      "Action Drama",
      "https://i.pinimg.com/originals/b6/7c/0a/b67c0ab651163bbd750555c38d68e888.jpg",
      "",
      []
    ),
    new MoviesModel(
      "Healer",
      "",
      3.7,
      "",
      2014,
      "action drama",
      "https://www.filmmusicsite.com/images/covers/large/84439.jpg",
      "https://www.youtube.com/embed/EcOhZLULyFA",
      []
    )
  ]

  isLoginPage = new Subject<boolean>();
  isAdminPage = new Subject<boolean>();
  moviesSelected: BehaviorSubject<MoviesModel> = new BehaviorSubject<MoviesModel>(this.listMovies[0]);
}
  