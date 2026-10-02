import { useState } from "react";

// Blog Card Component
function BlogCard({ blog, onClick }) {
  const categoryColors = {
    Technical: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
    "Non-Technical":
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    "Non - Technical":
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    Experience:
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  };

  const categoryIcons = {
    Technical: "💻",
    "Non-Technical": "📘",
    "Non - Technical": "📘",
    Experience: "🌟",
  };

  return (
    <div
      onClick={() => onClick(blog)}
      className="cursor-pointer transition transform hover:scale-105"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-full">
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl ${
            categoryColors[blog.category]
          }`}
        >
          {categoryIcons[blog.category]}
        </div>

        <span className="text-sm font-semibold uppercase text-cyan-600 dark:text-cyan-400">
          {blog.category}
        </span>

        <h3 className="text-lg font-bold mt-2 mb-2 leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm opacity-80 mb-4 line-clamp-3">
          {blog.description}
        </p>

        <div className="flex justify-between text-sm opacity-70">
          <span>✍️ {blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title:
        "When Borders Blur and Minds Meet: How AI, Global Collaboration, and Hackathons Are Redefining Education",
      category: "Technical",
      author: "K. P. Singh",
      date: "Jan 2026",
      description:
        "How AI, global collaboration, and hackathons are reshaping the future of education.",
      content: (
        <>
          <p>
            The world did not change overnight; it evolved, quietly at first,
            then all at once. Artificial Intelligence has accelerated that
            change in ways few industries, including education, were truly
            prepared for. Knowledge is no longer scarce. Information is no
            longer power. What matters now is{" "}
            <span className="font-bold">
              how effectively that knowledge is applied
            </span>
            , how ideas are executed, and how people collaborate across borders
            to solve real problems.
          </p>

          <p>
            In this new reality, education can no longer remain local in its
            thinking. The future belongs to institutions and students that{" "}
            <span className="font-bold">
              think globally, collaborate openly, and act decisively.
            </span>
          </p>

          <p>
            This is why collaborations between educational institutions across
            continents matter more today than ever before. A powerful example of
            this evolving mindset is the collaboration between{" "}
            <span className="font-bold">
              SUNY Binghamton (New York) and Sardar Patel Institute of
              Technology (Mumbai)
            </span>
            , which begins with action through a Hackathon.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            AI and the New Grammar of Global Education
          </h3>

          <p>
            AI does not recognize national boundaries. Solving global problems
            requires diverse perspectives and the ability to work in distributed
            teams. When institutions collaborate internationally, they create a
            shared innovation culture.
          </p>

          <p>
            Launching this collaboration through a Hackathon represents the most
            honest form of learning in the AI era: no scripted answers, just a
            problem, a deadline, and a team that must figure it out.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Hackathons Matter in the Age of AI
          </h3>

          <p>
            Hackathons are compressed simulations of professional life. They
            push students to understand problems, build solutions under
            constraints, and communicate ideas clearly. In an AI-driven world,
            these human capabilities — decision-making under pressure and
            leadership without authority — are what set professionals apart.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Hackathons as Serious Profile Builders (Not Just Events)
          </h3>

          <p>
            For years, I have advised students aspiring to study at top global
            universities. One truth has remained constant:{" "}
            <span className="font-bold">
              admissions committees look for proof, not just claims.
            </span>
          </p>

          <p>
            Hackathons provide that proof. However, the real value emerges when
            students translate their work into a compelling narrative. I have
            discussed this in our{" "}
            <a
              className="underline text-blue-400"
              href="https://www.imfs.co.in/craft-a-winning-resume-the-ultimate-guide-for-ms-aspirants/"
            >
              {" "}
              comprehensive guide to drafting an ideal resume
            </a>
            , where projects and outcomes matter far more than generic skill
            lists. To help you get started, we also offer a{" "}
            <a
              className="underline text-blue-400"
              href="https://www.imfs.co.in/craft-a-winning-resume-the-ultimate-guide-for-ms-aspirants/"
            >
              specific resume drafting guide for MS aspirants
            </a>{" "}
            to ensure your technical impact is highlighted correctly.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Beyond Coding: What Hackathons Actually Reveal
          </h3>

          <p>
            The most successful teams are rarely those with the strongest
            individual coders; they are those with balanced teams. This
            reflection becomes the backbone of a strong application. It is
            imperative to{" "}
            <a
              className="underline text-blue-400"
              href="https://www.imfs.co.in/study-abroad-2025-how-to-draft-a-powerful-sop-and-strong-lors/"
            >
              master the ultimate guide to writing a winning SOP and securing
              strong LORs
            </a>
            , ensuring that your hackathon experiences are communicated with
            clarity and intent.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            What Top Universities Are Really Looking For
          </h3>

          <p>
            There is a noticeable shift in how leading universities evaluate
            applicants. Grades are important, but admissions committees are
            asking: Can this student apply knowledge meaningfully? I have shared
            insights on{" "}
            <a
              className="underline text-blue-400"
              href="https://www.imfs.co.in/how-to-build-a-profile-that-top-universities-love/"
            >
              how to get admission to a high-ranked university
            </a>{" "}
            and why experience-driven profiles now carry far greater weight than
            isolated academic metrics.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            The Bigger Signal Behind This Collaboration
          </h3>

          <p>
            The SUNY Binghamton–SPIT collaboration reflects a broader shift
            where Indian institutions are recognized as innovation partners.
            Students who participate in such ecosystems gain more than exposure;
            they gain global readiness. Preparing for this journey also involves
            professional maturity, which we cover in our guide on{" "}
            <a
              className="underline text-blue-400"
              href="https://www.imfs.co.in/thriving-abroad-made-easy-guide-for-international-students-in-2025/"
            >
              how to truly thrive abroad
            </a>{" "}
            both inside and outside the classroom.
          </p>

          <h3 className="text-xl font-semibold mt-6">A Final Thought</h3>

          <p>
            The future will not ask where you studied. It will ask what you
            built. Hackathons answer those questions, and global collaborations
            amplify their impact.
          </p>

          <div className="mt-8 border-t pt-6 text-sm opacity-80">
            <p>Presented by IMFS</p>
            <p>India’s most trusted study abroad guide since 1997</p>
            <p className="mt-4 font-medium">
              Authored by K. P. Singh <br />
              Mentor | Educationist | Founder – IMFS <br />
              Empowering the Global Indian Student <br />
              www.imfs.co.in
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Tech Giants and Gen Z — Who’s Influencing Whom?",
      category: "Non - Technical",
      author: "Hibah Khatkhatay",
      date: "Dec 2025",
      description: "Exploring how Gen Z shapes and is shaped by social media trends.",
      content: (
        <>
          <p>
          In today’s digital age, with the world at their fingertips and a mind
          for reinvention, <span className="font-bold">Gen Z</span> being the generation using
          it the most, rule the social sphere. From shaping trends to fueling
          literal revolutions, we’ve done it all. A large portion of Gen Z’s
          lives is shaped by <span className="font-bold">social media and the internet</span>{" "}
          in general. A new trend emerges, and it instantly reaches millions
          through <span className="font-bold">Instagram and TikTok</span>. Labubus, the
          infamous Dubai chocolate, The Summer I Turned Pretty, they have
          nothing in common except that{" "}
          <span className="font-bold">everyone knows them</span>.
        </p>

          <p>
            Gen Z might be the ones at the forefront when it comes to trends in
            the digital world, but they’re not the ones truly benefiting. No,
            it’s the corporations that benefit from every trend that goes viral
            online. So much so that, in order to be relevant, companies actively
            participate and try to best one another at these trends. Getting
            celebrities and influencers to participate makes their businesses
            profitable, since Gen Z is always eager to participate and follow
            their favourite famous people on the internet.
          </p>

          <p>
            The question which comes to mind is:{" "}
          <span className="font-bold">who influences whom?</span> It’s not as simple as it
          seems and is actually a pretty layered question. The
            relationship is not one-directional; it’s a power struggle where
            tech giants set structures, and Gen Z reshapes them through usage,
            trends, and backlash. On one hand, TikTok’s “For You” page, YouTube
            recommendations, and Instagram’s Reels shape taste, attention span,
            and even humor. Built-in shopping features, “drops,” limited-edition
            collabs, and constant advertisements actively normalize consumption
            as lifestyle. Emojis, reactions, and short-form video platforms
            dictate how Gen Z talks as well as how we live. Gen Z grows up as
            data points; normalization of being tracked, targeted, and nudged is
            only growing with each passing second. On the other hand, Gen Z’s
            influence is equally valuable. Platform survival depends on Gen Z,
            Snapchat is kept alive by teens, while Facebook is “aged out”
            because Gen Z left.
          </p>

          <p>
            Content creation drives revenue. Memes, TikTok dances, and slang are
            all user-generated, but are later monetized. These young users shape
            the framework and features of various platforms and also companies
            through stories, reel sharing, posts, etc. Backlash and cancel
            culture have become the norm. Boycotts, mass exits, and viral
            callouts force corporations to shift policies and stances (e.g.,
            climate stances, ad choices, views on global issues).
          </p>

          <p>
            So ultimately, between tech giants and Gen Z, who’s influencing
            whom? The feedback loop is relentless, undeniable, and never-ending.
            Neither side “wins.” Tech giants offer the tools; Gen Z decides if
            they live or die. Just look at how Zomato memes, Ola’s clapbacks, or
            Amul’s topical ads thrive only because Gen Z amplifies them. On the
            other hand, how much is Gen Z really controlling what corporations
            do? Or, in reality, is it really just an illusion of control that
            social media continues to fuel? It should be noted, however, that
            power is dynamic but asymmetrical: tech giants own the
            infrastructure; if they want, Gen Z can own the culture. This game
            is of influence, which is mutual but fragile
          </p>

          <p>
            The real question isn’t “who influences whom,” but rather, who
            adapts faster. In this digital arena, survival belongs not to the
            powerful, but to the agile.
          </p>
        </>
      ),
    },
    {
      title:
        "Artificial Intelligence's Hidden Thirst: How It is Depleting Global Water Supplies",
      category: "Technical",
      author: "Vaishnavi Balodhi",
      date: "Oct 2025",
      description:
        "Exploring how AI infrastructure is affecting global water resources.",
      content: (
        <>
          <p>
             A hidden ecological crisis is developing behind the digital curtain as{" "}
          <span className="font-bold">
            artificial intelligence transforms industries and daily life
          </span>
          . Water depletion is an issue just as critical as AI’s power
          consumption. The massive{" "}
          <span className="font-bold">data centres that power AI operations</span>{" "}
          are consuming water at unprecedented levels, depleting local supplies
          and forcing us to rethink{" "}
          <span className="font-bold">sustainable technology</span>. A typical data
            centre uses about 300,000 gallons of water daily—enough for 100,000
            homes. One Iowa building used a billion gallons in 2024, and U.S.
            data centres collectively used 17.5 billion gallons in 2023.
            Thousands of servers produce massive amounts of heat, necessitating
            heavy usage of water-cooling systems. On average, a centre uses 1.9
            litres of water per kilowatt-hour of power. AI applications are
            especially waterhungry since training big models and producing
            images require massive computing power and much more cooling.
            Generating AI images uses thousands of times the energy—and water—
            required for simple text searches.
          </p>

          <p>
            The issue is compounded where data centres congregate in water-poor
            areas. Even during severe drought, the American West remains a
            popular destination for new facilities. Phoenix centres alone
            consume 1.5 gigawatts of power, stretching already constrained
            resources. Residents and businesses in the area fear shortages and
            increased costs as technology companies compete for rights to water.
            It's hard to estimate the entire extent of this problem since most
            companies don't even report precise water consumption. This
            transparency is what stops policymakers and communities from making
            informed choices. Cloud behemoths such as Google, Amazon, and
            Microsoft had promised to reduce environmental footprints, but the
            increase in demand for AI jeopardizes these promises. In 2024, the
            European Union made operators declare data centre energy and water
            consumption publicly under its Energy Efficiency Directive, a model
            for regulation around the world. But most areas have no such
            regulations, permitting unbridled expansion in sensitive zones.
          </p>

          <p>
            Solutions are clear. Companies must ensure transparency and adopt
            water-efficient cooling like liquid cooling, air cooling, heat
            recovery, and closed-loop recycling. Locating centres in waterrich
            areas and investing in next-generation cooling technologies will
            ease pressure. Governments, meanwhile, should apply zoning laws,
            water allocation policies, and mandatory environmental assessments
            to integrate water security with technological growth. The <span className="font-bold">AI revolution holds vast promise</span>, but its{" "}
          <span className="font-bold">hidden thirst cannot be ignored</span>. The challenge is not stopping AI’s progress but making it
            sustainable. Through transparency, regulation, innovation, and
            responsible consumption, we can harness AI’s power without
            exhausting our most vital resource—water. Action is needed now,
            before AI’s demand causes
          </p>
        </>
      ),
    },
    {
      title: "Sustainable Smart Cities – Merging Tech with Nature",
      category: "Technical",
      author: "Pradnya Dhande",
      date: "Sep 2025",
      description: "Rethinking urban development with sustainability at the center.",
      content: (
        <>
          <p>
            Whenever I hear the term <span className="font-bold">“smart city”</span>, I imagine
          tall glass buildings, Wi-Fi everywhere, and driverless cars. But then
          I also worry what about{" "}
          <span className="font-bold">
            trees, clean air, or a place to just sit under the sky?
          </span>{" "}
          Development without nature feels incomplete. That’s why the idea of{" "}
          <span className="font-bold">sustainable smart cities</span> excites me. It’s not just about
            gadgets and technology; it’s about building cities where humans and
            nature can actually coexist.
          </p>

          <p>
            Technology today has the power to change everything. Imagine
            streetlights that switch on only when someone passes by, garbage
            bins that alert the cleaners when full, or apps that guide us to the
            nearest empty parking spot. These things save energy and time. But
            what makes a city truly “sustainable” is when technology also
            protects the environment like using solar panels instead of
            coal-based electricity, planting green rooftops on skyscrapers, or
            having rainwater harvesting systems in every society
          </p>

          <p>
            I wanna say this clearly, I truly feel this is not just a future
            dream but a real issue. If we don’t merge technology with nature
            now, we may end up with lifeless cities full of concrete but no
            soul. I honestly feel this topic is not just about development, but
            about emotions too, because clean air, green spaces, and safe water
            are basic things every human deserves.
          </p>

          <p>
            I feel we often see development and nature as two opposite sides.
            But why not bring them together? A city can have both, fast internet
            and fresh air, metros and bicycle lanes, skyscrapers and gardens. If
            Singapore can have vertical gardens on tall buildings, and
            Copenhagen can run almost fully on renewable energy, then why can’t
            our Indian cities do the same? Even in India, some projects under
            the Smart Cities Mission are trying.
          </p>

          <p>
            Pune with its digital traffic management, Indore with its waste
            segregation, and Surat with smart water meters. These may sound like
            small steps, but when combined, they create a huge impact.
          </p>

          <p>
            One important part of sustainable cities is also the human mindset.
            A city can have smart infrastructure, but if people still litter,
            waste electricity, or depend only on private cars, then it won’t be
            sustainable. Citizens need to participate by using public transport,
            reducing plastic, and supporting eco-friendly policies. I believe
            real “smartness” is not just technology but also the habits of the
            people living in the city. For me, a sustainable smart city is not
            about luxury living or fancy technology. It’s about balance. It’s
            about a place where my generation and the next can breathe clean
            air, drink safe water, and still enjoy the comfort of modern
            facilities. Development should never mean destroying nature;
            instead, it should mean finding smarter ways to live with it.
          </p>

          <p>
            In the end, I truly feel this is a real emotion and a real need
            which must happen. Merging technology with nature is not an option
            anymore, it is a necessity. With climate change and pollution rising
            every day, the only way forward is to make our cities both smart and
            sustainable. That is the kind of city I dream to live in, where
            progress and greenery go hand in hand.
          </p>
        </>
      ),
    },
    {
      title: "Global Food Trends: Ramen, Boba, and Beyond",
      category: "Non - Technical",
      author: "Mugdha Bhavsar",
      date: "June 2025",
      description: "The influence of global entertainment on food culture and trends.",
      content: (
        <>
          <p>
            Food today isn’t just about eating, it’s about{" "}
          <span className="font-bold">culture, aesthetics, and identity</span>.
          Thanks to{" "}
          <span className="font-bold">
            K-dramas, K-pop, anime, and social media
          </span>
          , global food trends travel faster than ever, turning local dishes into worldwide sensations.
            Two of the biggest stars of this global food wave are ramen and
            boba, but the story doesn’t end there. These trends are just the
            beginning of a bigger cultural feast.
          </p>

          <p>
            <span>Ramen: From Anime to Comfort Food</span>
            Boba: The K-pop Drink Craze Once simple Japanese street food, ramen
            is now a global comfort dish. Anime like Naruto made slurping
            noodles iconic, while ramen shops worldwide experiment with rich
            tonkotsu, spicy miso, or vegan twists. It’s casual, comforting, and
            gourmet all at once.
          </p>

          <p>
            <span>Boba: The K-pop Drink Craze</span>
            Once simple Japanese street food, ramen is now a global comfort
            dish. Anime like Naruto made slurping noodles iconic, while ramen
            shops worldwide experiment with rich tonkotsu, spicy miso, or vegan
            twists. It’s casual, comforting, and gourmet all at once. Bubble tea
            has transformed from a Taiwanese invention to a worldwide lifestyle.
            K-pop idols flaunt their favorite flavors on livestreams, and cafés
            have become Gen Z’s hangout hubs. From brown sugar boba to ice cream
            spin-offs, it’s more than a drink,it’s a trend.
          </p>

          <p>
            Beyond Ramen and Boba: Pop-Culture Meets Fusion: Food trends today
            are shaped as much by entertainment as by taste. K-Drama Effect:
            Dishes like Korean fried chicken (from “Crash Landing on You”) or
            Tteokbokki and Gimbap (from “Extraordinary Attorney Woo”) have
            become global sensations. Fans often recreate these meals at home
            after watching them on screen. K-Pop Influence: BTS and Blackpink
            fans have popularized Korean snacks, from Korean corn dogs to spicy
            instant noodles. Collabs between food brands and K-pop idols often
            sell out instantly.
          </p>

          <p>
            The Future of Global Food Culture: As entertainment and food merge,
            the next big trend may not come from a Michelin kitchen but from a
            music video, drama scene, or viral TikTok clip. Food is now a <span className="font-bold">global language</span> that connects
          fans, cultures, and communities. Whether it’s
            ramen slurped in an anime, boba sipped during a K-pop concert
            stream, or the next dish waiting to go viral, one thing is clear:
            food has officially Mugdha Bhavsar become pop culture.
          </p>
        </>
      ),
    },
  ];


  return (
    <main className="bg-gray-50 dark:bg-gray-950 dark:text-gray-200 min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Explore insights on AI, global collaboration, and innovation shaping
          the future of education.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} onClick={setSelectedBlog} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-6 text-xl text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            <span className="text-sm font-semibold uppercase text-cyan-600 dark:text-cyan-400">
              {selectedBlog.category}
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 leading-snug">
              {selectedBlog.title}
            </h2>

            <div className="flex justify-between text-sm opacity-70 mb-6">
              <span>✍️ {selectedBlog.author}</span>
              <span>{selectedBlog.date}</span>
            </div>

            <div className="space-y-5 text-base leading-relaxed whitespace-pre-line">
              {selectedBlog.content}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}