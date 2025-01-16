import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Card } from './components/card'
import Header from './components/header'
import { around_project, goodThings, needImprovements, overViews, Project_amenities, property_advantages, Specifications } from './data/data'
import Collapsible from './components/collapsible'

import c1 from '../public/content/c1.avif'
import c2 from '../public/content/c2.avif'
import c3 from '../public/content/c3.avif'
import c4 from '../public/content/c4.avif'

import b1 from '../public/content/b1.avif'
import b2 from '../public/content/b2.avif'
import b3 from '../public/content/b3.avif'

import userImage from '../public/user.webp'


import propertyIcon from '../public/icons/viewOnMap.3e01b667.svg'
import Modal from './components/modal'
import ReviewCard from './components/reviewCard'
import { GiBurningRoundShot, GiStoneWall } from 'react-icons/gi'
import { PiBuildingApartmentBold, PiDropboxLogo } from 'react-icons/pi'
import { IoSettings } from 'react-icons/io5'
import { SiTicktick } from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
import { cn } from './libs/utils'
import { MdFlashOn } from 'react-icons/md'
import CustomSwiper from './components/customSwiper'
import { TbDownload } from 'react-icons/tb'
import { IoMdCall } from 'react-icons/io'
import FloorPlanning from './components/floorPlanning'
import CustomGoogleMap from './components/googleMap'
import Slider from './components/slider'
import { TiTick } from 'react-icons/ti'


