export const Paths: { [key: string]: string } = {
    Home: "/",
    Login: "/login",
    Register: "/register",
    Dashboard: "/dashboard",
    Contact: "/contact",
    Share: "/share",
    Settings: "/settings",
    MyCv: "/my-cv",
    CvEditor: "/cv-editor",
    NotFound: "*",
}

export type Paths = keyof typeof Paths;