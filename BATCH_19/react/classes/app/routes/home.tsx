import { useNavigate } from "react-router";
import { routesList } from "../routes";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Asaan Hai Coding
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore React Concepts One by One 🚀
        </p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routesList.map((item, index) => (
          <div
            key={item.id}
            onClick={() => navigate(item.route)}
            className={`cursor-pointer p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-200 ease-in-out ${
              colorClasses[index % colorClasses.length]
            }`}
          >
            <h2 className="text-xl font-bold">
              {item.title || `Lesson ${item.id}`}
            </h2>
            <p className="text-sm mt-1 opacity-80">{item.route}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

// Add some color classes for variety
const colorClasses = [
  "bg-pink-200 text-pink-900",
  "bg-green-200 text-green-900",
  "bg-blue-200 text-blue-900",
  "bg-yellow-200 text-yellow-900",
  "bg-purple-200 text-purple-900",
  "bg-orange-200 text-orange-900",
];
