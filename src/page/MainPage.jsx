import Maincard from "../components/Maincard"


function Mainpage() {
    return (
        < > 
        <div className="relative top-12">
            <div className="mx-auto max-w-full py-2 sm:py-2 " >
                <div className="px-4 py-2 sm:px-0">
                    <div className=" mx-auto">
                        <div className="flex flex-wrap items-center justify-center mx-auto ">
                            {/* {demo.map((item) => (
                                <Maincard key={item.item} />
                            ))} */}
                            <Maincard key={1} projectid={1} />
                            <Maincard key={2} projectid={2} />
                            <Maincard key={3} projectid={3}/>
                            <Maincard key={4} projectid={4}/>
                            <Maincard key={5} projectid={5}/>
                            <Maincard key={6} projectid={6}/>
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            <Maincard key={1} />
                            

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)
}

export default Mainpage