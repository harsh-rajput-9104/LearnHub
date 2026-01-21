import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play,
    Clock,
    Users,
    Star,
    BookOpen,
    Download,
    ChevronDown,
    ChevronUp,
    Check,
    Lock,
    ArrowLeft,
    Award,
    TrendingUp
} from 'lucide-react';
import { courses, chapters } from '../data/demoData';

const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));
    const [expandedChapter, setExpandedChapter] = useState(null);

    if (!course) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Course not found
                    </h2>
                    <Link to="/courses" className="btn-primary">
                        Browse Courses
                    </Link>
                </div>
            </div>
        );
    }

    const toggleChapter = (chapterId) => {
        setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Back Button */}
            <div className="container-custom py-4">
                <Link to="/dashboard">
                    <motion.button
                        whileHover={{ x: -5 }}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Dashboard</span>
                    </motion.button>
                </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white">
                <div className="container-custom py-12 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                                {course.category}
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                                {course.title}
                            </h1>

                            <p className="text-lg text-white/90 mb-6">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 mb-6">
                                <div className="flex items-center space-x-2">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">{course.rating}</span>
                                    <span className="text-white/80">({course.students.toLocaleString()} students)</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <BookOpen className="w-5 h-5" />
                                    <span>{course.lessons} lessons</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 mb-6">
                                <img
                                    src={`https://i.pravatar.cc/100?u=${course.instructor}`}
                                    alt={course.instructor}
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <div>
                                    <div className="text-sm text-white/80">Instructor</div>
                                    <div className="font-semibold">{course.instructor}</div>
                                </div>
                            </div>

                            {course.enrolled ? (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Your Progress</span>
                                        <span className="font-semibold">{course.progress}%</span>
                                    </div>
                                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${course.progress}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                                    >
                                        <Play className="w-5 h-5" fill="currentColor" />
                                        <span>Continue Learning</span>
                                    </motion.button>
                                </div>
                            ) : (
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        Enroll Now - ₹{course.price.toLocaleString()}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all"
                                    >
                                        Try Free Preview
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>

                        {/* Right Content - Video Player */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                                    >
                                        <Play className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What You'll Learn */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card p-6 md:p-8"
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                What You'll Learn
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {course.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Course Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card p-6 md:p-8"
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                Course Content
                            </h2>

                            <div className="space-y-3">
                                {chapters.map((chapter, index) => (
                                    <motion.div
                                        key={chapter.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => !chapter.locked && toggleChapter(chapter.id)}
                                            disabled={chapter.locked}
                                            className={`w-full p-4 flex items-center justify-between text-left transition-colors ${chapter.locked
                                                    ? 'cursor-not-allowed opacity-60'
                                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-4 flex-1">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${chapter.completed
                                                        ? 'bg-green-100 dark:bg-green-900/30'
                                                        : chapter.current
                                                            ? 'bg-primary-100 dark:bg-primary-900/30'
                                                            : 'bg-gray-100 dark:bg-gray-800'
                                                    }`}>
                                                    {chapter.locked ? (
                                                        <Lock className="w-5 h-5 text-gray-400" />
                                                    ) : chapter.completed ? (
                                                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                                                    ) : (
                                                        <Play className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" />
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                        {chapter.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                                                        <span>{chapter.lessons} lessons</span>
                                                        <span>•</span>
                                                        <span>{chapter.duration}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {!chapter.locked && (
                                                <motion.div
                                                    animate={{ rotate: expandedChapter === chapter.id ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                                </motion.div>
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {expandedChapter === chapter.id && !chapter.locked && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                                                >
                                                    <div className="p-4 space-y-2">
                                                        {[...Array(3)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer"
                                                            >
                                                                <div className="flex items-center space-x-3">
                                                                    <Play className="w-4 h-4 text-gray-400" />
                                                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                                                        Lesson {i + 1}: Introduction to {chapter.title}
                                                                    </span>
                                                                </div>
                                                                <span className="text-xs text-gray-500">12:34</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="card p-6"
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Topics Covered
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {course.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* Course Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card p-6 sticky top-24"
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Course Includes
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {course.duration} of content
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {course.lessons} video lessons
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Download className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Downloadable resources
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Certificate of completion
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Live doubt sessions
                                    </span>
                                </div>
                            </div>

                            {!course.enrolled && (
                                <>
                                    <div className="my-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <div className="text-3xl font-bold gradient-text mb-2">
                                            ₹{course.price.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            One-time payment
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn-primary"
                                    >
                                        Enroll Now
                                    </motion.button>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
