export const courses = [
    {
        id: 1,
        title: "Complete Mathematics Mastery",
        category: "Mathematics",
        level: "Class 10-12",
        instructor: "Dr. Priya Sharma",
        rating: 4.8,
        students: 45230,
        duration: "120 hours",
        lessons: 156,
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
        price: 4999,
        description: "Master advanced mathematics concepts with interactive lessons and real-world applications.",
        enrolled: true,
        progress: 65,
        tags: ["Algebra", "Calculus", "Geometry", "Trigonometry"],
        features: [
            "Live doubt-solving sessions",
            "Practice worksheets",
            "Mock tests",
            "Personalized learning path"
        ]
    },
    {
        id: 2,
        title: "Physics for JEE Advanced",
        category: "Physics",
        level: "JEE Preparation",
        instructor: "Prof. Rajesh Kumar",
        rating: 4.9,
        students: 38450,
        duration: "150 hours",
        lessons: 189,
        thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80",
        price: 5999,
        description: "Comprehensive physics course designed specifically for JEE Advanced aspirants.",
        enrolled: true,
        progress: 42,
        tags: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"],
        features: [
            "Previous year questions",
            "Video solutions",
            "Weekly assessments",
            "Rank predictor"
        ]
    },
    {
        id: 3,
        title: "Chemistry Fundamentals",
        category: "Chemistry",
        level: "Class 11-12",
        instructor: "Dr. Anita Desai",
        rating: 4.7,
        students: 32100,
        duration: "100 hours",
        lessons: 134,
        thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=80",
        price: 4499,
        description: "Build a strong foundation in chemistry with engaging experiments and concepts.",
        enrolled: false,
        progress: 0,
        tags: ["Organic", "Inorganic", "Physical Chemistry"],
        features: [
            "3D molecular models",
            "Virtual lab experiments",
            "Concept maps",
            "Quick revision notes"
        ]
    },
    {
        id: 4,
        title: "English Language & Literature",
        category: "English",
        level: "Class 9-10",
        instructor: "Ms. Sarah Williams",
        rating: 4.6,
        students: 28900,
        duration: "80 hours",
        lessons: 98,
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        price: 3999,
        description: "Enhance your English skills with literature analysis and creative writing.",
        enrolled: true,
        progress: 88,
        tags: ["Grammar", "Literature", "Writing", "Comprehension"],
        features: [
            "Interactive grammar exercises",
            "Essay writing workshops",
            "Book discussions",
            "Speaking practice"
        ]
    },
    {
        id: 5,
        title: "Coding for Beginners",
        category: "Computer Science",
        level: "All Ages",
        instructor: "Mr. Arjun Patel",
        rating: 4.9,
        students: 52300,
        duration: "90 hours",
        lessons: 112,
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        price: 4999,
        description: "Learn programming from scratch with hands-on projects and real-world applications.",
        enrolled: false,
        progress: 0,
        tags: ["Python", "JavaScript", "Web Development", "Algorithms"],
        features: [
            "Live coding sessions",
            "Project-based learning",
            "Code reviews",
            "Career guidance"
        ]
    },
    {
        id: 6,
        title: "Biology for NEET",
        category: "Biology",
        level: "NEET Preparation",
        instructor: "Dr. Meera Reddy",
        rating: 4.8,
        students: 41200,
        duration: "140 hours",
        lessons: 167,
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
        price: 5499,
        description: "Complete NEET biology preparation with diagrams, mnemonics, and practice tests.",
        enrolled: true,
        progress: 23,
        tags: ["Botany", "Zoology", "Human Physiology", "Genetics"],
        features: [
            "Animated diagrams",
            "Mnemonic techniques",
            "NEET pattern tests",
            "Performance analytics"
        ]
    }
];

