import Link from "next/link";

const blogs = [
    {
        date: "April 9, 2024",
        title: "Embracing Vim: The Unsung Hero of Code Editors",
        href: "https://portfolio-blog-starter.vercel.app/blog/vim",
    },
    {
        date: "April 8, 2024",
        title: "Spaces vs. Tabs: The Indentation Debate Continues",
        href: "https://portfolio-blog-starter.vercel.app/blog/spaces-vs-tabs",
    },
];

export default function HomeBlog() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-12">Latest from the blog</h3>
            <div className="flex gap-5">
                {blogs.map((blog) => (
                    <Link
                        href={blog.href}
                        key={blog.title}
                        className="border border-white/0 hover:border-white/30 p-2 w-fit rounded-lg"
                    >
                        <h4 className="font-semibold text-xl">{blog.title}</h4>
                        <span className="text-muted-foreground">
                            {blog.date}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
