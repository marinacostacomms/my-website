export type Role = {
  key: 'builder' | 'leader' | 'specialist';
  num: number;
  title: string;
  tag: string;
  shape: string;
  note: string;
  outcome: string;
  detail: {
    ideal: string;
    whatLabel: string;
    what: string[];
    outcomeLong: string;
  };
};

export const ROLES: Role[] = [
  {
    key: 'builder',
    num: 1,
    title: 'Builder',
    tag: 'Program',
    shape: 'Fixed-scope · 3–6 months',
    note: 'Knowledge transfer is the deliverable.',
    outcome:
      'A capacity-building program that elevates your storytelling — and leaves your team able to keep doing it.',
    detail: {
      ideal: 'Organizations who have never had a formal communications function.',
      whatLabel: "What's included",
      what: [
        'Audit of current comms touchpoints',
        'Capacity-building program (3–6 months)',
        'Playbooks and systems catered to you',
        'Coaching for internal owner(s)',
      ],
      outcomeLong:
        'You finish stronger than you started — no agency dependency, and no permanent hire.',
    },
  },
  {
    key: 'leader',
    num: 2,
    title: 'Leader',
    tag: 'Retainer',
    shape: 'Monthly hours · Ongoing',
    note: 'Senior capacity without the full-time hire.',
    outcome:
      'A fractional comms officer who adds seniority to your team, on the days and decisions that need it.',
    detail: {
      ideal:
        'Organizations who need to add seniority to their comms team without making a full-time hire.',
      whatLabel: 'What it can look like',
      what: [
        'Coverage for parental or medical leave',
        'Lead a junior team through an inflection point',
        'Be the right-hand comms leader for a founder',
        'Senior judgment, on call',
      ],
      outcomeLong: 'Senior leadership in the seat when you need it most.',
    },
  },
  {
    key: 'specialist',
    num: 3,
    title: 'Specialist',
    tag: 'Project',
    shape: 'Defined deliverable · Fixed timeline',
    note: 'Done when it ships.',
    outcome:
      'A specialist hire for a specific skillset on a defined project, delivered on time and inside your workflow.',
    detail: {
      ideal: 'Agencies and organizations who need a specific skillset on a defined project.',
      whatLabel: 'Areas of expertise',
      what: [
        'Digital engagement strategy',
        'Public affairs and government relations',
        'Communication strategy development',
        'Project-based collaboration with your team',
      ],
      outcomeLong:
        'A defined deliverable, on time, that fits inside your existing workflow.',
    },
  },
];
