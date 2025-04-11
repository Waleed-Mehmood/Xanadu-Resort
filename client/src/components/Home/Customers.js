import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function Customers() {
  const profileData = [
    {
      name: "Hannah Schmitt",
      location: "From Dubai",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
      avatarUrl: "https://doc.scot/wp-content/uploads/2024/02/cropped-hex-profile-pic-david-petherick-linkedin-doctor.png"
    },
    {
      name: "Liam Carter",
      location: "From London",
      quote:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
      avatarUrl: "https://cdn.prod.website-files.com/632ac1a36830f75c7e5b16f0/64f1139b7e604f2e5e42a1be_011sJ3HjgjxV8AdQWfLNH4dDQZnDNushzSJETDBXsfk.webp"
    },
    {
      name: "Sophia Reyes",
      location: "From Manila",
      quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
     avatarUrl: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
    },{
      name: "Liam Carter",
      location: "From London",
      quote:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZ75KKy6w0Rw_ExGPMO1ZcccgpjXaK-xKgQ&s"
    },{
      name: "Liam Carter",
      location: "From London",
      quote:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGwxds7x8HY9eI8jxOLup56m4Gtx_-iLzAZzHXPdgHt_JQ2J-fINVoOTXvjFdboTUHto&usqp=CAU"
    },
  ];

  return (
    <div className="bg-[#D0E4FF] py-20">
      <h1 className='text-center font-jeju text-4xl mb-12'>Our Satisfied Visitors</h1>
       {/* Inline style block */}
       <style>
{`
  .swiper-button-prev,
  .swiper-button-next {
    top: 30px !important;
    width: 40px;
    height: 40px;
    color: #525252;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 40; /* keep on top */
    position: absolute;
  }

  .swiper-button-prev {
    left: 22%;
    transform: translateX(-40px);
  }

  .swiper-button-next {
    right: 20%;
    transform: translateX(10px);
  }

  .swiper-pagination {
    top: 30px !important;
    position: absolute !important;
    width: 100%;
    text-align: center;
    z-index: 30; /* ensure on top */
    pointer-events: auto; /* ensure it's clickable */
  }
`}
</style>

      <div className="flex flex-wrap justify-center gap-8 px-4">
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
        cssMode={true}
        navigation={true}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="relative pt-20" // add top padding to make space for nav & pagination
        style={{
          position: 'relative',
          paddingTop: '80px', // gives space for arrows and bullets above
        }}
      >
        
        {profileData.map((profile, index) => (
          <SwiperSlide key={index}>
          <div key={index} className="relative w-full sm:w-[300px] md:w-[320px] lg:w-[350px] p-6">
            {/* Card Shadow Background */}
            <div className="absolute top-6 left-6 w-[90%] h-[90%] rounded-[140px_600px_300px_10px] bg-blue-300 transform -rotate-1 z-0"></div>

            {/* Main Card */}
            <div
              className="relative bg-white p-6 text-center shadow-md z-10"
              style={{
                borderTopLeftRadius: "100px",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "150px",
                borderBottomLeftRadius: "20px"
              }}
            >
              {/* Avatar */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-12">
                <h2 className="text-lg font-semibold text-gray-800">{profile.name}</h2>
                <p className="text-sm text-gray-500">{profile.location}</p>

                <div className="mt-4 relative px-4">
                  <div className="text-blue-400 text-xl mb-2">❝</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{profile.quote}</p>
                  <div className="text-blue-400 text-xl mt-2">❞</div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
       
        </Swiper>
      </div>
    </div>
  );
}

export default Customers;
