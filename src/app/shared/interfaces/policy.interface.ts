export interface IPolicy {
    folio_id: number,
    folio: string,
    status: string,
    user_id: number,
    user_name: string,
    created_at: Date,
    expired_at: Date,
    identification: string | null | undefined,
    contract: string | null | undefined,
    certification: string
}