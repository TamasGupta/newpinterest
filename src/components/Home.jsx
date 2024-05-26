import React from 'react'

function Home() {
    const data = [{image:"https://images.unsplash.com/photo-1642526747027-f6de3c4d30bc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{image:"https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D"},
{image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{image:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{image:"https://images.unsplash.com/photo-1639503611585-1054af5dbfab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{image: "https://i.pinimg.com/736x/99/be/18/99be18a6f504b8113c3a0c391929e3d8.jpg"},
{image: "https://i.pinimg.com/564x/29/8a/b5/298ab5b06485ccc7a2f8d00084f6bb84.jpg"},
{image: "https://i.pinimg.com/564x/64/b2/52/64b25226b5c10d6be2d96322acd2c29a.jpg"},
{image: "https://i.pinimg.com/564x/a4/82/6d/a4826d889c0d73a87106e19bf8c00b2a.jpg"},
{image: "https://i.pinimg.com/736x/64/84/e3/6484e302a23d93af7202df3db98a1760.jpg"},
{image:"https://i.pinimg.com/564x/34/1b/17/341b178bf1f44490b7a43e8b8a900bb6.jpg"},
{image:"https://i.pinimg.com/236x/28/42/f1/2842f1ffbed988f6b5cefc8cd09c7032.jpg"},
{image:"https://i.pinimg.com/474x/f7/94/22/f79422cd9af03a49a8df01507c0cbf54.jpg"},
{image:"https://i.pinimg.com/236x/5f/7d/2f/5f7d2f4bb34184c91e33bad9735a8fc8.jpg"},
{image:"https://i.pinimg.com/236x/49/cc/cb/49cccbc8a96dc58b8e6c313b9e08bdfa.jpg"}]


  return (
    <div className='block columns-6 px-2 break-inside-avoid-column gap-4 mt-20  '>
      {
        data.map((item, index) => {
          return (<>
            <div key={index} className='w-[100] h-[50%] rounded-lg overflow-hidden mb-4' >
              <img src={item.image} alt="" className='object-none object-center object-scale-down' />
              
            </div>
            </>  )
        })
      }


    </div>
  )
}

export default Home
