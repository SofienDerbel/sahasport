'use client';
import React from 'react';
import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';


export const categories = [
    {label: 'Beach',
    icon : TbBeach,
    description : 'This preoperty is close to the beach!'},
    {label: 'Windmills',
    icon : GiWindmill,
    description : 'This preoperty has a windwills!'},
    {label: 'Modern',
    icon : MdOutlineVilla,
    description : 'This preoperty is close to the beach!'},
    {label: 'ContrySide',
    icon : TbMountain,
    description : 'This preoperty is close to the mountain!'},
    {label: 'Pools',
    icon : TbPool,
    description : 'This preoperty has a pool!'},
    {label: 'Island',
    icon : GiIsland,
    description : 'This preoperty is on an island!'},
    {label: 'Lake',
    icon : GiBoatFishing,
    description : 'This preoperty is close to a lake!'},
    {label: 'Skiing',
    icon : FaSkiing,
    description : 'This preoperty has skiing activities!'},
    {label: 'Castles',
    icon : GiCastle,
    description : 'This preoperty is in a castle!'},
    {label: 'Camping',
    icon : GiForestCamp,
    description : 'This preoperty has camping activities!'},
    {label: 'Arctic',
    icon : BsSnow,
    description : 'This preoperty has arctic activities!'},
    {label: 'Cave',
    icon : GiCaveEntrance,
    description : 'This preoperty is in a cave!'},
    {label: 'Desert',
    icon : GiCactus,
    description : 'This preoperty is a desert!'},
    {label: 'Barns',
    icon : GiBarn,
    description : 'This preoperty is in a barn!'},
    {label: 'Lux',
    icon : IoDiamond,
    description : 'This preoperty is luxurious!'},

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    //to check if we are on the mainpage or not, to show/hide the categories icons
    const isMainPage = pathname ==='/';
    if(!isMainPage)
    {return null}
    return (
        
        <Container>
            <div className='
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            '>
                {categories.map((item)=>(
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category ===item.label}
                    icon={item.icon} />
                ))}
            </div>
        </Container>
    );
};

export default Categories;