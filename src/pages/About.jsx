import { useEffect, useRef } from 'react';
import '../styles/About.css';

export default function About() {
  const leftRef = useRef();
  const rightRef = useRef();
  const rafId = useRef();
  const leftDirection = useRef(1);
  const rightDirection = useRef(1);

  useEffect(() => {
    function animate() {
      const left = leftRef.current;
      const right = rightRef.current;
      if (left) {
        left.scrollTop += leftDirection.current * 0.5;
        if (left.scrollTop + left.clientHeight >= left.scrollHeight - 2) {
          leftDirection.current = -1;
        } else if (left.scrollTop <= 0) {
          leftDirection.current = 1;
        }
      }
      if (right) {
        right.scrollTop += rightDirection.current * 0.5;
        if (right.scrollTop + right.clientHeight >= right.scrollHeight - 2) {
          rightDirection.current = -1;
        } else if (right.scrollTop <= 0) {
          rightDirection.current = 1;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    }
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section className="about-section">
      {/* Left Column */}
      <div className="column scrollable left no-user-scroll" ref={leftRef}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="floating-box">
            Project {i + 1}
          </div>
        ))}
      </div>

      {/* Center Column (Sticky) */}
      <div className="column sticky center">
        <div className="floating-box">
          <h2>About Me</h2>
          <p>
            I'm <strong>Prayash</strong>, a developer who blends{' '}
            <strong>frontend design</strong> with <strong>system-level logic</strong>.
            From tweaking memory behavior in <code>gem5</code> to crafting 3D UIs
            with <strong>React + Spline</strong>, I turn complex systems into interactive
            experiences.
          </p>
        </div>

        <div className="floating-box">
          <h2>Philosophy</h2>
          <p>
            I believe that deep systems understanding makes for better UI—and intuitive UI
            reveals the power of complex systems.
          </p>
        </div>

        <div className="floating-box">
          <h2>Stack</h2>
          <p>
            React, WebGL, gem5, Python, C++, Three.js, Lenis, Spline, Vite.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="column scrollable right no-user-scroll" ref={rightRef}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="floating-box">
            Interest {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
