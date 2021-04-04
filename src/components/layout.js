import React from "react";
import img from "../image/shopping-cart.svg";


export const Layout = () => {
    return(
        <div class="border-gray-200 mt-7 border-t">
            <div class="bg-gray-100 w-2/5 h-10 flex -mt-6 m-auto rounded-md">
                <input class="w-full bg-transparent pl-2 placeholder-gray-500 text-lg outline-none" type="search" id="search" placeholder="Search for products..."/>
                <span><img class="w-12 inline bg-yellow-400 p-2 h-10" src={img} alt="search_icon"/></span>
            </div>
            <div class="flex px-20 h-96">
                <div class="border-r border-gray-400 -mt-4">
                    <ul class="mt-4 text-gray-400 font-normal">
                        <li class="bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 border-blue-900">Electronics(12)</li>
                        <li class=" hover:bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 hover:border-blue-900">Face Masks(3)</li>
                        <li class=" hover:bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 hover:border-blue-900">Fresh Food(3)</li>
                        <li class=" hover:bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 hover:border-blue-900">Grocery(3)</li>
                        <li class=" hover:bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 hover:border-blue-900">Home(4)</li>
                        <li class=" hover:bg-blue-200 w-64 p-1 border-transparent border-r-2 mt-2 hover:border-blue-900">Kids(1)</li>
                    </ul>
                    <div class="mt-5 text-blue-600 font-semibold">View all categories ></div>
                </div>
                <div class="ml-12 w-1/2 border-r border-gray-400 -mt-4">
                    <div class="font-semibold text-gray-700 text-lg mt-6">Electronics <span class="bg-blue-700 px-2 text-gray-300 rounded-sm ml-5 text-lg">12</span></div>
                    <div class="flex justify-between mt-5">
                        <div class="flex">
                            <img class="w-20 h-24 rounded-sm bg-gray-200" src={img} alt=""/>
                            <div class="mt-5 ml-5">
                                <p class="text-gray-600">Kids 2px cloth face masks</p>
                                <p class="text-gray-400">UGX 184,000</p>
                            </div>
                        </div>
                        <div class="border-2 border-blue-800 w-20 h-8 text-center mt-14 mr-10">+ Add</div>
                    </div>
                </div>
                <div class="ml-10">
                    <div class="text-xl font-semibold">Bag <span class="bg-blue-700 px-2 text-gray-300 rounded-sm ml-2 text-lg">0</span></div>
                </div>
            </div>
            <div class="flex text-center justify-center bg-blue-800 h-44">
                <div>a</div>
                <div>b</div>
                <div>c</div>
            </div>
            <div class="text-center mt-8">
                <div class="text-sm text-gray-400 mb-3">STORE DETAILS</div>
                <div class="text-lg font-bold text-gray-800 mb-1">Target</div>
                <div class="text-sm text-gray-400">Cham Towers, Plot 12 Nkruma Rd Kampala, Ug</div>
                <button class="bg-green-600 text-white p-1 rounded my-3">Chat with us</button>
            </div>
        </div>
    )
}