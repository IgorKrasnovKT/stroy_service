import { MemoExoticComponent } from 'react';
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Products } from '@/pages/products';
import { Login } from '@/pages/login';
import { Signup } from '@/pages/signup';
import { Delivery } from '@/pages/delivery';

export enum RoutesNames {
    notFound = 'notFound',
    home = 'home',
    about = 'about',
    delivery = 'delivery',
    contact = 'contact',
    products = 'products',
    login = 'login',
    signup = 'signup',
}

export type RoutesType = {
    [key in RoutesNames]: {
        path: string;
        name: string;
        Component: MemoExoticComponent<() => JSX.Element> | (() => JSX.Element)
    }
}

export const routes: RoutesType = {
    [RoutesNames.about]: {
        path: '/about',
        name: 'О компании',
        Component: About
    },
    [RoutesNames.delivery]: {
        path: '/delivery',
        name: 'Доставка',
        Component: Delivery
    },
    [RoutesNames.contact]: {
        path: '/contact',
        name: 'Контакты',
        Component: Contact
    },
    [RoutesNames.products]: {
        path: '/products',
        name: 'Товары',
        Component: Products
    },
    [RoutesNames.login]: {
        path: '/login',
        name: 'Вход',
        Component: Login
    },
    [RoutesNames.signup]: {
        path: '/signup',
        name: 'Регистрация',
        Component: Signup
    },
    [RoutesNames.notFound]: {
        path: '*',
        name: 'Not Found',
        Component: () => <div>Такой страницы не найдено</div>
    },
    [RoutesNames.home]: {
        path: '/',
        name: 'Главная',
        Component: Home
    },
};

