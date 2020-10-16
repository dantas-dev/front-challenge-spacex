interface Launch {
  id: number;
  mission_name: string;
  launch_date_unix: number;
  details: string;
  links: {
    article_link: string | null;
    video_link: string;
    flickr_images: string[];
  }
}

export type LaunchCommon = Omit<Launch, "links">;

export type LaunchDetails = Omit<Launch, "id" | "launch_date_unix">;
