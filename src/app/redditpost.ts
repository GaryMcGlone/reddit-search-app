interface RedditPost{
    data: Children;
 
    thumbnail:string;
    title:string;
    url:string;
    permalink: string;

    subreddit_name: string;
    display_name: string;
}
interface Data{
    data:RedditPost;
}
interface Children{
    children: Data[];   
}