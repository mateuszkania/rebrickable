export interface Minifig {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url?: string;
  set_url: string;
  last_modified_dt: string;
}

export interface PartData {
  inv_part_id: string;
  part: {
    part_img_url: string;
    name: string;
  };
}

export interface PartsApiResponse {
  results: PartData[];
}
