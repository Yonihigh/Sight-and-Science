import Navbar from "./components/Navbar";

async function fetchTrendingNews() {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q="vision technology" OR "eyewear innovation" OR "contact lenses" OR "smart glasses"&language=en&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`
  );
  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  const articles = await fetchTrendingNews();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center shadow-md"
        style={{ backgroundImage: "url('/eyewear-banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Discover the Future of Eyewear</h1>
          <p className="text-xl mt-4">Explore the latest advancements in vision, lenses, and eyewear technology.</p>
          <a href="/news" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            Read Latest News
          </a>
        </div>
      </section>

      {/* ✅ Trending News Section */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Trending Eyewear & Vision News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.source.name}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ✅ Vision Tech Spotlight */}
      <section className="bg-gray-900 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Eyewear Tech Spotlight</h2>
        <p className="mt-4 text-lg">Explore cutting-edge innovations shaping the future of vision.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">AI-Powered Lenses</h3>
            <p className="mt-2">Smart contact lenses that adjust based on environmental light.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Augmented Reality Glasses</h3>
            <p className="mt-2">Next-gen AR glasses with real-time overlays and AI vision enhancement.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Blue Light Protection</h3>
            <p className="mt-2">Lenses designed to filter harmful blue light and reduce eye strain.</p>
          </div>
          
        </div>
      </section>

      {/* ✅ Eyewear Showcase */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Latest Eyewear Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/eyewear-1.jpg" alt="Luxury Glasses" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Luxury Frames</h3>
            <p className="text-gray-600 mt-2">Premium handcrafted eyewear for a stylish look.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/eyewear-2.jpg" alt="Sports Eyewear" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Sports Eyewear</h3>
            <p className="text-gray-600 mt-2">Lightweight, durable glasses designed for athletes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/eyewear-3.jpg" alt="Smart Glasses" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Smart Glasses</h3>
            <p className="text-gray-600 mt-2">Futuristic eyewear with built-in augmented reality.</p>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What People Are Saying</h2>
        <div className="mt-6">
          <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <p className="italic">"These new lenses have completely changed my experience with digital screens!"</p>
            <span className="block font-semibold mt-2">- Alex R., Software Engineer</span>
          </div>
                {/* ✅ Major Eyewear Brands */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Top Eyewear Brands & Companies</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <li><a href="https://www.luxottica.com/en" target="_blank" className="text-blue-600 hover:underline">Luxottica (Ray-Ban, Oakley, Persol)</a></li>
          <li><a href="https://www.essilorluxottica.com/" target="_blank" className="text-blue-600 hover:underline">EssilorLuxottica (Transitions, Varilux)</a></li>
          <li><a href="https://www.marchon.com/" target="_blank" className="text-blue-600 hover:underline">Marchon Eyewear (Nike, Calvin Klein, Lacoste)</a></li>
          <li><a href="https://www.safilogroup.com/" target="_blank" className="text-blue-600 hover:underline">Safilo Group (Carrera, Polaroid, Tommy Hilfiger)</a></li>
          <li><a href="https://www.mauijim.com/" target="_blank" className="text-blue-600 hover:underline">Maui Jim (Polarized Sunglasses)</a></li>
          <li><a href="https://www.zennioptical.com/" target="_blank" className="text-blue-600 hover:underline">Zenni Optical (Affordable Online Eyewear)</a></li>
        </ul>
      </section>

      {/* ✅ Leading Eye Health Organizations */}
      <section className="bg-gray-900 text-white py-10 text-center">
        <h2 className="text-3xl font-semibold">Top Eye Health Organizations</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <li><a href="https://www.aao.org/" target="_blank" className="hover:underline">American Academy of Ophthalmology (AAO)</a></li>
          <li><a href="https://www.aoa.org/" target="_blank" className="hover:underline">American Optometric Association (AOA)</a></li>
          <li><a href="https://nei.nih.gov/" target="_blank" className="hover:underline">National Eye Institute (NEI)</a></li>
          <li><a href="https://www.who.int/health-topics/blindness-and-vision-loss" target="_blank" className="hover:underline">World Health Organization - Vision</a></li>
          <li><a href="https://preventblindness.org/" target="_blank" className="hover:underline">Prevent Blindness Foundation</a></li>
          <li><a href="https://www.fightforsight.org.uk/" target="_blank" className="hover:underline">Fight for Sight (UK Vision Research)</a></li>
        </ul>
      </section>

        </div>
      </section>

      {/* ✅ Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Stay Informed on Eyewear Tech</h2>
        <p className="mt-4 text-lg">Subscribe to our newsletter for the latest updates on lenses, eyewear trends, and vision health.</p>
        <form className="mt-6 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-700" />
          <button type="submit" className="bg-gray-900 hover:bg-gray-700 py-3 px-5 rounded-r-lg font-semibold">
            Subscribe
          </button>
        </form>
      </section>
      
    </div>
  );
}
