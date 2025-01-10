import React, { useRef, useState, useEffect } from 'react';

const ScrollablePage: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    { id: 1, title: 'Section 1', content: 'Content for section 1...' },
    { id: 2, title: 'Section 2', content: 'Content for section 2...' },
    { id: 3, title: 'Section 3', content: 'Content for section 3...' },
    { id: 4, title: 'Section 4', content: 'Content for section 4...' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 100) {
          setActiveTab(index);
        }
      }
    });
  };

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Scrollable Tab */}
      <div style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        position: 'sticky', 
        top: 0, 
        background: '#fff', 
        zIndex: 10, 
        padding: '10px', 
        borderBottom: '1px solid #ddd' 
      }}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              background: activeTab === index ? '#007bff' : '#f8f9fa',
              color: activeTab === index ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el!)}
            style={{
              height: '100vh',
              padding: '20px',
              borderBottom: '1px solid #ddd',
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

export default ScrollablePage;
