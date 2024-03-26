
import React from 'react'
const Data=[
  {title:"Movies Now Showing in Pune",
   links:["Shitaan","Yodha","Kung fu Panda4","Article 370","Bastar.The Neaxal Story","Dune:Part Two","Teri Baaton Mein Aisa Uljha Jiya","Manjumel Boys","Unn Sawali"]
  },
  {title:"upcoming movies in pune",
  links:["Maunam", "Jatti 15 Murrabean Wali", "Ravikula RAghu Rama", "Hazaar Vela Sholay Pahilela Manus","Mehabooba","Chow Chow Bath","Somu Sound Engineer","Dadagiri(2024)","Shadow of Life...Gobardhan Sorit","Photo"]
 },
 {
   title:"movies By genre",
   links:["Drama Movies","Comdey Movies","Romantic Movies","Thriller Movies","Adventure Movies","Action Movies","Crime Movies","Historical Movies","Fantasy Movies","Mystery Movies"]
 },
 {
   title:"Movies By Languages",
   links:["Movies in Hindi","Movies in English","Movies in Marathi","Movies in Telugu","Movies in Tamil","Movies in Chattisgarhi","Movies in Khasi","Movies in Tulu","Movies in Portuhuese","Movie in English 7D"]
 },
 {
  title:"sports events in pune",
  links:["Cricket","Football","Running","Archery","Athletics","Basketball","Baseball","Boat Race","Bowling"]
 },
 {
  title:"Events in Top Cities",
  links:["Events in Mumbai","Events in Delhi-NCR","Events in Chennai","Events in Bangalure","Events in Hyderabad","Events in Pune","Events in Ahmedabad","Events in Kolkata","Events in Kochi"]
 },
 {
  title:"cinemas in top cities",
  links:["Cinemas in Mumbai","Cinemas in Delhi-NCR","Cinemas in Chennai","Cinemas in Bangalure","Cinemas in Hyderabad","Cinemas in Pune","Cinemas in Ahmedabad","Cinemas in Kolkata","Cinemas in Kochi"]

 },
 {
  title:"Plyas in top cities",
  links:["Plays in Mumbai","Plays in Delhi-NCR","Plays in Chennai","Plays in Bangalure","Plays in Hyderabad","Plays in Pune","Plays in Ahmedabad","Plays in Kolkata","Plays in Kochi"]
 },
 {
  title:"ACTIVITIES IN TOP CITIES",
  links:["Acitivities in Mumbai","Acitivities in Delhi-NCR","Acitivities in Chennai","Acitivities in Bangalure","Acitivities in Hyderabad","Acitivities in Pune","Acitivities in Ahmedabad","Acitivities in Kolkata","Acitivities in Kochi"]

 },
 {
  title:"Movies Now Showing",
  links:["Shaitaan","Yodha","Manjummel Boys","Razkar-Silent Genocide of Hyderabad","Premalu (Telugu)","Jackle","Kung Fu Panda 4","Gaami","Article 370","Bhima"]
 },
 {
  title:"Countries",
  links:["Indonesla","Singapore","UAE","Sri Lanka","West Indies"]
 },
 {
  title:"Help",
  links:["About Us","Contact Us","Current Opening","Press Coverage","Sitemap","FAQs","Terms and Conditions","Privacy Policy"]
 },
 {
  title:"BOOKMYSHOW eXCLUSIVE",
  links:["Lollapalooza India","Superstar","BookASmile","Corporate Vouchers",'Gifts Cards',"List My Show","Offers",'Stream','Trallers']
 }


]


export const MenuLinks = () => {
  return (
    <section className='g_menu_link pt-3 pb-5 text-white'>
      <div className='container g_menu_link_text'>
        {Data.map((value,index)=>{
          return(
            <div key={index} className='my-2'>
               <h6 className='g_font_14'>{value.title.toUpperCase()}</h6>
               <div className='mt-2  fw-light g_font_12'>
                {value.links.map((eve,index)=>{
                  // if(index === 0)
                  //  return <span key={index} className='pe-2 '>{eve}</span>
                  // else
                  // return <span key={index} className='pe-2 border-start border-secondary'>{eve}</span>
                  return <span  key={index} className={`${index!== 0 ? " gap-1 pe-2 border-start border-secondary border-opacity-10":"pe-2"}`}>{eve}</span>
               })}
               </div>
              </div> 

          );
        })}
        </div>
    </section>
  )
}
