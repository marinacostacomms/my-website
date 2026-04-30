/* =====================================================================
   ALL EDITABLE COPY LIVES IN THIS FILE
   ---------------------------------------------------------------------
   Edit any string here and push to GitHub — Cloudflare Pages will
   redeploy in ~30 seconds. Look for HTML tags only inside `headlineHtml`
   (the <em>clear</em> wrap is what gets the marker highlight).
   Role data (Builder/Leader/Specialist) lives separately in roles.ts.
   ===================================================================== */

export const SITE = {
  meta: {
    title: 'Marina Costa Communication — Fractional Communications Consultant',
    description:
      "Marina Costa is an independent fractional communications consultant. Three engagement archetypes — Builder, Leader, Specialist — for organizations that need clear communication.",
  },

  nav: {
    links: [
      { href: '#roles', label: 'Offering' },
      { href: '#about', label: 'About' },
      { href: '#picker', label: 'Find your fit' },
    ],
    cta: 'Start a conversation',
  },

  hero: {
    eyebrow: 'Marina Costa · Fractional Communications',
    // Wrap the highlighted word in <em>...</em>. The marker SVG sits behind it.
    headlineHtml:
      'I play one of three roles for organizations needing <em>clear</em> communication.',
    lead:
      "Builder, Leader, or Specialist — each role is designed to meet you where you're at and get you to where you want to go.",
    primaryCta: 'Start a conversation',
    secondaryCta: 'About me',
    // Anchors to the About section on this page. Change to a PDF path
    // (e.g. '/assets/marina-costa-one-pager.pdf') if you'd rather link to a download.
    onePagerHref: '#about',
  },

  roles: {
    eyebrow: 'Three ways to work together',
    heading: 'Choose the role you need',
    meta:
      "Each role carries its own engagement model — a program, a retainer, or a project — so you can see what you're saying yes to before we talk.",
    expandLabel: 'More on this',
    collapseLabel: 'Hide details',
  },

  about: {
    eyebrow: 'About',
    heading: "Hi, I'm Marina.",
    paragraphs: [
      "I have spent more than fifteen years in rooms where reputation is either gained or lost. I know how to craft a strong story — but more importantly, I know how to build the systems that let that story last and evolve.",
      "I started by advising senior leaders in public policy and mastering the craft at a global PR firm. Since then I've built communications infrastructure for tech scale-ups and political campaigns, and managed corporate reputation through CEO transitions and major crises.",
    ],
    expandLabel: 'Read the longer version',
    collapseLabel: 'Show less',
    bioLabel: 'Download full bio',
    // When you upload a bio PDF, point this at it, e.g. '/assets/marina-costa-bio.pdf'
    bioHref: '#',
    linkedinHref: 'https://www.linkedin.com/in/marinacostacommunication/',

    longer: [
      {
        heading: 'My Career Story',
        chapters: [
          {
            heading: 'Chapter 1: Public Policy & Government Relations',
            body: 'My career began in Ottawa, where I tracked federal policy and advised senior leaders on risk and opportunity for their organizations. This is where I learned to navigate complex regulatory environments and provide executive-level counsel.',
          },
          {
            heading: 'Chapter 2: Global PR Agency & Professional Craft',
            body: "I returned home to Calgary to drive an eight-figure account for a global PR firm. This was my masterclass in communication and public relations, training under the industry's top practitioners.",
          },
          {
            heading: 'Chapter 3: Tech Scale-Up and Political Campaigns',
            body: 'I moved into tech scale-ups and political campaigns. With no existing roadmaps, I built communications infrastructure from scratch and in real-time.',
          },
          {
            heading: 'Chapter 4: Large Corporate & International',
            body: 'I transitioned into the corporate sector, managing reputation for multinational organizations through global pandemics, supply chain disruptions, and CEO transitions.',
          },
          {
            heading: 'Today',
            body: "After 15 years, I recognized that structural communication gaps exist in every industry. I founded this consultancy to provide the fractional leadership and communication architecture usually reserved for larger organizations. I've turned my experience into a service offering for founders and teams who need senior-level strategy without the full-time overhead.",
          },
        ],
      },
      {
        heading: 'How I approach the work',
        list: [
          { strong: 'Simplicity', body: " — strip it back until what's left is true and useful." },
          { strong: 'Discovery', body: ' — good comms starts with curiosity and testing assumptions.' },
          { strong: 'Longevity', body: ' — build for the year after next, and for those who come up behind us.' },
        ],
      },
      {
        heading: "When I'm not working",
        body: "I'm still working — because I'm a mom of two little ones — or I'm going for a long walk while listening to a favourite podcast.",
      },
    ],
  },

  picker: {
    eyebrow: 'Still deciding?',
    heading: 'Two questions, one suggestion.',
    lead: "If you're not sure which role you need, this might help.",
    meta: 'Two questions. No email required. You can ignore the result.',
    yourFitEyebrow: 'Your fit',
    resultHeading: 'You might want…',
    resultPrimaryCta: 'Start a conversation',
    resultResetCta: 'Start over',
    questions: [
      {
        key: 'stage',
        q: 'Where is your communications function today?',
        opts: [
          { v: 'none', label: "We don't have one yet" },
          { v: 'team', label: 'We have a team but a gap' },
          { v: 'project', label: "I'm running a project that needs help" },
        ],
      },
      {
        key: 'need',
        q: 'What does success look like in six months?',
        opts: [
          { v: 'capacity', label: 'More internal capability' },
          { v: 'leadership', label: 'Steady senior leadership' },
          { v: 'deliverable', label: 'A specific thing shipped' },
        ],
      },
    ],
    results: {
      builder: {
        role: 'The Builder',
        why: 'A capacity-building program — leaves you stronger than you started.',
      },
      leader: {
        role: 'The Leader',
        why: 'Fractional comms officer — interim leadership on retainer.',
      },
      specialist: {
        role: 'The Specialist',
        why: 'Brought in for a specific skillset on a defined engagement.',
      },
    },
  },

  contact: {
    // Paste your Formspree endpoint here once you have it.
    // From formspree.io → your form → "Integration" tab → copy the URL in <form action="...">
    formspreeEndpoint: 'https://formspree.io/f/maqvyjjq',
    eyebrow: 'Get in touch',
    heading: 'Tell me about your situation.',
    aside:
      'A sentence or two is plenty. Goes straight to my inbox — I read every message myself and reply within two business days.',
    fields: {
      name: 'Name',
      namePlaceholder: 'Your name',
      nameError: 'Please tell me your name.',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      emailError: 'A valid email, please.',
      organization: 'Organization (optional)',
      organizationPlaceholder: 'Company or team',
      role: 'Which role fits?',
      roleOptions: [
        { v: 'builder', label: 'Builder' },
        { v: 'leader', label: 'Leader' },
        { v: 'specialist', label: 'Specialist' },
        { v: 'unsure', label: 'Not sure' },
      ],
      roleDefault: 'leader',
      message: "What's on your mind?",
      messagePlaceholder: 'A sentence or two about your situation.',
      messageError: 'A short message helps me prepare.',
    },
    submit: 'Send message',
    meta: 'Goes straight to my inbox. I reply within two business days.',
    sent: {
      eyebrow: 'Message sent',
      heading: 'Got it — talk soon.',
      body: 'I read every message myself. Expect a reply within two business days.',
      reset: 'Send another',
    },
    networkError:
      "Sorry — something went wrong sending that. Please email marina@costacommunication.ca directly.",
  },

  footer: {
    blurb:
      'Independent communications practitioner working with founders and teams to elevate their storytelling capacity for the long term.',
    columns: [
      {
        heading: 'Site',
        links: [
          { href: '#roles', label: 'Offering' },
          { href: '#about', label: 'About' },
          { href: '#picker', label: 'Find your fit' },
          { href: '#contact', label: 'Contact' },
        ],
      },
      {
        heading: 'Elsewhere',
        links: [
          {
            href: 'https://www.linkedin.com/in/marinacostacommunication/',
            label: 'LinkedIn',
            external: true,
          },
          {
            href: 'https://substack.com/@maricostacomms',
            label: 'Substack',
            external: true,
          },
          { href: 'mailto:marina@costacommunication.ca', label: 'marina@costacommunication.ca' },
        ],
      },
    ],
    copyright: '© 2026 Marina Costa Communication',
    tagline: 'Made with care.',
  },
} as const;

export type SiteCopy = typeof SITE;
