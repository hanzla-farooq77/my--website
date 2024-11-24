import React, { useEffect, useState } from 'react'



import { InstagramEmbed } from 'react-social-media-embed';

function Instagram() {

  const[data,setdata]=useState([]);
 
 
  useEffect(()=>{
    fetch('https://graph.instagram.com/me?fields=id,username,followers_count&access_token=IGQWRPU0FBQl9pVTUtT2U0Ty1nWXkzZAmh6RXdjTzRUMmNNc3FwanVER0VUX2p1ZAmZAOTzBkR0s0Tm9XMll0QVpXNTdiTFJNUHpNaGF5cG9xbUNFM2h1TlBmcm1CMGp0cllQazRFa3RQSnFQekhPeDBFY1Bpam5lRkEZD')
    .then(res => res.json())
    .then(data => {
     setdata(data)
     console.log(data)
    })
    .catch(error => console.error('Error:', error));
  },[])


  return (
    <>
  <div>
    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate-pulse shadow-xl">Instagram</h1>
    <br />
    <h1 className='text-2l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate-pulse '>Account: {data.username}</h1>
    <h1 className='text-2l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate-pulse '>Following: 367</h1>
    <h1 className='text-2l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate-pulse '>Followers: 150</h1>
    <br />
     <div style={{ display: 'flex', justifyContent: 'center' }}>
     <InstagramEmbed url="https://www.instagram.com/p/DCmT3Ppi4-i/" width={500} height={900} />
     <br />
     <br />
  

</div>

  </div>
    </>
  )
}

export default Instagram
