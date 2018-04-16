interface RedditPost{
    thumbnail:string;
    title:string;
    url:string;
    permalink: string;

    subreddit_name: string;
    display_name: string;

    data: RedditResponse;
}
interface Data{
    data:RedditPost;
}
interface RedditResponse{
    children: Data[];   
}