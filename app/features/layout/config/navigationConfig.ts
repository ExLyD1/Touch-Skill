export type NavigationTarget =
    | { type: 'section'; id: string }
    | { type: 'page'; path: string };

export interface INavigationItem {
    labelKey: string;
    target: NavigationTarget;
    showInMobileMenu: boolean;
}

// Shared by the desktop header and the mobile menu. Section targets are
// anchors on the home page; page targets are separate routes.
export const navigationItems: INavigationItem[] = [
    {
        labelKey: 'nav.home',
        target: { type: 'section', id: 'initial' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.about',
        target: { type: 'section', id: 'aboutCourse' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.program',
        target: { type: 'section', id: 'courseProgram' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.materials',
        target: { type: 'page', path: '/education-materials' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.parents',
        target: { type: 'section', id: 'parentCourse' },
        // Not present in the mobile menu design
        showInMobileMenu: false,
    },
    {
        labelKey: 'nav.tutor',
        target: { type: 'section', id: 'tutor' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.guide',
        target: { type: 'section', id: 'book' },
        showInMobileMenu: true,
    },
    {
        labelKey: 'nav.prices',
        target: { type: 'section', id: 'packages' },
        showInMobileMenu: true,
    },
];
