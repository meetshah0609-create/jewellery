import React from 'react';
import { ShoppingBag, Search, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/jewelleryData';

export default function Navbar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  onOpenCart
}) {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => {
            setSelectedCategory('All');
            setSearchQuery('');
          }}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-9 h-9 rounded-full bg-amber-800 text-amber-50 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="block font-serif text-xl tracking-widest text-stone-900 font-semibold">
              AURELIA
            </span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-amber-800">
              Fine Jewellers
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm tracking-wide transition-colors pb-1 border-b-2 ${
                selectedCategory === category
                  ? 'border-amber-800 text-amber-900 font-medium'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Search & Cart */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gold, diamond..."
              className="pl-9 pr-3 py-1.5 w-48 lg:w-60 text-sm bg-white border border-stone-300 rounded-full focus:outline-none focus:border-amber-700"
            />
          </div>

          <button
            onClick={onOpenCart}
            aria-label="Open shopping bag"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-amber-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Bag</span>
            {cartCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-xs rounded-full bg-amber-500 text-stone-950 font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}