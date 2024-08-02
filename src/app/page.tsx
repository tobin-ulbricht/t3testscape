import * as constants from "constants";
import {db} from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
    "https://utfs.io/f/a2751cfb-c3d9-4f25-9f8f-2adb876bc030-x3togj.jpg",
    "https://utfs.io/f/7ade1d1b-df11-47ce-a8da-47e91d2e7988-bksbt9.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {
    const posts = await db.query.posts.findMany();
    console.log(posts);

  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
                <div key={post.id} className="w-48">
                    <p>{post.name}</p>
                </div>
            ) )}
            { mockImages.map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} alt="text"/>
                </div>
            ))}
        </div>
    </main>
  );
}
