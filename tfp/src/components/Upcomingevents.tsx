import React from "react"
import { CalendarDays } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  { year: "1900", title: "Event 1", description: "Description of Event 1" },
  { year: "1920", title: "Event 2", description: "Description of Event 2" },
  { year: "1940", title: "Event 3", description: "Description of Event 3" },
  { year: "1960", title: "Event 4", description: "Description of Event 4" },
  { year: "1980", title: "Event 5", description: "Description of Event 5" },
]

const TimelineHorizontal: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold text-amber-700 mb-8 text-center">Timeline</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <TimelineNode event={event} isEven={index % 2 === 0} />
            {index < events.length - 1 && <div className="hidden md:block w-16 h-[2px] bg-amber-700 self-center" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const TimelineNode: React.FC<{ event: TimelineEvent; isEven: boolean }> = ({ event, isEven }) => {
  return (
    <div className={`flex flex-col items-center ${isEven ? "md:flex-col-reverse" : ""}`}>
      <div className="text-sm font-medium text-amber-700 mb-2 md:mb-0 md:mt-2">{event.year}</div>
      <div className="h-8 w-[2px] bg-amber-700 md:h-16" />
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center p-2 transition-transform hover:scale-110 group">
        <div className="text-center">
          <CalendarDays className="w-8 h-8 text-amber-700 mx-auto mb-1" />
          <div className="text-xs font-semibold text-amber-700">{event.title}</div>
        </div>
        <div className="absolute invisible group-hover:visible bg-white border border-amber-200 rounded-md p-2 w-48 text-xs text-gray-700 shadow-lg">
          {event.description}
        </div>
      </div>
    </div>
  )
}

export default TimelineHorizontal

