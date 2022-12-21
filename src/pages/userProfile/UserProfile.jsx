import { AdminNav } from "../../components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { GET_USER_DETAILS, GET_USER_BOOKINGS } from "../../constant/constants"
import Skeleton from "react-loading-skeleton";
import { GrLocation } from "react-icons/gr";
import { BsCalendar4 } from "react-icons/bs";
import axios from "axios"

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({ djName: '', email: '', zipCode: '', createdAt: '' })
  const [userBookings, setUserBookings] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const { user } = useSelector((state) => state.auth);
  const fetchData = async (LINK) => {
    try {
      const response = await axios.get(LINK, { headers: { Authorization: `Bearer ${user.data.token}` }, });
      return response.data.data
    }
    catch (err) { }
  }

  useEffect(() => {
    fetchData(`${GET_USER_DETAILS}${id}`)
      .then(res => setUserDetails(res.dj))
      .catch(err => err)

    fetchData(`${GET_USER_BOOKINGS}${id}`)
      .then(res => {
        setLoading(false);
        setUserBookings(res.booking)
      })
      .catch(err => err)
  }, [])

  console.log(userBookings)

  return (<>
    <AdminNav />
    <div className="mx-[41px] mt-[6em] max-sm:mx-4 max-2md:mt-[5rem]">
      <h2 className="text-[30px] font-semibold font-inter uppercase mb-[33px]">
        User PROFILE
      </h2>
      <div className="rounded-3xl shadow-item-shadow mt-2 w-full min-w-[10.375rem] pb-[2em] ">
        <div className=" w-[85%] mx-auto mt-[32px] mb-[27px]">
          <div className="pt-[3em]">
            <h3 className="mb-[25px] text-[1.2em] font-bold">Basic Information</h3>
          </div>
          <div>
            <div className="mb-2"><span className="font-bold mr-4">Name </span> <span>{userDetails.djName || '-'}</span></div>
            <div className="mb-2"><span className="font-bold mr-4">Email </span> <span>{userDetails.email || '-'}</span></div>
            <div className="mb-2"><span className="font-bold mr-4">ZipCode </span> <span>{userDetails.zipCode || '-'}</span></div>
            <div className="mb-2"><span className="font-bold mr-4">D.O.J </span> <span>{userDetails.createdAt.substring(0, 10) || '-'}</span></div>
          </div>
          <div className="pt-[3em]">
            <h3 className="mb-[25px] text-[1.2em] font-bold">User Bookings</h3>
          </div>

        </div>
        <div className="w-[85%] mx-auto max-sm:mx-4 max-2md:mt-[5rem] ">
          {loading ? (<Skeleton count={3} height={168} className="mb-16 rounded-3xl" />) :
            userBookings.length !== 0 && !loading ? (
              userBookings.map((booking) => {
                return (
                  <div key={booking._id} className="mt-[56px] w-full mb-4">
                    <div className="mt-[56px] w-full mb-4">
                      <div className="flex w-full justify-between max-xl:flex-col rounded-2xl font-inter">
                        <div className="flex max-xl:flex-col w-full justify-between">
                          <div className="shadow-item-shadow rounded-2xl min-w-[157px] ">
                            <figure className="w-full">
                              <img
                                className="min-w-[157px] max-xl:w-full max-xl:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                                src={
                                  booking.djId.profileImage
                                    ? booking.djId.profileImage
                                    : "./assets/images/mount.jpg"
                                }
                                alt="dj name"
                              />
                            </figure>
                            <div
                              className="font-bold text-[22px] 2xl:text-[1rem] pl-[4px] pt-[12px] 
                       max-xl:text-center"
                            >
                              {`${booking.djId.djName
                                ? booking.djId.djName.length > 15
                                  ? `${booking.djId.djName.substr(0, 15)}...`
                                  : booking.djId.djName
                                : "unKnown"
                                }`}
                            </div>
                          </div>
                          <div
                            className="pt-[28px] px-[29px] max-xl:flex flex-col justify-center items-center
                   font-light bg-gray-lighter font-inter text-[20px] max-2xl:text-base tracking-widest flex-auto"
                          >
                            <div className="flex items-center">
                              <span>
                                <GrLocation className="text-[1.3rem]" />
                              </span>
                              <div className="ml-[13px]">
                                <span className="text-[20px]">{`${booking.location
                                  ? booking.location.length > 10
                                    ? `${booking.location.substr(0, 10)}...`
                                    : booking.location
                                  : "unKnown"
                                  }`}</span>
                              </div>
                            </div>
                            <div className="flex items-center mt-[23px] ">
                              <span>
                                <BsCalendar4 className="text-[1rem]" />
                              </span>
                              <span className="ml-[13px]">{booking.date}</span>
                            </div>
                          </div>
                          <div
                            className="pt-[28px] px-[29px] max-xl:pt-4 max-xl:px-[10px] max-xl:flex flex-col justify-center items-center
                    bg-gray-dark  font-light  text-[20px] max-2xl:text-base tracking-widest flex-auto "
                          >
                            <div className="flex items-center">
                              <div className="ml-[13px]">
                                <span>Time: {booking.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center mt-[3.2rem] max-xl:mt-4">
                              <span className="ml-[13px]">Date: {booking.date}</span>
                            </div>
                          </div>
                          <div
                            className="pt-[28px] px-[29px] max-xl:pt-4 max-xl:px-[10px]  max-xl:flex flex-col justify-center items-center
                   bg-gray-dark font-light text-[20px] max-2xl:text-base tracking-widest flex-auto "
                          >
                            <div className="flex items-center">
                              <div className="ml-[13px] max-xl:ml-0">
                                <span>Event Name</span>

                                <p className="text-gray-light max-xl:text-center">
                                  {`${booking.event
                                    ? booking.event.length > 10
                                      ? `${booking.event.substr(0, 10)}...`
                                      : booking.event
                                    : "unKnown"
                                    }`}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center mt-[23px] max-xl:mt-4">
                              <div className="ml-[13px]  max-xl:ml-[0]">
                                <span className="max-xl:text-center block">
                                  Location
                                </span>
                                <p className="text-gray-light">{`${booking.location
                                  ? booking.location.length > 10
                                    ? `${booking.location.substr(0, 10)}...`
                                    : booking.location
                                  : "unKnown"
                                  }`}</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pt-[28px] px-[29px] max-xl:pt-4 max-xl:px-[10px] 
                     bg-gray-dark rounded-r-2xl max-xl:rounded-none  font-light
                   max-xl:flex flex-col justify-center items-center text-[20px] max-2xl:text-base 
                   tracking-widest flex-auto"
                          >
                            <div className="flex items-center justify-center ">
                              <span className="font-bold text-[20px]">
                                ${booking.bookingRate}
                              </span>
                            </div>

                            <div
                              className={`flex flex-col justify-center max-xl:mt-4 max-xl:mb-4 items-center  ${booking.status ||
                                (booking.eventStatus && booking.paymentStatus === false)
                                ? "mt-4"
                                : "mt-[3rem]"
                                }`}
                            >
                              <GrLocation className="text-[30px]" />
                              <div className="text-[15px]  mt-1 w-[max-content] font-light">
                                View on Map
                              </div>
                              {booking.status === "Decline" ? (
                                <div className="font-light w-full p-1 text-center">
                                  Declined
                                </div>
                              ) : booking.status === "Pending" ? (
                                <div className="font-light w-full p-1 text-center">
                                  Pending
                                </div>
                              ) : booking.status === "Accepted" &&
                                booking.paymentStatus === false ? (
                                <div className="w-full flex justify-center">
                                  Accepted
                                </div>
                              ) : booking.eventStatus &&
                                booking.paymentStatus &&
                                !booking.ratingStatus &&
                                booking.status !== "Decline" ? (
                                <div className="w-full flex justify-center">
                                  
                                </div>
                              ) : null}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>);
              })
            ) : (
              <div className="text-center font-semibold font-roboto ">
                No Booking Found
              </div>
              )
          }
        </div>
      </div>
    </div>
  </>)
}

export default UserProfile