import React, { MemoExoticComponent, ReactNode } from 'react';
import { ReactElement } from "react";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Products } from '@/pages/products';
import { Login } from '@/pages/login';
import { Signup } from '@/pages/signup';

enum RoutesNames {
    notFound = 'notFound',
    home = 'home',
    about = 'about',
    contact = 'contact',
    products = 'products',
    login = 'login',
    signup = 'signup',
};

type RouteType = {
    [key in RoutesNames]: {
        path: string;
        name: string;
        Component: MemoExoticComponent<() => JSX.Element> | (() => JSX.Element)
    }
}

export const routes: RouteType = {
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
    [RoutesNames.about]: {
        path: '/about',
        name: 'О компании',
        Component: About
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
};

