import Navbar from "../components/Navbar";

async function fetchLatestNews() {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=eyeglasses OR lenses OR Transitions OR varilux OR contact lenses OR vision technology OR smart glasses OR blue light glasses OR ocular health&language=en&apiKey=${apiKey}`
  );
  const data = await res.json();
  console.log("API Response:", data); // ✅ Check if articles have images
  return data.articles;
}
//async function // fetchVisionNews() {
  const guardianApiKey = process.env.GUARDIAN_API_KEY;

  // ✅ Fetch from The Guardian API
  const guardianRes = await fetch(
    `https://content.guardianapis.com/search?q=eye health OR vision OR eyewear OR lenses OR smart glasses&show-fields=thumbnail,trailText&api-key=${guardianApiKey}`
  );
  const guardianData = await guardianRes.json();
  const guardianNews = guardianData.response.results.map((article) => ({
    title: article.webTitle,
    url: article.webUrl,
    source: "The Guardian",
    image: article.fields?.thumbnail || null,
    description: article.fields?.trailText || "No description available.",
  }));

  // ✅ Fetch from Google News RSS
  const rssRes = await fetch(
    `https://news.google.com/rss/search?q=eye+health+OR+vision+technology+OR+eyewear&hl=en-US&gl=US&ceid=US:en`
  );
  const rssText = await rssRes.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(rssText, "text/xml");
  const items = xml.querySelectorAll("item");

  const googleNews = Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent,
    url: item.querySelector("link")?.textContent,
    source: "Google News",
    image: null, // Google RSS does not provide images
    description: item.querySelector("description")?.textContent || "No description available.",
  }));

  // ✅ Merge both sources & return combined news
  return [...guardianNews, ...googleNews].slice(0, 10); // Limit to 10 results
}



export default async function News() {
  const articles = await fetchLatestNews();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="text-center py-10 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Latest Eyewear & Vision News</h1>
        <p className="text-xl text-gray-600 mt-4">
          Stay updated with the latest advancements in eyewear technology, lenses, and eye health.
        </p>
      </header>

      {/* Latest News Section */}
      <section className="py-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* ✅ Display Image (If Available) */}
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
    </div>
  );
}
