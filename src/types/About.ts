export interface About {
  id: number;
  type: string;
  name: string;
  description: string;
  meta_title: string;
  meta_description: string;
  image: string;
  added_by: {
    id: number;
    name: string;
  };
}
