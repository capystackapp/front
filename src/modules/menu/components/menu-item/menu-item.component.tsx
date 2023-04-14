import { FC } from "react";

interface MenuItemProps {
    imagePath: string;
    weight: number;
    title: string;
    ingredients: string;
    price: number;
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl bg-white">
            <div className="relative">
                <img className="object-cover object-center rounded-t-2xl w-full h-[15rem]" src={imagePath} alt={title} />
                <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">{`${weight} g`}</span>
            </div>
            <div className="p-8">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="mb-8">{ingredients}</p>
                <span className="text-xl font-semibold">{price} UAH</span>
            </div>
        </div>
    );
};
