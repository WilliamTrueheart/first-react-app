import MusicList from './musicList.js';

export default function SectionTwo() {
    return (
      <div id='sectionTwo_Wrapper'>
          <div id='sectionTwo_UI'>
              <div id='defaultDiv'>
                    <div id='defaultDivNav'>
                      <div class='musicFilters' onClick={showAll}>show all</div>
                      <div class='musicFilters' onClick={hideAll}>hide all</div>
                    </div>
                    <MusicList 
                    songName1='a fire in the night'
                    albumName1='album'
                    artistName1='alabama'

                    songName2='mountain music'
                    albumName2='album'
                    artistName2='alabama'

                    songName3='stand by me'
                    albumName3='album'
                    artistName3='ben e king'

                    songName4="ain't no sunshine"
                    albumName4='album'
                    artistName4='bill withers'

                    songName5='live forever'
                    albumName5='album'
                    artistName5='billy joe shaver'
                    />
              </div>
          </div>
      </div>
    )
  }
  const showAll = () => {
    document.getElementById('musicItem1').style.display = 'flex';
    document.getElementById('musicItem2').style.display = 'flex';
    document.getElementById('musicItem3').style.display = 'flex';
    document.getElementById('musicItem4').style.display = 'flex';
    document.getElementById('musicItem5').style.display = 'flex';
  }

  const hideAll = () => {
    document.getElementById('musicItem1').style.display = 'none';
    document.getElementById('musicItem2').style.display = 'none';
    document.getElementById('musicItem3').style.display = 'none';
    document.getElementById('musicItem4').style.display = 'none';
    document.getElementById('musicItem5').style.display = 'none';
  }