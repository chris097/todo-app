import React from 'react';
import img from "../image/shopping-cart.svg"


export const Header = () => {
    return(
        <div>
            <div class="bg-blue-700 w-screen h-11 text-white py-2.5 px-2 md:px-20 bg-opacity-90">
            <div class="text-sm text-gray-50">Store made with Soko</div>
        </div>
            <div class="px-2 md:px-20 flex justify-between">
                <div class="flex mt-6">
                    <div class="bg-gray-100 rounded-full w-18 h-10 md:w-16 md:h-16 md:p-1 object-center"><img src={img} alt=""/></div>
                    <span class="ml-4 mt-1">
                        <div class=" text-xl font-bold text-gray-700">Target</div>
                        <div class="text-gray-500">Cham Towers, Plot 12 Nkruma Rd Kampala, Ug</div>
                    </span>
                </div>
                <div class="flex">
                    <div class="flex mr-14">
                        <img class="w-6" src={img} alt="bag_icon"/>
                        <span class="mt-8 ml-2 text-gray-500 font-semibold">Bag</span>
                    </div>
                    <div class="flex">
                        <img class="w-6" src={img} alt="key_icon"/>
                        <span class="mt-8 ml-2 text-gray-500 font-semibold">Account</span>
                    </div>
                </div>
            </div>
        </div>
    )
}