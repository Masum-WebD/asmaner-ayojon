import React from 'react';
import banner1 from '../Assest/Images/banner/banner1.png'

const Banner = () => {

    return (
        <div class=" bg-scroll   " style={{background: `url(${banner1})`,}}>

            <div className='bg-green-900/50 py-28'>
                <div class="text-center">
                    <div class="">
                        <h1 class="text-3xl  mb-8 text-white ">আসমানের আয়োজন একটি অলাভজনক প্রতিষ্ঠান,এখানে আমাদের কোনো আর্থিক স্বার্থ জড়িত নেই। হৃদয়ের কোনো আবেগ সঞ্চয় করে আমরা আসমানের আয়োজন টিম দ্বীনের শিক্ষামূলক প্রচারে কাজ করার চেষ্টা করছি। আমরা চাই উম্মাহর বুদ্ধিবৃত্তিক অগ্রযাত্রায় সরযেপরিমাণ অবদান রাখতে। আমরা চাই আসমানের আয়োজনে লিখা থাকুক আপনার নামও।
                                                 
                        </h1>
                        <span class="text-3xl  mb-8 text-white "> 'দুনিয়ার আবেশে,</span><br />
                                    <span class="text-3xl  mb-8 text-white ">আসমানের আয়োজন'</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;