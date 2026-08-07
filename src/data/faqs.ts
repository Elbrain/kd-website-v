/** Visible FAQs per service page — also emitted as FAQPage schema (same page only). */

export interface Faq {
  q: string;
  a: string;
}

export const serviceFaqs: Record<string, Faq[]> = {
  "1-to-1-training": [
    {
      q: "I'm a complete beginner — is that a problem?",
      a: "Not at all: most of our clients started as complete beginners. Your free 30-minute introductory session covers your goals and a gentle movement check, and every programme starts at your level.",
    },
    {
      q: "How many sessions a week do I need?",
      a: "Most clients train one to three times a week with us. We'll recommend a frequency based on your goals, budget and recovery — and your programme includes guidance for the days you train on your own.",
    },
    {
      q: "Is the studio really private?",
      a: "Yes. Sessions are one client (or one couple) at a time. There are no other members, no queues for equipment and nobody watching you train.",
    },
    {
      q: "What does it cost?",
      a: "Single sessions are £80, with blocks of 5, 8 or 10 sessions reducing the per-session price — see the pricing page for the full list. Your first 30-minute introductory session is free.",
    },
  ],
  "couples-training": [
    {
      q: "Do we need to be at the same fitness level?",
      a: "No. Each of you gets an individual plan inside the shared session — different weights, different progressions, same coach and the same hour.",
    },
    {
      q: "Does it have to be a partner, or can I bring a friend?",
      a: "Either. Couples, friends, siblings, colleagues — any two people who want to train together.",
    },
    {
      q: "Is couples training cheaper than two separate sessions?",
      a: "Considerably. A couples session is £100 for both of you (from £45 each on a 10-session block), compared with £80 each for separate 1-to-1 sessions.",
    },
  ],
  "sport-rehabilitation": [
    {
      q: "Do I need to finish physiotherapy first?",
      a: "We work in the space between clinical treatment and full training, and alongside the advice of your GP, physiotherapist or consultant. If you're under active treatment, we'll ask what your clinician has cleared you to do — and build from there.",
    },
    {
      q: "Is this physiotherapy?",
      a: "No — it's structured, progressive fitness training after injury. We don't diagnose or treat medical conditions; we help you rebuild strength, movement and confidence once you're cleared to exercise.",
    },
    {
      q: "What kinds of injuries do you work with?",
      a: "Common examples include knee, shoulder and back issues, post-operative deconditioning and sports injuries. Tell us your situation in the enquiry form and we'll be honest about whether we're the right fit.",
    },
  ],
  "movement-pain-consultation": [
    {
      q: "How long is the consultation and what does it cost?",
      a: "It's a one-off private session of up to two hours, priced at £300. That includes the full discussion, movement screening, coached exercises and a personalised written programme sent after your session.",
    },
    {
      q: "Is this a medical appointment or physiotherapy?",
      a: "No. It's a coaching session — we don't diagnose or treat injuries, and it doesn't replace your GP, physiotherapist or consultant. We look at how you move and coach the strength and mobility work that may help you move more comfortably.",
    },
    {
      q: "What do I take away from it?",
      a: "A personalised written exercise programme based on what we find, plus practical guidance for training and everyday movement. You can run it yourself, or continue the work with regular 1-to-1 sessions.",
    },
    {
      q: "Do I need to prepare anything?",
      a: "Just comfortable training clothes. If you have relevant guidance from a clinician, bring it along — we always work alongside medical advice, never instead of it.",
    },
  ],
  "fitness-for-50": [
    {
      q: "I haven't exercised in years. Can I still start?",
      a: "Yes — that's exactly who this programme is for. We start with a free 30-minute mobility and strength assessment: your goals, your current ability and a gentle movement check. Everything is adapted to you.",
    },
    {
      q: "Is lifting weights safe at my age?",
      a: "With proper coaching, progressive resistance training is one of the best things you can do for bone density, joint health, balance and independence. We coach technique closely and progress loads carefully.",
    },
    {
      q: "Will I be training in a busy gym?",
      a: "No. The studio is completely private — one client and one coach. No crowds, no intimidation, no queues.",
    },
  ],
  "perimenopause-training": [
    {
      q: "How is this different from normal personal training?",
      a: "The programming accounts for shifting hormones: strength work to protect muscle and bone, the right intensity to manage cortisol rather than spike it, core and pelvic-floor work, and recovery treated as part of the plan — adapted to how you're actually feeling each session.",
    },
    {
      q: "I've never lifted weights. Is that a problem?",
      a: "Not at all. Most clients start as complete beginners. Technique is coached from the ground up in a private studio with no one watching.",
    },
    {
      q: "Can training really help with symptoms?",
      a: "Many women find the right training improves energy, sleep, mood and body composition. Everyone is different, and we'll never promise outcomes — but we will build a plan matched to your body and adjust it based on what actually happens. For medical concerns, always speak to your GP.",
    },
  ],
};

export const gymRentFaqs: Faq[] = [
  {
    q: "How does studio hire work?",
    a: "You book the private studio by the hour and train your own clients in it. No monthly membership, no contract — you pay only for the time you use.",
  },
  {
    q: "How much does it cost?",
    a: "Get in touch for current hourly rates and availability — we'll come back to you the same day where possible.",
  },
  {
    q: "Who is it for?",
    a: "Independent personal trainers — from newly qualified PTs building a client base to experienced coaches who want a private, professional space without the overheads of their own premises.",
  },
  {
    q: "Can I train small groups?",
    a: "The studio suits 1-to-1 sessions, pairs and small groups. Tell us what you have in mind when you enquire.",
  },
];
