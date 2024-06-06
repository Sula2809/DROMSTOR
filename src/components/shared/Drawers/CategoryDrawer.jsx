'use client';
import { useState, useEffect } from 'react';
import SubCategoryDrawer from './SubCategoryDrawer';
import { Bars3Icon } from '@heroicons/react/24/outline';

const categories = [
    { id: 1, name: 'Категория 1' },
    { id: 2, name: 'Категория 2' },
    { id: 3, name: 'Категория 3' },
    { id: 4, name: 'Категория 4' },
    { id: 5, name: 'Категория 5' },
    { id: 6, name: 'Категория 6' },
];

const subCategories = {
    1: [{ id: 1.1, name: 'Подкатегория 1.1' }, { id: 1.2, name: 'Подкатегория 1.2' }],
    2: [{ id: 2.1, name: 'Подкатегория 2.1' }, { id: 2.2, name: 'Подкатегория 2.2' }],
    3: [{ id: 3.1, name: 'Подкатегория 3.1' }, { id: 3.2, name: 'Подкатегория 3.2' }],
    4: [{ id: 4.1, name: 'Подкатегория 4.1' }, { id: 4.2, name: 'Подкатегория 4.2' }],
    5: [{ id: 5.1, name: 'Подкатегория 5.1' }, { id: 5.2, name: 'Подкатегория 5.2' }],
    6: [{ id: 6.1, name: 'Подкатегория 6.1' }, { id: 6.2, name: 'Подкатегория 6.2' }],
};

const CategoryDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [nestedDrawerOpen, setNestedDrawerOpen] = useState(false);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [subNestedDrawerOpen, setSubNestedDrawerOpen] = useState(false);

    const openNestedDrawer = (category) => {
        setActiveCategory(category);
        setNestedDrawerOpen(true);
    };

    const closeAllDrawers = () => {
        setIsDrawerOpen(false);
        setNestedDrawerOpen(false);
        setSubNestedDrawerOpen(false);
        setActiveCategory(null);
        setActiveSubCategory(null);
    };

    const openSubNestedDrawer = (subCategory) => {
        setActiveSubCategory(subCategory);
        setSubNestedDrawerOpen(true);
    };

    useEffect(() => {
        if (activeCategory) {
            setActiveSubCategory(null);
            setSubNestedDrawerOpen(false);
        }
    }, [activeCategory]);

    useEffect(() => {
        if (!isDrawerOpen) {
            closeAllDrawers();
        }
    }, [isDrawerOpen]);

    return (
        <div>
            <button onClick={() => setIsDrawerOpen(true)}>
                <Bars3Icon className="h-8 w-8" />
            </button>
            <SubCategoryDrawer isOpen={isDrawerOpen} onClose={closeAllDrawers}>
                <ul>
                    {categories.map((item, index) => (
                        <li 
                            key={index}
                            onClick={() => openNestedDrawer(item)}
                            className="p-2 border-b cursor-pointer"
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </SubCategoryDrawer>
            {activeCategory && (
                <SubCategoryDrawer 
                    isOpen={nestedDrawerOpen} 
                    onClose={closeAllDrawers} 
                    style={{ left: '384px' }}
                    duration={700}
                >
                    <ul>
                        {subCategories[activeCategory.id]?.map((subItem, subIndex) => (
                            <li 
                                key={subIndex}
                                onClick={() => openSubNestedDrawer(subItem)}
                                className="p-2 border-b cursor-pointer"
                            >
                                {subItem.name}
                            </li>
                        ))}
                    </ul>
                </SubCategoryDrawer>
            )}
            {activeSubCategory && (
                <SubCategoryDrawer 
                    isOpen={subNestedDrawerOpen} 
                    onClose={closeAllDrawers} 
                    style={{ left: '768px' }}
                    duration={900}  // Увеличиваем продолжительность
                >
                    <div>
                        <h2>{activeSubCategory.name}</h2>
                        <p>Содержание для {activeSubCategory.name}</p>
                    </div>
                </SubCategoryDrawer>
            )}
        </div>
    );
};

export default CategoryDrawer;