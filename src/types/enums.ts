/**
 * ENUMS
 */

// Types of notes
//
export enum NoteType {
    note = "note",
    code = "code"
}

// Note statuses
//
export enum NoteStatus {
    published = "published",
    archived = "archived",
    trashed = "trashed"
}

// Note filter is an alternate NoteStatus, since published contains both all and starred
//
export enum NoteFilter {
    all = "all",
    starred = "starred",
    archived = "archived",
    trash = "trash"
}

// Date Sorting options
//
export enum SortDate {
    latest = "latest",
    oldest = "oldest"
}

