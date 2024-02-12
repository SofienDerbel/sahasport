import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string'
interface categoryBoxProps {
    icon : IconType;
    label: string;
    selected?:boolean;
}
const CategoryBox:React.FC<categoryBoxProps> = ({
icon: Icon,
label,
selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(()=>{
        let currentQuery = {};
        selected=true;
        if (params){
            //parse them to become an object and not a string
            currentQuery = qs.parse(params.toString());
        }
        //spread them and add the category
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }
        //if we click on a tacegory and it is already selected we need to remove it from the selection
        if(params?.get('category') === label){
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url:'/',
            query: updatedQuery
        },{skipNull: true});

        router.push(url)
    },[label,params,router])
    return (
        <div
        onClick={handleClick}
        className=
        {`flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected?'border-lime-300':'border-transparent'}
        ${selected?'text-neutral-800': 'text-neutral-500'}}
        `}>
        <Icon size={26}/>
        <div 
        className='font-medium text-sm'>{label}</div>
        </div>
    );
};

export default CategoryBox;