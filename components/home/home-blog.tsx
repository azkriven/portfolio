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
            <div className="flex flex-col gap-y-4 md:gap-y-5">
                {blogs.map((blog) => (
                    <Link href={blog.href} key={blog.title}>
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
