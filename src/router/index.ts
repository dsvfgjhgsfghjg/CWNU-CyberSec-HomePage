import { createRouter, createWebHistory } from 'vue-router';
import Awards from '@/Views/Awards.vue';
import NotFound from '@/Views/NotFound.vue';
import Members from "@/components/Members.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 主视图路由（可留空或指向默认页）
        {
            path: '/',
            component: () => import('@/components/Main.vue') // 你的主视图组件
        },
        // Awards 页面路由
        {
            path: '/awards',
            name: 'Awards',
            component: Awards
        },// Member 页面路由
        {
            path: '/members',
            name: 'Members',
            component: Members
        },
        // 404 路由（必须放在最后）
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});

export default router;