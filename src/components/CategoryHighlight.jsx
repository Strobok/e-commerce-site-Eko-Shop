
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import clothing from '../assets/images/clothing.jpg'
import bedding from '../assets/images/bedding.png'
import furniture from '../assets/images/furniture.png'
import accessories from '../assets/images/accessories.png'
import homeGoods from '../assets/images/homeGoods.png'
import { ShopContext } from '../context/ShopContextProvider';


const categoryItems = [
  {src: clothing, link: 'clothing',  name: 'Clothing', row: '2', col: '4'},
  {src: bedding, link: 'bedding',  name: 'Bedding', row: '1', col: '2'},
  {src: accessories, link: 'accessories',  name: 'Accessories', row: '1', col: '3'},
  {src: homeGoods, link: 'home-goods',  name: 'Home Goods', row: '2', col: '3'},
  {src: furniture, link: 'furniture',  name: 'Furniture', row: '1', col: '5'},
];

const CategoryHighlight = () => {
  const { mobile, setCategoryName } = useContext(ShopContext)

  const handleClick = (itemName) => {
    setCategoryName(itemName);
    window.scrollTo(0, 0);
  };

  return (
    mobile ? (
    <div className='flex flex-col items-center w-full gap-4 px-8 py-8 bg-white'>
      { categoryItems.map((item)=>(
        <div key={item.name} className='relative hover1 cursor-pointer'>
        <Link onClick={() => handleClick(item.name)} to='category'>
        <img 
          className='w-[800px] h-[200px] rounded-md object-cover' 
          src={item.src} alt={item.name} />
        </Link>
        <div className='absolute bottom-4 left-4 body-xs button-sm'>{item.name}</div>
      </div>
      ))} 
    </div>) : (  
    <div className="pb-24 pt-0 md:pt-24 bg-white">
      <div className='flex mx-16  bg-white flex-nowrap'>
        <div className='flex w-full shrink-0'>
          <div className='grid w-full grid-cols-12 gap-4 bg-white grid-row-2'>
           { categoryItems.map((item)=>(
              <div key={item.name} className={`relative grid row-span-${item.row} col-span-${item.col} hover1 cursor-pointer`}>
              <Link onClick={() => handleClick(item.name)} to='category'>
              <img 
                className='object-cover w-full h-full rounded-md' 
                src={item.src} alt={item.name} />
              </Link>
              <div className='absolute bottom-2 left-3 body-xs button-sm'>{item.name}</div>
            </div>
            ))} 
          </div>
        </div>
      </div> 
    </div>
    )
  )
}

export default CategoryHighlight





// import React from 'react'
// import clothing from '../assets/images/clothing.png'
// import bedding from '../assets/images/bedding.png'
// import furniture from '../assets/images/furniture.png'
// import accesories from '../assets/images/accesories.png'
// import homeGoods from '../assets/images/homeGoods.png'
// import footWear from '../assets/images/footWear.png'
// import bath from '../assets/images/bath.jpg'


// const CategoryHighlight = () => {
//   return (
//     <div className="py-24 bg-white">
//       <div className='flex mx-16 overflow-hidden bg-white flex-nowrap'>
//         <div className='flex w-full shrink-0'>
//           <div className='grid w-full grid-cols-12 gap-4 bg-white grid-row-2'>
//             <div className='relative grid col-span-4 row-span-2'>
//               <img 
//                 className='w-[536px] h-[316px] rounded-md object-cover' 
//                 src={clothing} alt="Img1" />
//               <div  className="absolute bottom-4 left-4 body-xs button-sm ">Clothing</div>
//             </div>
//             <div className='relative grid col-span-2 row-span-1'>
//               <img 
//                 className='w-[536px] h-[150px] rounded-md object-cover' 
//                 src={bedding} alt="Img2" />
//               <div className="absolute bottom-4 left-4 body-xs button-sm ">Bedding</div>
//             </div>
//             <div className='relative grid col-span-3 row-span-1'>
//               <img 
//                 className='w-[536px] h-[150px] rounded-md object-cover' 
//                 src={accesories} alt="Img4" />
//               <div className="absolute bottom-4 left-4 body-xs button-sm ">Accesories</div>
//             </div>
//             <div className='relative grid col-span-3 row-span-2'>
//               <img 
//                 className='w-[536px] h-[316px] rounded-md object-cover' 
//                 src={homeGoods} alt="Img5" /> 
//               <div className="absolute bottom-4 left-4 body-xs button-sm ">Home Goods</div>
//             </div>
//             <div className='relative grid col-span-5 row-span-1'>
//               <img 
//                 className='w-[536px] h-[150px] rounded-md object-cover' 
//                 src={furniture} alt="Img3" />
//               <div className="absolute bottom-4 left-4 body-xs button-sm ">Furniture</div>
//             </div>
//           </div>
//         </div>
//         {/* <div className='flex shrink-0'>
//           <div className='block px-4'>
//             <img className='w-[300px] h-[150px] mb-4 rounded-md object-cover' 
//               src={footWear} alt="Img5" />
//             <img className='w-[300px] h-[150px] rounded-md object-cover' 
//               src={bath} alt="Img5" />
//           </div>
//         </div> */}
//       </div> 
//     </div>
//   )
// }

// export default CategoryHighlight