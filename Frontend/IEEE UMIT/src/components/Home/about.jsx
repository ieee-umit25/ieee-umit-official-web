export default function AboutSection(items) {
  return (
    <section className="py-16 text-black dark:text-white  " id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get to Know Us
        </h2>

        <div className="grid gap-10 md:grid-cols-3 text-gray-600 dark:text-gray-300">
          {items.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-inherit dark:border dark:border-gray-700 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <img src={item.logo} alt={item.title} className="h-16 w-[50%] mb-4" />
              <h3 className="text-xl font-semiboldmb-3">
                {item.title}
              </h3>
              <p className="  leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
