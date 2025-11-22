export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="aspect-w-16 aspect-h-9 bg-black rounded">
      <iframe
        src={videoUrl}
        title="Course Video"
        allowFullScreen
        className="w-full h-full rounded"
      ></iframe>
    </div>
  );
}
