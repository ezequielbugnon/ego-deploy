export class GetOne {
  constructor(
    public id?:number,
    public name?: string,
    public segment?: string,
    public year?: number,
    public price?: number,
    public title?: string,
    public description?: string,
    public thumbnail?: string,
    public photo?: string,
    public model_features?: [
        {
          name: string,
          description: string,
          photo: string
        }
      ],
     public model_highlights?: [
        {
          title: string,
          content: string,
          image: string
        },
        {
          title: string,
          content: string,
          image: string
        },
      ]
    ){

  }
}

