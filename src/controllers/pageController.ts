import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: {
            all: true,
            dog: false,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });

    // res.send('Home no controller');
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false
        },
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true
        },
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}