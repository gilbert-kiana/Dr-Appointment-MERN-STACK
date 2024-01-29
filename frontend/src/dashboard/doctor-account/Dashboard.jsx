import { useState } from "react"
import Loader from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"
import userGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import starIcon from "../../assets/images/Star.png"
import Tabs from "./Tabs"

const Dashboard = () => {

    const { data, loading, error } = userGetProfile(
        `${BASE_URL}/doctors/profile/me`
    );

    const [tab, setTab] = useState("overview")

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                {loading && !error && <Loader />}
                {error && !loading && <Error />}

                {
                    !loading && !error && (
                        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
                            <Tabs tab={tab} setTab={setTab} />
                            <div className="lg:col-span-2">
                                {data.isApproved === "pending" && (
                                    <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={"#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                        <span className="sr-only">Info</span>
                                        <div className="ml-3 text-sm font-medium">
                                            To get approval please complete your profile.We&pos;ll review
                                            manually and approve within 3 days.
                                        </div>
                                    </div>
                                )}
                                <div className="mt-8">
                                    {tab === "overview" && (
                                        <div>
                                            <div className="flex items-center gap-4 mb-10">
                                                <figure className="max-w-[200px] max-h-[200px]">
                                                    <img src={data?.photo} alt="" className="w-full" />
                                                </figure>
                                                <div>
                                                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                                                        {data.specilization} Surgeon
                                                    </span>

                                                    <h3 className="text-[22px] leading-9  font-bold text-headingColor mt-3">
                                                        Muhibur Rahman
                                                    </h3>

                                                    <div className="flex items-center gap-[6px]">
                                                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                                            <img src={starIcon} alt="" />
                                                            4.5
                                                        </span>
                                                        <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">(233)
                                                        </span>
                                                    </div>
                                                    <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                                                        doctor bio
                                                    </p>
                                                </div>
                                            </div>
                                            <DoctorAbout />
                                        </div>
                                    )}
                                    {tab === "appointments" && <div>appointments</div>}
                                    {tab === "profile" && <div>Profile Settings</div>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Dashboard