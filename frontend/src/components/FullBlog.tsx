import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                    <div className=" col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div>
                            {/* Use optional chaining to safely access toDateString */}
                            Posted on {blog.publishedDate?.toString() || "24th March 2024"}
                        </div>
                        <div className="">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        Author
                        <div className="text-xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
