import { forwardRef } from 'react';

const Canvas = forwardRef((props, ref) => {
    return (
      <canvas ref={ref} className="w-full h-full object-cover"></canvas>

    );
  });
  
  Canvas.displayName = 'Canvas';
  
  export default Canvas;