function App() {

  const [showAll,setShowAll] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const [showDownloadModal,setShowDownloadModal] = useState(false);
  const [isDownloaded,setIsDownloaded] = useState(false);
  const [showMorePhase2,setShowMorePhase2] = useState(false);

  const slides =     [
          {
              img :  <img src={b1} />
          },
          {
              img :  <img src={b2} />
          },
          {
              img :  <img src={b3} />
          },
          {
              img :  <img src={b3} />
          },
      ]


  const slides2 =     [
          {
              img :  <img src={c1} />
          },
          {
              img :  <img src={c2} />
          },
          {
              img :  <img src={c3} />
          },
          {
              img :  <img src={c4} />
          },
          {
              img :  <img src={c1} />
          },
          {
              img :  <img src={c2} />
          }
      ]

  // const divRef = useRef(null); // Reference to the div

    const sectionRefs = useRef([]);
    const [activeTab, setActiveTab] = useState(0);

    const handleScroll = () => {
      // const scrollPosition = divRef.current.scrollTop;
      // // console.log('scrollPosition',sectionRefs)
      // sectionRefs.current.forEach((section, index) => {
      //   if (section) {
      //     const offsetTop = section.offsetTop;
      //     const offsetBottom = offsetTop + section.offsetHeight;
      //     console.log('sections',index,offsetTop,offsetBottom,' sp ',scrollPosition);
      //     if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 100) {
      //       setActiveTab(index);
      //     }
      //   }
      // });

      const scrollPosition = window.scrollY;
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 100) {
            setActiveTab(index);
          }
        }
      });

    };
  
    const scrollToSection = (index) => {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(index);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);



  const content1 = () => {
    return (
    <Card className='border-green-200 border-[16px]' >
      <p className='font-medium lg:text-xl' >Why Ma Sarada Upavan Phase II?</p>
      <ul className='mt-2 text-sm' >
        {(property_advantages.map((advantage)=>{
          return <li className='mt-1' >{advantage.title}</li>
        })).splice(0,showAll?10:4)}
      </ul>
      <div className='mt-4' >
        <p className='text-center text-blue cursor-pointer' onClick={()=>setShowAll(!showAll)} > {showAll ? "View Less" : "View More"} Highlights</p>
      </div>
    </Card>
    )
  }

  const content5 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Project Amenities</p>
      </div>
      <div className='grid grid-cols-4 lg:grid-cols-6 place-items-start mt-4 gap-6 ' >
        {Project_amenities.map((amenitie)=>{
          return <div className='grid place-items-center text-center w-full opacity-60' >
            {amenitie.icon}
            <p className=' text-xs lg:text-sm text-center mt-2' >{amenitie.title}</p>
            </div>
        })}
      </div>
    </Card>
    )
  }

  const content2 = () => {
    return (
      <Card>
      <div className='flex gap-x-6' >
        <div>
          <img src={propertyIcon} className='w-14' />
        </div>
        <div>
            <p className='text-sm' >Property Location</p>
            <p className='font-medium text-sm' >Bommasandra, South Bangalore, South Bangalore, Bande Nalla Sandra</p>
        </div>
      </div>
      <Card className='bg-gray mt-4 space-y-4' >
          <p className='text-sm font-medium' >Around This Project</p>
          <div className='flex overflow-x-auto no-scrollbar gap-4' >

            {around_project.map((around)=>{
              return <Card className='text-sm min-w-64' >
                <p className='text-xs font-medium' >{around.title}</p>
                <p className='opacity-60' >{around.desc1}</p>
                <p className='opacity-60' >{around.desc2}</p>
              </Card>
            })}

          </div>
      </Card>
    </Card>
    )
  }

  const content3 = () => {
    return (
      <Card >
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Ma Sarada Upavan Phase II Overview</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5 text-sm' >
          {overViews.map((Overview)=>{
            return <div className='flex gap-2 opacity-60' >
              <div>
                  {Overview.icon}
              </div>
              <div>
                <p  className='opacity-60' >{Overview.title}</p>
                <p className='text-xs lg:text-sm' >{Overview.data}</p>
              </div>
            </div>
          })}
      </div>
    </Card>
    )
  }

  const content4 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >More About Ma Sarada Upavan Phase II</p>
      </div>
      <div className='mt-4 text-sm' >
        <p>Upavan is a residential project spreading across 2.2 acres of land on the fringes of Bengaluru The project comprises 120 units in total with 2 and 3BHK,2BHK Duplex,3BHK Duplex flats,well ventilated and designed to let in ample light.</p>
        {showMorePhase2 && <div className='space-y-4' >
          <p>The project is blanketed in various elements of landscape to promote mindfulÂ  living.</p>
          <p>Project Name: Masarada UPAVANA</p>
          <p>Total Land area: 2.2Acres</p>
          <p>Total no of Units: 120 units Ground +3 floors</p>
          <p>Configuration: 2,3,3Bhk duplex</p>
          <p>Approval : BMRDA</p>
          <p>Rera: PRM/KA/RERA/1251/308/PR/141022/005324</p>
          <p>Amenities: Mythological tree corners,Miyyawaki plantations, Reception/Waiting lounge,Board Games, Games zone ( Country games)Club houseÂ  (AIKYAM 8000sft) indoor games,Gymnasium,Multipurpose hall,cafeteria many more.... Badminton Court, Pets Park and many more</p>
        </div>}

      <div className='mt-4' >
        <p className='text-center text-blue cursor-pointer' onClick={()=>setShowMorePhase2(!showMorePhase2)} > {showMorePhase2 ? "Show Less" : "Show More"}  about Project</p>
      </div>

      </div>
    </Card>
    )
  }

  const content6 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Project Specifications</p>
      </div>
      <div className='mt-4' >
        
            <Collapsible title="Floor & Counter" icon={<PiDropboxLogo />} >
              <div className='grid grid-cols-3 gap-4 text-sm' >
                  {Specifications[0].data.map((spec)=>{
                      return <div>
                        <p className='opacity-60' >{spec.title}</p>
                        <p>{spec.type}</p>
                      </div>
                  })}
              </div>
            </Collapsible>

            <Collapsible title="Fitting" icon={<IoSettings />} >
              <div className='grid grid-cols-3 gap-4 text-sm' >
                  {Specifications[1].data.map((spec)=>{
                      return <div>
                        <p className='opacity-60' >{spec.title}</p>
                        <p>{spec.data}</p>
                      </div>
                  })}
              </div>
            </Collapsible>

            <Collapsible title="Wall & Ceiling" icon={<GiStoneWall />} >
              <div className='grid grid-cols-3 gap-4 text-sm' >
                  {Specifications[2].data.map((spec)=>{
                      return <div>
                        <p className='opacity-60' >{spec.title}</p>
                        <p>{spec.type}</p>
                      </div>
                  })}
              </div>
            </Collapsible>
      </div>
    </Card>
    )
  }

  const content7 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='opacity-60 text-sm' >Resident reviews for</p>
        <p className='font-medium text-lg' >Bommasandra</p>
      </div>
      <div className='mt-4' >
        <p className='font-medium' >Ratings based on features </p>

        <div className='grid grid-cols-4 gap-4 mt-5' >
            <div className='text-center' >
              <p>4/5</p>
              <p className='text-xs opacity-60' >Connectivity</p>
            </div>
            <div className='text-center' >
              <p>4/5</p>
              <p className='text-xs opacity-60' >Neighbourhood</p>
            </div>
            <div className='text-center' >
              <p>4/5</p>
              <p className='text-xs opacity-60' >Safety</p>
            </div>
            <div className='text-center' >
              <p>4/5</p>
              <p className='text-xs opacity-60' >Livability</p>
            </div>
        </div>

        <div className='grid lg:grid-cols-2 mt-5 border-t py-4 gap-10' >
            <div className='lg:border-r' >
              <p className='font-medium' > <SiTicktick className='inline mr-1 text-red-500 mb-1' /> Good things here</p>
              <div className='flex flex-wrap gap-2 mt-4' >
                {goodThings.map((text)=>{
                  return <p className='p-2 px-4 bg-gray rounded-lg text-xs' >{text}</p>
                })}
              </div>
            </div>
            <div>
              <p className='font-medium' > <FaTools className='inline mr-1 text-red-500 mb-1' /> Things that need improvement</p>
              <div className='flex flex-wrap gap-2 mt-4' >
                {needImprovements.map((text)=>{
                  return <p className='p-2 px-4 bg-gray rounded-lg text-xs' >{text}</p>
                })}
              </div>
            </div>
        </div>

        <div className='mt-4 bg-slate-50 p-4 rounded-lg' >
            <p className='font-medium text-sm' >All resident reviews (8 reviews)</p>
            <div className='flex gap-2 overflow-x-auto no-scrollbar mt-4' >
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
        </div>

      </div>
    </Card>
    )
  }

  const content8 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Frequently Asked Questions</p>
      </div>
      <div className='mt-4' >
        
            <Collapsible title="What is the starting price of Ma Sarada Upavan Phase II?" >
                <p>The price of Ma Sarada Upavan Phase II starts from Rs. 76.71 L.</p>
            </Collapsible>

            <Collapsible title="What is the price range of Ma Sarada Upavan Phase II?" >
                <p>Ma Sarada Upavan Phase II offers 2 BHK, 3 BHK, units. The price range of these units are as follows:- 2 BHK - From Rs. 76.71 L to Rs. 1.08 Cr, 3 BHK - From Rs. 81.05 L to Rs. 1.51 Cr.</p>
            </Collapsible>

            <Collapsible title="How many floors are available in Ma Sarada Upavan Phase II?" >
                <p>There are 1 towers with 4 floors each, in Ma Sarada Upavan Phase II.</p>
            </Collapsible>
      </div>
    </Card>
    )
  }

  const content10 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Project Brochure</p>
      </div>
      <div className='' >
        <CustomSwiper slides={slides} />
        <div className='grid w-full place-items-center mt-5' >
          <button className='border border-blue px-4 p-2 rounded-md text-blue ' onClick={() => setShowDownloadModal(true)} > <TbDownload className='mr-1 mb-1 inline ' /> Download Brochure</button>
        </div>
      </div>
    </Card>
    )
  }
  const content9 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Photos & Videos: Tour this project virtually</p>
      </div>
      <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4' >

        <div className='rounded-md overflow-hidden' >
          <img src={c1} alt="" />
        </div>
        <div className='rounded-md overflow-hidden' >
          <img src={c2} alt="" />
        </div>
        <div className='rounded-md overflow-hidden' >
          <img src={c3} alt="" />
        </div>
        <div className='rounded-md overflow-hidden relative' >
          <img src={c3} alt="" />
            <div className='absolute inset-0 bg-black bg-opacity-50 grid place-items-center cursor-pointer' onClick={()=>setShowModal(true)} >
              <p className='text-white font-medium text-xl text-center' >+ <br />24 More</p>
            </div>
        </div>
      </div>
    </Card>
    )
  }

  const content11 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Contact Sellers</p>
      </div>
      <div className='mt-4 grid md:grid-cols-2 gap-4 gap-x-10' >

          <div className='flex justify-between items-center' >
            <div className='flex gap-2 items-center' >
              <div className='w-10 h-10' >
                <img src={userImage} className='w-full h-full object-cover' alt="" />
              </div>
              <div className='text-xs' >
                <p className='font-semibold' >Ghan Developres</p>
                <p className='opacity-30' >developer</p>
                <p className='font-semibold'>47.79L - 60L</p>
              </div>
            </div>
            <button className='text-xs bg-green-300 px-4 p-2 rounded-md' >Contact</button>
          </div>

          <div className='flex justify-between items-center' >
          <div className='flex gap-2 items-center' >
              <div className='w-10 h-10' >
                <img src={userImage} className='w-full h-full object-cover' alt="" />
              </div>
              <div className='text-xs' >
                <p className='font-semibold' >Ghan Developres</p>
                <p className='opacity-30' >developer</p>
                <p className='font-semibold'>47.79L - 60L</p>
              </div>
            </div>
            <button className='text-xs bg-green-300 px-4 p-2 rounded-md' >Contact</button>
          </div>

      </div>
    </Card>
    )
  }

  const content12 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Price & Floor Plan</p>
      </div>
      <div className='mt-4' >
        <FloorPlanning />
      </div>
    </Card>
    )
  }

  const content13 = () => {
    return (
      <Card>
      <div className='border-b py-4' >
        <p className='font-medium lg:text-lg' >Explore Neighbourhood - Map View</p>
      </div>
      <div className='mt-4' >
        <CustomGoogleMap />
      </div>
    </Card>
    )
  }

  const sections = [
    { id: 1, title: 'Overview / Home', content: content1() },
    { id: 2, title: 'Highlights', content: content2() },
    { id: 3, title: 'Around This Project', content: content3() },
    { id: 4, title: 'More About Project', content: content4() },
    { id: 5, title: 'Photos & Videos: Tour this project virtually', content: content9() },
    { id: 6, title: 'Project Brochure', content: content10() },
    { id: 12, title: 'Floor Planning', content: content12() },
    { id: 13, title: 'Map View', content: content13() },
    { id: 7, title: 'Tour This Project', content: content5() },
    { id: 8, title: 'Amenities', content: content6() },
    { id: 9, title: 'Ratings And Reviews', content: content7() },
    { id: 10, title: 'Frequently Asked Questions', content: content8() },
    { id: 11, title: 'Contact Sellers', content: content11() },
  ];

  return (
    <>


      <Header />
      {showModal && <Modal onClose={()=>setShowModal(false)} >
            <div className='grid grid-cols-2 text-white' >
                <div>
                    <p>Ma Sarada Upavan Phase II</p>
                    <p>₹76.71 L - 1.51 Cr</p>
                </div>
                <div className='hidden lg:block' >
                    <button className='bg-green-600 p-2 px-4 rounded-md float-right' >Contact Developer</button>
                </div>
            </div>
            <Slider />
      </Modal> }

      {showDownloadModal && <Modal onClose={()=>setShowDownloadModal(false)} >
            <div className='grid place-items-center' >
              {isDownloaded ? <div className='p-3 bg-white md:w-1/3 rounded-md shadow-lg grid place-items-center gap-2' >
                  <div className='bg-green-400 rounded-full p-2' >
                    <TiTick size={35} className='text-white' />
                  </div>
                  <p>Congratulations</p>
                  <p className='text-sm' >Your brochure is starting to download</p>
                  <div className='mt-5 space-y-6' >
                      <p>You can contact seller for more details</p>
                      <div className='flex gap-2 mt-2 justify-center' >
                        <div>
                          <div className='bg-green-700 p-3 rounded-full text-center text-sm text-white' >
                            <p>MS</p>
                          </div>
                        </div>
                        <div className='text-xs' >
                          <p className='font-bold' >Ma Sarada Constructions</p>
                          <span>Developer</span>
                          <p>+9189045</p>
                        </div>
                      </div>
                      <button className='w-full p-2 text-white bg-blue rounded-md text-sm' >Contact Developer</button>
                  </div>
                </div> :
              <div className='p-3 bg-white md:w-1/3 rounded-md shadow-lg' >
                  <p className='font-medium' >Contact Seller</p>
                  <div className='flex gap-2 mt-2' >
                      <div>
                        <div className='bg-green-700 p-3 rounded-md text-center text-sm text-white' >
                          <p>MS</p>
                        </div>
                      </div>
                      <div className='text-xs' >
                        <p className='font-bold' >Ma Sarada Constructions</p>
                        <span>Developer</span>
                        <p>+9189045</p>
                      </div>
                  </div>

                  <div className='text-sm mt-5' >
                    <p className='font-medium' >Please share your contact</p>
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Name' />
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Phone' />
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Email' />
                    <select className='bg-transparent border-b p-2 w-full text-sm mt-5' >
                      <option value="">Select Type</option>
                      <option value="">2 BHK</option>
                      <option value="">3 BHK</option>
                    </select>
                  </div>

                  <a href="../public/content/browcher.pdf" onClick={()=>setIsDownloaded(true)} download="CustomFileName.pdf" className='border border-blue px-4 p-2 rounded-md text-blue w-full mt-5 block text-center ' > <TbDownload className='mr-1 mb-1 inline ' /> Download Brochure</a>

              </div>
              }
            </div>
      </Modal> }

      <div className='bg-gray w-full md:hidden sticky top-[48px] z-10 p-2 flex justify-between items-center' >
          <p className='text-xs' >Ma Sarada Upavan Phase II</p>

          <div className='rounded-full p-1 bg-green-400 text-white' >
            <IoMdCall size={12} />
          </div>
      </div>
      

      <div className='grid place-items-center pb-4 lg:p-5 bg-white' >
          <div className='lg:w-5/6 grid lg:grid-cols-2 order-2 lg:order-1 px-5 lg:px-0' >
              <div className='space-y-3 grid ' >
                <p className='font-medium lg:text-xl order-2 lg:order-1' >Ma Sarada Upavan Phase II</p>
                <p className='text-sm order-1 lg:order-2 opacity-60 lg:opacity-100'>By Ma Sarada Constructions Bangalore</p>
                <p className='opacity-60 text-xs lg:text-base  order-3 lg:order-3' >Bommasandra, South Bangalore, South Bangalore, Bande Nalla Sandra</p>
              </div>
              <div className='lg:text-right space-y-3 mt-4 lg:mt-0 bg-slate-50 lg:bg-transparent' >
                <p className='opacity-60 text-xs lg:hidden' >Price</p>
                <p className='font-medium lg:text-xl' >₹ 76.71 L - 1.51 Cr</p>
                {/* <p className='text-blue text-xs lg:text-base' >EMI starts at ₹38.08 K</p> */}
                <button className='bg-blue px-4 p-2 text-white font-medium rounded hidden lg:inline' >Contact Developer</button>
              </div>
          </div>

          <div className='lg:w-5/6 lg:mt-5 order-1 lg:order-2' >
            <div className='grid grid-cols-4 gap-2 lg:h-96 overflow-hidden' >
                <div className=' col-span-4 lg:col-span-3 bg-slate-500 h-full overflow-hidden hidden lg:block' >
                  <img src={c1} className='object-cover w-full h-full' />
                </div>
                <div className=' col-span-4 lg:col-span-3 bg-slate-500 h-full overflow-hidden lg:hidden' onClick={()=>setShowModal(true)} >
                  {/* <img src={c1} className='object-cover w-full h-full' /> */}
                  <CustomSwiper slides={slides2} navigation={false} />
                </div>
                <div className='space-y-2 lg:flex h-full flex-col hidden ' >
                  <div className='col-span-3 bg-slate-500 flex-1 ' >
                    <img src={c2} className='object-cover w-full h-full' />
                  </div>
                  <div className='col-span-3 bg-slate-500 flex-1 relative' >
                    <img src={c3} className='object-cover w-full h-full' />
                    <div className='absolute inset-0 bg-black bg-opacity-70 grid place-items-center cursor-pointer' onClick={()=>setShowModal(true)} >
                      <p className='text-white font-medium text-xl text-center' >+ <br />24 More</p>
                    </div>
                  </div>
                </div>
            </div> 
          </div>

          <div className='hidden w-5/6 mt-5 lg:grid grid-cols-4 items-center text-center order-3 lg:order-3' >
              <div className='border-r' >
                <p>2, 3 BHK Apartments</p>
                <span>Configurations</span>
              </div>
              <div className='border-r' >
                <p>Sep, 2025</p>
                <span>Possession Starts</span>
              </div>
              <div className='border-r' >
                <p>Price on request</p>
                <span>Avg. Price</span>
              </div>
              <div>
                <p>1066 - 2097 sq.ft.</p>
                <span>(Super Builtup Area)</span>
              </div>
          </div>

      </div>

      <div className='grid place-items-center sticky top-[84px] md:top-[48px] z-50 bg-white' >
        <div className=' w-full lg:w-5/6 overflow-hidden' >
            <div className='flex overflow-x-auto  no-scrollbar gap-3 lg:p-2' >
              {sections.map((section, index) => (
                <button className={cn("border-b-4 border-white min-w-max text-xs lg:text-sm pt-2 ",{
                  
                })}
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  style={{
                    borderColor: activeTab === index ? '#007bff' : '#f8f9fa',
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
        </div>
      </div>

      <div className='lg:flex justify-center gap-5 px-2 md:px-5  lg:px-20 py-10 space-y-4 w-full' >

        <div className='lg:flex-grow lg:w-[60%]' >

          <div className='w-full overflow-clip space-y-4' >
            {sections.map((section, index) => (
                  <div
                    key={section.id}
                    ref={(el) => {
                      if (el) {
                        // Assign only if the element exists
                        sectionRefs.current[index] = el;
                      }
                    }}
                  >
                    {section.content}
                  </div>
            ))}
          </div>
        </div>

        <div className='lg:w-[40%]' >
        
            <div className='bg-slate-50 sticky top-32 p-2  grid place-items-center' >
              <div className='space-y-4' >

              <div className='p-2 bg-yellow-100 bg-opacity-50 px-4 border border-yellow-400 rounded-md text-sm ' >
                <p><MdFlashOn className='text-yellow-600 inline' /> Nice choice. Let’s connect with the Developer</p>
              </div>

                <div className='p-3 bg-white rounded-md shadow-lg' >
                  <p className='font-medium' >Contact Seller</p>
                  <div className='flex gap-2 mt-2' >
                      <div>
                        <div className='bg-green-700 p-3 rounded-md text-center text-sm text-white' >
                          <p>MS</p>
                        </div>
                      </div>
                      <div className='text-xs' >
                        <p className='font-bold' >Ma Sarada Constructions</p>
                        <span>Developer</span>
                        <p>+9189045</p>
                      </div>
                  </div>

                  <div className='text-sm mt-5' >
                    <p className='font-medium' >Please share your contact</p>
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Name' />
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Phone' />
                    <input type="text" className='bg-transparent border-b p-2 w-full text-sm mt-5' placeholder='Email' />
                  </div>
                </div>

                <div className='text-xs font-medium mt-5 space-y-2' >
                  <div>
                  <input type="checkbox" className='mt-0' /> <span>I agree to be contacted by Housing and agents via WhatsApp, SMS, phone, email etc</span>
                  </div>
                  <div>
                    <input type="checkbox" className='mt-0' /> <span>I am interested in Home Loans</span>
                  </div>
                </div>

                <button className='bg-slate-500 rounded-md p-2 text-center text-sm font-medium w-full mt-5 text-white' >Get Contact Details</button>
              </div>
            </div>
        
        </div>

      </div>

      <div className='footer lg:bg-black h-36 mt-10 '  >

      </div>

      {!showDownloadModal &&<div className='fixed bottom-0 inset-x-0 bg-white border-t-pink-100 border-t-8 p-2 py-6 shadow-2xl z-[250] rounded-ss-lg rounded-se-lg lg:hidden ' >
              <div className='flex gap-4' >
                  <button className='flex-1 border-purple-500 border text-purple-500 text-xs rounded-lg' > Get Callback </button>
                  <button className='flex-1 bg-green-300 text-xs rounded-lg' > Contact Developer </button>
              </div>
      </div> }



    </>
  )
}

export default App
