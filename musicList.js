export default function musicList(props) {
    return (
      <>
      <div class='musicItem musicItem_Alabama' id='musicItem1'>
        <div class='musicBackDrop'></div>
        <h3 class='songNames'>{props.songName1}</h3>
        <h4 class='albumNames'>{props.albumName1}</h4>
        <h4 class='artistNames'>{props.artistName1}</h4>
      </div>
      <div class='musicItem musicItem_Alabama' id='musicItem2'>
         <div class='musicBackDrop'></div>
         <h3 class='songNames'>{props.songName2}</h3>
         <h4 class='albumNames'>{props.albumName2}</h4>
         <h4 class='artistNames'>{props.artistName2}</h4>
       </div>
       <div class='musicItem' id='musicItem3'>
         <div class='musicBackDrop'></div>
         <h3 class='songNames'>{props.songName3}</h3>
         <h4 class='albumNames'>{props.albumName3}</h4>
         <h4 class='artistNames'>{props.artistName3}</h4>
       </div>
       <div class='musicItem' id='musicItem4'>
         <div class='musicBackDrop'></div>
         <h3 class='songNames'>{props.songName4}</h3>
         <h4 class='albumNames'>{props.albumName4}</h4>
         <h4 class='artistNames'>{props.artistName4}</h4>
       </div>
       <div class='musicItem' id='musicItem5'>
         <div class='musicBackDrop'></div>
         <h3 class='songNames'>{props.songName5}</h3>
         <h4 class='albumNames'>{props.albumName5}</h4>
         <h4 class='artistNames'>{props.artistName5}</h4>
       </div>
       </>
    )
  }

