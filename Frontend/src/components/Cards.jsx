import React from 'react'

function Cards({item}) {
  return (
  <>
   <div className='mt-4 my-3 p-3'>
   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722631916~exp=1722635516~hmac=eee04ddf37e3a2075b9920a277b215f0ec25d516500dcb11dc6c701e6a6262fe&w=740"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
   </div>
  </>
  )
}

export default Cards
