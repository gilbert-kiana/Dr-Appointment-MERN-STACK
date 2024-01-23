import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                        Alan Peter
                    </span>
                </h3>
                <p className="text__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ducimus praesentium? Provident ipsum sunt eaque expedita. Ut adipisci aliquid sunt vel laudantium, recusandae unde officiis! Suscipit minima quae culpa ullam!
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formatDate("9-13-2014")} - {formatDate("3-13-2016")}
                            </span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'>
                                Phd in Neuro Surgery.
                            </p>

                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New Apollo Hospital,New York
                        </p>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formatDate("7-04-2010")} - {formatDate("8-13-2014")}
                            </span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'>
                                Phd in Neuro Surgery.
                            </p>

                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New Apollo Hospital,New York2
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Experience
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="pt-4 rounded bg-[#fff9ea]">
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formatDate("7-04-2010")} - {formatDate("08-13-2014")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            New Apollo Hospital,New York
                        </p>
                    </li>
                    <li className="pt-4 rounded bg-[#fff9ea]">
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formatDate("7-04-2010")} - {formatDate("08-13-2014")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            New Apollo Hospital,New York
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout