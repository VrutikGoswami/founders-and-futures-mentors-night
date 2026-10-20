const assetHref = path => `${import.meta.env.BASE_URL}${path}`;

export const mentors = [
  {
    slug: 'alex-cross',
    name: 'Alex Cross',
    shortName: 'Alex',
    image: assetHref('images/alex-cross.png'),
    imageAlt: 'Portrait of Alex Cross',
    time: '6:30–6:50 pm',
    number: '01',
    topic: 'Finding problems worth solving and product-market fit',
    carouselTopic: 'Problems worth solving & PMF',
    lead: 'A strategist, mentor, connector, and investor who helps early ideas meet real market needs.',
    bio: 'Alex brings a practical view of the startup journey from both sides of the table. He mentors and invests through Viemo Capital, supports emerging founders as Ag Tech Lead at ThincLab, and has explored angel investing through AirTree’s Explorer Program. His experience also includes co-founding Partsmen and serving as Partner and Director at Bridgewater Advisory.',
    roles: [
      ['Mentor, collaborator & investor', 'Viemo Capital'],
      ['Ag Tech Lead', 'ThincLab, Adelaide University'],
      ['Angel Investor Explorer', 'AirTree'],
      ['Former co-founder', 'Partsmen'],
      ['Former Partner & Director', 'Bridgewater Advisory']
    ],
    takeaways: [
      'Notice problems that people genuinely need solved.',
      'Test assumptions before committing to a solution.',
      'Use customer evidence to look for product-market fit.'
    ],
    accent: '#bda9ff'
  },
  {
    slug: 'jibin-jeffrey',
    name: 'Jibin Jeffrey Dhanaraj',
    shortName: 'Jibin',
    image: assetHref('images/jibin-jeffrey.png'),
    imageAlt: 'Portrait of Jibin Jeffrey Dhanaraj',
    time: '6:50–7:10 pm',
    number: '02',
    topic: 'How to grow and scale a startup in Adelaide',
    carouselTopic: 'Growing a startup in Adelaide',
    lead: 'An aerospace engineer and deep tech founder building infrastructure for the orbit economy.',
    bio: 'Jibin co-founded ResearchSat and leads its technology strategy as Chief Technology Officer, spanning payload architecture, engineering development, mission integration, and flight programme execution. He is also Founder and CEO of ADI Spacecraft Technologies, which is developing microgravity payload missions in India. His journey connects hands-on engineering with the realities of building ambitious companies.',
    roles: [
      ['Co-founder & Chief Technology Officer', 'ResearchSat'],
      ['Founder & Chief Executive Officer', 'ADI Spacecraft Technologies'],
      ['Aerospace engineering & deep tech', 'Space infrastructure']
    ],
    takeaways: [
      'Build a team and network around an ambitious idea.',
      'Move from a technical breakthrough to a scalable venture.',
      'Use Adelaide’s startup ecosystem as a launch point.'
    ],
    accent: '#a9c7ff'
  },
  {
    slug: 'baber-bhatti',
    name: 'Dr. Baber Majid Bhatti',
    shortName: 'Dr. Baber',
    image: assetHref('images/baber-bhatti.png'),
    imageAlt: 'Portrait of Dr. Baber Majid Bhatti',
    time: '7:10–7:30 pm',
    number: '03',
    topic: 'Why an entrepreneurial mindset matters',
    carouselTopic: 'The entrepreneurial mindset',
    lead: 'An ICT strategist and leader across cybersecurity risk, digital transformation, and service delivery.',
    bio: 'Dr. Baber is Chief Executive Officer and Chairman of the Board of Directors at Quollium Australia. He previously led the National Information Technology Board as CEO, served on the board of Pakistan’s Power Information Technology Company, chaired Ignite – National Technology Fund, and worked in security delivery at Accenture. He brings a broad perspective on turning ideas into action inside complex organisations.',
    roles: [
      ['CEO & Chairman', 'Quollium Australia'],
      ['Former CEO & Management Board member', 'National Information Technology Board'],
      ['Former board member', 'Power Information Technology Company'],
      ['Former board chairman', 'Ignite – National Technology Fund'],
      ['Former Security Delivery Manager', 'Accenture']
    ],
    takeaways: [
      'Recognise why initiative and adaptability matter.',
      'Practise turning uncertainty into useful action.',
      'Start building an entrepreneurial mindset as a student.'
    ],
    accent: '#e9b6ff'
  }
];

export const programme = [
  { time: '6:15–6:30 pm', title: 'Arrival and seating', description: 'Check-in and welcome.', type: 'opening' },
  { time: '6:30–6:50 pm', title: 'Alex Cross', description: 'Finding problems worth solving and product-market fit (PMF).', detail: 'Speech 6:30–6:45 · MC-led questions 6:45–6:50', mentor: 'alex-cross' },
  { time: '6:50–7:10 pm', title: 'Jibin Jeffrey Dhanaraj', description: 'How to grow and scale a startup in Adelaide.', detail: 'Speech 6:50–7:05 · MC-led questions 7:05–7:10', mentor: 'jibin-jeffrey' },
  { time: '7:10–7:30 pm', title: 'Dr. Baber Majid Bhatti', description: 'Why an entrepreneurial mindset matters and practical steps students can take to develop it.', detail: 'Speech 7:10–7:25 · MC-led questions 7:25–7:30', mentor: 'baber-bhatti' },
  { time: '7:30–7:40 pm', title: 'Dinner service', description: 'Collect food and return to your seat.', type: 'dinner' },
  { time: '7:40–7:55 pm', title: 'Open audience Q&A', description: 'Questions to all three mentors over dinner.', type: 'dinner' },
  { time: '7:55–8:25 pm', title: 'Dinner and networking', description: 'Connect with mentors and fellow students.', type: 'dinner' },
  { time: '8:25–8:30 pm', title: 'Closing remarks', description: 'Mentor thanks and society next steps.', type: 'closing' }
];
