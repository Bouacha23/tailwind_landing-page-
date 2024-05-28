import laptop from "../assets/laptop.jpg"
function Laptop() {
    return (
        <div className="laptop bg-white ">
            <div className="container m-auto p-4 grid md:grid-cols-2  ">
                <img src={laptop} />
                <div className=" md:mt-12 text-left bg-white py-8 md:flex  md:flex-col md:justfiy-center md:items-center ">
                    <p className="font-bold text-green-500 uppercase">data analytics dashboard</p>
                    <h1 className=" my-2 text-xl capitalize text-black"> mangae data anlytic centrally </h1>
                    <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, voluptate tenetur laboriosam mollitia minima sequi quos voluptatem, vitae, sed adipisci quaerat asperiores impedit officia inventore in! Totam pariatur repellendus quo.</p>
                    <button className=" btn bg-black text-green-500 capitalize ">get started </button>
                </div>
               
            </div>
        </div>
    )
}

export default Laptop;