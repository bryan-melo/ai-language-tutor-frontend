import LessonsClient from './LessonsClient';

export default async function LessonsPage({ params }) {
  const { courseId } = await params;

  return (
    <div className='p-16'>
      <h1 className="text-2xl font-bold mb-4">Course {courseId} - Lessons</h1>
      <LessonsClient courseId={courseId} />
    </div>
  );
}