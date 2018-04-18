interface IRedditPost{
    thumbnail:string;
    title:string;
    url:string;
    permalink: string;

    subreddit_name: string;
    display_name: string;

    data: IRedditResponse;
}
interface IData{
    data:IRedditPost;
}
interface IRedditResponse{
    children: IData[];   
}