export const categories = [
    {
        id: 1,
        name: "Mathematics",
        icon: "calculator",
        color: "from-blue-500 to-cyan-500",
        courses: 234,
        description: "Master numbers and logic"
    },
    {
        id: 2,
        name: "Science",
        icon: "flask-conical",
        color: "from-green-500 to-emerald-500",
        courses: 189,
        description: "Explore the natural world"
    },
    {
        id: 3,
        name: "Languages",
        icon: "book-open",
        color: "from-purple-500 to-pink-500",
        courses: 156,
        description: "Communicate effectively"
    },
    {
        id: 4,
        name: "Coding",
        icon: "code",
        color: "from-orange-500 to-red-500",
        courses: 198,
        description: "Build the future"
    },
    {
        id: 5,
        name: "Test Prep",
        icon: "graduation-cap",
        color: "from-indigo-500 to-purple-500",
        courses: 145,
        description: "Ace your exams"
    },
    {
        id: 6,
        name: "Arts",
        icon: "palette",
        color: "from-pink-500 to-rose-500",
        courses: 87,
        description: "Express creativity"
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "JEE Advanced AIR 47",
        image: "https://i.pravatar.cc/150?img=12",
        content: "The interactive lessons and personalized doubt-solving sessions helped me crack JEE Advanced. The platform's adaptive learning technology is truly revolutionary!",
        rating: 5,
        course: "Physics for JEE Advanced"
    },
    {
        id: 2,
        name: "Diya Patel",
        role: "NEET AIR 123",
        image: "https://i.pravatar.cc/150?img=45",
        content: "I improved my biology score by 40% in just 3 months. The animated diagrams and mnemonic techniques made complex topics so easy to understand.",
        rating: 5,
        course: "Biology for NEET"
    },
    {
        id: 3,
        name: "Rohan Verma",
        role: "Class 10 - 98.2%",
        image: "https://i.pravatar.cc/150?img=33",
        content: "The best online learning platform! Teachers are amazing, content is engaging, and the practice tests really helped me score 98% in boards.",
        rating: 5,
        course: "Complete Mathematics Mastery"
    },
    {
        id: 4,
        name: "Ananya Singh",
        role: "Coding Enthusiast",
        image: "https://i.pravatar.cc/150?img=23",
        content: "From zero coding knowledge to building my own website in 3 months! The project-based approach and mentor support made all the difference.",
        rating: 5,
        course: "Coding for Beginners"
    }
];

export const upcomingClasses = [
    {
        id: 1,
        title: "Calculus - Limits and Continuity",
        course: "Complete Mathematics Mastery",
        instructor: "Dr. Priya Sharma",
        date: "2026-01-22",
        time: "16:00",
        duration: "60 min",
        type: "Live Class",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80"
    },
    {
        id: 2,
        title: "Electromagnetic Induction",
        course: "Physics for JEE Advanced",
        instructor: "Prof. Rajesh Kumar",
        date: "2026-01-22",
        time: "18:00",
        duration: "90 min",
        type: "Live Class",
        thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80"
    },
    {
        id: 3,
        title: "Doubt Solving Session",
        course: "Biology for NEET",
        instructor: "Dr. Meera Reddy",
        date: "2026-01-23",
        time: "17:00",
        duration: "45 min",
        type: "Doubt Session",
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80"
    }
];

export const achievements = [
    {
        id: 1,
        title: "First Course Completed",
        description: "Completed your first course",
        icon: "trophy",
        unlocked: true,
        date: "2025-12-15"
    },
    {
        id: 2,
        title: "7 Day Streak",
        description: "Learned for 7 consecutive days",
        icon: "flame",
        unlocked: true,
        date: "2026-01-10"
    },
    {
        id: 3,
        title: "Quiz Master",
        description: "Scored 100% in 5 quizzes",
        icon: "award",
        unlocked: true,
        date: "2026-01-18"
    },
    {
        id: 4,
        title: "30 Day Streak",
        description: "Learned for 30 consecutive days",
        icon: "flame",
        unlocked: false,
        date: null
    },
    {
        id: 5,
        title: "Course Champion",
        description: "Complete 5 courses",
        icon: "medal",
        unlocked: false,
        date: null
    }
];

export const userStats = {
    totalCourses: 4,
    completedCourses: 1,
    totalHours: 156,
    currentStreak: 12,
    longestStreak: 28,
    averageScore: 87,
    certificates: 1,
    rank: "Gold Learner"
};

export const chapters = [
    {
        id: 1,
        title: "Introduction to Calculus",
        duration: "45 min",
        lessons: 6,
        completed: true,
        locked: false
    },
    {
        id: 2,
        title: "Limits and Continuity",
        duration: "90 min",
        lessons: 8,
        completed: true,
        locked: false
    },
    {
        id: 3,
        title: "Differentiation Basics",
        duration: "120 min",
        lessons: 10,
        completed: false,
        locked: false,
        current: true
    },
    {
        id: 4,
        title: "Applications of Derivatives",
        duration: "150 min",
        lessons: 12,
        completed: false,
        locked: false
    },
    {
        id: 5,
        title: "Integration Fundamentals",
        duration: "180 min",
        lessons: 14,
        completed: false,
        locked: true
    }
];
