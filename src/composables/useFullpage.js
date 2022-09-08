export function useScrollHandler() {
    const offsets = [];
    let touchStartY = 0;
    let activeSection = 0;
    let inMove = false;
  
    const mountHandler = () => {
      calculateSectionOffsets();
      window.addEventListener('keydown', handleKeyDown);
      // window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);  // Mozilla Firefox
      window.addEventListener('wheel', handleWheel, {passive: false, capture: false}); // new Mozilla Firefox
      window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
      window.addEventListener('touchstart', touchStart, { passive: false }); // mobile devices
      window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices
    }
  
    const unmountHandler = () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousewheel', handleMouseWheel);  // Other browsers
      // window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
      window.removeEventListener('wheel', handleWheel); // new Mozilla Firefox
      window.removeEventListener('touchstart', touchStart); // mobile devices
      window.removeEventListener('touchmove', touchMove); // mobile devices
    }
  
    const handleKeyDown = (event) => {
      if (event.code == 'ArrowDown' && !inMove) {
        event.preventDefault();
        moveUp();
      } else if (event.code == 'ArrowUp' && !inMove) {
        event.preventDefault();
        moveDown();
      }
      event.preventDefault();
    }
  
    const handleMouseWheel = (event) => {
      if (event.wheelDelta < 30 && !inMove) {
        moveUp();
      } else if (event.wheelDelta > 30 && !inMove) {
        moveDown();
      }
      event.preventDefault();
      return false;
    }
  
    const handleMouseWheelDOM = (event) => {
      console.log('handleMouseWheelDOM')
      if (event.detail > 0 && !inMove) {
        moveUp();
      } else if (event.detail < 0 && !inMove) {
        moveDown();
      }
      return false;
    }

    function handleWheel(e) {
      

          console.log('handleWheel', inMove, e.target, e.deltaY, activeSection, offsets.length)
          
          if(e.deltaY > 0 && !inMove) {
              moveUp();
          }
          else if(e.deltaY < 0 && !inMove) {
              moveDown();
          }

          
            e.preventDefault();
          return false;
      }
  
    const touchStart = (event) => {
      event.preventDefault();
      touchStartY = event.touches[0].clientY;
    }
  
    const touchMove = (event) => {
      if(inMove) return false;
      event.preventDefault();
      
      const currentY = event.touches[0].clientY;
      
      if(touchStartY < currentY) {
        moveDown();
      } else {
        moveUp();
      }
      
      touchStartY = 0;
      return false;
    }
  
    const moveUp = () => {
      console.log('up')
      inMove = true;
      activeSection++;

      if (activeSection > offsets.length - 1)
        activeSection = 0;

        
      // if(activeSection < offsets.length - 1) activeSection++ ;
      scrollToSection(activeSection, true);
    }
  
    const moveDown = () => {
      console.log('down')
      inMove = true;
      activeSection--;

      if(activeSection < 0)
        activeSection = offsets.length - 1;

      // if(activeSection > 0) activeSection--;
      scrollToSection(activeSection, true);
    }
  
    const scrollToSection = (id, force = false) => {
      if(inMove && !force) return false;
      
      activeSection = id;
      inMove = true;
      console.log()
      document.getElementsByClassName('fullpage')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        inMove = false;
      }, 400);
    }
  
    const calculateSectionOffsets = () => {
      let sections = document.getElementsByClassName('fullpage');
      console.log(sections)
      let length = sections.length;
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        offsets.push(sectionOffset);
      }
    }
    return { mountHandler, unmountHandler , offsets, scrollToSection}
  }