import { useRef, useEffect } from 'react'
 
const MAX_SIZE = 10;
const MIN_SIZE = 1;
 
function createBubble(x, y, state) {
  const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;
  return {
    x, y, size,
    speed: Math.random() * 4 + 1,
    state,
    curr_color: size <= 3 ? [255, 255, 255] : [114, 184, 237],
    wobble_speed: Math.random() * 0.04 + 0.02,
    wobble_amount: Math.random() * 0.9 + 0.3,
    wobble_offset: Math.random() * Math.PI * 2,
  };
}
 
function spawnBubbles(x, y, bubblesRef) {
  const amount = Math.floor(Math.random() * 5 + 3);
  const state = Math.random() < 0.5 ? 'growing' : 'shrinking';
  for (let i = 0; i <= amount; i++) {
    bubblesRef.current.push(createBubble(x, y, state));
  }
}
 
function updateBubble(bubble) {
  bubble.y -= bubble.speed;
  bubble.wobble_offset += bubble.wobble_speed;
  bubble.x += Math.sin(bubble.wobble_offset) * bubble.wobble_amount;
  if (bubble.size <= MIN_SIZE) bubble.state = 'growing';
  else if (bubble.size >= MAX_SIZE) bubble.state = 'shrinking';
  bubble.curr_color = bubble.size <= 3 ? [255, 255, 255] : [114, 184, 237];
  if (bubble.state === 'growing') bubble.size += 0.1;
  else if (bubble.state === 'shrinking') bubble.size -= 0.1;
}
 
export default function BubbleCanvas() {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const animFrameRef = useRef(null);
  const isDragging = useRef(false);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
 
    function draw() {
      ctx.fillStyle = 'rgb(22, 39, 186)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      bubblesRef.current = bubblesRef.current.filter(b => b.y >= 0);
      for (const bubble of bubblesRef.current) {
        updateBubble(bubble);
        const [r, g, b] = bubble.curr_color;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.8;
        ctx.fill();
        ctx.stroke();
      }
      animFrameRef.current = requestAnimationFrame(draw);
    }
 
    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);
 
  function getPos(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
 
  function handleMouseDown() { isDragging.current = false; }
 
  function handleMouseMove(e) {
    if (e.buttons !== 1) return;
    isDragging.current = true;
    const { x, y } = getPos(e);
    spawnBubbles(x, y, bubblesRef);
  }
 
  function handleMouseUp(e) {
    if (!isDragging.current) {
      const { x, y } = getPos(e);
      spawnBubbles(x, y, bubblesRef);
    }
    isDragging.current = false;
  }
 
  return (
    <div className="bubble-section">
      <p className="bubble-hint">Click or drag to spawn bubbles</p>
      <canvas
        ref={canvasRef}
        width={720}
        height={400}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="bubble-canvas"
      />
    </div>
  );
}