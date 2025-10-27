const eventsData = [
  {
    title: "Tech Conference",
    date: "Thu Jul 13 2025",
    eventStartTime: "Thu Jul 13 2025 at 7:00:00 AM",
    eventEndTime: "Thu Jul 13 2025 at 4:00:00 PM",
    eventType: "Offline",
    eventImageUrl:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    hostedBy: "InnovateX Global",
    details:
      "Join industry pioneers and tech enthusiasts for a full-day conference exploring the future of AI, cloud computing, and cybersecurity. The event will take place at Grand Tech Arena, 45 Silicon Street, Bangalore. Gain insights from top professionals and network with innovators across the globe.",
    dressCode: "Business Formal",
    ageRestrictions: "18 and above",
    eventTags: "technology, innovation, ai",
    location: "Grand Tech Arena, 45 Silicon Street, Bangalore",
    price: 4500,
    speakers: [
      {
        id: 1,
        name: "Ananya Sharma",
        designation: "AI Research Lead",
        profileImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        designation: "Cloud Architect",
        profileImageUrl:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    title: "AI & Machine Learning Summit",
    date: "Mon Aug 21 2025",
    eventStartTime: "Mon Aug 21 2025 at 10:00:00 AM",
    eventEndTime: "Mon Aug 21 2025 at 5:00:00 PM",
    eventType: "Online",
    eventImageUrl:
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
    hostedBy: "TechVision Hub",
    details:
      "An immersive online summit covering the latest AI and ML advancements. Learn from leading data scientists and developers through live sessions and interactive Q&A panels. Don’t miss this opportunity to upgrade your technical skills and network virtually with global peers.",
    dressCode: "Casual",
    ageRestrictions: "16 and above",
    eventTags: "ai, machine-learning, data-science",
    location: "Virtual Event (Zoom)",
    price: 2500,
    speakers: [
      {
        id: 1,
        name: "Priya Verma",
        designation: "ML Engineer",
        profileImageUrl:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      },
      {
        id: 2,
        name: "David Li",
        designation: "Data Scientist",
        profileImageUrl:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      },
    ],
  },
  {
    title: "Startup Networking Night",
    date: "Sat Sep 9 2025",
    eventStartTime: "Sat Sep 9 2025 at 6:30:00 PM",
    eventEndTime: "Sat Sep 9 2025 at 10:00:00 PM",
    eventType: "Offline",
    eventImageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    hostedBy: "Startup Hive",
    details:
      "Meet fellow founders, investors, and mentors in an exclusive evening dedicated to innovation and collaboration. This offline networking night is perfect for entrepreneurs looking to connect and pitch ideas to potential investors at The Hive Co-Work, Pune.",
    dressCode: "Smart Casual",
    ageRestrictions: "21 and above",
    eventTags: "startup, networking, investment",
    location: "The Hive Co-Work, 21 Innovation Lane, Pune",
    price: 2000,
    speakers: [
      {
        id: 1,
        name: "Nikhil Taneja",
        designation: "Venture Capitalist",
        profileImageUrl:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      },
      {
        id: 2,
        name: "Riya Kapoor",
        designation: "Founder, GrowthX",
        profileImageUrl:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      },
    ],
  },
  {
    title: "Design Thinking Workshop",
    date: "Wed Oct 11 2025",
    eventStartTime: "Wed Oct 11 2025 at 3:00:00 PM",
    eventEndTime: "Wed Oct 11 2025 at 6:00:00 PM",
    eventType: "Online",
    eventImageUrl:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    hostedBy: "UXCraft Academy",
    details:
      "Discover the principles of design thinking and learn how to apply them to solve real-world problems. This virtual workshop is perfect for designers, product managers, and innovators. Engage in hands-on activities led by industry experts.",
    dressCode: "Comfortable Attire",
    ageRestrictions: "15 and above",
    eventTags: "design, creativity, ux",
    location: "Virtual Event (Google Meet)",
    price: 1800,
    speakers: [
      {
        id: 1,
        name: "Laura Gomez",
        designation: "UX Strategist",
        profileImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
      {
        id: 2,
        name: "Arjun Mehta",
        designation: "Product Designer",
        profileImageUrl:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    title: "Product Launch Meetup",
    date: "Fri Nov 24 2025",
    eventStartTime: "Fri Nov 24 2025 at 11:00:00 AM",
    eventEndTime: "Fri Nov 24 2025 at 1:00:00 PM",
    eventType: "Online",
    eventImageUrl:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    hostedBy: "LaunchPad Innovations",
    details:
      "Be among the first to experience the unveiling of groundbreaking tech products at this exclusive launch event. Network with engineers, developers, and media representatives while witnessing live demos of new devices and software tools.",
    dressCode: "Semi-Formal",
    ageRestrictions: "18 and above",
    eventTags: "product, launch, technology",
    location: "LaunchPad HQ, 10 Tech Avenue, Hyderabad",
    price: 3500,
    speakers: [
      {
        id: 1,
        name: "Isha Sen",
        designation: "Product Manager",
        profileImageUrl:
          "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      },
      {
        id: 2,
        name: "Tom Anderson",
        designation: "CTO, LaunchPad",
        profileImageUrl:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      },
    ],
  },
  {
    title: "Developer Bootcamp",
    date: "Tue Dec 19 2025",
    eventStartTime: "Tue Dec 19 2025 at 9:00:00 AM",
    eventEndTime: "Tue Dec 19 2025 at 6:00:00 PM",
    eventType: "Offline",
    eventImageUrl:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    hostedBy: "CodeAcademy India",
    details:
      "Sharpen your coding skills at this intense full-day developer bootcamp. Perfect for beginners and professionals looking to upskill in JavaScript, React, and Node.js. The event will feature coding challenges, live mentorship, and certification.",
    dressCode: "Casual",
    ageRestrictions: "16 and above",
    eventTags: "coding, javascript, web-development",
    location: "Tech Park, 55 Developer Road, Bengaluru",
    price: 5000,
    speakers: [
      {
        id: 1,
        name: "Rohan Das",
        designation: "Full Stack Instructor",
        profileImageUrl:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        id: 2,
        name: "Emily Carter",
        designation: "Senior Developer",
        profileImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
    ],
  },
];

module.exports = { eventsData };
