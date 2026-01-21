import { motion } from 'framer-motion';
import { Star, Clock, Users, BookOpen, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card-hover group"
        >
            {/* Thumbnail */}
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                    >
                        <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                    </motion.div>
                </motion.div>

                {/* Badge */}
                {course.enrolled && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        Enrolled
                    </div>
                )}

                {/* Level Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 glass text-white text-xs font-semibold rounded-full backdrop-blur-md">
                    {course.level}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <div className="flex items-center justify-between mb-2">
                    <span className="badge-primary">{course.category}</span>
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {course.rating}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    By {course.instructor}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{(course.students / 1000).toFixed(1)}k students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                    </div>
                </div>

                {/* Progress Bar (if enrolled) */}
                {course.enrolled && course.progress > 0 && (
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                            <span>Progress</span>
                            <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <div className="progress-bar">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="progress-fill"
                            />
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div>
                        <span className="text-2xl font-bold gradient-text">
                            ₹{course.price.toLocaleString()}
                        </span>
                    </div>
                    <Link to={`/course/${course.id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${course.enrolled
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {course.enrolled ? 'Continue' : 'View Details'}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
