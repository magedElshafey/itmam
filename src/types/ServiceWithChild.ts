export interface ServiceWithChild {
    id: number, 
    name: string, 
    description? : string
    child_services?: {
        id: number, 
        name : string
    } []
}