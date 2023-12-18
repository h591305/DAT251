import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'apps',
        path: '',
        title: 'APPS',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'apps.sales',
                path: '',
                title: 'Ecommerce',
                translateKey: 'nav.appsSales.sales',
                icon: 'sales',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'appsSales.productList',
                        path: `${APP_PREFIX_PATH}/sales/product-list`,
                        title: 'Products',
                        translateKey: 'nav.appsSales.productList',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsSales.productNew',
                        path: `${APP_PREFIX_PATH}/sales/product-new`,
                        title: 'New Product',
                        translateKey: 'nav.appsSales.productNew',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsSales.orderList',
                        path: `${APP_PREFIX_PATH}/sales/order-list`,
                        title: 'Order List',
                        translateKey: 'nav.appsSales.orderList',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'apps.knowledgeBase',
                path: '',
                title: 'Knowledge Base',
                translateKey: 'nav.appsknowledgeBase.knowledgeBase',
                icon: 'knowledgeBase',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'appsknowledgeBase.manageArticles',
                        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
                        title: 'All Articles',
                        translateKey: 'nav.appsknowledgeBase.manageArticles',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsknowledgeBase.newArticle',
                        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
                        title: 'Add Article',
                        translateKey: 'nav.appsknowledgeBase.editArticle',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: [],
                    },
                    {
                        key: 'appsknowledgeBase.helpCenter',
                        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
                        title: 'Help Center',
                        translateKey: 'nav.appsknowledgeBase.helpCenter',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'apps.account',
                path: '',
                title: 'Account',
                translateKey: 'nav.appsAccount.account',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'appsAccount.settings',
                        path: `${APP_PREFIX_PATH}/account/settings/profile`,
                        title: 'Settings',
                        translateKey: 'nav.appsAccount.settings',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsAccount.activityLog',
                        path: `${APP_PREFIX_PATH}/account/activity-log`,
                        title: 'Activity Log',
                        translateKey: 'nav.appsAccount.activityLog',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default appsNavigationConfig