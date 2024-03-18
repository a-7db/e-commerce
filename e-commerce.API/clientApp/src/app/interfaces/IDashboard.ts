export interface IDashboardNavs {
    parentTitle: string,
    icon: string,
    navs: INavs[]
}

export interface INavs {
    text: string,
    url: string,
    icon: string
}