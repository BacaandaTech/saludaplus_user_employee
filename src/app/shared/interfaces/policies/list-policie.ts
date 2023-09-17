export interface IListPolicie {
    uuid: string;
    date: string;
    name_police: string;
    vigency: string;
    status: boolean;
}

export interface IPolicie {
    uuid: string;
    beneficiary_name: string,
    date: string;
    name_police: string;
    vigency: string;
    status: boolean;
    sign_document: string,
    id_card_document: string,
}
