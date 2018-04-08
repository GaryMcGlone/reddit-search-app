interface RedditPost{
    data: Children;
 
    thumbnail:string;
    title:string;
    url:string;
    permalink: string;
}
interface Data{
    data:RedditPost;
}
interface Children{
    children: Data[];   
}