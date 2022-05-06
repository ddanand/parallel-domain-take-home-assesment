export type Job = {
    id: string;
    text: string;
    categories: {
        team: string;
        location: string;
        commitment?: string;
    };
    hostedUrl: string;
    additionalPlain: string;
    additional: string;
    createdAt: number;
    descriptionPlain: string;
    description: string;
    applyUrl: string;
};