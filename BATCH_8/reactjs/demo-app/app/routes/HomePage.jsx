export default function HomePage() {
  const name = "Vijay Kumar";

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white inline-flex flex-col gap-2 p-4 rounded-xl">
        <h2>3 Videos</h2>
        {Array.from({ length: 3 }, (item, index) => ({
          id: index,
        })).map((item) => {
          return (
            <div key={item.id} className="flex gap-2">
              <div className="w-60 h-20 bg-red-500 rounded"></div>
              <div className="basis-full flex flex-col justify-center">
                <h3 className="font-medium">First Video</h3>
                <p className="text-gray-500">Video Description</p>
              </div>
              <div className="">a</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
