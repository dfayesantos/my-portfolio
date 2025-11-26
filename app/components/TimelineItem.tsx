import React from 'react';

// Explicit types for the timeline item and icon. Keep fields optional to match JSON flexibility.
type Icon = {
  type?: 'dot' | 'comment' | string;
  color?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  // allow other fields without using `any`
  [key: string]: string | undefined | unknown;
};

export type TimelineItemType = {
  date: string;
  company: string;
  role: string;
  text: string | string[];
  icon?: Icon;
};

export default function TimelineItem({ item }: { item: TimelineItemType }) {
  return (
    <div className="relative">
      <div className="md:flex items-center md:space-x-4 mb-3">
        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
            {item.icon?.type === 'dot' ? (
              <svg className={item.icon?.color ? `fill-${item.icon.color}` : ''} xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path className={item.icon?.colorPrimary ? `fill-${item.icon.colorPrimary}` : ''} d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
                <path className={item.icon?.colorSecondary ? `fill-${item.icon.colorSecondary}` : ''} d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
              </svg>
            )}
          </div>
          {/* Date */}
          <time className="font-caveat font-medium text-xl text-[#4C6AC4] md:w-28">{item.date}</time>
        </div>
        {/* Title */}
        <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{item.company}</span> {item.role}</div>
      </div>
      {/* Card */}
      <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            {Array.isArray(item.text) ? (
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {item.text.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : (
              <p>{item.text}</p>
            )}
      </div>
    </div>
  );
}
