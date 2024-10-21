import thoughts from "@/json/thoughts.json";

export default function Blog({ params }: { params: { title: string } }) {
  // فك تشفير عنوان URL لاستبدال %20 بالفراغات
  const decodedTitle = decodeURIComponent(params.title);

  const article = thoughts.find(
    (article) => article.title.trim() === decodedTitle.trim()
  );

  return (
    <div className="mx-5 lg:mx-60 my-20">
      <h1 className="text-3xl font-bold mb-3">{article?.title}</h1>

      <section className="introduction mb-5 border-b pb-5">
        {article?.introduction.split("\n").map((line, index) => (
          <p key={index} className="pl-7 leading-loose">
            {line}
          </p>
        ))}
      </section>

      {article?.sections.map((section, index) => (
        <section key={index} className="section mb-5 border-b pb-5">
          <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
          {section.content.split("\n").map((line, lineIndex) => (
            <p key={lineIndex} className="leading-loose pl-7">
              {line}
            </p>
          ))}
        </section>
      ))}

      <section className="conclusion">
        <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
        {article?.conclusion.split("\n").map((line, index) => (
          <p key={index} className="pl-7">
            {line}
          </p>
        ))}
      </section>
    </div>
  );
}
