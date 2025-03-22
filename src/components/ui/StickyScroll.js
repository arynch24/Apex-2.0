import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollCards = () => {
  const cardsRef = useRef([]);

  const cards = [
    {
      id: 1,
      title: "Why Start a Brand?",
      points: [
        "The global fashion industry is worth <strong>$1.7T</strong> and growing.",
        "India's fashion market will reach <strong>₹12L Cr ($150B)</strong> by 2026.",
        "<strong>D2C fashion brands</strong> in India have grown <strong>8x</strong> in 5 years.",
        "<strong>85%</strong> of fashion startups fail due to lack of business knowledge.",
        "<strong>70%</strong> of Gen Z & Millennials prefer <strong>indie brands</strong> over mass retail.",
        "<strong>Social media-driven brands</strong> grow <strong>5X faster</strong> than traditional retail.",
      ],
      footer:
        "Apex teaches not just <strong>design</strong> but <strong>branding, manufacturing & marketing</strong>—everything to build a <strong>profitable fashion brand</strong>.",
    },
    {
      id: 2,
      title: "Why Skip a Traditional Fashion Degree?",
      points: [
        "A traditional fashion degree takes <strong>4 years</strong> and costs <strong>₹20+ lakh</strong>.",
        "Only <strong>less than 3%</strong> of fashion graduates actually start a <strong>successful brand</strong>.",
        "Fashion colleges teach <strong>design</strong> but not real-world <strong>business, marketing, or scaling</strong>.",
      ],
      footer:
        "Apex gives you <strong>hands-on experience, mentorship</strong>, and <strong>manufacturing access</strong>—so you launch a brand in <strong>months, not years</strong>.",
    },
    {
      id: 3,
      title: "What is the Advantage Of Choosing Us?",
      points: [
        "Start your brand in <strong>8 weeks</strong> instead of spending <strong>years</strong> on trial & error.",
        "Get access to <strong>₹3 lakh</strong> in funding to kick-start your business.",
        "Work with <strong>industry mentors</strong> who have built <strong>successful brands</strong>.",
        "Learn directly in a <strong>manufacturing unit</strong>—no other program gives this access.",
        "Avoid mistakes—<strong>90%</strong> of new brands fail due to lack of <strong>business expertise</strong>.",
      ],
      footer:
        "Apex is not just a <strong>school</strong>—it's an <strong>incubator</strong> that turns students into <strong>brand owners</strong>.",
    },
    {
      id: 4,
      title: "The Power of the Fashion Startup Ecosystem",
      points: [
        "<strong>D2C brands</strong> in India grew <strong>400%</strong> in the last <strong>3 years</strong>—now is the time to enter!",
        "The average <strong>successful fashion startup</strong> makes <strong>₹50 lakh+</strong> in the first <strong>2 years</strong>.",
        "Indian fashion entrepreneurs are raising <strong>₹5-100 crore</strong> in funding.",
        "<strong>Social media-driven fashion brands</strong> see <strong>5X faster growth</strong> than traditional retail.",
      ],
      footer:
        "Apex trains you in <strong>digital marketing, content, and influencer strategies</strong> to help you <strong>scale fast</strong>.",
    },
  ];
  

  useEffect(() => {
    const cardsList = cardsRef.current;

    cardsList.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center+=100",
          end: "top center",
          scrub: true,
        },
        scale: 1 - (cardsList.length - index) * 0.025,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        pin: true,
        pinSpacing: true,
        end: "+=200",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      {/* <h1 className="text-3xl font-bold mb-20">Stacking Scroll Cards</h1> */}
      <div className="h-64"></div>
      <div className="flex flex-col items-center">
        <div className="relative space-y-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative w-full my-10 bg-zinc-900/60 shadow-lg rounded-lg flex flex-col justify-center items-start text-lg border-1 border-zinc-500"
              style={{ top: `${index * 10}px` }}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h1 className="text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-500 dark:via-white dark:to-white">
                        {card.title}
                    </h1>
              <ul className="list-disc text-gray-400 pl-5 mt-2 space-y-1">
                {card.points.map((point, idx) => (
                  <li key={idx} className="text-gray-200">
                    <span
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 ">
              <Lightbulb className="w-6 h-6 text-yellow-500 relative top-1" />
              <span className="text-gray-400 text-md mt-4" dangerouslySetInnerHTML={{ __html: card.footer }}></span>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-96 mt-10"></div>
    </div>
  );
};

export default StickyScrollCards;
