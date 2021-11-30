export class LikeItem {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: Date;
  image: {
    id: string;
    url: string;
  };

  constructor(
    id: number,
    user_id: string,
    image_id: string,
    sub_id: string,
    created_at: Date,
    image: Image
  ) {
    this.id = id;
    this.user_id = user_id;
    this.image_id = image_id;
    this.sub_id = sub_id;
    this.created_at = created_at;
    this.image = image;
  }
}

type Image = {
  id: string;
  url: string;
};

// {
//     "id": 2140924,
//     "user_id": "j7rnkt",
//     "image_id": "9ccXTANkb",
//     "sub_id": "cb99309a-fa55-4cf8-bb26-33ed2cc0b173",
//     "created_at": "2021-11-29T14:49:30.000Z",
//     "image": {
//         "id": "9ccXTANkb",
//         "url": "https://cdn2.thecatapi.com/images/9ccXTANkb.jpg"
//     }
// }
