
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, PenSquare } from 'lucide-react';
import { personImg } from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { sectionVariant, listVariant, itemVariant, iconVariant } from '@/lib/animations';

const ContactInfo = () => {
  return (
    <motion.section 
      id="contact" 
      className="bg-gradient-to-b from-gray-900 to-black py-20 sm:py-24"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={listVariant}
        >
          <motion.div className="text-center" variants={itemVariant}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto mt-4">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss technology, or just say hello!
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariant}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
          >
            <Card className="bg-gray-800/50 border border-gray-700 shadow-lg hover:shadow-xl hover:shadow-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 text-center">
                  <Avatar className="w-24 h-24 border-4 border-gray-700 flex-shrink-0 shadow-lg">
                    <AvatarImage src={personImg} alt="Leandro Risso Venâncio" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Leandro Risso Venâncio</h3>
                    <a href="mailto:john.doe@email.com" className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-md mt-1">
                      <Mail className="w-5 h-5 mr-2" />
                      <span>john.doe@email.com</span>
                    </a>
                  </div>
                  <motion.div 
                    className="flex justify-center space-x-4 pt-4"
                    variants={listVariant}
                  >
                    <motion.a 
                      href="https://linkedin.com/in/johndoe-dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="LinkedIn"
                      variants={iconVariant}
                      whileHover={{ scale: 1.15, y: -2 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href="https://github.com/johndoe-dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="GitHub"
                      variants={iconVariant}
                      whileHover={{ scale: 1.15, y: -2 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href="https://orcid.org/0000-0000-0000-0000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="ORCID"
                      variants={iconVariant}
                      whileHover={{ scale: 1.15, y: -2 }}
                    >
                      <PenSquare size={20} />
                    </motion.a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
