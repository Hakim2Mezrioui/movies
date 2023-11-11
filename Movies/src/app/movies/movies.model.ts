export class MoviesModel{
    constructor(
        public title: string,
        public story:string, 
        public rating: number, 
        public description:string, 
        public year:number, 
        public type: string, 
        public Image: string,
        public Trailer: string,
        public Actors: ActorsModel[],
        ) {}
}

export class ActorsModel {
    constructor(
        public name: string,
        public img: string,
        public description: string,
    ) {}
}