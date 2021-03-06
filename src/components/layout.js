import React from "react";
import img from "../image/shopping-cart.svg";
import earPhone from "../image/ear-phone.jpg";
import truck from "../image/truck.png";
import game from "../image/game-1.jpg";
import empty from "../image/avatar.png";
import chat from "../image/chat.png";
import iphone from "../image/iphone.jpg";


export const Layout = () => {
    return(
        <div class="border-gray-200 mt-7 border-t">
            <div class="bg-gray-100 w-2/5 h-10 flex -mt-6 m-auto rounded-md">
                <input class="w-full bg-transparent pl-2 placeholder-gray-500 text-lg outline-none" type="search" id="search" placeholder="Search for products..."/>
                <span><img class="w-12 inline bg-yellow-400 p-2 h-10" src={img} alt="search_icon"/></span>
            </div>
            <div class="flex px-20 h-98">
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
                            <img class="w-16 h-20 rounded-sm bg-gray-200 object-cover bg-no-repeat bg-center" src={game} alt=""/>
                            <div class="mt-5 ml-4">
                                <p class="text-gray-600">Kids 2px cloth face masks</p>
                                <p class="text-gray-400">UGX 184,000</p>
                            </div>
                        </div>
                        <div class="border-2 border-blue-800 w-20 p-1 text-center mt-14 mr-10 text-sm">+ Add</div>
                    </div>
                    <div class="flex justify-between mt-5">
                        <div class="flex">
                            <img class="w-16 h-20 rounded-sm bg-gray-200" src={earPhone} alt=""/>
                            <div class="mt-5 ml-4">
                                <p class="text-gray-600">Kids 2px cloth face masks</p>
                                <p class="text-gray-400">UGX 184,000</p>
                            </div>
                        </div>
                        <div class="border-2 border-blue-800 w-20 p-1 text-center mt-14 mr-10 text-sm">+ Add</div>
                    </div>
                    <div class="flex justify-between mt-5">
                        <div class="flex">
                            <img class="w-16 h-20 rounded-sm bg-gray-200" src={iphone} alt=""/>
                            <div class="mt-5 ml-4">
                                <p class="text-gray-600">Kids 2px cloth face masks</p>
                                <p class="text-gray-400">UGX 184,000</p>
                            </div>
                        </div>
                        <div class="border-2 border-blue-800 w-20 p-1 text-center mt-14 mr-10 text-sm">+ Add</div>
                    </div>
                    <div class="flex justify-between mt-5">
                        <div class="flex">
                            <img class="w-16 h-20 rounded-sm bg-gray-200" src={earPhone} alt=""/>
                            <div class="mt-5 ml-4">
                                <p class="text-gray-600">Kids 2px cloth face masks</p>
                                <p class="text-gray-400">UGX 184,000</p>
                            </div>
                        </div>
                        <div class="border-2 border-blue-800 w-20 p-1 text-center mt-14 mr-10 text-sm">+ Add</div>
                    </div>
                </div>
                <div class="ml-10">
                    <div class="text-xl font-semibold">Bag <span class="bg-blue-700 px-2 text-gray-300 rounded-sm ml-2 text-lg">0</span></div>
                    <div class="w-56 text-center mt-7">
                        <div class="w-20 m-auto"><img src={empty} alt=""/></div>
                        <div>
                            <div class="font-semibold text-gray-700 mt-5">It's empty here</div>
                            <div class="text-gray-600">Start shopping to add items to your bag</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex text bg-blue-800 h-44 justify-center pt-14">
                <div class="w-56 text-center">
                    <img class="w-10 h-8 m-auto" src={truck} alt="delivery_truck"/>
                    <span class="text-lg font-medium text-gray-200">Fast Delivery</span>
                </div>
                <div class="w-56 text-center">
                    <img class="w-10 h-8 m-auto" src={truck} alt="delivery_truck"/>
                    <span class="text-lg font-medium text-gray-200">Fast Delivery</span>
                </div>
                <div class="w-56 text-center">
                    <img class="w-10 h-8 m-auto" src={truck} alt="delivery_truck"/>
                    <span class="text-lg font-medium text-gray-200">Fast Delivery</span>
                </div>
            </div>
            <div class="text-center mt-8">
                <div class="text-sm text-gray-400 mb-3">STORE DETAILS</div>
                <div class="text-lg font-bold text-gray-800 mb-1">Target</div>
                <div class="text-sm text-gray-400">Cham Towers, Plot 12 Nkruma Rd Kampala, Ug</div>
                <button class="bg-green-600 text-white p-1 rounded my-3">Chat with us</button>
            </div>

            { /** Communication section */}
            <div class="fixed bottom-4 left-2 flex">
                <div class="bg-gray-200 w-20 h-8 text-center rounded-sm text-sm pt-1.5"> Menu</div>
                <div class="bg-gray-200 w-28 h-8 rounded-sm text-sm pt-1.5 mx-4 flex px-2"><img class="w-5 -mt-1 mr-1" src={img} alt=""/>Handoff</div>
                <div class="bg-gray-200 w-auto h-8 rounded-sm text-sm pt-1.5 flex px-2"><img class="w-4 h-6 pt-2 -mt-1 mr-1" src={chat} alt=""/><span class="whitespace-nowrap">13 comments</span></div>
            </div>
        </div>
    )
}