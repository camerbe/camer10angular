export interface ProfileModel {
    success:boolean,
    data:dataProfileModel,
    token:string,
    role:string,
    expiresIn:number,
    message:string
}

export interface dataProfileModel{
    id: number,
    nom: string,
    prenom: string,
    email: string,
    email_verified_at: string,
    two_factor_secret: string,
    two_factor_recovery_codes: string,
    two_factor_confirmed_at: string,
    role_id: number
    
}
