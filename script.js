alert("WELCOME, Here you can get the best soccer highlights of all time")

let Videonumber =-1;


let Getnew = ()=>{
    Videonumber++;
    fetch("https://www.scorebat.com/video-api/v3/feed/?token=NTEzMzFfMTY3Mzk1ODc1NF8zM2IzODg3OTQyNDIwODk5MTNkYTEwYjU0Y2ViMDdjYThiMmU0NmY4",{  
     method:"GET"
    })
    .then((res)=>res.json())                             // The response is coverted into JSON
    .then((data)=>{
    //    document.body.append(data.response[0].videos[0].embed)
       document.getElementById("Videoplayer").innerHTML=`${data.response[Videonumber].videos[0].embed}`
       document.getElementById("Titlebar").innerHTML=`${data.response[Videonumber].title}`
       
    }
     
    )
    .catch((error)=>{console.log(error)})     
    
}




let GetPrevious= ()=>{
    Videonumber--;
    fetch("https://www.scorebat.com/video-api/v3/feed/?token=NTEzMzFfMTY3Mzk1ODc1NF8zM2IzODg3OTQyNDIwODk5MTNkYTEwYjU0Y2ViMDdjYThiMmU0NmY4",{    
     method:"GET"
    })
    .then((res)=>res.json()) 
    .then((data)=>{
    //    document.body.append(data.response[0].videos[0].embed)
       document.getElementById("Videoplayer").innerHTML=`${data.response[Videonumber].videos[0].embed}`
    }
     
    )
    .catch((error)=>{console.log(error)}) 
}