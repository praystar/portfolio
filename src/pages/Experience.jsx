import '../styles/Experience.css';
import { useEffect, useRef } from 'react';

const slides = [
  { color: 'red', label: 'PASSION' },
  { color: 'blue', label: 'WORK' },
  { color: 'orange', label: 'MOTIVATION' },
  { color: 'yellow', label: 'INSPIRATION' },
  { color: 'green', label: 'BELIEVE' },
];

export default function Experience() {
  const ulRef = useRef(null);
  const directionRef = useRef(1); // 1 for right, -1 for left
  const percentRef = useRef(0);
  const animFrame = useRef();

  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;
    let lastTime = performance.now();
    const speed = 0.15; // percent per second
    const maxPercent = 1;
    const minPercent = 0;
    function animate(time) {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      percentRef.current += directionRef.current * speed * dt;
      if (percentRef.current >= maxPercent) {
        percentRef.current = maxPercent;
        directionRef.current = -1;
      } else if (percentRef.current <= minPercent) {
        percentRef.current = minPercent;
        directionRef.current = 1;
      }
      ul.style.transform = `translateX(-${percentRef.current * (slides.length - 1) * 100}vw)`;
      animFrame.current = requestAnimationFrame(animate);
    }
    animFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  return (
    <div className="experience-page experience-horizontal">
      <main>
        <section className="experience-scroll-section">
          <ul ref={ulRef} className="experience-horizontal-list">
            {slides.map((slide) => (
              <li
                key={slide.label}
                className={`experience-slide experience-slide-${slide.color}`}
              >
                <h2>{slide.label}</h2>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
