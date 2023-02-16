export interface Children {
    children: React.ReactNode;
}

export interface UserDataLogin {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface UserDataRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    id: string;
    username: string;
    email: string;
    created_at: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    created_at: string;
}

export interface UserToken {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

export interface Hero {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        extension: string,
        path: string
    }
    resourceURI: string;
    comics: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string
        }],
        returned: number
    }
    series: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string
        }],
        returned: number
    }
    stories: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string
        }],
        returned: number
    }
    events: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string
        }],
        returned: number
    }
    urls: [
        {
            type: string,
            url: string
        }
    ];
}