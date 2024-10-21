import { forwardRef, useState, useEffect } from "react"

const NaveGate = forwardRef((props, ref) => {
  const [currentDate, setCurrentDate] = useState([]);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false // This will use 24-hour format
      });
      setCurrentDate([formattedDate]);
    };

    updateDate();
    const timer = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <nav ref={ref} className="absolute top-0 left-0 z-0 w-full px-10 pt-8 text-white flex items-center justify-between max-[425px]:px-3 max-[425px]:py-4">
        <div className="flex items-center justify-between mix-blend-difference w-1/2">

          <div className="flex items-center">
            <div className="text-2xl text-white font-semibold capitalize flex items-center gap-3">doze <span className="inline-block w-8 h-[3px] bg-white"></span> studio</div>
            {/* <video className="w-10 h-7 bg-transparent" autoPlay muted loop src="./Video/logoAnim.mp4"></video> */}
          </div>

          <div className="flex items-center gap-2 max-[425px]:hidden">
            <a
            className="text-2xl text-white"
            href="#">Projects,</a>
            <a
            className="text-2xl text-white"
            href="#">About,</a>
            <a
            className="text-2xl text-white"
            href="#">Labs</a>
          </div>



        </div>

        <div className="flex items-center justify-center gap-4 max-[425px]:text-sm max-[425px]:flex-col max-[425px]:gap-0">
          <span className="block pt-1 text-white uppercase font-semibold">{currentDate}</span>
          <a 
          className="text-2xl text-white max-[425px]:text-xl max-[425px]:leading-[1]"
          href="#">Let's Talk</a>
        </div>
        
    </nav>
  );
});

NaveGate.displayName = 'NaveGate'

export default NaveGate;
