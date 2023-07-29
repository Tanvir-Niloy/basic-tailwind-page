import img1 from '../assets/img1.png';

export default function Experts() {
  return (
    <div className="max-w-[1280px] p-2 mx-auto my-10 md:grid grid-cols-2">
        <div className="col-span-1 w-[80%]">
        <img src={img1} alt="img1" className='inline'/>
        </div>
        <div className="col-span-1">
          <h1 className='italic font-bold text-2xl'>Build Your Future</h1>
          <p className='italic font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, omnis quo. Nihil ullam maxime sed ipsam aliquid culpa esse illo nobis repellat repellendus recusandae, officia eaque quaerat eveniet, dolores at.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quis qui, atque blanditiis ipsum accusamus reiciendis architecto facere veritatis molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, autem. Reiciendis perspiciatis, provident nostrum eligendi officia illo sapiente aliquid nisi doloremque totam suscipit doloribus quidem adipisci aliquam magni sequi vero.</p>
          <button className="mt-2 font-bold bg-blue-500 rounded p-4 text-white">Get Started</button>
        </div>
    </div>
  )
}
