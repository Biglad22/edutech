////this file contains different array used in the app

// tab-switches 
/// array of tab switches to be rendered on course dashboard
export const tabSwitches = [
    {
        title: 'description',
        path: '/course-desc'
    },
    {
        title: 'reviews',
        path: '/reviews'
    },
    {
        title: 'discussion',
        path: '/discussion'
    },
    {
        title: 'resources',
        path: '/resources'
    },
    {
        title: 'instructor',
        path: '/instructor'
    },
]

//////nav-link switches
///array of nav switches || links to be rendered
export const navLinkSwitches = [
    {icon : 'grid-alt', path : '/dashboard'}, 
    {icon : 'book', path : '/'},
    {icon : 'calendar-minus', path : '/schedule'},
    {icon : 'group', path : '/group'}, 
    {icon : 'bar-chart-alt-2', path : '/stats'},
    {icon : 'message-minus', path : '/messages'}, 
];