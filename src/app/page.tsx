const mockUrls = [
    "https://utfs.io/f/a2751cfb-c3d9-4f25-9f8f-2adb876bc030-x3togj.jpg",
    "https://utfs.io/f/7ade1d1b-df11-47ce-a8da-47e91d2e7988-bksbt9.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">{
            mockImages.map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} alt="text"/>
                </div>
            ))
        }</div>
    </main>
  );
}
