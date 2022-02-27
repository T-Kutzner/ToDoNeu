export interface ToDo {
    id : string;
    task : string;
    description: string;
    status: status.Open;
}

export enum status {
    Open = "Open",
    Done = "Done"
}