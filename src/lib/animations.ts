
export const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const iconVariant = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};
