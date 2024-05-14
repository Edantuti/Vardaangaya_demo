import { useLocation } from "react-router-dom";
import { PostMap } from "../Data";

export default function BlogPage() {
  const data = useLocation()
  const url = decodeURI(data.pathname)
  const blog_name = url.substring(url.lastIndexOf('/')+1).toLowerCase();
  const blog_details = PostMap.get(blog_name);
  return (
  <section className="min-h-screen py-10 lg:mx-48 md:mx-28 mx-10">
    <img src={blog_details?.image[0] || ""} alt={blog_details?.title} className="h-40 w-80 md:h-96 md:w-auto aspect-[7/1] bg-slate-200 rounded object-cover object-top" />
    <h1 className="py-2 text-3xl">{blog_details?.title}</h1>
    <i className="italic">{blog_details?.description}</i>

    {
      blog_details?.content.map((cnt, index)=>(
        <p key={index+blog_details?.title} className="py-1">{cnt}</p>
      ))
    }
    
  </section>
  );
}
