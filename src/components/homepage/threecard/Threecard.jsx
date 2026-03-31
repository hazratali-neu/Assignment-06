import React from 'react';

const Threecard = () => {
    return (
        <div>
            <h1 className='text-center text-[#101727] mb-4 font-extrabold text-5xl'>Simple, Transparent Pricing</h1>
            <p className='text-center text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3'>
                <div className='p-6  space-y-2 rounded-2xl'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className='text-[#101727] text-2xl font-bold'>Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                            <span className="text-4xl  font-bold">$0 <span className='text-[#627382] text-[20px]'>/mo</span></span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full btn-block">Get Started Fre</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' p-6 space-y-1 rounded-2xl'>
                    <div className="card  bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm">
                        <div className="card-body">
                            <h2 className='text-white text-2xl font-bold'>Pro</h2>
                            <p className='text-[#FFFFFF]'>Best for professionals</p>
                            <span className="text-4xl  font-bold">$29 <span className='text-[#627382] text-[20px]'>/mo</span></span>
                            <ul className="mt-2 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Unlimited projects</span>
                                </li>
                                 <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Cloud sync</span>
                                </li>
                                 <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#FFFFFF]'>Advanced analytics</span>
                                </li>

                            </ul>
                            <div>
                                <button className="btn bg-[#FFFFFF] text-[#9514FA] rounded-full btn-block">Get Started Fre</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6 space-y-2 rounded-2xl'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className='text-[#101727] text-2xl font-bold'>Enterprise</h2>
                            <p className='text-[#627382]'>For teams and businesses</p>
                            <span className="text-4xl  font-bold">$99 <span className='text-[#627382] text-[20px]'>/mo</span></span>
                            <ul className="mt-2 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='font-medium text-[#627382]'>Custom branding</span>
                                </li>

                            </ul>
                            <div>
                                <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full btn-block">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Threecard;