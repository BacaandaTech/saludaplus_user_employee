export interface IListContact {
    uuid: string,
    mother_name: string,
    father_name: string,
    name: string 
}

export interface IAddContact {
    mother_name: string,
    father_name: string,
    name: string 
    kinship: string
    telephone: number,
    email: string
    is_priority: boolean
}