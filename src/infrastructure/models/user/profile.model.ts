export interface ProfileData {
    email: string;
    first_name: string;
    last_name: string;
    profile_image: string;
}

export interface ProfileState {
    status: number;
    message: string;
    data: ProfileData;
}

export const DefaultProfile: ProfileData = {
    email: '',
    first_name: '',
    last_name: '',
    profile_image: '',
};