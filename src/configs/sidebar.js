export default{
    sideBarIcon: [
        {
            href: '#sidebarDashboards'
            ,menuValue: 'sidebarDashboards',
            icon: 'las la-tachometer-alt'
        },
        {
            href: '#homeDashborad'
            ,menuValue: 'homeDashborad',
            icon: 'las la-tachometer-alt'
        },
        {
            href: '#sidebarApps'
            ,menuValue: 'sidebarApps',
            icon: 'lab la-delicious'
        },
        {
            href: '#sidebarAuth'
            ,menuValue: 'sidebarAuth',
            icon: 'lar la-user-circle'
        },
        {
            href: '#sidebarPages'
            ,menuValue: 'sidebarPages',
            icon: 'las la-pager'
        },
        {
            href: '#sidebarlanding'
            ,menuValue: 'sidebarlanding',
            icon: 'ri-rocket-line'
        },
        {
            href: '#sidebarUI'
            ,menuValue: 'sidebarUI',
            icon: 'las la-pencil-ruler'
        },
        {
            href: '#sidebarAdvanceUI'
            ,menuValue: 'sidebarAdvanceUI',
            icon: 'las la-briefcase'
        },
        {
            href: '#sidebarForms'
            ,menuValue: 'sidebarForms',
            icon: 'lar la-newspaper'
        },
        {
            href: '#sidebarTables'
            ,menuValue: 'sidebarTables',
            icon: 'las la-table'
        },
        {
            href: '#sidebarCharts'
            ,menuValue: 'sidebarCharts',
            icon: 'las la-chart-pie'
        },
        {
            href: '#sidebarIcons'
            ,menuValue: 'sidebarIcons',
            icon: 'lab la-fonticons'
        },
        {
            href: '#sidebarMaps'
            ,menuValue: 'sidebarMaps',
            icon: '"las la-map'
        },
        {
            href: '#sidebarMultilevel'
            ,menuValue: 'sidebarMultilevel',
            icon: 'las la-folder-plus'
        },
    ]
    ,
    sideBarList: [
        {
            id:'sidebarApps',
            list: [
                {
                    link: '/calendar',
                    id: '',
                    value: '',
                    datakey: 't-calendar',
                    t:'t-calendar',
                    list: [],
                },
                {   
                    id: '#sidebaremail',
                    value: 'sidebaremail',
                    link: '',
                    datakey: 't-projects',
                    t: 't-email',
                    list: [
                        {   
                            id: '#sidebarsubemail',
                            value: 'sidebarsubemail',
                            datakey: 't-projects',
                            t: 't-email-templates',
                            link: '',
                            list: [
                                {   
                                    link:'/email/email-basic',
                                    datakey: 't-products',
                                    t: 't-basic-action',
                                },
                                {   
                                    link:'/email/email-ecommerce',
                                    datakey: 't-products',
                                    t: 't-ecommerce-action',
                                },
                            ]
                        },
                        {
                            id: '',
                            value: '',
                            list: [],
                            link: '/mailbox',
                            datakey: 't-mailbox',
                            t: 't-mailbox'
                        }
                    ]
                }
            ]
        },
        {
            id: 'homeDashborad',
            list: [
                {
                    link: '/dashboard/dashboard-overview',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-overview',
                    t:'t-dashboard-overview',
                    list: [],
                },
                {
                    link: '/dashboard/dashboard-by-service',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-by-service',
                    t:'t-dashboard-by-service',
                    list: [],
                },
                {
                    link: '/dashboard/dashboard-by-contract',
                    id: '',
                    value: '',
                    datakey: 't-dashboard-by-contract',
                    t:'t-dashboard-by-contract',
                    list: [],
                },
              
            ]
        }
    ]
}