import React, { useRef, useState, useEffect } from 'react';

const StickyContentWithTabs = () => {
  const sectionRefs = useRef<any>([]);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 1, title: 'Sticky Section', content: 'This content is sticky and always visible at the top.' },
    { id: 2, title: 'Section 1', content: 'This is scrollable content for section 1.' },
    { id: 3, title: 'Section 2', content: 'This is scrollable content for section 2.' },
    { id: 4, title: 'Section 3', content: 'This is scrollable content for section 3.' },
  ];

  const handleTabClick = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActiveSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sectionRefs.current.map((ref) => ref.getBoundingClientRect().top);
      const activeIndex = sectionOffsets.findIndex((offset) => offset > 0 && offset < window.innerHeight / 2);

      if (activeIndex !== -1 && activeIndex !== activeSection) {
        setActiveSection(activeIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
      {/* Sticky Section */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: '#f7f7f7',
          padding: '20px',
          zIndex: 10,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <h2>Sticky Navigation</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(index)}
              style={{
                padding: '10px 15px',
                border: 'none',
                cursor: 'pointer',
                background: activeSection === index ? '#007bff' : '#e7e7e7',
                color: activeSection === index ? '#fff' : '#333',
                borderRadius: '5px',
                fontWeight: activeSection === index ? 'bold' : 'normal',
              }}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={{ padding: '20px' }}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{
              height: '100vh',
              borderBottom: '1px solid #ddd',
              padding: '20px',
            }}
          >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyContentWithTabs;
