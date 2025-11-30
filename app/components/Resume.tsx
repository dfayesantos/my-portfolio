import React from 'react';
import TimelineItem, { TimelineItemType } from './TimelineItem';

export default function Resume({ timeline }: { timeline: TimelineItemType[] }) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <h2 className="text-2xl font-semibold mb-4">Resume</h2>
      {Array.isArray(timeline) && timeline.map((item, idx) => (
        <TimelineItem key={idx} item={item} />
      ))}
    </div>
  );
}
 