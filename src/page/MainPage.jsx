import Maincard from "../components/Maincard"
import { useQuery , useMutation } from "@tanstack/react-query"

const projectX = [
    { projectId: "1", erp:"0" , coin:"0", name: "63-09 ทางพิเศษพระราม 3 สัญญาที่/ (MLp 06 to MLP 07)"},
    { projectId: "2", erp:"2" , coin:"0", zone: [{zname: "Facility 1"} ,{zname:"Office"} , {zname:"Facility 2"}, {zname:"Facility 3"}] ,name: "64-16 skyrise Avenue Sukhimvit 642"},
    { projectId: "3", erp:"0" , coin:"1", name: "65-16 North Pole"},
    { projectId: "4", erp:"0" , coin:"0", name: "65-12 Xim Rama3-Suksawat"},
    { projectId: "5", erp:"0" , coin:"0", name: "64-16 Skyrise Avenue Sukhumvit 64 Phase 2"},
    { projectId: "6", erp:"0" , coin:"0", zone: [{zname: "Rig1" } , {zname: "Rig2"} , {zname: "Rig3"}] ,name: "65-01 ทางพิเศษสายพระราม3 สัญญาที่ 1"},
    { projectId: "7", erp:"2" , coin:"2", name: "65-05 Aspire Sukhumvit-Rama4"},
    { projectId: "8", erp:"0" , coin:"0", name: "65-09 ทางพิเศษสายพระราม 3 - ดาวคะนอง - วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก สัญญาที่ 2"},
    { projectId: "9", erp:"0" , coin:"0", name: "65-11 Grande Centre Point Ratchadamri 2"},
    { projectId: "10", erp:"0" , coin:"0", name: "65-13 King's College International School Bangkok (Phase 3), B7 Building" },
]
  


function Mainpage() {
    // const Query = useQuery( {queryKey: ["project"], queryFn:async () => await(1000).then(() => [...projectX])})
    const token = localStorage.getItem("accessToken")
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(token)
    console.log(userData)
    return (
        < > 
            <div className="w-full flex flex-col flex-grow h-screen relative lg:top-14 top-16 ">
                <div className="flex flex-col items-center justify-center mx-auto ">
                    {projectX.map((list,idx) => (
                        <ul key={idx} className="lg:mx-auto ">
                            <li><Maincard projectid={list.projectId} erp={list.erp} coin={list.coin} projName={list.name} zone={list.zone} /></li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
)
}

export default Mainpage