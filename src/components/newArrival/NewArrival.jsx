import { FaStar } from "react-icons/fa";

const NewArrival = () => {

    const newArrivalsCategories = [
        {
            id: 1,
            name: "men's fashion",
            category: "men",
        },
        {
            id: 2,
            name: "women's fashion",
            category: "women",
        },
        {
            id: 3,
            name: "women accesories",
            category: "women_accesories",
        },
        {
            id: 4,
            name: "men accesories",
            category: "men_accesories",
        },
        {
            id: 5,
            name: "discount deals",
            category: "discount_deals",
        }
    ]

    const newArrivalProducts = [
        {
            id: 1,
            name: 'Mono Rufina',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 49,
            image: '/arrivals/mono-rufina.jpg',
            rating: 4.5,
            stock: 10
        },
        {
            id: 2,
            name: 'Mono Rahsmi',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 199,
            image: '/arrivals/mono-rashmi.jpg',
            rating: 4.5,
            stock: 5
        },
        {
            id: 3,
            name: 'Mono Vesta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 49,
            image: '/arrivals/mono-vest.jpg',
            rating: 4.5,
            stock: 3
        },
        {
            id: 4,
            name: 'Vestido Artemisa',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 99,
            image: '/arrivals/vestido-artemisa.jpg',
            rating: 4.5,
            stock: 7
        },
        {
            id: 5,
            name: 'Vestido Foster',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 99,
            image: '/arrivals/vestido-foster.jpg',
            rating: 4.5,
            stock: 4
        },
        {
            id: 6,
            name: 'Chaqueta Boreal',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque.',
            price: 20,
            image: '/arrivals/chaqueta-boreal.jpg',
            rating: 4.5,
            stock: 0
        }
    ]
    
    return (
        <div className="w-full bg-white pt-[150px]">
            <div className="lg:container mx-auto">
                {/* header title */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl text-[#484848] font-normal capitalize mb-5">new arrivals</h3>
                    <p className="text-base text-[#8a8a8a] font-poppins font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis illo repudiandae est error cum.</p>
                </div>

                {/* categories */}
                <div className="flex items-center justify-center gap-10 mb-10">
                    {
                        newArrivalsCategories.map((category) => (
                            <button 
                                className={`text-base font-poppins font-normal capitalize cursor-pointer ${category.id === 2? 'px-6 py-2.5 bg-black rounded-sm text-white' : 'text-[#8a8a8a]'}`}
                                key={category.id}
                            >
                                    {category.name}
                            </button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {
                        newArrivalProducts.map((product)=> (
                            <div key={product.id} className="bg-white shadow-lg p-5 rounded-md">
                                <div className="w-full max-h-[244px] h-full mb-2.5">
                                    <img className="w-full h-full object-cover rounded-md" src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-xl text-[#484848] font-poppins font-medium capitalize mb-2">{product.name}</h4>
                                            <p className="text-base text-[#8a8a8a] font-poppins font-normal">{product.description}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {
                                              [...Array(Math.ceil(product.rating))].map((_, index) => (
                                                <span key={index}><FaStar size={'1.5rem'} color="#fca120" /></span>
                                              ))  
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="text-2xl text-[#484848] font-poppins font-medium">$ {product.price}</p>
                                        {
                                            product.stock === 0 ? 
                                            <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">almost sold out</span> :
                                            <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">stock: {product.stock}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                {/* all arrivals products */}
                <div className="mt-10 flex items-center justify-center">
                    <button className="text-base text-white font-poppins font-normal capitalize px-6 py-2.5 bg-black rounded-md">view more</button>
                </div>
            </div>
        </div>
    )
}

export default NewArrival