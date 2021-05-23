export enum TimelineEventType {
    /**
     * The task is done
     */
    Done,
    /**
     * The task is currently in progress
     */
    InProgress,
    /**
     * The task is urgent to be done
     */
    Urgent,
    /**
     * The task is nicely scheduled
     */
    Default
}

export enum TimelineEventTag {
    /**
     * A task to create something new (features, icons etc.)
     */
    Create,
    /**
     * A task to remake/redo/rewrite something
     */
    Modify,
    /**
     * A task that was probably unnoticed by a certain user
     */
    New
}

export interface TimelineEvent {
  title: string
  description: string
  deadline: Date
  deadtime: string

  type: TimelineEventType
  tags: TimelineEventTag[]
}

export interface Timeline {
  elements: TimelineEvent[]
}
