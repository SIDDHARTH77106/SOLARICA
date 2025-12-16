import React from 'react';
import { motion } from 'framer-motion';

const Leader = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white max-w-5xl mx-auto p-12 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-gray-100"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-20 transform translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Leader" 
            className="relative w-56 h-56 rounded-full object-cover border-8 border-white shadow-lg"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <div className="text-4xl text-green-500 mb-6 opacity-50">❝</div>
          <p className="text-2xl text-gray-700 mb-8 font-light italic leading-relaxed">
            "Our mission is to make solar energy accessible, affordable, and sustainable for every Indian household. We are building the future."
          </p>
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Mr. Kiran Jagtap</h4>
            <p className="text-green-600 font-medium tracking-wide uppercase text-sm mt-1">Director, Solarica Energy Pvt Ltd</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Leader;