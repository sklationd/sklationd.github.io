import { allProjects } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
    function formatDate(date: string) {
        return new Date(date).toLocaleDateString("kr-KR", {
            year: "numeric",
            month: "short",
        });
    }

    return (
        <div className="prose dark:prose-invert">
            {allProjects.map((project) => (
                <article key={project._id}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-1">
                            <Link href={project.slug}>
                                <h2>{project.title}</h2>
                            </Link>
                            {project.description && (
                                <p>{project.description}</p>
                            )}
                        </div>
                        <div className="">
                            <h4>
                                {formatDate(project.from)} ~{" "}
                                {formatDate(project.to)}
                            </h4>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
