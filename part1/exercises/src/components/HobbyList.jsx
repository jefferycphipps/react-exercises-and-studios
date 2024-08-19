
function HobbyList(){
    let hobbyLinks =["https://www.fortnite.com/?lang=en-US","https://www.amazon.com/s?k=toasters%E2%80%99&adgrpid=1334809518434292&hvadid=83425858170201&hvbmt=be&hvdev=c&hvlocphy=89421&hvnetw=o&hvqmt=e&hvtargid=kwd-83426645879485%3Aloc-190&hydadcr=16124_13610149&msclkid=71f82cf169341a24fe334a32f5ff3c55&tag=mh0b-20&ref=pd_sl_dq6y3w9lm_e" ];

    return (
        <div>
            <p><a href = {hobbyLinks[0]}>Fortnite</a></p> 
            <p><a href = {hobbyLinks[1]}>Toasters</a></p>
        </div>
        
    );


} 

export default HobbyList;