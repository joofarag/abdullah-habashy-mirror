"use client";

import Image from "next/image";
import { storeItems } from "@/lib/data";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">المتجر</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeItems.map((item) => (
            <div key={item.id} className="group rounded-xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-purple-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-gray-800">
              <div className="relative aspect-video overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-purple-600 transition-colors">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">{item.price} {item.currency}</span>
                  <button className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    {item.inStock ? "اشتري الآن" : "غير متوفر"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
