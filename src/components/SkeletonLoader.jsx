import { motion } from 'framer-motion';

export const CourseCardSkeleton = () => {
    return (
        <div className="card overflow-hidden">
            {/* Thumbnail skeleton */}
            <div className="aspect-video skeleton" />

            {/* Content skeleton */}
            <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="skeleton h-6 w-20 rounded-full" />
                    <div className="skeleton h-4 w-12 rounded" />
                </div>

                <div className="skeleton h-6 w-full rounded" />
                <div className="skeleton h-6 w-3/4 rounded" />

                <div className="skeleton h-4 w-32 rounded" />

                <div className="flex items-center justify-between">
                    <div className="skeleton h-4 w-24 rounded" />
                    <div className="skeleton h-4 w-20 rounded" />
                    <div className="skeleton h-4 w-24 rounded" />
                </div>

                <div className="flex items-center justify-between pt-4">
                    <div className="skeleton h-8 w-24 rounded" />
                    <div className="skeleton h-10 w-28 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export const TestimonialSkeleton = () => {
    return (
        <div className="glass-card">
            <div className="flex items-center space-x-4 mb-4">
                <div className="skeleton w-16 h-16 rounded-full" />
                <div className="flex-1 space-y-2">
                    <div className="skeleton h-5 w-32 rounded" />
                    <div className="skeleton h-4 w-24 rounded" />
                </div>
            </div>
            <div className="space-y-2">
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-3/4 rounded" />
            </div>
        </div>
    );
};

export const StatCardSkeleton = () => {
    return (
        <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="skeleton w-12 h-12 rounded-xl" />
                <div className="skeleton h-6 w-16 rounded" />
            </div>
            <div className="skeleton h-8 w-24 rounded mb-2" />
            <div className="skeleton h-4 w-32 rounded" />
        </div>
    );
};

export const PageLoader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl"
            />
        </div>
    );
};

export const ButtonLoader = () => {
    return (
        <div className="flex items-center space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                    className="w-2 h-2 bg-white rounded-full"
                />
            ))}
        </div>
    );
};
