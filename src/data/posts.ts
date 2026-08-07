/**
 * Blog content — migrated from the WordPress site, rewritten in British
 * English, plus new SEO articles targeting the clusters in
 * docs/seo-strategy.md §5. URLs and original publish dates of migrated
 * posts are preserved (see docs/content-inventory.md); the perimenopause
 * guide moved from its mis-slugged WordPress URL via 301.
 *
 * Editorial rules: practical and specific, no medical claims (GP/physio
 * sign-off language where relevant), no invented statistics, local
 * references kept natural — Blackheath village, the heath, the station.
 */

export interface PostSection {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  excerpt: string;
  relatedServiceSlug?: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  /* ============================================================
   * NEW — August 2026
   * ============================================================ */
  {
    slug: "personal-trainer-near-greenwich-lewisham-lee",
    title: "Looking for a Personal Trainer Near Greenwich, Lewisham or Lee?",
    metaTitle: "Personal Trainer Near Greenwich, Lewisham & Lee | KD",
    metaDescription:
      "Why clients from Greenwich, Lewisham, Lee, Charlton and across south-east London train at a completely private studio in Blackheath village.",
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    readingMinutes: 5,
    excerpt:
      "Most of our clients don't live in Blackheath itself — they travel in from Greenwich, Lewisham, Lee and beyond. Here's why a private studio is worth a ten-minute journey.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Search for a personal trainer in south-east London and you'll mostly find two options: a coach who works out of a busy commercial gym, or an online plan with no coach in the room at all. There is a third option, and it's the reason most of our clients travel to us from outside Blackheath itself: a completely private studio, one client at a time.",
          "KD Personal Training sits in the heart of Blackheath village, two minutes' walk from Blackheath station. That puts us within a short journey of most of south-east London — and it means the whole floor is yours for every session: no members, no queues for equipment, no one watching.",
        ],
      },
      {
        h2: "Where our clients travel from",
        paragraphs: [
          "The studio's catchment is roughly everywhere within five or six miles of the village. In practice that means clients come to us from Greenwich and North Greenwich, Lewisham and Hither Green, Lee, Grove Park and Kidbrooke, Charlton and Woolwich, Eltham, Catford, Brockley, Deptford and New Cross — and from further out, Forest Hill, Sydenham, Dulwich and Canary Wharf.",
          "From most of these areas the door-to-door journey is 10–20 minutes. Blackheath station is on the direct line from Lewisham, Hither Green and Grove Park; buses run through the village from Greenwich, Lee and Kidbrooke; and there's on-street parking nearby if you'd rather drive. Full directions are on our [find us page](/location/).",
        ],
      },
      {
        h2: "Why people travel past three gyms to get here",
        paragraphs: [
          "Nobody travels for a treadmill. The reason clients pass bigger, closer gyms is what happens inside the session: fully personalised [1-to-1 coaching](/1-to-1-training/) in a space where the coach's attention is never split and nobody else is waiting for the rack.",
          "Privacy matters more than people expect. If you're starting from zero, returning after years away, or simply hate being watched while you train, a private floor removes the biggest barrier before the first rep. It's also why [couples training](/couples-training/) works so well here — two of you, one coach, and nobody else.",
        ],
      },
      {
        h2: "Programmes for every starting point",
        paragraphs: [
          "Every client gets a programme written for them, whatever the goal: fat loss, strength, [training in your 50s and beyond](/fitness-for-50/), [perimenopause training](/perimenopause-training/), or a structured return after injury through [sport rehabilitation](/sport-rehabilitation/).",
          "If ongoing aches or restricted movement are the thing holding you back, our one-off [Movement & Pain Consultation](/movement-pain-consultation/) is a thorough place to start.",
        ],
      },
      {
        h2: "Try it before you decide",
        paragraphs: [
          "Every new client starts with a free 30-minute introductory session — a chance to see the studio, talk through your goals and find out how it feels to train with the whole floor to yourself. [Book your free session](/contact-us/) and judge the journey for yourself: most people find it shorter than their old walk to the gym floor through a crowded changing room.",
        ],
      },
    ],
  },
  {
    slug: "movement-pain-consultation-what-to-expect",
    title: "Stiff, Achy or Moving Badly? What a Movement & Pain Consultation Involves",
    metaTitle: "Movement & Pain Consultation — What to Expect | KD",
    metaDescription:
      "What actually happens in a Movement & Pain Consultation at our private Blackheath studio — screening, coached exercises and a written programme to take away.",
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    readingMinutes: 5,
    excerpt:
      "Ongoing stiffness or discomfort rarely fixes itself — but it often responds well to the right strength and mobility work. Here's exactly what the consultation involves.",
    relatedServiceSlug: "movement-pain-consultation",
    sections: [
      {
        paragraphs: [
          "Plenty of people live with a background level of discomfort: a stiff back in the morning, a shoulder that complains at the top of a reach, knees that would rather not do stairs. It isn't bad enough for a referral, but it's persistent enough to shape what you do — and most people quietly train around it, or stop training altogether.",
          "Weakness, tightness, reduced mobility and unhelpful movement patterns can sometimes contribute to that kind of pain. That's the gap our [Movement & Pain Consultation](/movement-pain-consultation/) is designed for: a private, in-depth session at our Blackheath studio that looks at how you actually move, then gives you a practical plan to move better.",
        ],
      },
      {
        h2: "What the consultation involves",
        paragraphs: [
          "It's a one-off private session of up to two hours, one-to-one with your coach. There's no crowd and no time pressure — enough space to look at things properly.",
        ],
        list: [
          "A detailed discussion about your discomfort, lifestyle and goals",
          "Posture, mobility, strength and movement screening",
          "Identification of areas that may benefit from additional support",
          "Coaching through appropriate strength and mobility exercises",
          "Practical guidance for training and everyday movement",
          "A personalised written exercise programme following your session",
        ],
      },
      {
        h2: "What it isn't",
        paragraphs: [
          "This is a coaching session, not a medical appointment — we don't diagnose or treat injuries, and nothing here replaces your GP, physiotherapist or consultant. If you're under their care, their guidance comes first and we work alongside it. What we bring is the training side: identifying where improved strength, mobility and control may help, and coaching you through exactly how to work on them.",
          "If you're coming back from a specific, diagnosed injury, our ongoing [sport rehabilitation training](/sport-rehabilitation/) may be the better fit — the consultation is ideal when the problem is more general: stiffness, restriction, or discomfort that has crept in over time.",
        ],
      },
      {
        h2: "What happens afterwards",
        paragraphs: [
          "You leave with a written programme you can run yourself — at home, in your own gym, or with us. Some clients use the consultation as a one-off reset; others carry the work into regular [1-to-1 personal training](/1-to-1-training/) so the programme keeps evolving as they improve. Many of our [over-50s clients](/fitness-for-50/) start exactly this way.",
          "The consultation costs £300, runs up to two hours, and takes place in a completely private studio two minutes from Blackheath station — with clients joining us from Greenwich, Lewisham, Lee and across south-east London. [Book your consultation](/contact-us/) and take the first step towards moving better, becoming stronger and living with less pain.",
        ],
      },
    ],
  },

  /* ============================================================
   * NEW — July 2026
   * ============================================================ */
  {
    slug: "returning-to-exercise-after-injury",
    title: "Returning to Exercise After an Injury: How to Come Back Stronger",
    metaTitle: "Returning to Exercise After Injury — A Coach's Guide | KD Personal Training",
    metaDescription:
      "How to return to training after an injury without the setbacks: when to start, how to rebuild strength progressively, and how a private studio in Blackheath helps you come back with confidence.",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    readingMinutes: 6,
    excerpt:
      "The gap between physiotherapy discharge and full training is where most comebacks stall. Here's how to cross it safely — and come back stronger than before.",
    relatedServiceSlug: "sport-rehabilitation",
    sections: [
      {
        paragraphs: [
          "There are two classic mistakes people make after an injury. The first is coming back too hard, too soon — repeating exactly what caused the problem and ending up back at square one. The second is quieter and more common: never really coming back at all, because the confidence has gone and nobody has shown you a safe route forward.",
          "At our private studio in Blackheath we spend a lot of time in exactly this gap — the space between \"your physiotherapist has discharged you\" and \"you're genuinely training again\". This guide covers the principles that make a comeback work.",
        ],
      },
      {
        h2: "Step one: get properly cleared",
        paragraphs: [
          "Nothing in this article replaces medical advice. Before you return to structured exercise after an injury, get clearance from your GP, physiotherapist or consultant — and ask them a genuinely useful question: not just \"can I exercise?\" but \"what specifically should I avoid, and for how long?\". That answer becomes the frame your training is built inside.",
          "If you're working with a coach, bring that guidance with you. A good trainer will want to see it; be wary of anyone who doesn't ask.",
        ],
      },
      {
        h2: "The gap nobody talks about",
        paragraphs: [
          "Physiotherapy typically ends when you can function normally — walk, reach, carry, climb stairs without pain. But \"functioning\" and \"training\" are miles apart. A knee that copes with stairs is not yet a knee that copes with loaded squats; a shoulder that manages day-to-day life is not yet ready for presses.",
          "This is the gap where people get stuck. The rehab exercises feel too easy, the old training feels too risky, and without a plan the default becomes doing nothing. What you need is a bridge: structured, progressive training that starts from where physiotherapy left off and finishes at — or beyond — where you were before the injury.",
        ],
      },
      {
        h2: "The four principles of a good comeback",
        paragraphs: [],
      },
      {
        h3: "1. Start below what you can do",
        paragraphs: [
          "Your first sessions back should feel almost frustratingly easy. Starting at perhaps half of what you know you could manage leaves room for the tissue to adapt and for confidence to rebuild. The cost of starting too light is a slightly slower first fortnight. The cost of starting too heavy can be months.",
        ],
      },
      {
        h3: "2. Earn range before you earn load",
        paragraphs: [
          "Re-establish full, controlled range of motion before chasing weight. A deep, pain-free bodyweight squat is worth more than a shallow, guarded one with a bar on your back. Load applied to restricted movement is how re-injuries happen.",
        ],
      },
      {
        h3: "3. Progress on evidence, not on the calendar",
        paragraphs: [
          "Increase load only when the current level feels genuinely comfortable — during the session, that evening and the next morning. A niggle that appears the day after training is information: not necessarily a reason to stop, but a reason not to progress that week.",
        ],
      },
      {
        h3: "4. Train everything else hard",
        paragraphs: [
          "An injured shoulder doesn't stop you training legs. A knee comeback doesn't rule out upper-body strength work. Training the rest of the body hard keeps your habits, fitness and morale intact — and there's good evidence that staying active supports recovery better than total rest.",
        ],
      },
      {
        h2: "The part nobody programmes: confidence",
        paragraphs: [
          "Almost everyone coming back from injury flinches the first time they load the injured area properly. That's normal. The fix isn't bravado — it's graded exposure: meeting the movement at a level you can trust, succeeding, and stepping up gradually. Watching yourself succeed, week after week, is what replaces fear with confidence.",
          "This is also where a completely private studio genuinely matters. Rebuilding after injury in a crowded gym — dodging benches, feeling watched, rushing sets — works against everything above. One coach, one client and an empty floor makes careful, focused work the default rather than a luxury.",
        ],
      },
      {
        h2: "When to get help",
        paragraphs: [
          "You can absolutely run a comeback yourself if you know how to programme progressively. Consider a coach if the injury keeps recurring, if you've been \"nearly back\" for months, or if fear is doing more limiting than the injury itself.",
          "Our sport rehabilitation training in Blackheath is built for exactly this bridge: individually tailored, progressive programmes that work alongside the advice of your GP or physiotherapist — never instead of it. The first 30 minutes are free, and the honest conversation about whether we're the right fit costs nothing.",
        ],
      },
    ],
  },

  /* ============================================================
   * NEW — June 2026
   * ============================================================ */
  {
    slug: "strength-training-over-50-guide",
    title: "Strength Training Over 50: A Beginner's Guide to Starting Safely",
    metaTitle: "Strength Training Over 50 — How to Start Safely | KD Personal Training",
    metaDescription:
      "A practical guide to starting strength training in your 50s and 60s: why it matters for bone, muscle and balance, the myths to ignore, and how to begin safely — from a private studio in Blackheath.",
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
    readingMinutes: 7,
    excerpt:
      "Strength training is one of the most valuable things you can do in your 50s and beyond — and it's never too late to start. Here's how to begin without fear, injury or a crowded gym.",
    relatedServiceSlug: "fitness-for-50",
    sections: [
      {
        paragraphs: [
          "If you're over 50 and thinking about strength training for the first time — or the first time in decades — you're in exactly the right place at exactly the right age. Coaching clients in their 50s, 60s and 70s here in Blackheath has taught us one thing above all: the people who start are never the ones who regret it.",
          "This guide covers why strength work matters more with every passing decade, the myths that stop people starting, and a sensible way to begin.",
        ],
      },
      {
        h2: "Why strength training matters after 50",
        paragraphs: [
          "From roughly our mid-thirties onwards, adults who don't train gradually lose muscle mass and strength. The process accelerates with age and quietly drives many of the things we associate with \"getting old\": harder stairs, heavier shopping bags, less confident balance.",
          "Progressive resistance training is the most effective tool we have against that slide. Done consistently, it's associated with:",
        ],
        list: [
          "Maintaining and rebuilding muscle — the engine of everyday independence",
          "Supporting bone density, which matters more with every decade",
          "Better balance and stability, and more confidence on your feet",
          "Easier weight management as metabolism changes",
          "Steadier energy and better sleep for many people",
          "Feeling capable — which changes what you say yes to",
        ],
      },
      {
        paragraphs: [
          "One sensible caveat: if you have a health condition, haven't exercised in years, or are managing an old injury, have a word with your GP before starting a new programme. That's not a barrier — it's the first step of the plan.",
        ],
      },
      {
        h2: "The myths that stop people starting",
        paragraphs: [],
      },
      {
        h3: "\"Weights are dangerous at my age\"",
        paragraphs: [
          "Poorly coached lifting is risky at any age. Properly coached, progressively loaded strength work is one of the safest forms of exercise there is — the loads start light, the technique is taught patiently, and every exercise can be adapted to your joints, your history and your starting point.",
        ],
      },
      {
        h3: "\"It's too late to build muscle\"",
        paragraphs: [
          "It isn't. Research on resistance training consistently shows meaningful strength and muscle improvements in people starting in their 60s, 70s and beyond. The adaptation is slower than at 25 — and entirely real.",
        ],
      },
      {
        h3: "\"I need to get fit first\"",
        paragraphs: [
          "This one is backwards. Strength training is how you get fit. Starting where you are — chair squats, light dumbbells, supported movements — is the entire point of a well-built programme.",
        ],
      },
      {
        h2: "How to start: a sensible first month",
        list: [
          "Twice a week is plenty to begin — consistency beats volume",
          "Learn six movements before you chase anything: squat, hinge, push, pull, carry, and getting up off the floor",
          "Start lighter than you think you need and add a little each week",
          "Leave two reps 'in the tank' on every set — grinding isn't required",
          "Treat rest days as part of the programme, not a failure of it",
          "Track something: weights, reps, or simply how the stairs feel",
        ],
      },
      {
        h2: "The environment matters more than you think",
        paragraphs: [
          "Ask people over 50 what actually stops them joining a gym and the honest answer is rarely laziness — it's the room. Crowds, noise, mirrors, twenty-somethings filming themselves by the squat rack. It's not an environment built for a careful, confident start.",
          "That's the reason our 50+ programme runs in a completely private Blackheath studio: one client, one coach, nobody watching. Every session starts from your level, and the free 30-minute mobility and strength assessment means you know exactly where you stand before committing to anything.",
        ],
      },
    ],
  },

  {
    slug: "private-gym-vs-commercial-gym",
    title: "Private Gym vs Commercial Gym: Which Actually Gets You Results?",
    metaTitle: "Private Gym vs Commercial Gym — An Honest Comparison | KD Personal Training",
    metaDescription:
      "Crowds and queues, or one coach and an empty floor? An honest comparison of commercial gyms and private personal training studios — and who each one genuinely suits. From KD in Blackheath.",
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    readingMinutes: 6,
    excerpt:
      "A commercial gym membership costs less per month — but which option actually delivers results? An honest comparison from a private studio in Blackheath.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Let's be honest from the start: we run a private training studio in Blackheath, so you know where we stand. But we'll make the comparison fairly — commercial gyms genuinely suit some people, and a private studio genuinely suits others. The trick is knowing which one you are before you spend a year finding out.",
        ],
      },
      {
        h2: "What each one actually is",
        paragraphs: [
          "A commercial gym sells access: equipment, space, and (usually) classes, shared with everyone else who bought the same membership. What you do with it is up to you.",
          "A private studio sells outcomes: the room, the equipment and — crucially — the coach are dedicated to you for the hour. At KD there are no members and no crowds; every session is one client (or one couple) and one coach, with a programme written specifically for you.",
        ],
      },
      {
        h2: "Five honest comparisons",
        paragraphs: [],
      },
      {
        h3: "1. Attention",
        paragraphs: [
          "In a commercial gym, guidance is what you bring with you — a plan from the internet, a class instructor's general cues, perhaps a PT session on a busy floor. In a private studio, every rep of every set is coached: technique corrected in real time, loads adjusted to how you're moving today, exercises swapped when something doesn't suit your body.",
        ],
      },
      {
        h3: "2. Time",
        paragraphs: [
          "The hidden cost of a busy gym is waiting: for the squat rack, for the bench, for the cable machine at 6pm. A private hour is exactly that — a full hour of training. Most clients get more genuine work done in 60 private minutes than in 90 crowded ones.",
        ],
      },
      {
        h3: "3. Consistency",
        paragraphs: [
          "This is the quiet decider. Memberships are easy to buy and easy to ignore — most lapsed gym-goers don't cancel, they just stop going. A booked session with a coach who knows you, expects you and plans around you is dramatically harder to skip. Results follow attendance, and attendance follows accountability.",
        ],
      },
      {
        h3: "4. Comfort",
        paragraphs: [
          "Plenty of capable, motivated people simply hate training in public — beginners, returners, anyone self-conscious about their starting point, anyone rebuilding after injury or navigating midlife changes. If the room itself is the barrier, removing the room removes the barrier. Privacy isn't a luxury here; it's the reason training finally sticks.",
        ],
      },
      {
        h3: "5. Cost",
        paragraphs: [
          "A commercial membership is cheaper per month — no argument. The fairer comparison is cost per result. A membership used twice a month with no plan is expensive however little it costs; coached sessions that actually happen, progress week on week and change how you feel are worth pricing honestly. Our prices are published openly on the pricing page, including block discounts — no phone call required.",
        ],
      },
      {
        h2: "Who a commercial gym genuinely suits",
        list: [
          "Experienced lifters who programme for themselves and love the buzz of a busy floor",
          "People whose budget is the deciding factor right now — moving beats not moving",
          "Class-lovers who thrive on group energy",
        ],
      },
      {
        h2: "Who a private studio suits",
        list: [
          "Beginners and returners who want to start properly, without an audience",
          "Busy people who need maximum result per hour",
          "Anyone whose consistency collapses without accountability",
          "Post-injury and over-50s clients who need training adapted to them",
          "Anyone who's been 'meaning to get back to the gym' for over a year",
        ],
      },
      {
        h2: "Try the difference",
        paragraphs: [
          "If you've read this far, you probably already know which side you're on. The clean way to find out for certain: book a free 30-minute introductory session at our Blackheath studio — two minutes from the station, completely private, no obligation. Worst case, you've lost half an hour and gained a clear answer.",
        ],
      },
    ],
  },

  /* ============================================================
   * NEW — May 2026
   * ============================================================ */
  {
    slug: "choose-personal-trainer-blackheath",
    title: "How to Choose a Personal Trainer in Blackheath: 7 Questions to Ask",
    metaTitle: "How to Choose a Personal Trainer in Blackheath — 7 Questions | KD",
    metaDescription:
      "Looking for a personal trainer in Blackheath? Seven questions that separate great coaches from expensive disappointments — trial sessions, programming, reviews, pricing and where you'll actually train.",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    readingMinutes: 6,
    excerpt:
      "Blackheath has no shortage of trainers. These seven questions will tell you within one conversation whether a coach is worth your money — and your next six months.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Choosing a personal trainer is a strange purchase. You're committing real money and — more importantly — months of your life to someone you've usually known for one conversation. Get it right and it changes how you feel every single day. Get it wrong and you'll conclude, unfairly, that \"personal training doesn't work for me\".",
          "We've coached in Blackheath since 2016, and we'd rather you choose well — even if that's not us. These are the seven questions that do the filtering.",
        ],
      },
      {
        h2: "1. \"Where will we actually train?\"",
        paragraphs: [
          "The room shapes the session. A trainer renting floor space in a busy commercial gym competes with every other member for equipment — expect waiting, noise and compromised programming at peak times. Park sessions live and die by London weather. A private studio means the whole floor, every piece of kit and the coach's full attention are yours for the hour.",
          "Whatever you choose, make sure the answer is specific. \"We'll sort something out\" is not a plan.",
        ],
      },
      {
        h2: "2. \"Can I try before I commit?\"",
        paragraphs: [
          "Good coaches offer a low-risk way in — a free or cheap introductory session — because they know the fit matters and they're confident in what you'll experience. Be cautious with anyone whose first move is selling a 20-session block before they've seen you move.",
        ],
      },
      {
        h2: "3. \"How will my programme be built?\"",
        paragraphs: [
          "The answer you want mentions you: your goals, your training history, your injuries, your week. The answer you don't want sounds like a template — because it usually is one. Ask a follow-up: \"what would you change if my knee started complaining?\" A real coach answers instantly; a template-seller stalls.",
        ],
      },
      {
        h2: "4. \"Who do you usually work with?\"",
        paragraphs: [
          "Specialisation matters more than certificates on a wall. If you're a woman navigating perimenopause, a beginner in your 60s, or coming back from injury, ask directly whether the trainer works with people like you — and how their approach differs. Generic answers to specific situations are a warning sign.",
        ],
      },
      {
        h2: "5. \"Where can I read your reviews?\"",
        paragraphs: [
          "Not testimonials on their own website — independent reviews they can't edit, ideally on Google. Read the recent ones and the critical ones. A long history of considered reviews from local clients tells you more than any before-and-after photo.",
        ],
      },
      {
        h2: "6. \"What does it cost — all of it?\"",
        paragraphs: [
          "Clear pricing, published openly, with block discounts explained — that's the standard to expect. Vague answers, pressure towards long contracts, or prices that only appear after a \"consultation\" are all choices a trainer makes, and they tell you something.",
        ],
      },
      {
        h2: "7. \"Why do your clients stay?\"",
        paragraphs: [
          "The best trainers keep clients for years, not weeks. Ask how long their longest-standing clients have trained with them. The answer — and the stories behind it — is the single most honest measure of coaching quality that exists.",
        ],
      },
      {
        h2: "The Blackheath advantage",
        paragraphs: [
          "One local note: convenience is a results multiplier. A trainer two minutes from Blackheath station fits before work, after the school run, or into a lunch break — and sessions that fit your life are sessions that happen.",
          "If you'd like to put us through the seven questions, we'd genuinely enjoy it. Book a free 30-minute introductory session at our private studio on Lee Road — we'll talk goals, check how you move, and you'll leave with an honest answer either way.",
        ],
      },
    ],
  },

  /* ============================================================
   * MIGRATED — April 2026 (re-slugged from the old WordPress URL)
   * ============================================================ */
  {
    slug: "perimenopause-training-guide",
    title: "Perimenopause Training: How the Right Workout Can Transform Your 40s",
    metaTitle: "Perimenopause Training Guide — Why Strength Beats Cardio | KD Personal Training",
    metaDescription:
      "Why the workouts that worked in your 30s stop working in perimenopause — and the four training pillars that actually help: heavy strength work, sprint intervals, mobility and recovery.",
    datePublished: "2026-04-27",
    dateModified: "2026-07-23",
    readingMinutes: 7,
    excerpt:
      "If the workouts that used to keep you lean and energised suddenly aren't working any more — you're not imagining it. Here's what's changed, and what to do about it.",
    relatedServiceSlug: "perimenopause-training",
    sections: [
      {
        paragraphs: [
          "If you've noticed that the workouts that used to keep you lean and energised in your 30s suddenly aren't working any more — you're not imagining it. Welcome to perimenopause: the seven-to-ten-year transition leading up to menopause, when your hormones begin shifting in ways that fundamentally change how your body responds to training.",
          "The good news? With the right approach, this can be one of the strongest, most empowered chapters of your life. The wrong approach — usually more cardio, less food and more \"discipline\" — will leave you exhausted, injured and gaining weight despite doing everything you used to do.",
          "This guide breaks down what's actually happening in your body, why generic gym programmes fail women at this stage, and how a smarter training strategy can help you build strength, protect your bones and feel like yourself again.",
        ],
      },
      {
        h2: "What's really happening in perimenopause",
        paragraphs: [
          "Perimenopause typically begins between 38 and 45 and can last anywhere from a few years to over a decade. During this time your ovaries gradually produce less oestrogen and progesterone — but the decline isn't smooth. It's erratic, with sharp spikes and crashes that drive most of the symptoms women experience.",
          "Here's what those hormonal shifts mean for your body and your training:",
        ],
        list: [
          "Muscle mass declines faster. Oestrogen helps maintain lean muscle; as it drops, untrained women can lose muscle at an accelerated rate.",
          "Bone density decreases. The years around menopause are when women lose the most bone mass of their lives, raising the risk of osteoporosis and fractures.",
          "Body composition changes. Fat redistributes towards the midsection, even when the number on the scales stays the same.",
          "Recovery slows down. The workout that took a day to bounce back from at 35 can take three days at 45.",
          "Sleep, mood and energy fluctuate. Cortisol becomes harder to regulate, which affects everything from stubborn belly fat to motivation.",
        ],
      },
      {
        paragraphs: [
          "None of this is a problem to solve with willpower. It's a physiological shift that requires a physiological response — and that response is strength training.",
        ],
      },
      {
        h2: "Why most gym programmes fail women in perimenopause",
        paragraphs: [
          "Walk into any gym and you'll see women in their 40s doing exactly what didn't work for them in their 30s — only harder. More spin classes. Longer runs. Fewer calories. Endless HIIT circuits.",
          "This approach actively works against perimenopausal physiology. Excessive cardio raises cortisol, which encourages fat storage around the abdomen — the exact problem most women are trying to fix. Under-eating signals scarcity to a body that's already losing muscle, accelerating the loss. And group classes designed for the general population rarely address the needs of a woman whose joints are stiffer, whose recovery is slower and whose hormones are no longer doing the heavy lifting in the background.",
          "What this stage needs is precision. Not more effort — better effort.",
        ],
      },
      {
        h2: "The four pillars of effective perimenopause training",
        paragraphs: [],
      },
      {
        h3: "1. Heavy strength training",
        paragraphs: [
          "This is non-negotiable. Lifting heavy — loads that genuinely challenge you in the four-to-eight-rep range — is the single most powerful intervention for women in perimenopause. It builds the muscle that protects your metabolism, signals your bones to stay dense and improves insulin sensitivity. Light weights for high reps will not produce the same effect.",
        ],
      },
      {
        h3: "2. Sprint intervals — not steady-state cardio",
        paragraphs: [
          "Short, true sprints — 10 to 30 seconds at maximum effort with full recovery in between — stimulate growth hormone and improve cardiovascular health without spiking cortisol the way long-duration cardio does. Two short sessions a week is plenty.",
        ],
      },
      {
        h3: "3. Mobility and joint care",
        paragraphs: [
          "Connective tissue becomes more fragile as oestrogen drops. Dedicated mobility work isn't optional — it's what keeps you training pain-free for the next forty years. That means proper warm-ups, controlled range-of-motion work, and never skipping the parts that feel boring.",
        ],
      },
      {
        h3: "4. Recovery as a training variable",
        paragraphs: [
          "In your 20s you could out-train bad recovery. In perimenopause, recovery is the work. Sleep, protein (aim for 1.6–2.2g per kilo of bodyweight), stress management and rest days aren't extras — they're what make the training effective.",
        ],
      },
      {
        h2: "Why private training makes the difference",
        paragraphs: [
          "Generic programmes are written for the average gym-goer. They don't account for how you slept last night, whether you're dealing with hot flushes or joint pain, or a week where stress is through the roof.",
          "Private training at this stage of life is genuinely different. It needs a coach who understands the female endocrine system rather than just sets and reps; programming that adapts to how your body shows up on the day; technique coaching that protects your joints as the loads increase; and a space where you're not the only woman over 40 surrounded by 22-year-olds.",
          "That is exactly what our perimenopause programme here in Blackheath is built around: every session one-to-one, every programme written for your body, your goals and the stage of life you're actually in.",
        ],
      },
      {
        h2: "What results actually look like",
        paragraphs: [
          "Women who train intelligently through perimenopause don't just maintain — they often hit physical benchmarks they never reached in their 30s. Stronger lifts. Better posture. Visible muscle definition. Stable energy. Sleep that actually restores. Clothes fitting the way they used to.",
          "The transformation isn't always fast, but it's reliable — because for the first time, the training matches the body that's actually doing it.",
        ],
      },
      {
        h2: "Ready to train smarter?",
        paragraphs: [
          "If you're in your 40s and feel like your body has changed the rules without telling you — it has. We offer private, one-to-one training designed specifically for women navigating perimenopause: no crowded classes, no generic programmes, no guesswork. Your first session includes a full consultation, a movement assessment and a personalised plan — with no commitment beyond that.",
        ],
      },
    ],
  },

  /* ============================================================
   * MIGRATED — 2020 posts, improved July 2026
   * ============================================================ */
  {
    slug: "how-to-increase-mental-toughness-and-stay-strong",
    title: "How to Increase Mental Toughness and Stay Strong",
    metaTitle: "How to Build Mental Toughness for Training | KD Personal Training",
    metaDescription:
      "Motivation fades — mental toughness is what keeps you training. Four practical, coach-tested ways to build it: mindset, patience, purpose and the right people around you.",
    datePublished: "2020-02-17",
    dateModified: "2026-07-23",
    readingMinutes: 5,
    excerpt:
      "Motivation gets you started; mental toughness keeps you going. Four practical ways to build the resilience that carries you through the weeks when enthusiasm runs out.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Every training journey has a moment — usually around week three — when the novelty wears off. The alarm goes off, it's dark, it's raining somewhere over the heath, and the sofa makes an excellent argument. What decides what happens next isn't motivation. Motivation is a mood, and moods change. What decides it is mental toughness: the trained ability to keep going when the excitement has gone.",
          "The encouraging part, which we see in the studio every week: mental toughness is built exactly like physical strength — through progressive, repeated practice. Here are the four approaches that work.",
        ],
      },
      {
        h2: "1. Build a mindset that survives bad days",
        paragraphs: [
          "New clients often walk into a gym and immediately compare themselves with everyone fitter, stronger and further along. That comparison is where most gym memberships go to die.",
          "Toughness starts with a different frame: you against last month's you. Nobody else in the room is relevant — and in a private studio, nobody else is in the room at all. Three practical habits help:",
        ],
        list: [
          "Drop the self-limiting stories — \"I'm just not a gym person\" is a sentence, not a fact",
          "Count your wins, not just your gaps — strength you've gained, sessions you've kept",
          "Ban all-or-nothing thinking — a shortened session beats a skipped one, every time",
        ],
      },
      {
        h2: "2. Be patient — on purpose",
        paragraphs: [
          "You wouldn't expect a personal best deadlift in week two, so don't expect bulletproof discipline by then either. Resilience follows the same curve as strength: small loads, consistently applied, gradually increased.",
          "Practically, that means noticing the negative thought (\"I can't be bothered today\"), replacing it with a smaller commitment (\"I'll do the warm-up and see\"), and letting the momentum do the rest. Nine times out of ten, the warm-up becomes the session.",
        ],
      },
      {
        h2: "3. Keep your purpose where you can see it",
        paragraphs: [
          "People who train \"to get fit\" drift. People who train to carry their grandchildren, to ski again at 60, to feel strong in their own body after years of not — they keep showing up, because the goal means something.",
          "Write your real reason down. Not the polite version — the true one. Recall it every time quitting feels reasonable. A goal with meaning is the most reliable training partner you'll ever have.",
        ],
      },
      {
        h2: "4. Borrow strength from the right people",
        paragraphs: [
          "Toughness isn't built alone. Encouragement, structure and someone expecting you — these aren't crutches, they're conditions. It's why a booked session with a coach survives the weeks that a gym membership doesn't: skipping a machine is easy; skipping a person is hard.",
          "That's a large part of what one-to-one coaching offers beyond the training itself: a professional in your corner who knows your goal, plans your path and expects you on Tuesday. If that structure is the missing piece, book a free 30-minute introductory session and feel the difference it makes.",
        ],
      },
    ],
  },

  {
    slug: "break-your-bad-habits",
    title: "5 Bad Habits You Can Break to Help Your Health",
    metaTitle: "5 Everyday Habits Undermining Your Health — and Fixes | KD Personal Training",
    metaDescription:
      "Hydration, sleep, grazing, late eating and total sugar bans — five everyday habits that quietly sabotage your training results, and the realistic fix for each one.",
    datePublished: "2020-02-15",
    dateModified: "2026-07-23",
    readingMinutes: 5,
    excerpt:
      "You can train brilliantly twice a week and still be sabotaged by the other 166 hours. Five habits we see undermining results most often — and what to do instead.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Here's an uncomfortable truth from the coaching floor: what happens in your two or three training hours a week matters less than what happens in the other 165. We've watched clients train superbly and stall anyway — because a handful of small daily habits kept quietly working against them.",
          "The fix is rarely dramatic. Pick the one habit below that stings the most, work on it for a month, then move to the next. Slow and certain beats heroic and brief.",
        ],
      },
      {
        h2: "1. Not drinking enough water",
        paragraphs: [
          "Water touches nearly everything: energy, joints, digestion, concentration, recovery — even how hungry you think you are, since mild thirst routinely masquerades as hunger. Most adults do well on six to eight glasses a day, more around training.",
          "The fix is environmental, not motivational: a filled bottle on your desk and another in your training bag. If it's within reach, you'll drink it.",
        ],
      },
      {
        h2: "2. Treating sleep as optional",
        paragraphs: [
          "Short sleep impairs reaction time, decision-making and immune function — and it makes fat loss measurably harder while your appetite hormones pull in the wrong direction. Muscle is repaired between sessions, not during them; skimp on sleep and you're quietly cancelling your own training.",
          "There's no universal magic number, but most people thrive on seven to nine hours. Guard the last hour before bed the way you'd guard a training session — it is one.",
        ],
      },
      {
        h2: "3. Grazing on autopilot",
        paragraphs: [
          "Modern snacking isn't eating so much as ambient chewing — a biscuit here, a handful there, none of it registered by the part of your brain that tracks fullness. The result is overeating without a single memorable meal.",
          "Three realistic countermeasures: choose snacks that require assembly rather than just opening; eat at consistent times so your body learns the rhythm; and before anything unplanned, ask one question — hungry, or just bored?",
        ],
      },
      {
        h2: "4. Eating heavily late at night",
        paragraphs: [
          "The old \"nothing after 6pm\" rule is a myth — your body doesn't switch off fat metabolism at dusk. But regularly eating large, heavy meals late does tend to disturb sleep and digestion, and it pairs suspiciously often with the evening's least thoughtful food choices.",
          "If evenings are when your eating unravels, don't fight it with willpower at 10pm — solve it at 6pm with a proper dinner that includes enough protein to keep you satisfied.",
        ],
      },
      {
        h2: "5. Banning sweet things completely",
        paragraphs: [
          "Total bans feel disciplined and work terribly. Forbidden foods gain power: restriction builds craving, craving eventually wins, and the rebound eating outweighs everything the ban saved. A square of dark chocolate tonight is cheaper than half a tin of biscuits on Friday.",
          "Structure beats prohibition — enough protein, regular meals, and treats that are planned rather than smuggled. If you'd like help building that structure around your training, it's exactly what a personal programme is for: book a free 30-minute introductory session and we'll map it together.",
        ],
      },
    ],
  },

  {
    slug: "10-ways-to-get-better-at-fitness",
    title: "10 Ways to Get Better at Fitness",
    metaTitle: "10 Practical Ways to Get Better at Fitness | KD Personal Training",
    metaDescription:
      "Ten unglamorous, coach-approved habits that actually improve your fitness: real goals, honest tracking, sustainable pace and the right training environment.",
    datePublished: "2020-02-17",
    dateModified: "2026-07-23",
    readingMinutes: 5,
    excerpt:
      "Forget transformation-in-a-week promises. These ten practical habits are how people actually get fitter — and stay that way for years.",
    relatedServiceSlug: "1-to-1-training",
    sections: [
      {
        paragraphs: [
          "Strength, stamina, body composition — whatever you're chasing, the fitness world will happily sell you a shortcut to it. After years of coaching in Blackheath, we can report that the shortcuts don't exist, and the good news is they aren't needed. What works is a set of unglamorous habits applied consistently. Here are the ten that matter.",
        ],
      },
      {
        h2: "1. Find your real motivation",
        paragraphs: [
          "Not the Instagram version — the real one. Keeping up with your kids, walking the heath without stopping, feeling confident in your own clothes. Vivid, personal reasons survive dark February mornings; vague ones don't.",
        ],
      },
      {
        h2: "2. Set goals you can measure",
        paragraphs: [
          "\"Get fitter\" isn't a goal, it's a wish. \"Squat my bodyweight by December\" or \"walk up Point Hill without stopping\" — those are goals: they tell you what to train, and they tell you when you've won.",
        ],
      },
      {
        h2: "3. Sort your food out",
        paragraphs: [
          "You cannot out-train a diet that works against you. Enough protein, mostly unprocessed food, portions that match your goal — the boring fundamentals fuel every quality session and every gram of recovery. Abs really are made in the kitchen.",
        ],
      },
      {
        h2: "4. Progress at your own speed",
        paragraphs: [
          "Comparison is a thief here too. Start with loads that match your level, add a little when it feels genuinely manageable, and re-assess honestly. Progressive overload works at every age and every starting point — but only from where you actually are.",
        ],
      },
      {
        h2: "5. Track something",
        paragraphs: [
          "Weights, reps, walking distance, how the stairs feel — anything measured is anything improvable. A record shows what's working, catches what isn't, and on unmotivated days the numbers moving is often motivation enough.",
        ],
      },
      {
        h2: "6. Don't run yourself into the ground",
        paragraphs: [
          "The all-out fortnight followed by a month on the sofa is the most common training pattern in Britain, and the least effective. Adaptation happens during recovery. A schedule you can sustain for six months beats one you can survive for six days.",
        ],
      },
      {
        h2: "7. Keep variety in the plan",
        paragraphs: [
          "Strength, mobility, coordination, power — training different qualities keeps progress well-rounded and interest alive. A plan that never changes stops working and starts boring you at roughly the same time.",
        ],
      },
      {
        h2: "8. Build muscle and endurance together",
        paragraphs: [
          "Interval work delivers excellent conditioning in a short window; strength work builds the muscle that carries you through everything else. They're not rivals — the two qualities reinforce each other, and a good week contains both.",
        ],
      },
      {
        h2: "9. Work on what you're bad at",
        paragraphs: [
          "Everyone gravitates towards exercises they're already good at — it's more fun being competent. The fastest progress usually hides in the movements you avoid. Give your weak points ten focused minutes a session and watch what happens in a month.",
        ],
      },
      {
        h2: "10. Get the environment right",
        paragraphs: [
          "If motivation and structure keep failing, the answer usually isn't more willpower — it's a better environment. The right coach, a plan built for you, and a space where you can focus change everything downstream.",
          "That's what we built in Blackheath: a completely private studio, no crowds, no queues, and programmes written for the person actually doing them. Book a free 30-minute introductory session and see whether it's the missing piece.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
